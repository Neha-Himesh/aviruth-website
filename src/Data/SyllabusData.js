// // syllabusData.js
// export const syllabusData = {
//     fullstack: [
//       { title: "Module 1: HTML & CSS", body: "Learn structure & styling." },
//       { title: "Module 2: JavaScript", body: "DOM, ES6, async programming." },
//       { title: "Module 3: React.js", body: "Hooks, components, state mgmt." }
//     ],
//     testing: [
//       { title: "Module 1: Manual Testing", body: "Test cases, bug reports." },
//       { title: "Module 2: Automation", body: "Selenium, Cypress." }
//     ],
//     python: [
//       { title: "Module 1: Basics", body: "Syntax, loops, functions." },
//       { title: "Module 2: OOP", body: "Classes, objects, inheritance." }
//     ]
//   };
// courseData.js
// export const courseData = {
//   fullstack: {
//     title: "Full Stack Developer: A Complete course to become a frontend and backend developer",
//     subtitle:
//       "Learn the popular topics like HTML, CSS, JavaScript, React.js, Node.js, SQL, MongoDB in just one course",
//     mode: "Online (Live)",
//     languages: "English, Kannada, Hindi",
//     whatYouWillLearn: [
//       "Learn HTML",
//       "Learn CSS",
//       "Learn JavaScript",
//       "Learn React.js",
//       "Learn Node.js",
//       "Learn MongoDB",
//     ],
//   },
//   testing: {
//     title: "Software Testing: Master Manual and Automation Testing",
//     subtitle:
//       "Gain expertise in manual testing, bug reporting, and automation tools like Selenium and Cypress.",
//     mode: "Online (Live)",
//     languages: "English, Hindi",
//     whatYouWillLearn: [
//       "Test Case Writing",
//       "Bug Reporting",
//       "Manual Testing",
//       "Selenium Automation",
//       "Cypress Framework",
//     ],
//   },
//   python: {
//     title: "Python Programming: From Basics to Advanced",
//     subtitle:
//       "Master Python fundamentals, OOP, and advanced topics with real-world projects.",
//     mode: "Hybrid (Online + Offline)",
//     languages: "English",
//     whatYouWillLearn: [
//       "Python Basics",
//       "Functions & Loops",
//       "Object-Oriented Programming",
//       "Modules & Packages",
//       "Error Handling",
//     ],
//   },
// };
// coursesData.js
export const coursesData = {
  fullstack: {
    title:
      "Full Stack Developer: A Complete course to become a frontend and backend developer",
    subtitle:
      "Learn the popular topics like HTML, CSS, JavaScript, React.js, Node.js, SQL, MongoDB in just one course",
    mode: "Online (Live)",
    languages: "English, Kannada, Hindi",
    whatYouWillLearn: [
      "Learn HTML & CSS for creating web pages",
      "Master JavaScript for interactivity",
      "Build dynamic UI with React.js",
      "Develop backend APIs using Node.js & Express.js",
      "Work with SQL & MongoDB databases",
      "Deploy full-stack apps on the cloud",
    ],
    syllabus: [
      { 
        title: "Module 1: HTML & CSS", 
        body: "Learn the fundamentals of web structure and styling. Topics include semantic HTML, forms, Flexbox, Grid, and responsive design." 
      },
      { 
        title: "Module 2: JavaScript", 
        body: "Understand DOM manipulation, ES6 features, events, promises, async/await, and fetch API." 
      },
      { 
        title: "Module 3: React.js", 
        body: "Learn components, props, state management, hooks, forms, routing, and building single-page applications." 
      },
      { 
        title: "Module 4: Backend with Node.js & Express", 
        body: "Understand server-side development, REST APIs, middleware, authentication (JWT, OAuth), and error handling." 
      },
      { 
        title: "Module 5: Databases", 
        body: "Work with SQL (tables, joins, queries) and NoSQL (MongoDB schemas, CRUD operations, aggregations)." 
      },
      { 
        title: "Module 6: Full Stack Integration", 
        body: "Connect frontend with backend APIs, handle authentication, and manage state across the app." 
      },
      { 
        title: "Module 7: Deployment & DevOps Basics", 
        body: "Host applications using services like Heroku, Vercel, or AWS. Learn Git/GitHub workflows, CI/CD basics." 
      },
      { 
        title: "Module 8: Capstone Project", 
        body: "Build and deploy a complete full-stack application combining frontend, backend, and database." 
      },
    ],  
  },

  softwareTesting: {
    title: "Software Testing: Manual & Automation",
    subtitle:
      "Learn the principles of testing, test case design, automation with Selenium, and Agile practices.",
    mode: "Online (Live)",
    languages: "English, Kannada, Hindi",
    whatYouWillLearn: [
      "Understand software testing fundamentals",
      "Design effective test cases and test plans",
      "Perform manual testing using industry standards",
      "Automate tests with Selenium & Python/Java",
      "Work in Agile and CI/CD environments",
    ],
    syllabus: [
      { 
        title: "Module 1: Introduction to Software Testing", 
        body: "Basics of testing, SDLC & STLC, verification vs validation, testing principles." 
      },
      { 
        title: "Module 2: Test Design Techniques", 
        body: "Black-box testing, white-box testing, boundary value analysis, equivalence partitioning." 
      },
      { 
        title: "Module 3: Test Case Development", 
        body: "Writing effective test cases, test data preparation, requirement traceability." 
      },
      { 
        title: "Module 4: Manual Testing Process", 
        body: "Test execution, defect lifecycle, test reporting." 
      },
      { 
        title: "Module 5: Automation Testing Basics", 
        body: "Introduction to automation, advantages, frameworks." 
      },
      { 
        title: "Module 6: Selenium WebDriver", 
        body: "Locators, handling web elements, test execution with Selenium." 
      },
      { 
        title: "Module 7: Test Automation Frameworks", 
        body: "Data-driven, keyword-driven, hybrid frameworks, Page Object Model (POM)." 
      },
      { 
        title: "Module 8: API Testing", 
        body: "Introduction to REST APIs, Postman basics, API automation with tools/libraries." 
      },
      { 
        title: "Module 9: Agile Testing & CI/CD", 
        body: "Agile methodology, Scrum, continuous testing, Jenkins for CI/CD pipelines." 
      },
      { 
        title: "Module 10: Capstone Project", 
        body: "End-to-end manual and automated test implementation for a sample web application." 
      },
    ],
  },
  
  python: {
    title: "Python Programming: From Basics to Advanced",
    subtitle:
      "Master Python fundamentals, OOP, libraries, and advanced concepts with real-world projects.",
    mode: "Online (Live)",
    languages: "English, Kannada, Hindi",
    whatYouWillLearn: [
      "Understand Python syntax, variables, and data types",
      "Work with functions, loops, and conditionals",
      "Apply object-oriented programming (OOP) concepts",
      "Use Python libraries for data handling",
      "Build real-world Python projects",
    ],
    syllabus: [
      { 
        title: "Module 1: Python Basics", 
        body: "Introduction to Python, variables, data types, operators, input/output." 
      },
      { 
        title: "Module 2: Control Structures", 
        body: "Conditional statements, loops, and iterations." 
      },
      { 
        title: "Module 3: Functions", 
        body: "Defining functions, parameters, scope, and recursion." 
      },
      { 
        title: "Module 4: Data Structures", 
        body: "Lists, tuples, sets, dictionaries, and string manipulation." 
      },
      { 
        title: "Module 5: Object-Oriented Programming", 
        body: "Classes, objects, inheritance, polymorphism, encapsulation." 
      },
      { 
        title: "Module 6: Modules & Packages", 
        body: "Creating and importing modules, Python standard library usage." 
      },
      { 
        title: "Module 7: Error Handling & File Handling", 
        body: "Try/except blocks, raising exceptions, working with files." 
      },
      { 
        title: "Module 8: Advanced Python", 
        body: "Iterators, generators, decorators, lambda functions, list comprehensions." 
      },
      { 
        title: "Module 9: Working with Libraries", 
        body: "NumPy, Pandas for data handling, Matplotlib for visualization." 
      },
      { 
        title: "Module 10: Capstone Project", 
        body: "Build a real-world project like a web scraper, data analyzer, or automation tool." 
      },
    ],
  },
  
  itOperations: {
    title: "IT Operations: A Complete course to master system administration, networking, and cloud operations",
    subtitle:
      "Gain expertise in managing IT infrastructure, servers, networks, security, and cloud platforms with hands-on training.",
    mode: "Online (Live)",
    languages: "English",
    whatYouWillLearn: [
      "System Administration",
      "Networking Fundamentals",
      "Server Management",
      "Cloud Platforms (AWS, Azure, GCP)",
      "IT Security & Monitoring",
      "Automation Tools (Ansible, Shell Scripting)"
    ],
    syllabus: [
      { title: "Module 1: System Administration", body: "User & group management, OS basics (Linux/Windows), permissions, process management, and troubleshooting." },
      { title: "Module 2: Networking", body: "Networking fundamentals, IP addressing, DNS, DHCP, routing, firewalls, TCP/IP, and OSI model." },
      { title: "Module 3: Server Management", body: "Linux/Windows servers, Active Directory, web servers, virtualization, and containerization." },
      { title: "Module 4: Cloud Platforms", body: "Deploying and managing apps on AWS, Azure, and GCP, understanding SaaS, PaaS, IaaS." },
      { title: "Module 5: IT Security & Monitoring", body: "System hardening, patch management, monitoring tools (Nagios, Zabbix), log analysis." },
      { title: "Module 6: Automation", body: "Shell scripting, batch scripts, Ansible basics, automating routine IT tasks." },
      { title: "Module 7: Backup & Recovery", body: "Backup strategies, RAID, snapshots, and disaster recovery planning." },
      { title: "Module 8: Capstone Project", body: "Design and manage a complete IT infrastructure with servers, networking, cloud, and automation." }
    ],
  },
  
  cyberSecurity: {
    title: "Cyber Security: A Complete course to safeguard systems and networks",
    subtitle:
      "Learn ethical hacking, threat detection, vulnerability assessment, and defense strategies to protect IT infrastructure.",
    mode: "Online (Live)",
    languages: "English",
    whatYouWillLearn: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Threats & Vulnerabilities",
      "Penetration Testing & Ethical Hacking",
      "Incident Response & Forensics",
      "Security Tools & Best Practices"
    ],
    syllabus: [
      { title: "Module 1: Cybersecurity Fundamentals", body: "CIA triad, security models, risk management, and compliance standards." },
      { title: "Module 2: Network Security", body: "Firewalls, IDS/IPS, VPNs, secure protocols, and wireless security." },
      { title: "Module 3: Threats & Vulnerabilities", body: "Types of attacks (phishing, malware, DoS/DDoS, social engineering), vulnerability scanning." },
      { title: "Module 4: Ethical Hacking", body: "Reconnaissance, exploitation, penetration testing methodologies, Kali Linux tools." },
      { title: "Module 5: Web & Application Security", body: "OWASP Top 10, SQL injection, XSS, CSRF, and securing web apps." },
      { title: "Module 6: Incident Response & Forensics", body: "SOC operations, digital forensics, threat hunting, recovery planning." },
      { title: "Module 7: Security Tools & SIEM", body: "Wireshark, Metasploit, Nmap, Burp Suite, Splunk, and SIEM platforms." },
      { title: "Module 8: Capstone Project", body: "Perform a penetration test and prepare a detailed vulnerability assessment report." }
    ],
  },
  
  infrastructureOperations: {
    title: "Infrastructure Operations: A Complete course to manage IT systems and enterprise infrastructure",
    subtitle:
      "Master IT infrastructure management, virtualization, automation, and monitoring to ensure smooth operations.",
    mode: "Online (Live)",
    languages: "English",
    whatYouWillLearn: [
      "Infrastructure Management",
      "Virtualization & Containers",
      "Monitoring & Logging",
      "Storage & Backup Solutions",
      "Disaster Recovery & Business Continuity",
      "Automation & Scripting"
    ],
    syllabus: [
      { title: "Module 1: Infrastructure Basics", body: "IT infrastructure components – servers, storage, networking, and architecture models." },
      { title: "Module 2: Virtualization & Containers", body: "VMware, Hyper-V, Docker, Kubernetes basics, container orchestration." },
      { title: "Module 3: Monitoring & Logging", body: "Nagios, Prometheus, Grafana, ELK (Elasticsearch, Logstash, Kibana) stack." },
      { title: "Module 4: Storage & Backup", body: "SAN, NAS, RAID levels, enterprise backup tools (Veeam, Commvault)." },
      { title: "Module 5: Disaster Recovery", body: "High availability (HA), replication, failover clusters, recovery strategies." },
      { title: "Module 6: Automation & Scripting", body: "Shell scripting, Python basics, Ansible, Infrastructure as Code (IaC)." },
      { title: "Module 7: Security & Compliance", body: "Identity management, access control, infrastructure hardening, compliance checks." },
      { title: "Module 8: Capstone Project", body: "Design and implement an enterprise-grade infrastructure with monitoring, backups, and automation." }
    ],
  },
  
  cloudComputing: {
    title: "Cloud Computing: A Complete course to master AWS, Azure, and GCP",
    subtitle:
      "Build, deploy, and manage cloud-based applications and services with industry-leading cloud platforms.",
    mode: "Online (Live)",
    languages: "English",
    whatYouWillLearn: [
      "Cloud Fundamentals",
      "AWS Services",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Cloud Security",
      "DevOps & Automation in Cloud"
    ],
    syllabus: [
      { title: "Module 1: Cloud Basics", body: "Cloud models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), cloud architecture." },
      { title: "Module 2: AWS Cloud", body: "AWS core services – EC2, S3, RDS, IAM, VPC, Lambda, CloudFormation." },
      { title: "Module 3: Microsoft Azure", body: "Azure VMs, Blob Storage, Networking, Azure AD, App Services, Resource Manager." },
      { title: "Module 4: Google Cloud Platform (GCP)", body: "Compute Engine, Cloud Storage, BigQuery, GKE (Google Kubernetes Engine)." },
      { title: "Module 5: Cloud Security", body: "IAM policies, encryption, compliance, key management, monitoring tools." },
      { title: "Module 6: DevOps in Cloud", body: "CI/CD pipelines, Infrastructure as Code (Terraform), Kubernetes, Docker in cloud." },
      { title: "Module 7: Cloud Migration & Cost Optimization", body: "Strategies for migration, cloud billing, and cost management best practices." },
      { title: "Module 8: Capstone Project", body: "Deploy a multi-cloud application across AWS, Azure, and GCP with security and monitoring." }
    ],
  },  
};

