const roadmapMaterials = {
    frontend: {
      beginner: [
        ['HTML and CSS basics - Codecademy HTML & CSS Course', 'https://www.codecademy.com/catalog/language/html-css'],
        ['Introduction to JavaScript - freeCodeCamp JavaScript Basics', 'https://www.freecodecamp.org/news/learn-javascript-for-beginners/'],
        ['Responsive Web Design - Coursera "Responsive Web Design" by University of London', 'https://www.coursera.org/learn/responsive-web-design']
      ],
      intermediate: [
        ['Advanced JavaScript (ES6+) - Udacity "ES6 - JavaScript Improved', 'https://www.udacity.com/course/es6-javascript-improved--ud356'],
        ['CSS Preprocessors - "Sass Tutorial for Beginners" course', 'https://www.codecademy.com/learn/learn-sass'],
        ['Version Control (Git) - Atlassian Git Tutorial', 'https://www.youtube.com/watch?v=PWqS4NBhEY8']
      ],
      advanced: [
        ['Frontend Frameworks - React.js', 'https://scrimba.com/learn/learnreact'],
        ['State Management (Redux) - Egghead.io "Getting Started with Redux" series', 'https://egghead.io/lessons/react-bootstrap-a-react-application-with-yarn-create-react-app'],
        ["Performance Optimization - Google's Web Fundamentals guide on Web Performance", 'https://web.dev/articles/web-performance-made-easy']
      ]
    },
    backend: {
      beginner: [
        ['Introduction to Server-side Programming - Coursera "Server-side Development with NodeJS" by The Hong Kong University of Science and Technology', ''],
        ['Basic Database Concepts - MongoDB University "M001: MongoDB Basics" course'],
        ['API Fundamentals - Udacity "Designing Scalable APIs" course']
      ],
      intermediate: [
        ['Server-side Frameworks (Express.js) - Udemy "Node.js - The Complete Guide" by Maximilian Schwarzmüller'],
        ['Database Management Systems - Coursera "Database Management Essentials" by University of Colorado System'],
        ['RESTful API Design - Pluralsight "REST Fundamentals" by Dan Wahlin']
      ],
      advanced: [
        ['Microservices Architecture - Udemy "Microservices with Node JS and React" by Stephen Grider'],
        ['Authentication and Authorization - Auth0 Blog on "JWT Authentication Best Practices'],
        ['Advanced Database Concepts - MongoDB University "M320: Data Modeling" course']
      ]
    },
    fullstack: {
      beginner: [
        ['Complete Frontend and Backend Basics - Coursera "Full Stack Web and Multiplatform Mobile App Development" by The Hong Kong University of Science and Technology'],
        ['Building a Simple Full Stack Application - Udemy "Full Stack Web Development for Beginners" by Mark Price'],
        ['Introduction to Deployment - Heroku Dev Center "Getting Started on Heroku" guide']
      ],
      intermediate: [
        ['Advanced Full Stack Frameworks - The Net Ninja "Complete Guide to Django" on YouTube'],
        ["Working with APIs - Udacity API Design and Fundamentals of Google Cloud's Apigee API Platform"],
        ['Containerization (Docker) - Docker Documentation "Get Started" guide']
      ],
      advanced: [
        ['Building Scalable and Resilient Systems - Pluralsight "Building Scalable APIs with GraphQL" by Glenn Block'],
        ['Continuous Integration/Continuous Deployment (CI/CD) - Jenkins Documentation "Getting Started with Jenkins"'],
        ["Optimizing Full Stack Applications - Google's Web Fundamentals guide on Web Performance Optimization"]
      ]
    },
    devops: {
      beginner: [
        ['Introduction to DevOps - edX "Introduction to DevOps: Transforming and Improving Operations" by Microsoft'],
        ['Version Control Systems - Atlassian Git Tutorial'],
        ['Basic Server Administration - Linux Foundation "Introduction to Linux" course']
      ],
      intermediate: [
        ['Container Orchestration (Kubernetes) - Udacity "Scalable Microservices with Kubernetes" by Google Cloud'],
        ['Infrastructure as Code (Terraform) - HashiCorp "Learn Terraform" guides'],
        ['Continuous Integration/Continuous Deployment (CI/CD) - Jenkins Documentation "Continuous Integration with Jenkins"']
      ],
      advanced: [
        ['Monitoring and Logging - Coursera "Cloud Infrastructure Technologies" by Google Cloud'],
        ['Security in DevOps - Udemy "DevOps Security Fundamentals" by Cyber Training 365'],
        ['Advanced DevOps Tools and Practices - Pluralsight "Advanced Jenkins" by Wes Higbee']
      ]
    },
    android: {
      beginner: [
        ['Introduction to Android Development - Udacity "Android Basics: User Interface" by Google'],
        ['Building Simple Android Apps - Coursera "Android App Development" by Vanderbilt University'],
        ['User Interface (UI) Basics - Udacity "Material Design for Android Developers"']
      ],
      intermediate: [
        ['Android Architecture Components - Udacity "Developing Android Apps with Kotlin"'],
        ['Data Persistence in Android - Udacity "Android Basics: Data Storage" by Google'],
        ['Working with APIs in Android - Coursera "RESTful API Development with Spring Boot" by Universitat Politècnica de Valencia']
      ],
      advanced: [
        ["Advanced UI/UX in Android - Google's Android Developer guide on Material Design Components"],
        ["Security in Android Apps - Coursera Advanced Android App Development by Imperial College London"],
        ['Performance Optimization in Android - Udacity "Advanced Android App Development" by Google']
      ]
    },
    aspnetcore: {
      beginner: [
        ['Introduction to ASP.NET Core - Pluralsight "Getting Started with ASP.NET Core" by Shawn Wildermuth'],
        ['Building Basic Web Applications - Udemy "ASP.NET Core - Beginner" by Bhrugen Patel'],
        ['Understanding MVC Architecture - Microsoft Learn "Introduction to ASP.NET Core MVC" module']
      ],
      intermediate: [
        ['ASP.NET Core API Development - Pluralsight "Building a RESTful API with ASP.NET Core" by Kevin Dockx'],
        ['Database Integration with Entity Framework Core - Microsoft Docs "Entity Framework Core" guide'],
        ['Authentication and Authorization in ASP.NET Core - Udemy "IdentityServer4: Token-Based Authentication for Modern Applications" by Kevin Dockx']
      ],
      advanced: [
        ['Microservices with ASP.NET Core - Pluralsight "Architecting an ASP.NET Core MVC Application for Unit Testability" by Steve Smith'],
        ['Advanced Security in ASP.NET Core - Microsoft Docs "Securing ASP.NET Core" guide'],
        ['Optimizing ASP.NET Core Applications - Pluralsight "Optimizing Your ASP.NET Core Application" by Kevin Dockx']
      ]
    },
    cybersecurity: {
      beginner: [
        ['Introduction to Cybersecurity - Coursera "Introduction to Cyber Security Specialization" by NYU (via Kadenze)'],
        ['Basic Network Security Concepts - Udemy "Networking for Beginners" by Eduonix Learning Solutions'],
        ['Web Security Fundamentals - Coursera "Web Security Fundamentals" by University of London']
      ],
      intermediate: [
        ['Security Protocols and Encryption - Stanford University "Computer and Network Security" on Coursera'],
        ['Vulnerability Assessment and Penetration Testing (VAPT) - eLearnSecurity "eLearnSecurity Certified Professional Penetration Tester (eCPPT) Certification"'],
        ['Incident Response and Forensics - Pluralsight "Incident Response and Computer Forensics" by Dale Meredith']
      ],
      advanced: [
        ['Security in Cloud Environments - AWS Training and Certification "Security Best Practices on AWS" course'],
        ['Advanced Threat Detection - Coursera "Advanced Threat Landscape" by University of Colorado System'],
        ['Security Compliance and Governance - SANS Institute "Security Leadership Essentials for Managers" course']
      ]
    },
    gamedeveloper: {
      beginner: [
        ['Introduction to Game Development - Unity Learn "Create with Code: Intro to Programming" course'],
        ['Basic Game Design Principles - Coursera "Introduction to Game Design" by California Institute of the Arts'],
        ['Understanding Game Engines - Udemy "Unity Game Development: Create 2D and 3D Games with C#" by Jonathan Weinberger']
      ],
      intermediate: [
        ['Programming in Game Development - Udemy "Complete C# Unity Game Developer 3D" by Ben Tristem'],
        ['Graphics and Animation in Games - Pluralsight "Unity Animation Fundamentals" by Scott Catlin'],
        ['Physics and Collision Detection in Games - Udacity "2D Game Development with libGDX" by Google']
      ],
      advanced: [
        ['Multiplayer Game Development - Coursera "Multiplatform Game Development with Unity" by Michigan State University'],
        ['AI in Games - Pluralsight "Introduction to Game AI" by Penny de Byl'],
        ['Optimizing Game Performance - Unity Learn "Optimizing Graphics Performance" module']
      ]
    },
    uxdesign: {
      beginner: [
        ['Introduction to UX Design - Coursera "Introduction to User Experience Design" by Georgia Institute of Technology'],
        ['User Research and Personas - Interaction Design Foundation "User Research - Methods and Best Practices" course'],
        ['Wireframing and Prototyping - Udacity "UX Design for Mobile Developers" by Google']
      ],
      intermediate: [
        ['Usability Testing - Coursera "Usable Security" by University of Maryland, College Park'],
        ['Information Architecture - Nielsen Norman Group "Information Architecture: Structure Your Site for Success" course'],
        ['Interaction Design - Coursera "Interaction Design Specialization" by University of California, Irvine']
      ],
      advanced: [
        ['User-Centered Design (UCD) - Interaction Design Foundation "User-Centered Design - An Introduction" course'],
        ['Design Systems and Pattern Libraries - InVision "Design System Fundamentals" guide'],
        ['Accessibility in UX Design - Coursera "Web Accessibility" by University of London']
      ]
    },
    reactnative: {
      beginner: [
        ['Introduction to React Native - Udemy "React Native - The Practical Guide" by Maximilian Schwarzmüller'],
        ['Building Simple Mobile Apps - Expo Documentation "Getting Started" guide'],
        ['React and React Native Fundamentals - freeCodeCamp "React and React Native Full Course" on YouTube']
      ],
      intermediate: [
        ['Navigation and Routing in React Native - React Navigation Documentation "Getting Started" guide'],
        ['State Management in React Native - Redux Documentation "Core Concepts" guide'],
        ['Using Native Modules - React Native Documentation "Native Modules" guide']
      ],
      advanced: [
        ['Performance Optimization in React Native - React Native Documentation "Performance" guide'],
        ['Testing and Debugging in React Native - Udacity "React Native: Advanced Concepts" by Stephen Grider'],
        ['Advanced React Native Patterns - The Net Ninja "React Native Tutorial for Beginners" on YouTube']
      ]
    }
  };

export default roadmapMaterials
  