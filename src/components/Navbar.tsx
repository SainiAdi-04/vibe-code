import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoMeraz from '@/assets/logo_meraz.svg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Venue', path: '/venue' },
  { name: 'About', path: '/about' },
  { name: 'Passes', path: '/passes' },
  { name: 'Gallery', path: '/gallery' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoMeraz} alt="Meraz Logo" className="w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="font-orbitron text-xl font-bold text-gradient">
              MERAZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-medium text-sm tracking-wide transition-colors relative group',
                  location.pathname === link.path
                    ? 'text-gradient font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 transition-all duration-300',
                    location.pathname === link.path ? 'w-full bg-gradient-cosmic' : 'w-0 group-hover:w-full bg-gradient-cosmic'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/passes">
              <Button className="bg-gradient-cosmic hover:bg-gradient-cosmic-hover transition-all font-orbitron text-xs tracking-wider border-0">
                Get Passes
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-2 font-medium transition-colors',
                location.pathname === link.path
                  ? 'text-gradient font-semibold'
                  : 'text-muted-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/passes" className="block pt-2">
            <Button className="w-full bg-gradient-cosmic hover:bg-gradient-cosmic-hover font-orbitron text-xs tracking-wider border-0">
              Get Passes
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
