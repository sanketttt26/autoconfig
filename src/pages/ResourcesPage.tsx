import { BookOpen, MonitorPlay, Wrench } from 'lucide-react';
import { SectionIntro } from '../components/SectionIntro';

export function ResourcesPage() {
    const resources = [
        {
            title: 'Documentation',
            icon: BookOpen,
            description: 'Official guides and verified references.',
            status: 'Coming Soon',
        },
        {
            title: 'Video Tutorials',
            icon: MonitorPlay,
            description: 'Deep dive walkthroughs and code explanations.',
            status: 'Coming Soon',
        },
        {
            title: 'Tools & Setup',
            icon: Wrench,
            description: 'Environment setup and productivity tools.',
            status: 'Coming Soon',
        },
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionIntro
                    kicker="Resources"
                    title="Developer Library"
                    description="A curated collection of supplemental materials to specific topics in the roadmap."
                />

                <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {resources.map((resource) => (
                        <article
                            key={resource.title}
                            className="surface-card p-6 flex flex-col items-center text-center opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line-soft)] bg-[var(--bg-panel-muted)]">
                                <resource.icon className="h-6 w-6 text-[var(--text-muted)]" />
                            </div>
                            <h3 className="text-lg font-bold text-strong">{resource.title}</h3>
                            <p className="mt-2 text-sm text-body">{resource.description}</p>
                            <span className="mt-4 badge-core px-3 py-1 rounded-full text-xs font-semibold">
                                {resource.status}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
