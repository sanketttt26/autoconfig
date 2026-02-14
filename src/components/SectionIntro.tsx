import { cn } from '../lib/utils';

interface SectionIntroProps {
  kicker: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionIntro({
  kicker,
  title,
  description,
  className,
}: SectionIntroProps) {
  return (
    <header className={cn('section-intro', className)}>
      <span className="kicker">{kicker}</span>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mx-auto mt-4 max-w-2xl">{description}</p>
    </header>
  );
}
