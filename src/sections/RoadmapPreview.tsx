import { ArrowRight, Code2, Database, Server } from 'lucide-react';
import { getTopicsByLevel } from '../data/roadmap';
import { SectionIntro } from '../components/SectionIntro';

const levels = [
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Stage 1 · Foundations',
    description: 'Master the fundamentals of Java, Spring Boot, and database basics.',
    icon: Code2,
    tagClass: 'tag-green',
    topics: getTopicsByLevel('beginner'),
    items: ['Git & GitHub', 'Java & OOP', 'Spring Boot Basics', 'SQL & JPA'],
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Stage 2 · Core Systems',
    description: 'Deep dive into Spring Security, testing, WebSockets, and reactive programming.',
    icon: Database,
    tagClass: 'tag-blue',
    topics: getTopicsByLevel('intermediate'),
    items: ['Spring Security', 'JWT Auth', 'WebSockets', 'Redis Cache'],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Stage 3 · Advanced',
    description: 'Build microservices with Docker, Kubernetes, Kafka, and cloud deployment.',
    icon: Server,
    tagClass: 'tag-violet',
    topics: getTopicsByLevel('advanced'),
    items: ['Microservices', 'Docker & K8s', 'Kafka', 'GraphQL'],
  },
];

interface RoadmapPreviewProps {
  onViewRoadmap: () => void;
}

export function RoadmapPreview({ onViewRoadmap }: RoadmapPreviewProps) {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative">
        <SectionIntro
          kicker="Learning Path"
          title="Three stages of mastery"
          description="Move from core fundamentals to distributed systems through a phased path that keeps every step focused and measurable."
        />

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.id}
              className="surface-card surface-card-hover relative h-full overflow-hidden p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--brand-soft)]" />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)]">
                    <level.icon className="h-7 w-7 text-[var(--brand)]" />
                  </div>
                  <span className={`tag ${level.tagClass}`}>
                    {level.topics} Topics
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-strong">{level.title}</h3>
                <p className="mt-1 text-sm font-semibold text-muted">{level.subtitle}</p>
                <p className="mt-4 text-sm text-body">{level.description}</p>

                <ul className="mt-6 space-y-2">
                  {level.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-body">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewRoadmap}
            className="btn-primary px-8 py-3.5 text-base"
          >
            View Full Roadmap
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
