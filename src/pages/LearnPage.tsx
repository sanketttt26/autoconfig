import { ArrowRight, Library, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionIntro } from '../components/SectionIntro';

export function LearnPage() {
  const navigate = useNavigate();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionIntro
          kicker="Learning Hub"
          title="Choose Your Path"
          description="Select the best way to continue your journey, whether it's following the roadmap or exploring specific resources."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Roadmap Card */}
          <button
            onClick={() => navigate('/roadmap')}
            className="surface-card surface-card-hover group flex flex-col items-start p-8 text-left transition-all hover:border-[var(--brand-strong)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)] group-hover:scale-110 transition-transform duration-300">
              <Map className="h-7 w-7 text-[var(--brand)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-strong group-hover:text-[var(--brand)] transition-colors">
              Structure Roadmap
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Follow a step-by-step verified path from basics to production mastery. Perfect for focused learning.
            </p>
            
            <div className="mt-auto pt-8 flex items-center font-semibold text-[var(--brand)]">
              View Roadmap
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Resources Card */}
          <button
            onClick={() => navigate('/resources')}
            className="surface-card surface-card-hover group flex flex-col items-start p-8 text-left transition-all hover:border-[var(--brand-strong)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)] group-hover:scale-110 transition-transform duration-300">
              <Library className="h-7 w-7 text-[var(--brand)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-strong group-hover:text-[var(--brand)] transition-colors">
              Resources Library
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Explore curated documentation, video tutorials, and development tools to supplement your learning.
            </p>
            
            <div className="mt-auto pt-8 flex items-center font-semibold text-[var(--brand)]">
              Browse Resources
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
