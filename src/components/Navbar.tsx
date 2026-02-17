import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../static/logo.svg';

type HomeSection = 'home' | 'features' | 'faq';

const navLinks: Array<{ label: string; section: HomeSection }> = [
  { label: 'Home', section: 'home' },
  { label: 'Features', section: 'features' },
  { label: 'FAQ', section: 'faq' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<HomeSection>('home');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname === '/roadmap' ? 'roadmap' : 'home';
  const isLearnPage = location.pathname === '/learn';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') {
      return;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.section))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        setActiveSection(visibleEntries[0].target.id as HomeSection);
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentPage]);

  const scrollToSection = (section: HomeSection) => {
    const element = document.getElementById(section);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section);
  };

  const handleSectionClick = (section: HomeSection) => {
    setIsMobileMenuOpen(false);

    if (currentPage === 'home') {
      scrollToSection(section);
      return;
    }

    navigate(`/#${section}`);
  };

  const handleBrandClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const isDark = mounted && theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${isScrolled
          ? 'border-[color:var(--line-soft)] bg-[color:var(--nav-bg)] shadow-[0_1px_0_rgb(27_31_36_/_0.06)]'
          : 'border-transparent bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <button
            onClick={handleBrandClick}
            type="button"
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--line-soft)] bg-[color:var(--brand-mark-bg)] shadow-xs">
              <img
                src={logo}
                alt="autoconfig.site logo"
                className="h-6 w-6 object-contain dark:invert"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight text-strong sm:text-xl">
              autoconfig.site
            </span>
          </button>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-6 lg:gap-9">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleSectionClick(link.section)}
                  type="button"
                  className={`nav-link ${currentPage === 'home' && activeSection === link.section
                      ? 'nav-link-active'
                      : ''
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              type="button"
              className="icon-button h-10 w-10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            type="button"
            className="icon-button h-10 w-10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="animate-fade-in border-t border-[color:var(--line-soft)] bg-[color:var(--nav-bg)] md:hidden">
          <div className="container-custom py-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleSectionClick(link.section)}
                  type="button"
                  className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${currentPage === 'home' && activeSection === link.section
                      ? 'bg-[var(--brand-soft)] text-[var(--brand-strong)]'
                      : 'text-body hover:bg-[var(--bg-panel-muted)] hover:text-strong'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              type="button"
              className="btn-secondary mt-4 w-full justify-center gap-2 px-4 py-2.5 text-sm"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

