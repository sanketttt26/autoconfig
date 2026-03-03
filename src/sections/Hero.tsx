import { ArrowRight } from 'lucide-react';
import roadmapPreviewDark from '../static/thum_black.png';
import roadmapPreviewLight from '../static/thum_white.png';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-24 sm:pt-20">
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
        <div className="text-center">
          <div className="mx-auto max-w-4xl">
            <span className="kicker animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-[var(--text-strong)]" />
              2026 Learning Track
            </span>

            <h1 className="animate-fade-in-up stagger-1 mt-5 font-display text-3xl leading-tight text-strong sm:mt-6 sm:text-5xl md:text-6xl">
              From Tutorials to Production:{' '}
              <span className="text-gradient-brand">
                <br />
                Ship
                Real Spring Boot Systems
              </span>,{' '}
              Faster.
            </h1>

            <p className="animate-fade-in-up stagger-2 section-copy mx-auto mt-4 max-w-2xl text-base sm:mt-6 sm:text-lg">
              Follow high-signal milestones, build portfolio-grade backend projects,
              and finish each phase with work you can demo, deploy, and defend in interviews.
            </p>

            <div className="animate-fade-in-up stagger-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={onGetStarted} className="btn-primary group px-6 py-3 text-base sm:px-8 sm:py-3.5">
                Start Learning
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up stagger-4 mx-auto mt-8 w-full max-w-6xl sm:mt-10">
            <div className="overflow-hidden rounded-lg border border-[color:var(--line-soft)] bg-[var(--bg-panel)] shadow-[var(--shadow-md)] sm:rounded-2xl">
              <img
                src={roadmapPreviewLight}
                alt="Roadmap interface preview in light mode"
                className="block w-full object-cover dark:hidden"
                loading="lazy"
              />
              <img
                src={roadmapPreviewDark}
                alt="Roadmap interface preview in dark mode"
                className="hidden w-full object-cover dark:block"
                loading="lazy"
              />
            </div>
          </div>

         

          <div className="mx-auto mt-12 h-px w-full max-w-3xl soft-divider" />
        </div>
      </div>
    </section>
  );
}
