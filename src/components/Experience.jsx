import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Experience() {
  const sectionRef = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimationStagger(0.1);
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'APEX',
      period: '2027 - Present',
      description: 'Leading development of cutting-edge web applications. Architecting scalable solutions and mentoring junior developers.',
      highlights: ['React & Next.js', 'Node.js', 'AWS', 'Team Leadership'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Tech Innovations Ltd',
      period: '2026 - 2027',
      description: 'Developed responsive web applications for multiple clients. Implemented features using modern web technologies.',
      highlights: ['React', 'MongoDB', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Inc',
      period: '2026 - 2027',
      description: 'Created user-friendly interfaces and optimized performance. Collaborated with design team to implement UI/UX.',
      highlights: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2025 - 2026',
      description: 'Built features for web applications. Learned best practices in coding and collaboration with senior developers.',
      highlights: ['HTML/CSS', 'JavaScript', 'Git', 'Agile'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background via-muted/5 to-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Professional Experience</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Exploring different roles and building expertise across the full stack
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6" ref={cardsRef}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-scroll-item
              className="group p-4 sm:p-6 md:p-8 bg-linear-to-br from-card to-card/50 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth transform hover:scale-105 hover-lift"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-1 w-full min-w-0">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shrink-0 hover-scale">
                      <Briefcase className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm sm:text-base truncate">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground pl-11 sm:pl-12">{exp.period}</p>
                </div>
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 mt-1" />
              </div>

              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 pl-11 sm:pl-12 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 pl-0">
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium rounded-full group-hover:bg-secondary/20 transition-smooth whitespace-nowrap"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
