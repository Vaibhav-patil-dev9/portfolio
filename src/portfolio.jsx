import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

// ================================================================
//  ✏️  PERSONAL INFO HERE
// ================================================================
const ME = {
  name: "Vaibhav Patil",

  title: "Java Full Stack Developer",

  tagline:
    "Building secure, scalable and production-ready web applications.",

  about:
    "Computer Engineering graduate with hands-on experience building RESTful APIs using Spring Boot, Hibernate (JPA), MySQL, and Spring Security. Passionate about backend engineering and creating scalable web applications with clean architecture.",

  photo: "profile photo.jpg",

  resumeUrl: "/vaibhav_patil_java_developer.pdf",

  social: {
    github: "https://github.com/Vaibhav-patil-dev9",
    linkedin: "https://www.linkedin.com/in/vaibhav-patil-dev9/",
    instagram: "https://www.instagram.com/vaibhav__one8/",
    twitter: "https://x.com/vaibhav_dev9",
  },

  education: [
    {
      level: "B.E Computer Engineering",
      school: "Sandip Institute of Engineering and Management",
      year: "2021 – 2025",
      score: "CGPA 7.8",
      icon: "🎓",
    },
  ],

  experience: [
    {
      company: "NexaNova ProTech",
      role: "Application Development Intern",
      period: "Jun 2025 – Dec 2025",
      desc:
        "Worked on application development, debugging, feature implementation and real-world software workflows.",
      color: "#7c3aed",
    },
  ],

  skills: [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 82 },
    { name: "Spring Security", level: 78 },
    { name: "Hibernate", level: 80 },
    { name: "React.js", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "REST APIs", level: 82 },
  ],

  projects: [
    {
      title: "📝 Blogging Platform",
      desc:
        "Built a secure blogging platform with JWT authentication, role-based access control and scalable REST APIs.",

      tags: [
        "Java",
        "Spring Boot",
        "JWT",
        "Hibernate",
        "MySQL",
      ],

      color: "#ff6b35",
      emoji: "📝",
      github: "https://github.com/Vaibhav-patil-dev9/blogging-app-backend",
      live: "https://vaibhav-dev9-portfolio.vercel.app/", //change URL later
    },

    {
      title: "🛒 Shopping Cart",

      desc:
        "Developed a shopping cart system with authentication, product management and order processing.",

      tags: [
        "Java",
        "Servlet",
        "JSP",
        "JDBC",
        "MySQL",
      ],

      color: "#2dc761",
      emoji: "🛒",
      github: "https://github.com/Vaibhav-patil-dev9/ShopKart-ecommerce-platform",
      live: "https://vaibhav-dev9-portfolio.vercel.app/", // change URL later

    },

    {
      title: "💼 Portfolio",

      desc:
        "Modern responsive portfolio with animations and deployment using React and Vercel.",

      tags: [
        "React",
        "JavaScript",
        "Vite",
        "Vercel",
      ],

      color: "#7c3aed",
      emoji: "💼",
      github: "https://github.com/Vaibhav-patil-dev9/portfolio",
      live: "https://vaibhav-dev9-portfolio.vercel.app/",
    },
  ],

  contact: {
    email: "vaibhav.patil.dev9@gmail.com",
  },
};

// ================================================================
//  SVG SOCIAL ICONS
// ================================================================

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
      -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
      3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
      0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23
      A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23
      3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
      0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222
      0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12
      c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
      -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
      c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
      7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
      13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542
      C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729
      C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919
      4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849
      -.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07
      -3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92
      -.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849
      .149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12
      0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333
      0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98
      6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072
      4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
      0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98
      C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324
      6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845
      a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231
      -5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622L18.244
      2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);


// ================================================================
//  HELPER HOOKS & COMPONENTS
// ================================================================

// Detects when an element enters the viewport
function useInView(ref, threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isVisible;
}

// Wraps any content with a scroll-triggered fade-up animation
function ScrollReveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}


// ================================================================
//  MAIN PORTFOLIO COMPONENT
// ================================================================

