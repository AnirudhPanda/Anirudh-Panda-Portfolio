function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "style.css";
    document.getElementById("github").style.fill = "#181717";
    document.getElementById("linkedin").style.fill = "#0A66C2";
    document.getElementById("twitter").style.fill = "#1DA1F2";
    document.getElementById("linktree").style.fill = "#39E09B";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById("github").style.fill = "white";
    document.getElementById("linkedin").style.fill = "white";
    document.getElementById("twitter").style.fill = "white";
    document.getElementById("linktree").style.fill = "white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById("github").style.fill = "#181717";
    document.getElementById("linkedin").style.fill = "#0A66C2";
    document.getElementById("twitter").style.fill = "#1DA1F2";
    document.getElementById("linktree").style.fill = "#39E09B";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById("github").style.fill = "#181717";
    document.getElementById("linkedin").style.fill = "#0A66C2";
    document.getElementById("twitter").style.fill = "#1DA1F2";
    document.getElementById("linktree").style.fill = "#39E09B";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
  themeDots[theme].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

class Project {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    codeLink,
    demoLink,
  }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName,
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription,
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo",
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code",
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName,
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code],
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv],
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv],
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach((element) => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Name That Project",
    projectDescription:
      "Name That Project is a simple application that allows you to search for a cool name for your next project/startup.",
    projectImage: "images/projects/namethat.webp",
    codeLink: "https://github.com/AnirudhPanda/Name-That-Project",
    demoLink: "https://name-that-project.netlify.app/",
  },
  {
    projectName: "Gradient Background Generator",
    projectDescription:
      "Gradient Background Generator using HTML,CSS AND JS. Display the initial CSS linear gradient property on page load.",
    projectImage: "images/projects/p2.webp",
    codeLink:
      "https://github.com/AnirudhPanda/ZTM--Web-Development/tree/master/Background-Generator",
    demoLink: "https://codepen.io/anirudhpanda/full/jOqqaBO",
  },
  {
    projectName: "3D Website using Three.js",
    projectDescription:
      "A Personal Project made with Three.js and deployed in gh-pages.",
    projectImage: "images/projects/threejs.webp",
    codeLink: "https://github.com/AnirudhPanda/threejs-web",
    demoLink: "https://anirudhpanda.github.io/threejs-web/",
  },
  {
    projectName: "PyWorks - Automation Scripts",
    projectDescription:
      "Python Automation Projects  InstaBot - Likes, Comments and Follows Using Hashtags",
    projectImage: "images/projects/pyworks.webp",
    codeLink: "https://github.com/AnirudhPanda/PyWorks",
    demoLink: "https://github.com/AnirudhPanda/PyWorks",
  },
  {
    projectName: "FreeCodeCamp Web Projects",
    projectDescription:
      "HTML, CSS, Visual Design, Accessibility and Responsiveness",
    projectImage: "images/projects/responsive.webp",
    codeLink: "https://github.com/AnirudhPanda/Responsive-Web-Design-Projects",
    demoLink: "https://codepen.io/anirudhpanda/full/BaKxyox",
  },
  {
    projectName: "Terminal Folio",
    projectDescription: "Terminal based Portfolio made using WinBox.js",
    projectImage: "images/projects/terminal.webp",
    codeLink: "https://github.com/AnirudhPanda/terminal-folio",
    demoLink: "https://terminalfolio.netlify.app/",
  },
  {
    projectName: "Theme Changer Portfolio",
    projectDescription:
      "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show my works.",
    projectImage: "images/projects/portfolio.webp",
    codeLink: "https://anirudhpanda.me/",
    demoLink: "https://github.com/AnirudhPanda/Anirudh-Panda-Portfolio ",
  },
  {
    projectName: "Dev Camp",
    projectDescription:
      "Built using Bootstrap 5, HTML, CSS and JavaScript. It is a completely responsive bootcamp website",
    projectImage: "images/projects/devcamp.webp",
    codeLink: "https://github.com/AnirudhPanda/Dev-Camp",
    demoLink: "https://dev-camp.netlify.app/",
  },
  {
    projectName: "Hashnode Blogs Search",
    projectDescription:
      "This extension lets you search for any of Anirudh's blog articles from Hashnode from within VSCode.",
    projectImage: "images/projects/extension.webp",
    codeLink: "https://github.com/AnirudhPanda/Hashnode-Blog-Search",
    demoLink:
      "https://marketplace.visualstudio.com/items?itemName=AnirudhPanda.hashnode-blogs-search&ssr=false#overview",
  },
  {
    projectName: "Robofriends",
    projectDescription:
      "Designed & Built the webiste using React JS for my friends.",
    projectImage: "images/projects/robo.webp",
    codeLink: "https://github.com/AnirudhPanda/Robofriends",
    demoLink: "https://anirudhpanda.github.io/Robofriends/",
  },
  {
    projectName: "Auto Connect LinkedIn",
    projectDescription:
      "A Script that allows you to automate the connection and withdrawl requests on LinkedIn.",
    projectImage: "images/projects/autoconnect.webp",
    codeLink: "https://github.com/AnirudhPanda/Auto-Connect-LinkedIn",
    demoLink: "https://github.com/AnirudhPanda/Auto-Connect-LinkedIn",
  },
];

const createCards = () => {
  projects.map((project) => {
    const projectCard = new Project({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage,
      codeLink: project.codeLink,
      demoLink: project.demoLink,
    }).createProjectCard();
    document.getElementById("post-wrapper-id").appendChild(projectCard);
  });
};
createCards();

