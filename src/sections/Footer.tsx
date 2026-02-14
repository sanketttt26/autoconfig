import { BookOpen, ExternalLink, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../static/logo.svg';

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', action: () => navigate('/') },
    { label: 'Roadmap', action: () => navigate('/roadmap') },
  ];

  const resources = [
    { label: 'Spring Docs', url: 'https://docs.spring.io' },
    { label: 'Baeldung', url: 'https://www.baeldung.com' },
    { label: 'Spring Initializr', url: 'https://start.spring.io' },
  ];

  const socialLinks = [
    {
      icon: BookOpen,
      url: 'https://spring.io/projects/spring-boot',
      label: 'Spring Boot',
    },
    {
      icon: ExternalLink,
      url: 'https://docs.spring.io',
      label: 'Spring Docs',
    },
  ];

  return (
    <footer className="relative mt-8 border-t border-[color:var(--line-soft)] bg-[var(--bg-panel-muted)]">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <button
              onClick={() => navigate('/')}
              className="group mb-4 flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--line-soft)] bg-[color:var(--brand-mark-bg)]">
                <img
                  src={logo}
                  alt="autoconfig.site logo"
                  className="h-5 w-5 object-contain dark:invert"
                />
              </div>
              <span className="font-semibold text-strong transition-colors group-hover:text-[var(--brand-strong)]">
                autoconfig.site
              </span>
            </button>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-body">
              A practical roadmap for Java developers who want to move from
              fundamentals to production-ready Spring Boot and microservices.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button h-10 w-10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-strong">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={link.action} className="link-muted text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-strong">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-muted text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 soft-divider" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted">
            Made with <Heart className="h-4 w-4 fill-[color:var(--text-strong)] text-[color:var(--text-strong)]" /> for
            the Java community
          </p>
          <p className="text-sm text-muted">
            (c) {currentYear} autoconfig.site. Open source under Apache 2.0.
          </p>
        </div>
      </div>
    </footer>
  );
}

