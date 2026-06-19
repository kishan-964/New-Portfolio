import React from "react";
import { ArrowRight, GitBranch, Share2, Mail } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      id="home"
      ref={ref}
      className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-responsive bg-linear-to-b from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center py-responsive">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6" data-scroll>
              <div
                className="inline-block px-3 sm:px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30"
                data-scroll
              >
                <span className="text-xs sm:text-sm font-medium text-primary flext justify-center items-center gap-1">
                  Welcome to my portfolio
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                Mern-Stack
                <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {" "}
                  Developer
                </span>
              </h1>
              <span className="text-xl sm:text-4xl font-semibold text-foreground">
                Kishan Kumar Thakur
              </span>

              <p
                className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
                data-scroll
              >
                I craft exceptional digital experiences combining strategic
                design with robust engineering. Currently building innovative
                solutions at APEX, trained by Jeetain Mandal. Passionate about
                creating pixel-perfect interfaces and scalable applications.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-6 sm:py-8 border-y border-border">
              <div className="space-y-1 sm:space-y-2" data-scroll>
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  1+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="space-y-1 sm:space-y-2" data-scroll>
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  10+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="space-y-1 sm:space-y-2" data-scroll>
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  0+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              data-scroll
            >
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-smooth transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 font-medium text-sm sm:text-base hover-lift"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-border text-foreground rounded-lg hover:bg-muted transition-smooth font-medium text-sm sm:text-base hover-glow"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-3 sm:gap-4 pt-4 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://github.com/kishan-964"
                className="p-2.5 sm:p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-smooth transform hover:scale-110 hover-glow"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kishanthakur01/"
                className="p-2.5 sm:p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-smooth transform hover:scale-110 hover-glow"
                aria-label="LinkedIn"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="mailto:kt038153@gmail.com"
                className="p-2.5 sm:p-3 bg-muted rounded-lg hover:bg-primary hover:text-white transition-smooth transform hover:scale-110 hover-glow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block" data-scroll>
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-bounceGentle"></div>
            <div className="relative bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 border border-secondary/30 backdrop-blur-sm hover-lift">
              <div className="space-y-4 sm:space-y-6">
                <div className="h-56 sm:h-64 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-5xl sm:text-6xl font-bold text-white/50 hover-scale">
                  <img
                    src="/kishan.jpeg"
                    alt="Kishan Kumar Thakur"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="space-y-2 sm:space-y-3 animate-stagger">
                  <div className="h-2 sm:h-3 bg-secondary/20 rounded-full w-3/4"></div>
                  <div className="h-2 sm:h-3 bg-secondary/20 rounded-full w-full"></div>
                  <div className="h-2 sm:h-3 bg-secondary/20 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