function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const skillsRef = useRef(null);
  const skillsVisible = useInView(skillsRef);

  const navItems = ["home", "about", "education", "experience", "skills", "projects", "contact"];

  // Smooth scroll to a section by ID
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Download the resume
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ME.resumeUrl;
    link.download = `${ME.name.replace(" ", "_")}_Resume.pdf`;
    link.target = "_blank";
    link.click();
  };

  // Highlight active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 220) current = section;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={isDarkMode ? "" : "light-mode"}
      style={{ background: "var(--color-bg)", minHeight: "100vh", transition: "background 0.35s" }}
    >

      {/* ── NAVBAR ──────────────────────────────────────────── */}
      {/* MODERN NAVBAR */}

      <nav className="navbar">

        <div
          className="navbar-logo"
          onClick={() => {
            scrollTo("home");
            setMenuOpen(false);
          }}
        >
          VP
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>

          {navItems.map((section) => (

            <li key={section}>

              <a
                className={activeSection === section ? "active" : ""}
                onClick={() => {
                  scrollTo(section);
                  setMenuOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>

            </li>

          ))}

        </ul>

      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="home" className="hero-section">

        <div className="hero-background-glow"></div>

        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-content">

            <span className="hero-badge">
              🚀 Available for Full Stack Opportunities
            </span>

            <h1 className="hero-title">
              Hi, I'm
              <br />

              <span className="hero-gradient">
                {ME.name}
              </span>
            </h1>

            <h2 className="hero-role">
              {ME.title}
            </h2>

            <p className="hero-description">
              {ME.tagline}
            </p>

            <div className="hero-buttons">

              <button
                className="btn-primary"
                onClick={() => scrollTo("projects")}
              >
                View Projects
              </button>

              <button
                className="btn-outline"
                onClick={downloadResume}
              >
                Download Resume
              </button>

            </div>

            {/* SOCIAL LINKS */}

            <div className="hero-socials">

              <a
                href={ME.social.github}
                target="_blank"
                rel="noreferrer"
              >
                <IconGitHub />
              </a>

              <a
                href={ME.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <IconLinkedIn />
              </a>

              <a
                href={ME.social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <IconInstagram />
              </a>

              <a
                href={ME.social.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <IconTwitterX />
              </a>

            </div>

            {/* STATS */}

            <div className="hero-stats">

              <div className="stat-box">
                <h2>2+</h2>
                <span>Projects</span>
              </div>

              <div className="stat-box">
                <h2>1</h2>
                <span>Internship</span>
              </div>

              <div className="stat-box">
                <h2>10+</h2>
                <span>Skills</span>
              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className="hero-photo-wrapper">

            <div className="hero-photo-ring">

              <img
                src={ME.photo}
                alt={ME.name}
                className="hero-photo-img"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <div id="about" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">The person behind the code</h2>
          <div className="section-divider" />

          <div className="about-grid">
            <p className="about-text">
              Hey! I'm <strong>{ME.name}</strong>, a {ME.title.toLowerCase()} who
              loves crafting clean, purposeful digital products. {ME.about}
            </p>
            {/* <div className="stats-grid">
              {[
                ["4+",  "Years Exp."],
                ["30+", "Projects"],
                ["15+", "Clients"],
                ["99%", "On-Time"],
              ].map(([number, label]) => (
                <div className="stat-card" key={label}>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </ScrollReveal>
      </div>

      {/* ── EDUCATION ───────────────────────────────────────── */}
      <div id="education" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">My academic journey</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="education-grid">
          {ME.education.map((edu, index) => (
            <ScrollReveal key={edu.level} delay={index * 0.1}>
              <div className="education-card">
                <span className="education-icon">{edu.icon}</span>
                <div className="education-level">{edu.level}</div>
                <div className="education-school">{edu.school}</div>
                <div className="education-board">{edu.board}</div>
                <div className="education-footer">
                  <span className="education-year">📅 {edu.year}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE ──────────────────────────────────────── */}
      <div id="experience" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="timeline">
          {ME.experience.map((job, index) => (
            <ScrollReveal key={job.company} delay={index * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card" style={{ "--card-accent-color": job.color }}>
                  <div className="timeline-header">
                    {/* <div className="timeline-company-logo">{job.logo}</div> */}
                    <div className="timeline-info">
                      <div className="timeline-company-name">{job.company}</div>
                      <div className="timeline-role" style={{ color: job.color }}>
                        {job.role}
                      </div>
                      <div className="timeline-period">📅 {job.period}</div>
                    </div>
                  </div>
                  <p className="timeline-description">{job.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <div id="skills" className="section-wrapper">
        <ScrollReveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div ref={skillsRef} className="skills-grid">
          {ME.skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.08}>
              <div className="skill-card">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: skillsVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <div id="projects" className="section-wrapper">

        <ScrollReveal>

          <p className="section-label">
            Projects
          </p>

          <h2 className="section-title">
            Featured Work
          </h2>

          <div className="section-divider" />

        </ScrollReveal>


        <div className="projects-grid">

          {ME.projects.map((project, index) => (

            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
            >

              <div
                className="project-card-v2"
              >

                <div className="project-top">

                  <div className="project-icon">
                    {project.emoji}
                  </div>

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.desc}
                    </p>

                  </div>

                </div>


                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="project-chip"
                    >

                      {tag}

                    </span>

                  ))}

                </div>


                <div className="project-actions">

                  <button
                    className="project-btn"
                    onClick={() =>
                      window.open(
                        project.github,
                        "_blank"
                      )
                    }
                  >
                    GitHub
                  </button>


                  <button
                    className="project-btn-live"
                    onClick={() =>
                      window.open(
                        project.live,
                        "_blank"
                      )
                    }
                  >
                    Live Demo
                  </button>

                </div>

              </div>

            </ScrollReveal>

          ))}

        </div>

      </div>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <div id="contact" className="section-wrapper">
        <ScrollReveal>
          <div className="contact-box">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's work together</h2>
            <div className="section-divider" style={{ margin: "1rem auto 1.5rem" }} />
            <p className="contact-description">
              Have a project in mind or just want to say hi? My inbox is always
              open — I'll get back within 24 hours.
            </p>
            <button
              className="btn-primary"
              onClick={() => window.open(`mailto:${ME.contact.email}`)}
            >
              Say Hello ✉️
            </button>
            <div className="contact-links">
              <span className="contact-link-item">📧 {ME.contact.email}</span>
              {/* <span className="contact-link-item">🐙 {ME.contact.github}</span> */}
              {/* <span className="contact-link-item">💼 {ME.contact.linkedin}</span> */}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="footer">
        <p> ⚡ Designed &amp; Developed by {ME.name}</p>
      </footer>

    </div>
  );
}
export default Portfolio;