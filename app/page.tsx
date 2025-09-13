"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links with header offset
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 96; // ヘッダーの高さ（pt-24 = 96px）
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const htmlSection = section as HTMLElement;
      htmlSection.style.opacity = "0";
      htmlSection.style.transform = "translateY(20px)";
      htmlSection.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.querySelector(".hero-section") as HTMLElement;
    if (heroSection) {
      heroSection.style.opacity = "1";
      heroSection.style.transform = "translateY(0)";
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <div className="pt-24">
        <div className="hero-section">
          <HeroSection />
        </div>
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
