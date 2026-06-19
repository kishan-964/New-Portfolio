import React from 'react';
import { Star, Users, Zap } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function AdditionalExperience() {
  const sectionRef = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimationStagger(0.1);
  const experiences = [
    {
      icon: Users,
      title: 'Freelance Consultant',
      description: 'Provided web development and consulting services to 20+ startups and small businesses worldwide.',
      metrics: '5+ Projects',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects with focus on performance optimization and bug fixes.',
      metrics: '50+ Contributions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Technical Mentor',
      description: 'Mentored 15+ junior developers helping them grow their skills and transition into professional roles.',
      metrics: '10+ Mentees',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="additional-experience" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background to-muted/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Additional Experience</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Beyond traditional employment, expanding impact through various initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" ref={cardsRef}>
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                data-scroll-item
                className="group p-5 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-smooth overflow-hidden transform hover:scale-105 hover-lift"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br ${exp.color} rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-smooth hover-scale`}>
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2">{exp.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                    <span className="text-xs sm:text-sm font-semibold text-primary">{exp.metrics}</span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-secondary rounded-full transform group-hover:scale-125 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
