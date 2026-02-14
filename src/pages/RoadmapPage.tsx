import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  Search,
  Star,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { roadmapData, type Topic, type Week } from '../data/roadmap';

type Progress = Record<string, boolean>;
type Starred = Record<string, boolean>;
type LevelFilter = 'all' | Week['level'];
type TypeFilter = 'all' | Week['type'];
type ExpandedModules = string[];

interface RoadmapViewState {
  searchQuery: string;
  filterLevel: LevelFilter;
  filterType: TypeFilter;
  showStarredOnly: boolean;
  expandedModules: ExpandedModules;
}

const STORAGE_KEYS = {
  progress: 'autoconfig-site-progress',
  starred: 'autoconfig-site-starred',
  viewState: 'autoconfig-site-roadmap-view',
} as const;

const levelOptions: Array<{ value: LevelFilter; label: string }> = [
  { value: 'all', label: 'All Stages' },
  { value: 'beginner', label: 'Stage 1 (Beginner)' },
  { value: 'intermediate', label: 'Stage 2 (Intermediate)' },
  { value: 'advanced', label: 'Stage 3 (Advanced)' },
];

const typeOptions: Array<{ value: TypeFilter; label: string }> = [
  { value: 'all', label: 'All Types' },
  { value: 'core', label: 'Core Only' },
  { value: 'optional', label: 'Optional Only' },
];

const isLevelFilter = (value: string): value is LevelFilter =>
  levelOptions.some((option) => option.value === value);

const isTypeFilter = (value: string): value is TypeFilter =>
  typeOptions.some((option) => option.value === value);

