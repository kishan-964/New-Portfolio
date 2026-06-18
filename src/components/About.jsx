import React from "react";
import {
  useScrollAnimation,
  useScrollAnimationStagger,
} from "../hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useScrollAnimation(0.14);
  const contentRef = useScrollAnimationStagger(0.08);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background to-muted/3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12" data-scroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-3">
            I build delightful user experiences and resilient backend systems.
            My focus is on creating accessible, high-performance web
            applications and mentoring teams to deliver quality software.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          ref={contentRef}
        >
          <div
            data-scroll-item
            className="col-span-2 bg-card p-6 sm:p-8 rounded-2xl border border-border transition-smooth"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              What I do
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I specialize in building full-featured web applications using
              React, Node.js, and cloud services. I care about performance,
              accessibility, and maintainable code. I enjoy translating product
              goals into pragmatic engineering solutions.
            </p>
          </div>

          <aside
            data-scroll-item
            className="bg-card p-6 sm:p-8 rounded-2xl border border-border"
          >
            <h4 className="text-base font-semibold mb-2">Quick facts</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Location: Remote / Hybrid</li>
              <li>Experience: 8+ years</li>
              <li>Focus: Frontend + APIs + Backend + UI/UX</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
