class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          padding: 1rem 2rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        nav {
          display: flex;
          justify-content: flex-end;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
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
          background-color: var(--light-text);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        a:hover::after,
        a:focus::after {
          width: 100%;
        }
        a:focus {
          outline: 2px solid var(--light-text);
          outline-offset: 2px;
        }
        a.active {
          background-color: rgba(255, 255, 255, 0.1);
          outline: none;
        }
        a.active::after {
          width: 100%;
          background-color: var(--light-text);
          opacity: 1;
        }
      </style>
      <nav>
        <a href="#about" aria-label="About section">About</a>
        <a href="#projects" aria-label="Projects section">Projects</a>
        <a href="#contact" aria-label="Contact section">Contact</a>
      </nav>
    `;

    // Set up Intersection Observer
    const options = {
      rootMargin: "-100px 0px 0px 0px", // Offset for header
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = this.shadowRoot.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Remove active class from all links
          this.shadowRoot
            .querySelectorAll("a")
            .forEach((a) => a.classList.remove("active"));
          // Add active class to current link
          link.classList.add("active");
        }
      });
    }, options);

    // Observe each section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Handle click events to update active state immediately
    this.shadowRoot.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Remove active class from all links
        this.shadowRoot
          .querySelectorAll("a")
          .forEach((a) => a.classList.remove("active"));
        // Add active class to clicked link
        link.classList.add("active");

        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
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
          background-color: var(--background-color);
        }
        .about-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h1 {
          color: var(--teal-color);
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        p {
          color: var(--text-color);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
      </style>
      <div class="about-container">
        <div class="section-header">
          <h1>Tree Casiano, GIS Developer</h1>
        </div>
        <p>Welcome to my portfolio! I'm a passionate GIS developer with expertise in spatial analysis, web mapping, and geospatial data visualization. With a strong background in both geography and software development, I create innovative solutions that bridge the gap between spatial data and user-friendly applications.</p>
        <p>My work focuses on developing interactive maps, spatial analysis tools, and custom GIS applications that help organizations make data-driven decisions.</p>
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
          background-color: var(--background-color);
        }
        .projects-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .section-header {
          margin-bottom: 3rem;
        }
        .section-header h2 {
          color: var(--teal-color);
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }
      </style>
      <div class="projects-container">
        <div class="section-header">
          <h2>Featured Projects</h2>
        </div>
        <div class="projects-grid">
          <project-card repo-url="https://github.com/treecasiano/pdx-food-map">
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
          display: block;
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        :host(:hover) {
          transform: translateY(-4px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }
        .card-content {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .text-content {
          flex: 1;
        }
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          object-position: center;
          border-radius: 8px;
          flex-shrink: 0;
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
        .repo-link, .project-link {
          color: var(--teal-color);
          text-decoration: none;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.3s ease;
          margin-right: 1rem;
        }
        .repo-link:hover, .project-link:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }
        .repo-link svg, .project-link svg {
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
            <h4>Tools</h4>
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
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--primary-color);
          text-decoration: none;
          padding: 1rem;
          border: 2px solid transparent;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          background: white;
        }
        .contact-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .contact-link:hover {
          background: linear-gradient(90deg, var(--teal-color) 0%, var(--primary-color) 100%);
          color: var(--light-text);
          transform: translateX(10px);
        }
        .contact-link:hover svg {
          fill: var(--light-text);
        }
        .contact-link svg {
          width: 24px;
          height: 24px;
          fill: var(--primary-color);
          transition: fill 0.3s ease;
        }
      </style>
      <div class="contact-container">
        <div class="section-header">
          <h2>Get in Touch</h2>
        </div>
        <div class="contact-links">
          <a href="https://github.com/treecasiano" class="contact-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Portfolio
          </a>
          <a href="mailto:tree@example.com" class="contact-link">
            <svg viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
            tree@example.com
          </a>
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
