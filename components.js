class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          position: fixed;
          z-index: 1000;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
        }
        .name {
          color: var(--light-text);
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .name:hover {
          color: var(--accent-color-secondary);
        }
        nav {
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
          margin-bottom: -0.45rem;
        }
        a {
          color: var(--light-text);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color-secondary) 0%, var(--light-green) 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        a:hover::after,
        a:focus::after {
          width: 100%;
        }
        a:focus {
          outline: 1px dotted var(--light-text);
          outline-offset: 2px;
        }
        a.active::after {
          width: 100%;
          background: linear-gradient(90deg, var(--accent-color-secondary) 0%, var(--light-green) 100%);
          opacity: 1;
        }
      </style>
      <div class="header-content">
        <a href="#about" class="name">Tree Casiano</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    `;

    // Set up Intersection Observer
    const options = {
      rootMargin: "-100px 0px 0px 0px", // Offset for header
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = this.shadowRoot.querySelector(`nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Remove active class from all nav links
          this.shadowRoot
            .querySelectorAll("nav a")
            .forEach((a) => a.classList.remove("active"));
          // Add active class to current nav link
          link.classList.add("active");
          // Update URL hash without scrolling
          if (window.location.hash !== `#${id}`) {
            history.pushState(null, null, `#${id}`);
          }
        }
      });
    }, options);

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Handle click events to update active state immediately
    this.shadowRoot.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (link.closest("nav")) {
          // Only update active state for nav links
          this.shadowRoot
            .querySelectorAll("nav a")
            .forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        }

        // Update URL hash and scroll to section
        history.pushState(null, null, `#${targetId}`);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetSection = document.getElementById(hash.substring(1));
        if (targetSection) {
          const link = this.shadowRoot.querySelector(`nav a[href="${hash}"]`);
          if (link) {
            this.shadowRoot
              .querySelectorAll("nav a")
              .forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
            targetSection.scrollIntoView({ behavior: "instant" });
          }
        }
      } else if (!window.location.hash) {
        // If no hash is present, redirect to #about
        history.replaceState(null, null, "#about");
        const aboutSection = document.getElementById("about");
        const aboutLink = this.shadowRoot.querySelector('nav a[href="#about"]');
        if (aboutSection && aboutLink) {
          this.shadowRoot
            .querySelectorAll("nav a")
            .forEach((a) => a.classList.remove("active"));
          aboutLink.classList.add("active");
          aboutSection.scrollIntoView({ behavior: "instant" });
        }
      }
    };

    // Handle initial hash and hash changes
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleInitialHash);
    } else {
      handleInitialHash();
    }
    window.addEventListener("hashchange", handleInitialHash);
  }
}

class ScrollArrowComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .scroll-arrow {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .scroll-arrow:hover {
          transform: translateX(-50%) translateY(5px);
        }
        .arrow {
          width: 30px;
          height: 30px;
          border: solid var(--primary-color);
          border-width: 2px 2px 0 0;
          transform: rotate(135deg);
        }

      </style>
      <div class="scroll-arrow">
        <div class="arrow"></div>
      </div>
    `;

    this.shadowRoot
      .querySelector(".scroll-arrow")
      .addEventListener("click", () => {
        const nextSection = this.getAttribute("next-section");
        if (nextSection) {
          document
            .querySelector(nextSection)
            .scrollIntoView({ behavior: "smooth" });
        }
      });
  }
}

class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 4rem 2rem;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h1 {
          color: var(--teal-color);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-md);
        }
        p {
          color: var(--text-color);
          font-size: var(--font-size-body-lg);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
      </style>
      <div class="about-container">
        <div class="section-header">
          <h1>Tree Casiano, GIS Developer</h1>
        </div>
        <p>Greetings! I'm a full stack developer specializing in interactive maps and data visualization. I build accessible, intuitive web interfaces that make complex spatial data meaningful and actionable.</p>
        <p>I enjoy working across the stack - from crafting pixel-perfect UIs to optimizing database queries. I'm especially interested in web cartography, web accessibility, information visualization, and data literacy.</p>
        <scroll-arrow next-section="#projects"></scroll-arrow>
      </div>
    `;
  }
}

class ProjectsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 4rem 2rem;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h2 {
          color: var(--teal-color);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-md);
        }
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .project-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
      </style>
      <div class="section-header">
        <h2>Featured Projects</h2>
      </div>
      <div class="projects-container">
        <project-card repo-url="https://github.com/treecasiano/pdx-food-map" executive-summary-url="img/pdx_food_map_executive_summary.pdf">
          <span slot="title">PDX Food Map</span>
          <span slot="description">Interactive web map displaying food access indicators and sources of healthy food in the Portland Metro area, using data from the USDA Economic Research Service Food Access Research Atlas.</span>
          <span slot="tools">Leaflet, Vue.js, Vuetify, PostgreSQL, Node, Express</span>
          <img src="img/pdxmetrofoodmap.png" alt="PDX Food Map">
        </project-card>
        <project-card repo-url="https://github.com/treecasiano/nitrate-cancer-analysis" project-url="https://treecasiano.github.io/nitrate-cancer-analysis/#/">
          <span slot="title">Nitrate Levels and Cancer Incidence Analysis</span>
          <span slot="description">Interactive map exploring the relationship between nitrate levels and cancer analysis in Wisconsin census tracts.</span>
          <span slot="tools">Vue, Vuetify, Leaflet, Turf.js</span>
          <img src="img/nitrate-analysis.png" alt="Nitrate-Cancer Analysis">
        </project-card>
        <project-card repo-url="https://github.com/uw-project-group/portland-street-trees">
          <span slot="title">Portland Street Trees</span>
          <span slot="description">Interactive map visualizing Portland Parks & Recreation's Street Tree Inventory data.</span>
          <span slot="tools">Leaflet, D3</span>
          <img src="img/street-trees-map.png" alt="Portland Street Trees">
        </project-card>
      </div>
    `;
  }
}

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          display: block;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        :host(:hover) {
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }
        .card-content {
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .text-content {
          flex: 1;
        }
        img {
          border-radius: 8px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          display: block;
          max-height: 200px;
          object-fit: contain;
          object-position: center;
          width: auto;
        }
        h3 {
          color: var(--teal-color);
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
        }
        p {
          color: var(--text-color);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        .tools {
          background-color: #F8F8F8;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
        .tools h4 {
          color: var(--teal-color);
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tools p {
          color: var(--text-color);
          font-size: 0.85rem;
          margin: 0 0 0.5rem 0;
          opacity: 0.8;
        }
        .repo-link, .project-link, .executive-summary-link {
          color: var(--teal-color);
          text-decoration: none;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.3s ease;
          margin-right: 1rem;
        }
        .repo-link:hover, .project-link:hover, .executive-summary-link:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }
        .repo-link svg, .project-link svg, .executive-summary-link svg {
          width: 14px;
          height: 14px;
          fill: currentColor;
        }
        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      </style>
      <div class="card-content">
        <div class="text-content">
          <h3><slot name="title"></slot></h3>
          <p><slot name="description"></slot></p>
          <div class="tools">
            <h4>Tools & Technology</h4>
            <p><slot name="tools"></slot></p>
            <div class="project-links">
              <a href="#" class="repo-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a href="#" class="project-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                Go to Project
              </a>
              <a href="#" class="executive-summary-link" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h9l5 5v13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm7 7V3.5L18.5 9H13zm-7 2h10v2H6v-2zm0 4h10v2H6v-2zm0 4h7v2H6v-2z"/>
              </svg>
                Executive Summary
              </a>
            </div>
          </div>
        </div>
        <img src="" alt="">
      </div>
    `;

    // Set up the image source
    const img = this.shadowRoot.querySelector("img");
    const imgSrc = this.querySelector("img")?.src;
    if (imgSrc) {
      img.src = imgSrc;
      img.alt = this.querySelector("img")?.alt || "";
      img.style.height = "200px";
      img.style.width = "auto";
    }

    // Set up the repository link
    const repoLink = this.shadowRoot.querySelector(".repo-link");
    const repoUrl = this.getAttribute("repo-url");
    if (repoUrl) {
      repoLink.href = repoUrl;
    }

    // Set up the project link
    const projectLink = this.shadowRoot.querySelector(".project-link");
    const projectUrl = this.getAttribute("project-url");
    if (projectUrl) {
      projectLink.href = projectUrl;
    } else {
      projectLink.style.display = "none";
    }

    //Set up executive summary link
    const executiveSummaryLink = this.shadowRoot.querySelector(
      ".executive-summary-link"
    );
    const executiveSummaryUrl = this.getAttribute("executive-summary-url");
    if (executiveSummaryUrl) {
      executiveSummaryLink.href = executiveSummaryUrl;
    } else {
      executiveSummaryLink.style.display = "none";
    }
  }
}

class ContactComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 4rem 2rem;
          background-color: var(--background-color);
        }
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h2 {
          color: var(--teal-color);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-link {
          align-items: center;
          background: white;
          border-radius: 8px;
          border: 2px solid transparent;
          color: var(--primary-color);
          display: flex;
          gap: 1rem;
          padding: 1rem;
          position: relative;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .contact-link::before {
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          border-radius: 8px;
          content: '';
          inset: 0;
          padding: 2px;
          position: absolute;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .contact-link:hover {
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          color: var(--light-text);
        }
        .contact-link:hover svg {
          fill: var(--light-text);
        }
        .contact-link svg {
          fill: var(--primary-color);
          height: 24px;
          transition: fill 0.3s ease;
          width: 24px;
        }
      </style>
      <div class="contact-container">
        <div class="section-header">
          <h2>Get in Touch</h2>
        </div>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/treecasiano" class="contact-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn Profile
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
customElements.define("about-component", AboutComponent);
customElements.define("projects-component", ProjectsComponent);
customElements.define("project-card", ProjectCard);
customElements.define("contact-component", ContactComponent);
customElements.define("scroll-arrow", ScrollArrowComponent);
