import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Projects() {
  const sectionRef = useScrollAnimation(0.15);
  const featuredRef = useScrollAnimationStagger(0.12, 0.15);
  const othersRef = useScrollAnimationStagger(0.12, 0.15);
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '🛍️',
      link: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Social Media Analytics',
      description: 'Real-time analytics platform for tracking social media metrics across multiple platforms with beautiful visualizations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: '📊',
      link: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot powered by machine learning with natural language processing and context awareness.',
      tags: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      image: '🤖',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management system with real-time updates, task tracking, and team communication.',
      tags: ['Vue.js', 'Firebase', 'Vuetify', 'Socket.io'],
      image: '✅',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Learning Management System',
      description: 'Complete LMS platform with course creation, student progress tracking, and interactive learning materials.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      image: '📚',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with real-time data, location tracking, and detailed weather forecasts.',
      tags: ['React Native', 'OpenWeather API', 'Redux', 'Expo'],
      image: '🌤️',
      link: '#',
      github: '#',
      featured: false,
    },
  ];

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background via-background to-muted/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Crafting solutions that solve real problems and create lasting impact
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12" ref={featuredRef}>
          {featured.map((project, index) => (
            <div
              key={index}
              data-scroll-item
              className="group relative min-h-80 sm:h-96 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-smooth transform hover:scale-105 hover-lift"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">{project.image}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium rounded-full group-hover:bg-secondary/20 transition-smooth whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-smooth text-xs sm:text-sm font-medium hover-lift"
                    >
                      <span className="hidden sm:inline">View Project</span>
                      <span className="sm:hidden">View</span>
                      <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center px-2.5 sm:px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-smooth text-xs sm:text-sm font-medium hover-lift"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 scroll-animate-in">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" ref={othersRef}>
            {others.map((project, index) => (
              <div
                key={index}
                data-scroll-item
                className="group p-4 sm:p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-smooth transform hover:scale-105 hover-lift"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{project.image}</div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 truncate">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 sm:pt-4 border-t border-border">
                  <a
                    href={project.link}
                    className="flex-1 text-center py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-smooth text-xs font-medium hover-lift"
                  >
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-smooth text-xs font-medium hover-lift"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
