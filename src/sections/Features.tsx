import { BookOpen, Code, ExternalLink, GraduationCap, Layers, Zap } from 'lucide-react';
import { getTotalStages } from '../data/roadmap';
import { SectionIntro } from '../components/SectionIntro';

export function Features() {
  const totalStages = getTotalStages();
  const features = [
    {
      icon: GraduationCap,
      title: 'Structured Learning',
      description: `A ${totalStages}-stage roadmap that moves from Java basics to microservices architecture with a clear path to mastery.`,
      tag: 'Core',
      tagClass: 'tag-green',
    },
    {
      icon: Code,
      title: 'Hands-on Projects',
      description: 'Build real-world projects including e-commerce backend, chat applications, and microservices-based systems.',
      tag: 'Build',
      tagClass: 'tag-blue',
    },
    {
      icon: ExternalLink,
      title: 'Free Resources',
      description: 'Curated tutorials, documentation, and videos from the best sources - YouTube, Baeldung, Spring Docs, and more.',
      tag: 'Curated',
      tagClass: 'tag-violet',
    },
    {
      icon: Layers,
      title: `${totalStages} ${totalStages === 1 ? 'Stage' : 'Stages'}`,
      description: 'Beginner, Intermediate, and Advanced paths so you can progress at your pace.',
      tag: 'Levels',
      tagClass: 'tag-amber',
    },
    {
      icon: BookOpen,
      title: 'Core + Optional Topics',
      description: 'Essential topics marked as CORE and bonus content as OPTIONAL. Never skip the fundamentals.',
      tag: 'Depth',
      tagClass: 'tag-blue',
    },
    {
      icon: Zap,
      title: 'Industry Ready',
      description: 'Learn what companies actually use - Spring Security, JWT, Docker, Kubernetes, Kafka, and microservices.',
      tag: 'Career',
      tagClass: 'tag-green',
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionIntro
          kicker="Why This Roadmap"
          title="A guided path with practical depth"
          description="The roadmap is structured to reduce overwhelm and keep you shipping real backend features while building core Spring Boot expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="surface-card surface-card-hover h-full p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line-soft)] bg-[var(--brand-soft)]">
                  <feature.icon className="h-6 w-6 text-[var(--brand)]" />
                </div>
                <span className={`tag ${feature.tagClass}`}>{feature.tag}</span>
              </div>
              <h3 className="text-xl font-semibold text-strong">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
