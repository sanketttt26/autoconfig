import { ArrowRight, BookOpen, Code2, Rocket } from 'lucide-react';
import { getTotalStages, getTotalTopics, getTotalWeeks } from '../data/roadmap';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const totalStages = getTotalStages();
  const totalTopics = getTotalTopics();
  const totalWeeks = getTotalWeeks();

  const stats = [
    {
      icon: BookOpen,
      label: `${totalStages} ${totalStages === 1 ? 'stage' : 'stages'}`,
      description: 'Progress through clear learning stages',
    },
    {
      icon: Code2,
      label: `${totalTopics} ${totalTopics === 1 ? 'topic' : 'topics'}`,
      description: 'Hands-on backend concepts and projects',
    },
    {
      icon: Rocket,
      label: `${totalWeeks} ${totalWeeks === 1 ? 'module' : 'modules'}`,
      description: 'From Java basics to microservices delivery',
    },
  ];

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="animate-pulse-slow absolute left-1/2 top-0 h-[500px] w-[780px] -translate-x-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgb(var(--ambient-1) / 0.14) 0%, rgb(var(--ambient-1) / 0.05) 40%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-soft bg-[size:48px_48px] opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[var(--bg-canvas)]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="kicker animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-[var(--text-strong)]" />
            2026 Learning Track
          </span>

          <h1 className="animate-fade-in-up stagger-1 mt-6 font-display text-4xl leading-tight text-strong sm:text-5xl md:text-6xl">
            Build and ship{' '}
            <span className="text-gradient-brand">Spring Boot systems</span>{' '}
            with a roadmap inspired by real teams
          </h1>

          <p className="animate-fade-in-up stagger-2 section-copy mx-auto mt-6 max-w-2xl text-lg">
            Learn through a practical roadmap with curated resources, milestone goals,
            and projects that map directly to real backend engineering work.
          </p>

          <div className="animate-fade-in-up stagger-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={onGetStarted}
              className="btn-primary group px-8 py-3.5 text-base"
            >
              Start Learning
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="animate-fade-in-up stagger-4 mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="surface-card surface-card-hover p-5 text-left"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)]">
                  <stat.icon className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <p className="text-xl font-bold text-strong">{stat.label}</p>
                <p className="mt-1 text-sm text-body">{stat.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 h-px w-full max-w-3xl soft-divider" />
        </div>
      </div>
    </section>
  );
}
