import { useMemo, useState } from 'react';
import { ExternalLink, Search, Star } from 'lucide-react';
import { SectionIntro } from '../components/SectionIntro';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  RESOURCE_VIDEOS,
  type ResourceVideo,
  type VideoCategory,
} from '../constants/resourceVideos';

const categories: Array<'All Categories' | VideoCategory> = [
  'All Categories',
  ...Array.from(new Set(RESOURCE_VIDEOS.map((video) => video.category))),
];

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtu.be') {
      return parsed.pathname.slice(1);
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const v = parsed.searchParams.get('v');
      if (v) {
        return v;
      }

      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parts[0] === 'shorts' || parts[0] === 'embed') {
        return parts[1];
      }
    }
  } catch {
    return null;
  }

  return null;
}

function getYouTubePlaylistId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      return parsed.searchParams.get('list');
    }
  } catch {
    return null;
  }

  return null;
}

function getYouTubeThumbnail(url: string) {
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }

  return '';
}

export function ResourcesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All Categories');

  const filteredVideos = useMemo(() => {
    return RESOURCE_VIDEOS.filter((video) => {
      const matchesCategory = category === 'All Categories' || video.category === category;
      const text = query.trim().toLowerCase();
      const matchesQuery =
        text.length === 0 ||
        video.title.toLowerCase().includes(text) ||
        video.channel.toLowerCase().includes(text) ||
        video.category.toLowerCase().includes(text);

      return matchesCategory && matchesQuery;
    }).sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)));
  }, [category, query]);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionIntro
          kicker="Resources"
          title="Java Video Library"
          description="Curated YouTube videos for Java, Spring Boot, testing, and backend engineering."
        />

        <div className="surface-card mx-auto mt-8 max-w-7xl p-5 md:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--line-soft)] pb-5 lg:gap-5">
            <label className="relative min-w-0 basis-4/5">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search resources..."
                className="search-input py-3 pl-10 pr-4"
              />
            </label>

            <div className="min-w-0 basis-2/5">
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as (typeof categories)[number])}
              >
                <SelectTrigger
                  className="h-auto w-full bg-[var(--bg-panel)] px-4 py-3 text-sm font-semibold text-strong"
                  aria-label="Filter by category"
                >
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="border-[color:var(--line-soft)] bg-[var(--bg-panel)]">
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="pt-6">
            <p className="mb-5 text-sm font-semibold text-muted">
              Showing {filteredVideos.length} video{filteredVideos.length === 1 ? '' : 's'}
            </p>

            <div className="grid gap-6 lg:grid-cols-3">
              {filteredVideos.map((video) => (
                <VideoCard key={`${video.title}-${video.channel}`} video={video} />
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="mt-1 rounded-xl border border-[color:var(--line-soft)] bg-[var(--bg-panel-muted)] p-6 text-center">
                <p className="text-sm font-semibold text-strong">No videos found.</p>
                <p className="mt-1 text-sm text-body">Try another search or category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: ResourceVideo }) {
  const thumbnail = getYouTubeThumbnail(video.youtubeUrl);
  const isPlaylist = Boolean(getYouTubePlaylistId(video.youtubeUrl));

  return (
    <a
      href={video.youtubeUrl}
      target="_blank"
      rel="noreferrer"
      className="surface-card surface-card-hover group overflow-hidden"
    >
      <div className="relative aspect-video border-b border-[color:var(--line-soft)] bg-[var(--bg-panel-muted)]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${video.title} thumbnail`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted">
            Thumbnail unavailable
          </div>
        )}

      </div>

      <div className="p-4">
        {video.recommended && (
          <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-[color:var(--line-soft)] bg-[var(--bg-panel-muted)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-strong">
            <Star className="h-3 w-3 text-[var(--warning)]" />
            Recommended
          </span>
        )}
        <h3 className="line-clamp-2 text-lg font-bold text-strong">{video.title}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">{video.channel}</p>

        <div className="mt-3 flex items-center gap-2">
          <span className="tag">{video.category}</span>
          {!isPlaylist && video.duration && <span className="tag">{video.duration}</span>}
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-strong">
          Watch on YouTube
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
