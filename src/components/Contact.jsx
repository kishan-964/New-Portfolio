import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link2, Share2 } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

export default function Contact() {
  const sectionRef = useScrollAnimation(0.15);
  const contactRef = useScrollAnimationStagger(0.1);
  const socialRef = useScrollAnimationStagger(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');

    try {
      const form = e.target;
      const formDataToSend = new FormData(form);
      formDataToSend.append('access_key', '3fbb113f-0bc2-4dc0-ad9b-378c6b07c56f');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        form.reset();
      } else {
        setResult(data.message || 'There was an error sending your message.');
      }
    } catch (error) {
      setResult('Unable to send the message. Please try again later.');
      console.error('Contact form submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kt038153@gmail.com',
      href: 'mailto:kt038153@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977 9807631559',
      href: 'tel:+9779807631559',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nepal, janakpur',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 px-responsive bg-linear-to-b from-background to-muted/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 scroll-animate-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">Let&apos;s Work Together</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let&apos;s collaborate and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12" ref={contactRef}>
          {/* Contact Information */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                data-scroll-item
                href={info.href}
                className="group p-4 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth transform hover:scale-105 hover-lift"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-smooth mb-3 sm:mb-4 hover-scale">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 sm:mb-1">{info.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-smooth truncate">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start animate-stagger">
          <div className="p-4 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth animate-fadeInLeft hover-lift">
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus-ring transition-smooth text-sm sm:text-base"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus-ring transition-smooth text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus-ring transition-smooth resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-linear-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-smooth transform hover:scale-105 font-medium flex items-center justify-center gap-2 group text-sm sm:text-base hover-lift animate-fadeInUp disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ animationDelay: '0.4s' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {result && (
                <p className="mt-4 text-sm text-foreground">{result}</p>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="p-4 sm:p-8 bg-linear-to-br from-primary/5 to-secondary/5 rounded-2xl border border-secondary/30 animate-fadeInRight hover-lift">
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-3 sm:mb-6">Connect With Me</h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Follow me on social media to stay updated with my latest projects, thoughts, and updates on web development.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8" ref={socialRef}>
              <a
                href="#"
                data-scroll-item
                className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth group transform hover:scale-105 hover-lift"
              >
                <Share2 className="w-4 sm:w-5 h-4 sm:h-5 text-foreground group-hover:text-primary transition-smooth shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm text-foreground truncate">LinkedIn</p>
                  <p className="text-xs text-muted-foreground truncate">https://www.linkedin.com/in/kishanthakur01/</p>
                </div>
              </a>

              <a
                href="#"
                data-scroll-item
                className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth group transform hover:scale-105 hover-lift"
              >
                <Link2 className="w-4 sm:w-5 h-4 sm:h-5 text-foreground group-hover:text-primary transition-smooth shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm text-foreground truncate">GitHub</p>
                  <p className="text-xs text-muted-foreground truncate">https://github.com/kishan-964</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-3 sm:p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth group transform hover:scale-105 hover-lift animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                <Share2 className="w-4 sm:w-5 h-4 sm:h-5 text-foreground group-hover:text-primary transition-smooth shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-xs sm:text-sm text-foreground truncate">Social</p>
                  <p className="text-xs text-muted-foreground truncate">https://www.facebook.com/ki.han.thakur</p>
                </div>
              </a>
            </div>

            <div className="p-3 sm:p-4 bg-card rounded-lg border border-border hover-lift animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Response Time</p>
              <p className="text-xs text-muted-foreground">Usually responds within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
