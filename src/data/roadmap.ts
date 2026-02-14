export interface Resource {
  name: string;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  completed?: boolean;
  starred?: boolean;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  type: "core" | "optional";
  topics: Topic[];
  description?: string;
}

export const roadmapData: Week[] = [
  // Level 1: Beginner (Weeks 1-10)
  {
    id: "week1",
    weekNumber: 1,
    title: "Introduction to Version Control with Git",
    level: "beginner",
    type: "core",
    description:
      "Learn the basics of version control, Git commands, and GitHub workflows.",
    topics: [
      {
        id: "w1-t1",
        title: "Git Basics",
        description:
          "Understanding version control, commits, branches, and repositories",
        resources: [
          {
            name: "Git and GitHub for Beginners",
            url: "https://youtu.be/8JJ101D3knE",
          },
          {
            name: "Git Tutorial (Official Docs)",
            url: "https://git-scm.com/docs/gittutorial",
          },
        ],
      },
      {
        id: "w1-t2",
        title: "GitHub Workflow",
        description: "Pull requests, code reviews, and collaboration",
        resources: [
          { name: "GitHub Docs", url: "https://docs.github.com" },
          { name: "Learn GitHub", url: "https://skills.github.com" },
        ],
      },
    ],
  },
  {
    id: "week2",
    weekNumber: 2,
    title: "Basic HTML, CSS, and JavaScript",
    level: "beginner",
    type: "core",
    description: "Frontend fundamentals for full-stack development.",
    topics: [
      {
        id: "w2-t1",
        title: "HTML5 Fundamentals",
        description: "Semantic HTML, forms, and document structure",
        resources: [
          {
            name: "HTML5",
            url: "https://youtu.be/P0EGYTb1cBs",
          },
          {
            name: "HTML (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
        ],
      },
      {
        id: "w2-t2",
        title: "CSS3 Styling",
        description: "Selectors, flexbox, grid, and responsive design",
        resources: [
          {
            name: "CSS3 (SuperSimpleDev)",
            url: "https://youtu.be/n4R2E7O-Ngo",
          },
          {
            name: "CSS (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
        ],
      },
      {
        id: "w2-t3",
        title: "JavaScript Basics",
        description: "Variables, functions, DOM manipulation, and events",
        resources: [
          {
            name: "JavaScript Basics",
            url: "https://youtu.be/W6NZfCO5SIk",
          },
          {
            name: "JavaScript (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
        ],
      },
    ],
  },
  {
    id: "week3",
    weekNumber: 3,
    title: "Basics of Web Development",
    level: "beginner",
    type: "core",
    description: "Understanding HTTP, REST APIs, and the OSI model.",
    topics: [
      {
        id: "w3-t1",
        title: "HTTP Internals",
        description:
          "HTTP methods, status codes, headers, and request/response cycle",
        resources: [
          {
            name: "HTTP Explained",
            url: "https://youtu.be/hWyBeEF3CqQ",
          },
          {
            name: "HTTP (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
          },
        ],
      },
      {
        id: "w3-t2",
        title: "REST API Design",
        description: "REST principles, resource naming, and API best practices",
        resources: [
          {
            name: "What is REST API?",
            url: "https://youtu.be/XvFmUE-36Kc",
          },
          { name: "REST API Tutorial", url: "https://restfulapi.net" },
        ],
      },
      {
        id: "w3-t3",
        title: "OSI Model",
        description: "Understanding network layers and protocols",
        resources: [
          {
            name: "OSI Model Explained",
            url: "https://youtu.be/3b_TAYtzuho",
          },
          {
            name: "Computer Networking",
            url: "https://youtu.be/qiQR5rTSshw",
          },
        ],
      },
    ],
  },
  {
    id: "week4",
    weekNumber: 4,
    title: "Introduction to Programming with Java",
    level: "beginner",
    type: "core",
    description: "Java syntax, variables, data types, and control structures.",
    topics: [
      {
        id: "w4-t1",
        title: "Java Syntax Basics",
        description: "Variables, data types, operators, and basic syntax",
        resources: [
          {
            name: "Java Introduction (Telusko)",
            url: "https://youtu.be/A0pu92-pYhE",
          },
          {
            name: "Java Tutorial",
            url: "https://www.tutorialspoint.com/java",
          },
        ],
      },
      {
        id: "w4-t2",
        title: "Control Flow",
        description: "Conditionals, loops, and switch statements",
        resources: [
          {
            name: "Java Control Flow",
            url: "https://youtu.be/A0pu92-pYhE",
          },
          {
            name: "Java (Baeldung)",
            url: "https://www.baeldung.com/java-tutorial",
          },
        ],
      },
    ],
  },
  {
    id: "week5",
    weekNumber: 5,
    title: "Object-Oriented Programming in Java",
    level: "beginner",
    type: "core",
    description:
      "Classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
    topics: [
      {
        id: "w5-t1",
        title: "Classes and Objects",
        description: "Creating classes, constructors, and object instantiation",
        resources: [
          { name: "OOP in Java", url: "https://youtu.be/Af3s3KsxStY" },
          {
            name: "Java OOP (FreeCodeCamp)",
            url: "https://youtu.be/6T_HgnjoYwM",
          },
        ],
      },
      {
        id: "w5-t2",
        title: "Inheritance & Polymorphism",
        description:
          "Extending classes, method overriding, and dynamic dispatch",
        resources: [
          {
            name: "Inheritance ",
            url: "https://youtu.be/zbVAU7lK25Q",
          },
          {
            name: "Polymorphism",
            url: "https://youtu.be/jhDUxynEQRI",
          },
        ],
      },
      {
        id: "w5-t3",
        title: "Encapsulation & Abstraction",
        description: "Access modifiers, getters/setters, and abstract classes",
        resources: [
          {
            name: "Encapsulation (Telusko)",
            url: "https://youtu.be/YbqneqDIZh8",
          },
          {
            name: "OOP Concepts (GeeksforGeeks)",
            url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
          },
        ],
      },
    ],
  },
  {
    id: "week6",
    weekNumber: 6,
    title: "Java Essentials for Spring Boot",
    level: "beginner",
    type: "core",
    description: "Maven, file I/O, collections, and generics.",
    topics: [
      {
        id: "w6-t1",
        title: "Maven Build Tool",
        description: "Project structure, dependencies, and build lifecycle",
        resources: [
          {
            name: "Maven Theory",
            url: "https://youtu.be/dqJanLvjDqc",
          },
          {
            name: "Maven Tutorial (Baeldung)",
            url: "https://www.baeldung.com/maven",
          },
        ],
      },
      {
        id: "w6-t2",
        title: "Java Collections Framework",
        description: "Lists, Sets, Maps, and their implementations",
        resources: [
          {
            name: "Java Collections",
            url: "https://youtu.be/Kn1RbK02YpM",
          },
          {
            name: "Practice here (GeeksforGeeks)",
            url: "https://www.geeksforgeeks.org/collections-in-java-2/",
          },
        ],
      },
      {
        id: "w6-t3",
        title: "File I/O Operations",
        description: "Reading and writing files in Java",
        resources: [
          {
            name: "Java File Handling",
            url: "https://youtu.be/b35mlSPOlJg",
          },
          {
            name: "Java I/O (W3Schools)",
            url: "https://www.w3schools.com/java/java_files.asp",
          },
        ],
      },
    ],
  },
  {
    id: "week7",
    weekNumber: 7,
    title: "Introduction to Spring Boot",
    level: "beginner",
    type: "core",
    description:
      "Spring Boot overview, setup, and building your first REST API.",
    topics: [
      {
        id: "w7-t1",
        title: "Spring Boot Overview",
        description:
          "What is Spring Boot, auto-configuration, and starter dependencies",
        resources: [
          {
            name: "Spring Boot Docs",
            url: "https://docs.spring.io/spring-boot/",
          },
          {
            name: "What is Spring Boot? (Telusko)",
            url: "https://youtu.be/L0v_3MzC1io",
          },
        ],
      },
      {
        id: "w7-t2",
        title: "Building REST APIs",
        description:
          "@RestController, @GetMapping, @PostMapping, and request handling",
        resources: [
          {
            name: "Spring Boot Tutorial",
            url: "https://youtu.be/Nv2DERaMx-4",
          },
          {
            name: "Building RESTful Web Service",
            url: "https://youtu.be/u-gV3xtLqYg",
          },
        ],
      },
      {
        id: "w7-t3",
        title: "Spring MVC Architecture",
        description: "Model-View-Controller pattern in Spring",
        resources: [
          {
            name: "Spring MVC (Devtiro)",
            url: "https://youtube.com/playlist?list=PL82C6-O4XrHejlASdecIsroNEbZFYo_X1&si=39LsT1Fye7XkSTVp",
          },
          {
            name: "Spring Boot Crash Course",
            url: "https://youtu.be/35EQXmHKZYs",
          },
        ],
      },
    ],
  },
  {
    id: "week8",
    weekNumber: 8,
    title: "Database Basics with MySQL and PostgreSQL",
    level: "beginner",
    type: "core",
    description: "SQL fundamentals, database design, and basic queries.",
    topics: [
      {
        id: "w8-t1",
        title: "SQL Fundamentals",
        description: "SELECT, INSERT, UPDATE, DELETE, and basic queries",
        resources: [
          {
            name: "SQL in 10 Minutes",
            url: "https://youtu.be/3s0lFtUrhSQ",
          },
          { name: "SQL (W3Schools)", url: "https://www.w3schools.com/sql/" },
        ],
      },
      {
        id: "w8-t2",
        title: "PostgreSQL Setup",
        description: "Installation, configuration, and basic operations",
        resources: [
          {
            name: "PostgreSQL Tutorial",
            url: "https://youtu.be/F7Vwp2Xo5Do",
          },
          { name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
        ],
      },
      {
        id: "w8-t3",
        title: "Database Design",
        description: "Tables, relationships, and normalization basics",
        resources: [
          {
            name: "Database Design",
            url: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
          },
          {
            name: "Database design basics(MicroSoft)",
            url: "https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5",
          },
        ],
      },
    ],
  },
  {
    id: "week9",
    weekNumber: 9,
    title: "Introduction to ORMs and Spring Data JPA",
    level: "beginner",
    type: "core",
    description: "JPA, Hibernate, repositories, and entity relationships.",
    topics: [
      {
        id: "w9-t1",
        title: "JPA Fundamentals",
        description: "Entity mapping, EntityManager, and persistence context",
        resources: [
          {
            name: "Spring Data JPA Docs",
            url: "https://docs.spring.io/spring-data/jpa/reference/",
          },
          { name: "JPA and Hibernate", url: "https://youtu.be/mcl_nibV39s" },
        ],
      },
      {
        id: "w9-t2",
        title: "Spring Data Repositories",
        description: "CrudRepository, JpaRepository, and custom queries",
        resources: [
          {
            name: "Spring Data JPA (Baeldung)",
            url: "https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa",
          },
        ],
      },
      {
        id: "w9-t3",
        title: "Entity Relationships",
        description: "@OneToOne, @OneToMany, @ManyToMany mappings",
        resources: [
          {
            name: "JPA Relationships",
            url: "https://www.baeldung.com/jpa-hibernate-associations",
          },
          {
            name: "Entity Mapping (Oracle)",
            url: "https://docs.oracle.com/cd/B10002_01/generic.903/a97677/ormap.htm",
          },
        ],
      },
    ],
  },
  {
    id: "week10",
    weekNumber: 10,
    title: "Building a Student Management System",
    level: "beginner",
    type: "core",
    description:
      "First project: Apply everything learned to build a complete CRUD application.",
    topics: [
      {
        id: "w10-t1",
        title: "Project Planning",
        description: "Requirements, architecture, and database schema design",
        resources: [
          { name: "Project Setup Guide", url: "https://start.spring.io" },
          {
            name: "Spring Boot Project Structure",
            url: "https://docs.spring.io/spring-boot/reference/using/structuring-your-code.html",
          },
        ],
      },
      {
        id: "w10-t2",
        title: "Implementation",
        description: "Building controllers, services, and repositories",
        resources: [
          {
            name: "Layered Architecture",
            url: "https://kamilmazurek.pl/layered-architecture-template",
          },
          { name: "Best Practices", url: "https://spring.io/guides" },
        ],
      },
      {
        id: "w10-t3",
        title: "Testing the API",
        description: "Using Postman to test endpoints",
        resources: [
          {
            name: "What is postman?",
            url: "https://youtu.be/A36VQFdIAkI",
          },
          { name: "API Testing", url: "https://learning.postman.com" },
        ],
      },
    ],
  },
  // Level 2: Intermediate (Weeks 11-25)
  {
    id: "week11",
    weekNumber: 11,
    title: "Spring Core: AOP, IoC, and DI",
    level: "intermediate",
    type: "core",
    description: "Deep dive into Spring Framework core concepts.",
    topics: [
      {
        id: "w11-t1",
        title: "Inversion of Control (IoC)",
        description: "IoC container and bean management",
        resources: [
          {
            name: "Spring IoC Docs",
            url: "https://docs.spring.io/spring-framework/reference/core/beans.html",
          },
          {
            name: "IoC (Telusko)",
            url: "https://youtu.be/5cRaQqQb14Q",
          },
        ],
      },
      {
        id: "w11-t2",
        title: "Dependency Injection",
        description: "Constructor, setter, and field injection",
        resources: [
          {
            name: "DI in Spring (Telusko)",
            url: "https://youtu.be/9EoAXpjnsxM",
          },
          { name: "Autowire (Telusko)", url: "https://youtu.be/ET39IFffr24" },
        ],
      },
      {
        id: "w11-t3",
        title: "Aspect-Oriented Programming (AOP)",
        description: "Cross-cutting concerns, aspects, and advice",
        resources: [
          {
            name: "Spring AOP (Baeldung)",
            url: "https://www.baeldung.com/spring-aop",
          },
          {
            name: "AOP Tutorial",
            url: "https://youtu.be/Ft29HgsePfQ",
          },
        ],
      },
    ],
  },
  {
    id: "week12",
    weekNumber: 12,
    title: "Validation and Error Handling",
    level: "intermediate",
    type: "core",
    description:
      "Input validation, custom exceptions, and global error handling.",
    topics: [
      {
        id: "w12-t1",
        title: "Bean Validation",
        description: "@Valid, @NotNull, @Size, and custom validators",
        resources: [
          {
            name: "Spring Validation Docs",
            url: "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html",
          },
          {
            name: "Validation (Baeldung)",
            url: "https://www.baeldung.com/spring-boot-bean-validation",
          },
        ],
      },
      {
        id: "w12-t2",
        title: "Exception Handling",
        description: "@ControllerAdvice and @ExceptionHandler",
        resources: [
          {
            name: "Exception Handling Docs",
            url: "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-exceptionhandler.html",
          },
          {
            name: "Global Exception Handling",
            url: "https://dev.to/tienbku/global-exception-handler-in-spring-boot-3mbp",
          },
        ],
      },
      {
        id: "w12-t3",
        title: "Custom Exceptions",
        description: "Creating and using custom exception classes",
        resources: [
          {
            name: "Custom Exceptions (CodeSnippet)",
            url: "https://youtu.be/IdHHwZg3v58",
          },
          {
            name: "Java Exceptions",
            url: "https://www.baeldung.com/java-exceptions",
          },
        ],
      },
    ],
  },
  {
    id: "week13",
    weekNumber: 13,
    title: "Testing in Spring Boot",
    level: "intermediate",
    type: "core",
    description: "Unit testing with JUnit, Mockito, and integration testing.",
    topics: [
      {
        id: "w13-t1",
        title: "JUnit 5 Basics",
        description: "Test annotations, assertions, and lifecycle",
        resources: [
          { name: "JUnit 5 Tutorial", url: "https://www.baeldung.com/junit-5" },
          {
            name: "Write unit tests using Junit",
            url: "https://youtu.be/vZm0lHciFsQ",
          },
        ],
      },
      {
        id: "w13-t2",
        title: "Mocking with Mockito",
        description: "@Mock, @InjectMocks, and when/then patterns",
        resources: [
          {
            name: "Mockito Tutorial",
            url: "https://www.baeldung.com/mockito-series",
          },
          {
            name: "Mockito + JUnit",
            url: "https://youtu.be/XVFqOFKGeGM",
          },
        ],
      },
      {
        id: "w13-t3",
        title: "Integration Testing",
        description: "@SpringBootTest, TestRestTemplate, and Testcontainers",
        resources: [
          {
            name: "Integration Testing (Baeldung)",
            url: "https://www.baeldung.com/spring-boot-testing",
          },
        ],
      },
    ],
  },
  {
    id: "week14",
    weekNumber: 14,
    title: "Filters, Interceptors, and Lombok",
    level: "intermediate",
    type: "optional",
    description: "Advanced request processing and code simplification.",
    topics: [
      {
        id: "w14-t1",
        title: "Servlet Filters",
        description: "Request/response filtering and authentication filters",
        resources: [
          {
            name: "Spring Filters (Baeldung)",
            url: "https://www.baeldung.com/spring-boot-add-filter",
          },
          {
            name: "Filter Tutorial",
            url: "https://youtu.be/1KuyklLoU9U",
          },
        ],
      },
      {
        id: "w14-t2",
        title: "Handler Interceptors",
        description: "Pre-processing and post-processing requests",
        resources: [
          {
            name: "Interceptors (Baeldung)",
            url: "https://www.baeldung.com/spring-mvc-handlerinterceptor",
          },
          {
            name: "Spring Interceptors",
            url: "https://www.youtube.com/watch?v=4l8QpJA9q9Y",
          },
        ],
      },
      {
        id: "w14-t3",
        title: "Project Lombok",
        description: "Reducing boilerplate with annotations",
        resources: [
          {
            name: "Lombok Tutorial",
            url: "https://www.baeldung.com/intro-to-project-lombok",
          },
          {
            name: "Lombok Video Tutorial",
            url: "https://youtu.be/oHjGO01Ipnw",
          },
        ],
      },
    ],
  },
  {
    id: "week15",
    weekNumber: 15,
    title: "Pagination, Sorting, and File Uploads",
    level: "intermediate",
    type: "core",
    description: "Handling large datasets and file operations.",
    topics: [
      {
        id: "w15-t1",
        title: "Pagination and Sorting",
        description: "Pageable, Page, and Sort interfaces",
        resources: [
          {
            name: "Pagination (Baeldung)",
            url: "https://www.baeldung.com/spring-data-jpa-pagination-sorting",
          },
          {
            name: "Spring Data Pagination",
            url: "https://docs.spring.io/spring-data/commons/reference/repositories/core-concepts.html",
          },
        ],
      },
      {
        id: "w15-t2",
        title: "File Uploads",
        description: "MultipartFile and file storage",
        resources: [
          {
            name: "File Upload (Baeldung)",
            url: "https://www.baeldung.com/spring-file-upload",
          },
          {
            name: "File Upload Tutorial",
            url: "https://youtube.com/playlist?list=PLR2yPNIFMlL9uyIUoF1CFVMlfclJKPct9&si=E3qHaHkVjJRXb3q8",
          },
        ],
      },
    ],
  },
  {
    id: "week16",
    weekNumber: 16,
    title: "Spring Security Fundamentals",
    level: "intermediate",
    type: "core",
    description:
      "Authentication, authorization, and securing your applications.",
    topics: [
      {
        id: "w16-t1",
        title: "Spring Security Basics",
        description: "Security filter chain and configuration",
        resources: [
          {
            name: "Spring Security Docs",
            url: "https://docs.spring.io/spring-security/reference/index.html",
          },
          {
            name: "Security (Amigoscode)",
            url: "https://www.youtube.com/watch?v=her_7pa0vrg",
          },
        ],
      },
      {
        id: "w16-t2",
        title: "Form-based Authentication",
        description: "Login, logout, and session management",
        resources: [
          {
            name: "Form Login (Baeldung)",
            url: "https://www.baeldung.com/spring-security-login",
          },
          {
            name: "Security Tutorial",
            url: "https://youtu.be/oeni_9g7too",
          },
        ],
      },
      {
        id: "w16-t3",
        title: "Role-based Access Control",
        description: "Roles, authorities, and method security",
        resources: [
          {
            name: "RBAC (Baeldung)",
            url: "https://www.baeldung.com/role-and-privilege-for-spring-security-registration",
          },
          {
            name: "RBAC Video Tutorial",
            url: "https://youtu.be/mq5oUXcAXL4",
          },
        ],
      },
    ],
  },
  {
    id: "week17",
    weekNumber: 17,
    title: "JWT Authentication",
    level: "intermediate",
    type: "core",
    description: "Stateless authentication with JSON Web Tokens.",
    topics: [
      {
        id: "w17-t1",
        title: "JWT Fundamentals",
        description: "Token structure, signing, and verification",
        resources: [
          { name: "JWT.io", url: "https://jwt.io" },
          {
            name: "JWT Tutorial",
            url: "https://youtu.be/CELcrLHQmZs",
          },
        ],
      },
      {
        id: "w17-t2",
        title: "Spring Security + JWT",
        description: "Implementing JWT authentication filter",
        resources: [
          {
            name: "JWT with Spring (Baeldung)",
            url: "https://www.baeldung.com/spring-security-oauth-jwt",
          },
        ],
      },
      {
        id: "w17-t3",
        title: "Refresh Tokens",
        description: "Token rotation and expiration handling",
        resources: [
          {
            name: "Refresh Tokens",
            url: "https://youtu.be/-Z57Ss_uiuc",
          },
        ],
      },
    ],
  },
  {
    id: "week18",
    weekNumber: 18,
    title: "Advanced SQL and Hibernate",
    level: "intermediate",
    type: "core",
    description: "Complex queries, joins, and Hibernate optimization.",
    topics: [
      {
        id: "w18-t1",
        title: "Advanced SQL Queries",
        description: "Joins, subqueries, and window functions",
        resources: [
          { name: "SQL Joins (Anton)", url: "https://youtu.be/Yh4CrPHVBdE" },
          {
            name: "Window Functions",
            url: "https://youtu.be/rIcB4zMYMas",
          },
        ],
      },
      {
        id: "w18-t2",
        title: "Hibernate Optimization",
        description: "Lazy loading, N+1 problem, and caching",
        resources: [
          {
            name: "Hibernate Docs",
            url: "https://docs.jboss.org/hibernate/orm/6.6/introduction/html_single/Hibernate_Introduction.html",
          },
          {
            name: "N+1 Problem",
            url: "https://www.baeldung.com/spring-data-jpa-entity-graph",
          },
        ],
      },
      {
        id: "w18-t3",
        title: "Database Transactions",
        description: "@Transactional, isolation levels, and propagation",
        resources: [
          {
            name: "Transactions (Baeldung)",
            url: "https://youtu.be/wHUOeXbZCYA",
          },
          {
            name: "Transaction Management",
            url: "https://www.ibm.com/think/topics/transaction-management",
          },
        ],
      },
    ],
  },
  {
    id: "week19",
    weekNumber: 19,
    title: "E-Commerce Backend Project",
    level: "intermediate",
    type: "core",
    description:
      "Build a complete e-commerce backend with all learned concepts.",
    topics: [
      {
        id: "w19-t1",
        title: "Project Architecture",
        description: "Design patterns, entities, and relationships",
        resources: [
          {
            name: "Project Structure",
            url: "https://stackoverflow.com/questions/40902280/what-is-the-recommended-project-structure-for-spring-boot-rest-projects",
          },
        ],
      },
      {
        id: "w19-t2",
        title: "User Management",
        description: "Registration, authentication, and profiles",
        resources: [
          {
            name: "Spring Security Registration",
            url: "https://www.baeldung.com/spring-security-registration",
          },
          {
            name: "User Details Service",
            url: "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details-service.html",
          },
        ],
      },
      {
        id: "w19-t3",
        title: "Product and Order Management",
        description: "CRUD operations, cart, and checkout flow",
        resources: [
          { name: "REST API Design", url: "https://restfulapi.net" },
          {
            name: "Simple E-Commerce Backend",
            url: "https://www.baeldung.com/spring-angular-ecommerce",
          },
        ],
      },
    ],
  },
  {
    id: "week20",
    weekNumber: 20,
    title: "Introduction to MongoDB",
    level: "intermediate",
    type: "optional",
    description: "NoSQL databases and document-oriented storage.",
    topics: [
      {
        id: "w20-t1",
        title: "MongoDB Basics",
        description: "Documents, collections, and CRUD operations",
        resources: [
          { name: "MongoDB in 1 Hour", url: "https://youtu.be/c2M-rlkkT5o" },
          { name: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
        ],
      },
      {
        id: "w20-t2",
        title: "Spring Data MongoDB",
        description: "Repositories and MongoTemplate",
        resources: [
          {
            name: "Spring MongoDB Guide",
            url: "https://spring.io/guides/gs/accessing-data-mongodb",
          },
          {
            name: "MongoDB with Spring",
            url: "https://www.mongodb.com/en-us/resources/products/compatibilities/spring-boot",
          },
        ],
      },
    ],
  },
  {
    id: "week21",
    weekNumber: 21,
    title: "WebSockets and Real-time Communication",
    level: "intermediate",
    type: "core",
    description: "Building real-time applications with WebSockets.",
    topics: [
      {
        id: "w21-t1",
        title: "WebSocket Protocol",
        description: "Handshake, frames, and real-time communication",
        resources: [
          {
            name: "WebSockets (Baeldung)",
            url: "https://www.baeldung.com/spring-websockets",
          },
          {
            name: "WebSocket Basics",
            url: "https://youtu.be/1BfCnjr_Vjg",
          },
        ],
      },
      {
        id: "w21-t2",
        title: "Building a Chat Application",
        description: "Real-time messaging with WebSockets",
        resources: [
          {
            name: "Chat App Tutorial",
            url: "https://www.youtube.com/watch?v=TywlS9iAZCM",
          },
          {
            name: "Spring Boot Chat",
            url: "https://medium.com/@satviknema/real-time-chat-application-using-spring-web-sockets-and-stompjs-0d286696e2b0",
          },
        ],
      },
    ],
  },
  {
    id: "week23",
    weekNumber: 23,
    title: "Caching with Redis",
    level: "intermediate",
    type: "core",
    description: "Improving performance with distributed caching.",
    topics: [
      {
        id: "w23-t1",
        title: "Caching Concepts",
        description: "Cache strategies, TTL, and cache-aside pattern",
        resources: [
          {
            name: "Spring Cache Docs",
            url: "https://docs.spring.io/spring-framework/reference/integration/cache.html",
          },
          {
            name: "Caching Explained",
            url: "https://www.youtube.com/watch?v=6phA3IAcEJ8",
          },
        ],
      },
      {
        id: "w23-t2",
        title: "Redis Integration",
        description: "Spring Data Redis and cache configuration",
        resources: [
          {
            name: "Spring Redis",
            url: "https://docs.spring.io/spring-data/redis/reference/",
          },
          {
            name: "Redis Tutorial",
            url: "https://www.youtube.com/watch?v=Hbt56gFj998",
          },
        ],
      },
      {
        id: "w23-t3",
        title: "Cache Annotations",
        description: "@Cacheable, @CacheEvict, and @CachePut",
        resources: [
          {
            name: "Cache Annotations",
            url: "https://www.baeldung.com/spring-cache-tutorial",
          },
          {
            name: "Redis Cache",
            url: "https://www.youtube.com/watch?v=Hbt56gFj998",
          },
        ],
      },
    ],
  },
  {
    id: "week24",
    weekNumber: 24,
    title: "Email and SMS Integration",
    level: "intermediate",
    type: "optional",
    description: "Sending notifications via email and SMS.",
    topics: [
      {
        id: "w24-t1",
        title: "Email with Spring Boot",
        description: "JavaMailSender and SMTP configuration",
        resources: [
          {
            name: "Spring Email",
            url: "https://medium.com/@AlexanderObregon/sending-emails-from-a-spring-boot-application-3cba9b051dbd",
          },
        ],
      },
    ],
  },
  // Level 3: Advanced (Weeks 26-35)
  {
    id: "week26",
    weekNumber: 26,
    title: "Payment Integration with Stripe",
    level: "advanced",
    type: "core",
    description: "Processing payments in your Spring Boot applications.",
    topics: [
      {
        id: "w26-t1",
        title: "Stripe Fundamentals",
        description: "Payment intents, customers, and charges",
        resources: [
          { name: "Stripe Docs", url: "https://stripe.com/docs" },
          { name: "Stripe Spring Boot", url: "https://youtu.be/BczS-wbxgp4" },
        ],
      },
      {
        id: "w26-t2",
        title: "Razorpay Integration",
        description: "Spring Boot and Razorpay API",
        resources: [
          {
            name: "Razorpay Spring",
            url: "https://youtu.be/AVWT23zKWaE",
          },
        ],
      },
      {
        id: "w26-t3",
        title: "Webhooks",
        description: "Basics of webhooks",
        resources: [
          {
            name: "Webhooks",
            url: "https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work",
          },
        ],
      },
    ],
  },
  {
    id: "week27",
    weekNumber: 27,
    title: "GraphQL with Spring Boot",
    level: "advanced",
    type: "optional",
    description: "Building flexible APIs with GraphQL.",
    topics: [
      {
        id: "w27-t1",
        title: "GraphQL Basics",
        description: "Schema, queries, mutations, and resolvers",
        resources: [
          { name: "GraphQL Docs", url: "https://graphql.org/learn/" },
          {
            name: "GraphQL vs REST",
            url: "https://www.youtube.com/watch?v=yWzKJPw_VzM",
          },
        ],
      },
      {
        id: "w27-t2",
        title: "Spring for GraphQL",
        description: "GraphQL controllers and data fetchers",
        resources: [
          {
            name: "Spring X GraphQL",
            url: "https://youtu.be/uNB2N_w_ypo",
          },
        ],
      },
      {
        id: "w27-t3",
        title: "Advanced GraphQL",
        description: "Subscriptions, batch loading, and security",
        resources: [
          {
            name: "GraphQL Complete Playlist",
            url: "https://youtube.com/playlist?list=PLpPqplz6dKxXICtNgHY1tiCPau_AwWAJU&si=JHUUAk_aN7JQUPwg",
          },
        ],
      },
    ],
  },
  {
    id: "week28",
    weekNumber: 28,
    title: "Task Scheduling and Batch Processing",
    level: "advanced",
    type: "optional",
    description: "Background jobs and large data processing.",
    topics: [
      {
        id: "w28-t1",
        title: "Spring Scheduler",
        description: "@Scheduled and cron expressions",
        resources: [
          {
            name: "Scheduling Docs",
            url: "https://docs.spring.io/spring-framework/reference/integration/scheduling.html",
          },
        ],
      },
      {
        id: "w28-t2",
        title: "Spring Batch",
        description: "Batch jobs, steps, and chunk processing",
        resources: [
          {
            name: "Spring Batch",
            url: "https://spring.io/projects/spring-batch",
          },
          {
            name: "Batch Tutorial",
            url: "https://medium.com/@elouadinouhaila566/understanding-spring-batch-a-comprehensive-guide-393904ac401c",
          },
        ],
      },
      {
        id: "w28-t3",
        title: "Async Processing",
        description: "@Async and CompletableFuture",
        resources: [
          {
            name: "Async Spring",
            url: "https://www.baeldung.com/spring-async",
          },
        ],
      },
    ],
  },
  {
    id: "week29",
    weekNumber: 29,
    title: "Firebase Integration",
    level: "advanced",
    type: "optional",
    description: "Firebase services for mobile and web backends.",
    topics: [
      {
        id: "w29-t3",
        title: "Firebase",
        description: "",
        resources: [
          {
            name: "Spring Boot + Firebase",
            url: "https://dev.to/priya01/spring-boot-meets-firebase-my-journey-of-building-a-file-upload-system-4m3i",
          },
          {
            name: "Video Tutorial",
            url: "https://youtu.be/9EodqjkZytc",
          },
        ],
      },
    ],
  },
  {
    id: "week30",
    weekNumber: 30,
    title: "Spring JDBC and Database Migrations",
    level: "advanced",
    type: "core",
    description: "Raw SQL operations and schema versioning.",
    topics: [
      {
        id: "w30-t1",
        title: "JdbcTemplate",
        description: "Executing SQL queries with Spring",
        resources: [
          {
            name: "Spring JDBC",
            url: "https://docs.spring.io/spring-framework/reference/data-access/jdbc.html",
          },
          {
            name: "JDBC Tutorial",
            url: "https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html",
          },
        ],
      },
      {
        id: "w30-t3",
        title: "Database Indexing",
        description: "Performance optimization with indexes",
        resources: [
          { name: "JPA Indexes", url: "https://www.baeldung.com/jpa-indexes" },
          {
            name: "How indexes work",
            url: "https://www.youtube.com/watch?v=eQ3eNd5WbH8",
          },
        ],
      },
    ],
  },
  {
    id: "week31",
    weekNumber: 31,
    title: "Advanced MongoDB",
    level: "advanced",
    type: "optional",
    description: "Aggregation, indexing, and transactions.",
    topics: [
      {
        id: "w31-t1",
        title: "Aggregation Framework",
        description: "Pipeline stages and operators",
        resources: [
          {
            name: "Aggregation",
            url: "https://www.mongodb.com/docs/manual/aggregation/",
          },
          {
            name: "Spring Data Aggregation",
            url: "https://www.baeldung.com/spring-data-mongodb-projections-aggregations",
          },
        ],
      },
    ],
  },
  {
    id: "week32",
    weekNumber: 32,
    title: "Docker and Containerization",
    level: "advanced",
    type: "core",
    description: "Containerizing Spring Boot applications.",
    topics: [
      {
        id: "w32-t1",
        title: "Docker Basics",
        description: "Images, containers, and Dockerfile",
        resources: [
          { name: "Docker Docs", url: "https://docs.docker.com" },
          {
            name: "Docker for beginners ",
            url: "https://youtu.be/17Bl31rlnRM",
          },
        ],
      },
      {
        id: "w32-t2",
        title: "Dockerizing Spring Boot",
        description: "Multi-stage builds and optimization",
        resources: [
          {
            name: "Docker for Java Developer",
            url: "https://youtu.be/lpKwgOpxpqg",
          },
        ],
      },
    ],
  },
  {
    id: "week33",
    weekNumber: 33,
    title: "Introduction to Kubernetes",
    level: "advanced",
    type: "optional",
    description: "Container orchestration basics.",
    topics: [
      {
        id: "w33-t1",
        title: "Kubernetes Concepts",
        description: "Pods, services, deployments, and ingress",
        resources: [
          { name: "K8s Docs", url: "https://kubernetes.io/docs/home/" },
          {
            name: "Learn Kubernetes",
            url: "https://youtu.be/d6WC5n9G_sM",
          },
        ],
      },
    ],
  },
  {
    id: "week34",
    weekNumber: 34,
    title: "Message Queues: Kafka and RabbitMQ",
    level: "advanced",
    type: "core",
    description: "Asynchronous communication between services.",
    topics: [
      {
        id: "w34-t1",
        title: "Apache Kafka",
        description: "Topics, partitions, producers, and consumers",
        resources: [
          {
            name: "Kafka Docs",
            url: "https://kafka.apache.org/documentation/",
          },
        ],
      },
      {
        id: "w34-t2",
        title: "Spring for Kafka",
        description: "KafkaTemplate and @KafkaListener",
        resources: [
          {
            name: "Spring Kafka",
            url: "https://youtu.be/NWLwGtkBrkQ",
          },
        ],
      },
      {
        id: "w34-t3",
        title: "RabbitMQ",
        description: "Queues, exchanges, and routing",
        resources: [
          {
            name: "RabbitMQ Docs",
            url: "https://www.rabbitmq.com/documentation.html",
          },
        ],
      },
    ],
  },
  {
    id: "week35",
    weekNumber: 35,
    title: "Microservices Architecture",
    level: "advanced",
    type: "core",
    description: "Building distributed systems with Spring Cloud.",
    topics: [
      {
        id: "w35-t1",
        title: "Microservices Patterns",
        description: "Service discovery, config server, and API gateway",
        resources: [
          {
            name: "Spring Cloud",
            url: "https://spring.io/projects/spring-cloud",
          },
          {
            name: "Microservices",
            url: "https://dev.to/isaactony/building-your-first-microservice-system-with-spring-boot-a-beginners-guide-3b28",
          },
          {
            name: "Expense Tracker Project",
            url: "https://youtu.be/RtMezvuOKE0",
          },
        ],
      },
    ],
  },
];

export const getTotalTopics = () => {
  return roadmapData.reduce((acc, week) => acc + week.topics.length, 0);
};

export const getTotalWeeks = () => roadmapData.length;

export const getTotalStages = () => {
  return new Set(roadmapData.map((week) => week.level)).size;
};

export const getTopicsByLevel = (
  level: "beginner" | "intermediate" | "advanced",
) => {
  return roadmapData
    .filter((week) => week.level === level)
    .reduce((acc, week) => acc + week.topics.length, 0);
};