const parseStoredRecord = (raw: string | null): Record<string, boolean> => {
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return Object.entries(parsed).reduce<Record<string, boolean>>(
      (acc, [key, value]) => {
        if (typeof value === 'boolean') {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
  } catch {
    return {};
  }
};

const parseStoredViewState = (raw: string | null): Partial<RoadmapViewState> => {
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as Partial<RoadmapViewState>;
    const searchQuery = typeof parsed.searchQuery === 'string' ? parsed.searchQuery : '';
    const filterLevel =
      typeof parsed.filterLevel === 'string' && isLevelFilter(parsed.filterLevel)
        ? parsed.filterLevel
        : 'all';
    const filterType =
      typeof parsed.filterType === 'string' && isTypeFilter(parsed.filterType)
        ? parsed.filterType
        : 'all';
    const showStarredOnly = parsed.showStarredOnly === true;
    const expandedModules = Array.isArray(parsed.expandedModules)
      ? parsed.expandedModules.filter((id): id is string => typeof id === 'string')
      : [];

    return {
      searchQuery,
      filterLevel,
      filterType,
      showStarredOnly,
      expandedModules,
    };
  } catch {
    return {};
  }
};

export function RoadmapPage() {
  const savedViewState = useMemo(
    () => parseStoredViewState(localStorage.getItem(STORAGE_KEYS.viewState)),
    []
  );
  const [searchQuery, setSearchQuery] = useState(savedViewState.searchQuery ?? '');
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(() => {
    const restoredModules = savedViewState.expandedModules ?? [];
    const hasRestoredModules = restoredModules.length > 0;
    return new Set(hasRestoredModules ? restoredModules : ['week1']);
  });
  const [filterLevel, setFilterLevel] = useState<LevelFilter>(
    savedViewState.filterLevel ?? 'all'
  );
  const [filterType, setFilterType] = useState<TypeFilter>(
    savedViewState.filterType ?? 'all'
  );
  const [showStarredOnly, setShowStarredOnly] = useState(
    savedViewState.showStarredOnly ?? false
  );
  const [progress, setProgress] = useState<Progress>(() =>
    parseStoredRecord(localStorage.getItem(STORAGE_KEYS.progress))
  );
  const [starred, setStarred] = useState<Starred>(() =>
    parseStoredRecord(localStorage.getItem(STORAGE_KEYS.starred))
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.starred, JSON.stringify(starred));
  }, [starred]);

  useEffect(() => {
    const viewState: RoadmapViewState = {
      searchQuery,
      filterLevel,
      filterType,
      showStarredOnly,
      expandedModules: Array.from(expandedWeeks),
    };
    localStorage.setItem(STORAGE_KEYS.viewState, JSON.stringify(viewState));
  }, [searchQuery, filterLevel, filterType, showStarredOnly, expandedWeeks]);

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const showTopicResults = normalizedSearch.length > 0 || showStarredOnly;
  const stageLabels: Record<Week['level'], string> = {
    beginner: 'Stage 1',
    intermediate: 'Stage 2',
    advanced: 'Stage 3',
  };

  const filteredWeeks = useMemo(() => {
    return roadmapData.filter((week) => {
      if (filterLevel !== 'all' && week.level !== filterLevel) {
        return false;
      }

      if (filterType !== 'all' && week.type !== filterType) {
        return false;
      }

      if (normalizedSearch) {
        const matchesWeek = week.title.toLowerCase().includes(normalizedSearch);
        const matchesTopic = week.topics.some(
          (topic) =>
            topic.title.toLowerCase().includes(normalizedSearch) ||
            topic.description.toLowerCase().includes(normalizedSearch)
        );
        if (!matchesWeek && !matchesTopic) {
          return false;
        }
      }

      return true;
    });
  }, [filterLevel, filterType, normalizedSearch]);

  const stageIndexMap = useMemo(() => {
    const counters: Record<Week['level'], number> = {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    };
    return roadmapData.reduce<Record<string, number>>((acc, week) => {
      counters[week.level] += 1;
      acc[week.id] = counters[week.level];
      return acc;
    }, {});
  }, []);

  const filteredTopics = useMemo(() => {
    if (!showTopicResults) {
      return [];
    }

    const topics: Array<{ week: Week; topic: Topic }> = [];

    filteredWeeks.forEach((week) => {
      week.topics.forEach((topic) => {
        if (showStarredOnly && !starred[topic.id]) {
          return;
        }

        if (normalizedSearch) {
          const matches =
            topic.title.toLowerCase().includes(normalizedSearch) ||
            topic.description.toLowerCase().includes(normalizedSearch);
          if (!matches) {
            return;
          }
        }

        topics.push({ week, topic });
      });
    });

    return topics;
  }, [filteredWeeks, normalizedSearch, showStarredOnly, showTopicResults, starred]);

  const stats = useMemo(() => {
    const totalTopics = roadmapData.reduce((acc, week) => acc + week.topics.length, 0);
    const completedTopics = Object.values(progress).filter(Boolean).length;
    const starredTopics = Object.values(starred).filter(Boolean).length;
    const percentage =
      totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);

    return {
      totalTopics,
      completedTopics,
      starredTopics,
      percentage,
    };
  }, [progress, starred]);

  const toggleTopic = (topicId: string) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const toggleStar = (topicId: string) => {
    setStarred((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const toggleWeek = (weekId: string) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(weekId)) {
        next.delete(weekId);
      } else {
        next.add(weekId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedWeeks(new Set(filteredWeeks.map((week) => week.id)));
  };

  const collapseAll = () => {
    setExpandedWeeks(new Set());
  };

  const handleLevelChange = (value: string) => {
    if (isLevelFilter(value)) {
      setFilterLevel(value);
    }
  };

  const handleTypeChange = (value: string) => {
    if (isTypeFilter(value)) {
      setFilterType(value);
    }
  };

  return (
    <div className="pb-16">
      <div className="container-custom">
        <header className="mb-8">
          <span className="kicker">Interactive Roadmap</span>
          <h1 className="mt-4 font-display text-3xl text-strong sm:text-4xl">
            autoconfig.site
          </h1>
          <p className="mt-3 max-w-3xl text-body">
            Track progress by stage, star topics for revision, and use filters to
            focus on exactly what you want to study next.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="surface-card p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)]">
                    <span className="text-lg font-bold text-[var(--brand-strong)]">
                      {stats.percentage}%
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-strong">Overall Progress</p>
                    <p className="text-sm text-muted">
                      {stats.completedTopics}/{stats.totalTopics} topics done
                    </p>
                  </div>
                </div>

                <div className="progress-bar h-2.5">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${stats.percentage}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-body">{stats.completedTopics} completed</span>
                  <span className="text-body">{stats.starredTopics} starred</span>
                </div>
              </div>

              <div className="surface-card p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4 text-strong" />
                  <span className="font-semibold text-strong">Filters</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted">
                      Stage
                    </label>
                    <Select value={filterLevel} onValueChange={handleLevelChange}>
                      <SelectTrigger className="w-full bg-[var(--bg-panel)] text-strong">
                        <SelectValue placeholder="All Stages" />
                      </SelectTrigger>
                      <SelectContent className="border-[color:var(--line-soft)] bg-[var(--bg-panel)]">
                        {levelOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-muted">
                      Type
                    </label>
                    <Select value={filterType} onValueChange={handleTypeChange}>
                      <SelectTrigger className="w-full bg-[var(--bg-panel)] text-strong">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent className="border-[color:var(--line-soft)] bg-[var(--bg-panel)]">
                        {typeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <label className="flex cursor-pointer items-center gap-2 text-sm text-body">
                    <input
                      type="checkbox"
                      checked={showStarredOnly}
                      onChange={(event) => setShowStarredOnly(event.target.checked)}
                      className="custom-checkbox"
                    />
                    Starred Only
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-4 lg:col-span-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search topics, concepts, or descriptions..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="search-input py-3 pl-10 pr-4 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="btn-secondary px-4 py-3 text-sm whitespace-nowrap"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="btn-secondary px-4 py-3 text-sm whitespace-nowrap"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {showTopicResults ? (
              <div className="space-y-3">
                <p className="text-sm text-muted">
                  {filteredTopics.length} result{filteredTopics.length === 1 ? '' : 's'} found
                </p>

                {filteredTopics.map(({ week, topic }) => (
                  <article
                    key={topic.id}
                    className="surface-card surface-card-hover p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={progress[topic.id] || false}
                        onChange={() => toggleTopic(topic.id)}
                        className="custom-checkbox mt-1"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                          <span>{stageLabels[week.level]}</span>
                          <span>/</span>
                          <span className="font-medium text-strong">
                            Module {stageIndexMap[week.id]}
                          </span>
                        </div>
                        <h3 className="font-semibold text-strong">{topic.title}</h3>
                        <p className="mt-1 text-sm text-body">{topic.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {topic.resources.map((resource, index) => (
                    <a
                      key={`${topic.id}-${resource.url}-${index}`}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-chip"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {resource.name}
                    </a>
                  ))}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleStar(topic.id)}
                        className="icon-button h-9 w-9 shrink-0"
                        aria-label={`Toggle star for ${topic.title}`}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            starred[topic.id]
                              ? 'fill-[color:var(--text-strong)] text-[color:var(--text-strong)]'
                              : 'text-muted'
                          }`}
                        />
                      </button>
                    </div>
                  </article>
                ))}

                {filteredTopics.length === 0 && (
                  <div className="surface-card py-10 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-panel-muted)]">
                      <Search className="h-5 w-5 text-muted" />
                    </div>
                    <p className="font-medium text-strong">No topics found</p>
                    <p className="mt-1 text-sm text-body">
                      Try a different query or reset one of your filters.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredWeeks.map((week) => {
                  const isExpanded = expandedWeeks.has(week.id);
                  const completedCount = week.topics.filter(
                    (topic) => progress[topic.id]
                  ).length;
                  const progressPercent = Math.round(
                    (completedCount / week.topics.length) * 100
                  );

                  return (
                    <article key={week.id} className="surface-card overflow-hidden">
                      <button
                        onClick={() => toggleWeek(week.id)}
                        className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-[var(--bg-panel-soft)]"
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-muted" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted" />
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-strong">
                              {stageLabels[week.level]} · Module {stageIndexMap[week.id]}
                            </span>
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                week.type === 'core' ? 'badge-core' : 'badge-optional'
                              }`}
                            >
                              {week.type}
                            </span>
                          </div>
                          <p className="text-sm text-muted">
                            {completedCount} of {week.topics.length} topics complete
                          </p>
                        </div>

                        <div className="hidden w-36 shrink-0 sm:block">
                          <div className="progress-bar h-1.5">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                        <span className="w-11 text-right text-sm font-semibold text-muted">
                          {progressPercent}%
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="animate-expand border-t border-[color:var(--line-soft)]">
                          {week.description && (
                            <div className="bg-[var(--bg-panel-muted)] px-4 py-3">
                              <p className="text-sm text-body">{week.description}</p>
                            </div>
                          )}

                          <div className="divide-y divide-[var(--line-soft)]">
                            {week.topics.map((topic) => (
                              <div
                                key={topic.id}
                                className="p-4 transition-colors hover:bg-[var(--bg-panel-soft)]"
                              >
                                <div className="flex items-start gap-3">
                                  <input
                                    type="checkbox"
                                    checked={progress[topic.id] || false}
                                    onChange={() => toggleTopic(topic.id)}
                                    className="custom-checkbox mt-1"
                                  />

                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-strong">{topic.title}</h3>
                                    <p className="mt-1 text-sm text-body">
                                      {topic.description}
                                    </p>

                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {topic.resources.map((resource, index) => (
                                      <a
                                        key={`${topic.id}-${resource.url}-${index}`}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resource-chip"
                                      >
                                        <ExternalLink className="h-3 w-3" />
                                        {resource.name}
                                      </a>
                                    ))}
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => toggleStar(topic.id)}
                                    className="icon-button h-9 w-9 shrink-0"
                                    aria-label={`Toggle star for ${topic.title}`}
                                  >
                                    <Star
                                      className={`h-4 w-4 ${
                                        starred[topic.id]
                                          ? 'fill-[color:var(--text-strong)] text-[color:var(--text-strong)]'
                                          : 'text-muted'
                                      }`}
                                    />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}

                {filteredWeeks.length === 0 && (
                  <div className="surface-card py-10 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-panel-muted)]">
                      <BookOpen className="h-5 w-5 text-muted" />
                    </div>
                    <p className="font-medium text-strong">No stages match your filters</p>
                    <p className="mt-1 text-sm text-body">
                      Change filters to view more roadmap content.
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

