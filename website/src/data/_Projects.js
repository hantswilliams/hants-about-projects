import React from "react";

const projects = [
  {
    category: "Project",
    title:"(2025) LLMs for Medical Ethics",
    slug: "#llm-ethics-hec-research",
    subtitle: "Comparing 4 LLM outputs for human judged accuracy to real-world medical ethics scenarios.",
    period: "July 2025",
    tech: "Python, Flask, Transformers",
    description: (
      <>
        <p>
          This project compares the outputs of four different large language models (LLMs) in the context of medical ethics scenarios.
        </p>
      </>
    ),
    links: [
      {
        name: "Live Demo (please wait a few seconds, it may 15-20 seconds for server to turn if stale/not warmed up)",
        link: "https://hec.haw.sh/"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/sbu-ai-ethics-research-dsmb-hec-irb"
      }
    ]
  },
  {
    category: "Project",
    title: "(2024) X12 837 Claims File Generation",
    slug: "#x12-837-claims-file-generation",
    subtitle: "A tool for generating X12 837 claims files.",
    period: "November 2024",
    tech: "Python, Docker, Faker, Regex, Flask-RESTX",
    description: (
      <>
        <p>
          This project is a tool for generating X12 837 claims files, built with Python.
        </p>
      </>
    ),
    links: [
      {
        name: "Live Demo (please wait a few seconds, it may 15-20 seconds for server to turn if stail/not warmed up)",
        link: "https://form837-447631255961.us-central1.run.app/"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/x12-837-fake-data-generator"
      }
    ]
  },
  {
    category: "Project",
    title: "(2024) The Family Album iOS App (published on App Store)",
    slug: "#the-family-album-ios-app",
    subtitle: "An iOS app for creating and sharing family (baby) albums.",
    period: "December 2024",
    tech: "Swift, UIKit, Core Data",
    description: (
      <>
        <p>
          This project is an iOS app for creating and sharing baby albums, built with Swift and UIKit.
        </p>
      </>
    ),
    links: [
      {
        name: "App Store",
        link: "https://apps.apple.com/us/app/the-family-album/id6739470325"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/thebabyalbum"
      }
    ]
  },
  {
    category: "Project",
    title: "(2024) FitBit Simple Web/API Extractor for Research Purposes",
    slug: "#fitbit-simple-web-api-extractor",
    subtitle: "A tool for extracting data from FitBit's web API.",
    period: "February 2024",
    tech: "Python, Flask, FitBit API, Docker",
    description: (
      <>
        <p>
          This project is a simple web/API extractor for FitBit's web API, built with Python and Flask.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/sbu-fitbit"
      }
    ]
  },
  {
    category: "Project",
    title: "(2024) A Healthcare Secure Flask Template",
    slug: "#flask-python-healthcare-secure",
    subtitle: "A secure web application for healthcare data management.",
    period: "March 16 2024",
    tech: "Flask, Python, PostgreSQL",
    description: (
      <>
        <p>
          This is a flask (python) web application for managing healthcare data, built with Flask. Can be deployed on any cloud platform.
          Allows for CRUD, RBAC, multiple authentication methods, session timeout, password hashing, and more.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/flask-api-template-healthcare-"
      },
      {
        name: "Recorded Video",
        link: "https://www.loom.com/share/a92cf2e501fb44e9947da4c2cef1aac1"
      }
    ]
  },
  {
    category: "Project",
    title: "(2024) LLM Basic Visualization",
    slug: "#llm-basic-visualization",
    subtitle:
      "A simple web application for visualizing the output of large language models.",
    period: "February 2024",
    tech: "React, D3.js",
    description: (
      <>
        <p>
          This project is a simple web application for visualizing the output of large language models.
        </p>
      </>
    ),
    links: [
      {
        name: "Live Demo",
        link: "https://llm.hants-williams.com/"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/llm-ai-model-demo",
      },
    ],
  },
  {
    category: "Project",
    title: "(2023) Digital Cloner Tool: IITG - Digital Clones for Education",
    slug: "#digital-cloner-tool-iitg",
    subtitle: "A tool for creating digital clones of educational resources.",
    period: "November 2023",
    tech: "Python, Javascript, Ai/ML, HuggingFace",
    description: (
      <>
        <p>
          This project is a digital cloner tool for creating digital clones of educational resources, built with Python and Javascript
        </p>
        <p>
          It utilizes a number of Ai/ML techniques to enhance the cloning process, including natural language processing and image recognition.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/digitalclone-iitg"
      }
    ]
  },
  {
    category: "Project",
    title: "(2023) DCAT Compliant Open Source Data Discovery Tool",
    slug: "#dcat-compliant-open-source-data-discovery-tool",
    subtitle: "A tool for discovering and accessing open data.",
    period: "November 2023",
    tech: "Python, Flask, MongoDB, DCAT",
    description: (
      <>
        <p>
          This project is a DCAT compliant open source data discovery tool, built with Python and Flask.
        </p>
      </>
    ),
    links: [
      {
        name: "Live Demo",
        link: "https://discover.appliedhealthinformatics.com/"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/social-comprehend/discover"
      }
    ]
  },
  {
    category: "Project",
    title: "(2023) Pypi: Data Visualization Package Wrapper",
    slug: "#pypi-data-visualization-package-wrapper",
    subtitle: "A wrapper for creating data visualizations using popular Python libraries.",
    period: "September 2023",
    tech: "Python, Matplotlib, Seaborn",
    description: (
      <>
        <p>
          This project is a wrapper for creating simple data visualizations that can be exposed via a flask application, using popular Python libraries like Altair, Matplotlib, and Plotly.
        </p>
        <p>
          Demonstrates my ability to create reusable components and integrate them into a web application.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/dashboard-builder"
      },
      {
        name: "Documentation",
        link: "https://dashboardbuilder.appliedhealthinformatics.com/"
      }
    ]
  },
  {
    category: "Project",
    title: "(2023) Open Source Book on Data Science for Health Informaticists (work in progress)",
    slug: "#data-science-opensource-book-healthinformatics",
    subtitle: "An open-source book on data science for health informatics.",
    period: "August 2023",
    tech: "Markdown, Docusaurus, Javascript, HTML",
    description: (
      <>
        <p>
          This project is an open-source book on data science for health informatics, using Markdown, Docusaurus, Javascript, and HTML.
        </p>
      </>
    ),
    links: [
      {
        name: "Live Demo",
        link: "https://book.datascience.appliedhealthinformatics.com/"
      },
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/book-healthinformatics-datascience"
      }
    ]
  },
  {
    category: "Project",
    title: "(2022) EMR Opensource Wrapper for DrChrono",
    slug: "#emr-opensource-wrapper-drchrono",
    subtitle: "A wrapper for the DrChrono EMR API.",
    period: "November 2022",
    tech: "Python, Flask",
    description: (
      <>
        <p>
          This project is a wrapper for the DrChrono EMR API, built with Python and Flask.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/drchrono-wrapper"
      }
    ]
  },
  {
    category: "Project",
    title: "(2022) Open Source Data Sets Repository",
    slug: "#open-source-data-sets-repository",
    subtitle: "A repository of open-source data sets for health informatics research.",
    period: "October 2022",
    tech: "Markdown",
    description: (
      <>
        <p>
          This project is a repository of open-source data sets for health informatics research, using Markdown.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/healthcare-data"
      }
    ]
  },
  {
    category: "Project",
    title: "(2021) Early exploration of openAI LLM Capabilities 2021 using Flask",
    slug: "#early-exploration-openai-llm-capabilities-2021-using-flask",
    subtitle: "A project exploring the capabilities of OpenAI's language models.",
    period: "December 2021",
    tech: "Python, Flask, OpenAI",
    description: (
      <>
        <p>
          This project is an early exploration of OpenAI's language model capabilities, built with Python and Flask.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/openAI-exploration-flask"
      }
    ]
  },
  {
    category: "Project",
    title: "(2018) Early exploration of using OpenCV with Raspberry PI for person detection",
    slug: "#early-exploration-opencv-raspberry-pi-person-detection",
    subtitle: "A project exploring person detection using OpenCV on Raspberry Pi.",
    period: "December 2018",
    tech: "Python, OpenCV, Raspberry Pi",
    description: (
      <>
        <p>
          This project is an early exploration of using OpenCV with Raspberry Pi for person detection.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/hantswilliams/Raseberrypi_Surveillance"
      }
    ]
  }
];

export default projects;
