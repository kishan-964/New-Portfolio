import React from 'react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Skills() {
  const sectionRef = useScrollAnimation(0.15);
  const skillsRef = useScrollAnimationStagger(0.12, 0.15);
  const techRef = useScrollAnimationStagger(0.08, 0.15);
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 50 },
        { name: 'HTML & CSS', level: 85 },    
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 25 },
        { name: 'MongoDB', level: 50 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 92 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 75 },
        { name: 'Team Leadership', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Project Management', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background to-muted/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Skills & Expertise</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Proficiency in modern technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-scroll-item
              className="group p-5 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth transform hover:scale-105 hover-lift"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-6">{category.title}</h3>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5 sm:space-y-2 animate-fadeInUp" style={{ animationDelay: `${(index * 4 + idx) * 50}ms` }}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-xs sm:text-sm md:text-base text-foreground truncate">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-secondary font-semibold shrink-0">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-out group-hover:shadow-lg group-hover:shadow-primary/30"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideInFromLeft 1s ease-out forwards`,
                          animationDelay: `${(index * 4 + idx) * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-secondary/30 scroll-animate-in">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4" ref={techRef}>
            {[
              'JavaScript',
              'React',
              'Node.js',
              'MongoDB',
              'Express.js',
              'Git',
             'HTML & CSS',
              'Tailwind CSS',
            ].map((tech, index) => (
              <div
                key={index}
                data-scroll-item
                className="p-3 sm:p-4 bg-card rounded-lg border border-border text-center hover:border-primary/50 hover:shadow-md transition-smooth group cursor-default transform hover:scale-105 hover-lift"
              >
                <span className="font-medium text-xs sm:text-sm text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
