import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Education() {
  const sectionRef = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimationStagger(0.1);
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      year: '2018 - 2022',
      highlights: ['GPA: 3.8/4.0', 'Merit Scholar', 'First Division'],
    },
    {
      degree: 'Advanced Diploma',
      field: 'Web Development',
      institution: 'Jeetain Mandal Academy',
      location: 'Online',
      year: '2023 - 2024',
      highlights: ['Full Stack Specialization', 'Distinction', 'Project-Based Learning'],
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background to-muted/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Education</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" ref={cardsRef}>
          {education.map((edu, index) => (
            <div
              key={index}
              data-scroll-item
              className="group p-4 sm:p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-smooth transform hover:scale-105 hover-lift"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 truncate">{edu.degree}</h3>
                  <p className="text-secondary font-medium text-sm sm:text-base">{edu.field}</p>
                </div>
                <div className="shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth hover-scale">
                  <Award className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-xs sm:text-sm">{edu.year}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">{edu.institution}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 sm:px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium rounded-full group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-smooth"
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
