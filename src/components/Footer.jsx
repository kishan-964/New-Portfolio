import React from 'react';
import { Heart, ArrowUp, Link2, Share2, Mail, HeartIcon } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Footer() {
  const footerRef = useScrollAnimation(0.15);
  const linksRef = useScrollAnimationStagger(0.05);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-background to-muted/20 border-t border-border" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-responsive py-8 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12" ref={linksRef}>
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4" data-scroll-item>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold hover-scale">
                K
              </div>
              <span className="font-bold text-base sm:text-lg text-foreground">Kishan Kumar Thakur</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technology and creative vision.
            </p>
          </div>

          {/* Quick Links */}
          <div data-scroll-item>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, idx) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-smooth hover-lift"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-scroll-item>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Blog', 'Documentation', 'GitHub', 'Portfolio', 'Resume'].map((link, idx) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-smooth hover-lift"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div data-scroll-item>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Follow</h3>
            <div className="flex gap-2 sm:gap-3">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social, idx) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 sm:w-10 h-9 sm:h-10 bg-muted rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-smooth transform hover:scale-110 hover-lift"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 text-center sm:text-left animate-fadeInUp">
              © {currentYear} Kishan Kumar Thakur. Made with
             <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-semibold text-foreground">Trained by Clove IT</span>
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-white transition-smooth transform hover:scale-105 text-xs sm:text-sm font-medium group hover-lift animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
              aria-label="Scroll to top"
            >
              <span className="hidden sm:inline">Back to Top</span>
              <span className="sm:hidden">Top</span>
              <ArrowUp className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <a href="#" className="hover:text-primary transition-smooth hover-lift">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-primary transition-smooth hover-lift">
              Terms of Service
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
