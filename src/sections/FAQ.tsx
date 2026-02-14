import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionIntro } from '../components/SectionIntro';

const faqs = [
  {
    question: 'Is this roadmap completely free?',
    answer: 'Yes, this roadmap is 100% free and open source. All the resources linked are also freely available.',
  },
  {
    question: 'How long does it take to complete the roadmap?',
    answer: 'The roadmap is structured into three stages, but you can go at your own pace. Some stages may take longer depending on your prior experience and available time. The key is consistency, not speed.',
  },
  {
    question: 'Do I need prior programming experience?',
    answer: 'Basic programming knowledge is helpful but not required. The roadmap starts with Java fundamentals and assumes no prior Java experience. If you are completely new to programming, you might need extra time in the early stages.',
  },
  {
    question: 'Can I skip the optional topics?',
    answer: 'Optional topics are marked as OPTIONAL but they are not meant to be skipped entirely. They provide deeper knowledge that will make you a better developer. If you are short on time, do them later, but try to complete them eventually.',
  },
  {
    question: 'Is this enough to get a job as a Java developer?',
    answer: 'This roadmap covers all the essential skills needed for a Spring Boot developer role. Combined with the projects you will build, it provides a strong foundation. However, job readiness also depends on problem-solving skills',
  },
  {
    question: 'How is this different from other Spring Boot courses?',
    answer: 'This is not a course - it is a curated roadmap. Instead of creating new content, we organize the best free resources available and provide a structured learning path. This means you learn from multiple expert sources rather than one instructor.',
  },
  {
    question: 'Will the roadmap be updated?',
    answer: 'Yes, the roadmap is actively maintained. As Spring Boot and related technologies evolve, the content is updated to reflect the latest best practices and versions.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding relative">
      <div className="container-custom relative">
        <SectionIntro
          kicker="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about the roadmap and your learning journey."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="surface-card overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full p-5 text-left transition-colors sm:p-6 ${
                  openIndex === index
                    ? 'bg-[var(--bg-panel-muted)]'
                    : 'hover:bg-[var(--bg-panel-soft)]'
                }`}
              >
                <span className="pr-4 font-semibold text-strong">{faq.question}</span>
                <span className="float-right inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--line-soft)] bg-[var(--bg-panel)] text-[var(--text-strong)]">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4 text-muted" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 text-body leading-relaxed sm:px-6 sm:pb-6">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
