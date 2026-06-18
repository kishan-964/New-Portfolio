import React from 'react';
import { CheckCircle2, Download } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const sectionRef = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimationStagger(0.1);
  const certifications = [
    {
      title: 'Professional Developer Certification',
      issuer: 'Jeetain Mandal Academy',
      date: 'June 2024',
      credential: 'JM-2024-001',
      verified: true,
      skills: ['Full Stack', 'React', 'Node.js'],
    },
    {
      title: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credential: 'AWS-SAA-2024',
      verified: true,
      skills: ['AWS', 'Cloud Architecture', 'DevOps'],
    },
    {
      title: 'Advanced React Development',
      issuer: 'React Bootcamp',
      date: 'December 2023',
      credential: 'RB-2023-456',
      verified: true,
      skills: ['React', 'Next.js', 'Performance'],
    },
    {
      title: 'PostgreSQL Database Administration',
      issuer: 'Database Institute',
      date: 'September 2023',
      credential: 'DB-2023-789',
      verified: true,
      skills: ['PostgreSQL', 'Database Design', 'Optimization'],
    },
    {
      title: 'Web Development Professional',
      issuer: 'Tech Academy Online',
      date: 'June 2023',
      credential: 'TAO-2023-012',
      verified: true,
      skills: ['Web Dev', 'Frontend', 'Backend'],
    },
    {
      title: 'JavaScript Mastery',
      issuer: 'Code Academy',
      date: 'March 2023',
      credential: 'CA-2023-345',
      verified: true,
      skills: ['JavaScript', 'ES6+', 'Async Programming'],
    },
  ];

  return (
    <section id="certifications" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background via-muted/5 to-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Certifications & Credentials</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Professional certifications and verified credentials demonstrating expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" ref={cardsRef}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-scroll-item
              className="group p-4 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth transform hover:scale-105 hover-lift"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-foreground flex-1 line-clamp-2">{cert.title}</h3>
                    {cert.verified && (
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-primary font-semibold text-xs sm:text-sm truncate">{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-border">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Issued:</span> {cert.date}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Credential ID:</span>{' '}
                  <code className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-mono truncate inline-block max-w-xs">{cert.credential}</code>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium rounded-full group-hover:bg-secondary/20 transition-smooth whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-2 px-3 sm:px-4 bg-muted rounded-lg text-foreground hover:bg-muted/80 transition-smooth text-xs sm:text-sm font-medium group/btn hover-lift">
                <Download className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover/btn:translate-y-0.5 transition-transform duration-300" />
                <span className="hidden sm:inline">Download Certificate</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Certifications Note */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-8 bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl border border-secondary/30 scroll-animate-in hover-lift">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">Continuous Learning</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            I&apos;m committed to continuous professional development. I regularly complete online courses and maintain
            industry certifications to stay updated with the latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </section>
  );
}
