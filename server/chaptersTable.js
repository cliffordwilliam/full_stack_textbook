const chaptersTable = [
    // 1
    {
        "id": 1,
        "number": 1,
        "title": "What is this textbook?",
        "description": "See what you will get out of this book.",
        "content": `
This book aims to empower you as a full-stack developer with curated resources from the best sources on the internet.

## What will you learn?

By the end of this book, you will confidently tackle programming challenges independently. Instead of relying on tutorials, courses, or books, you'll leverage documentation and self-study effectively. You will gain a robust understanding of:

-   The web.
-   Computer fundamentals.
-   Web programming.
-   Development environments.
-   Essential development tools.
-   Building websites from scratch.
`,
        "codeLineHighlights": [
        ],
    },
    // 2
    {
        "id": 2,
        "number": 2,
        "title": "What is a web developer?",
        "description": "Learn why learning to code is hard and the history of the web.",
        "content": `
## Job Description

This position involves various responsibilities, including:

-   **Building and Maintaining Sites**:
    -   Front-end development.
    -   Back-end development.
    -   Full-stack development.
-   **Working for Different Clients**:
    -   Technology companies.
    -   Organizations.
    -   Government entities.
-   **Collaborating in a Team Environment**.
-   **Interests and Passion**:
    -   Solving puzzles.
    -   Building and creating things.
    -   Exploring new technologies and tools.
    -   Understanding how things work.
    -   Passionate about programming.

## Front-end Development

Front-end developers are responsible for presenting data visually. They create interactive elements like buttons and animations, aiming to make web pages attractive and user-friendly. Their tools include:

-   HTML
-   CSS
-   JavaScript
-   Front-end frameworks (e.g., React, Angular, Vue.js)

## Back-end Development

Back-end developers handle data manipulation and server-side logic. They manage user authentication, database interactions, and application logic. Their tools typically include:

-   Java
-   Python
-   Ruby
-   JavaScript (Node.js)
-   Back-end frameworks (e.g., Django, Ruby on Rails, Spring)

## Full-stack Development

Full-stack developers manage both front-end and back-end development, bridging the gap between user interface and server-side logic.

## Career Prospects

Web developers have various career paths to choose from:

-   **Large Tech Companies**:
    -   Companies like Google, Meta, and Amazon offer high salaries but may have limited opportunities for personal growth.
-   **Startups**:
    -   Fast-paced environments with lower pay but significant learning opportunities.
-   **Freelancing**:
    -   Finding your own work with unstable income, requiring more social interaction.
-   **Consulting**:
    -   Similar to freelancing but with a greater focus on coding tasks.
-   **Established Companies**:
    -   Slower-paced environments with good pay but dealing with challenging legacy code.

## Essential Tools for Web Developers

-   Computer
-   Google (for research and problem-solving)
-   Text Editor (e.g., VS Code, Sublime Text)
-   Command Line Interface (CLI)
-   Stack Overflow (for community support and troubleshooting)
-   Git (version control)
-   GitHub (code hosting and collaboration)

## Motivation

Programming is not for everyone. If you don't enjoy coding, it's best to explore other careers. Pursuing programming solely for a high salary is not advisable. Success in this field requires passion and perseverance, especially when facing challenging problems. If you enjoy the process of coding and solving complex issues, then web development could be a fulfilling career for you.

- - -

## 2.1 Why Learning to Code is Hard

The journey ahead is challenging due to several factors:

-   **Resource Availability**: Resources are abundant for beginners and advanced learners but sparse for intermediates.
-   **Scope of Knowledge**: You need to learn a lot before you can see the big picture.

## Phases

![four phases of coding journey](./public/four_phases_of_coding_journey.webp)

Figure 1: Thinkful. (2023, June 30). Why learning to code is so damn hard \[Image\]. Wayback Machine. Retrieved June 21, 2024, from https://web.archive.org/web/20230630111131/https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/

## Phase I: The Hand-Holding Honeymoon

When you start learning to code, there are numerous resources designed for beginners, such as Codecademy. These resources are polished and make the learning process seem easy, instilling:

-   Hope
-   Expectations
-   Confidence

However, after this phase, the abundance of resources diminishes rapidly. You'll feel lost due to the vast scope of topics you need to learn. Unless you have a clear goal, like web development, the variety of subjects can be overwhelming.

### Tips

During this phase, experiment with various courses until you find one that resonates with you. Your goal is to discover your preferred learning style and areas of interest.

## Phase II: The Cliff of Confusion

At this stage, you attempt to build projects independently but struggle because:

-   **Resource Density**: Intermediate resources are sparse. You'll often rely on industry blogs and documentation that might be difficult to understand.
-   **Scope of Knowledge**: You need to learn a lot before the big picture becomes clear. Even within web development, the field is vast, making it hard to choose a specific path.

### Tips

To overcome this phase:

-   Collaborate with others to ease the debugging process.
-   Read others' code to understand their approach, rather than copying blindly.
-   Continuously build small projects and seek help when needed.

## Phase III: The Desert of Despair

By now, you should be able to create projects, but distractions on what to build next can derail your progress. Focus on what you want to specialize in rather than trying too many things at once.

### Tips

-   **Set a Strong Goal**: Specialize in a specific area. Trying to learn everything will dilute your expertise.
-   **Find a Clear Path**: Use resources that align with your goal.
-   **Stay Focused**: Avoid distractions and concentrate on coding.

## Phase IV: The Upswing of Awesome

After much trial and error, you've reached a level where you can:

-   Efficiently use Google for problem-solving.
-   Understand industry blogs.
-   Be proficient in a specific language or framework and build applications.

However, you might still feel like a fraud because you do not fully understand the underlying workings of your tools and frameworks. Keep learning to fill in these gaps.

### Tips

To land a job and continue improving:

-   **Follow Best Practices**: Aim for production-quality code.
-   **Verify Assumptions**: Ensure you fully understand the concepts you're working with.
-   **Tackle Unsexy Skills**: Learn crucial skills like unit testing, data modeling, architecture, and deployment.
-   **Seek Feedback**: Get feedback from professionals to ensure your code is legible, modular, and maintainable, making you more attractive in a professional setting.

- - -

## 2.2 Web Design: Entry and History

Web design today primarily refers to front-end development, though it once encompassed the entire process, including:

-   Web graphic design
-   UI design
-   Authoring
-   UX design
-   Search engine optimization (SEO)

## Timeline

### November 1989

-   Tim Berners-Lee created the global hypertext project, which became known as the World Wide Web.
-   Text-only HTML was the standard.
-   Most browsers were Unix-based.
-   The Mosaic browser began integrating graphic design.

### November 1992

-   CERN launched the first website on the World Wide Web.
-   Websites used table elements for layouts.

### November 1993

-   ALIWEB, the first search engine, was created.

### October 1994

-   W3C (World Wide Web Consortium) was established to prevent monopolization by proprietary browsers and programming languages.
-   W3C continues to set web standards.

### 1994

-   Andreessen formed Mosaic Communications Corp, later Netscape Communications, and released the Netscape 0.9 browser.

### 1996 to 1999: The Browser Wars

-   Microsoft and Netscape competed, leading to innovations like CSS, JavaScript, and Dynamic HTML.

### 1996

-   Microsoft released its first competitive browser, supporting style sheets.
-   Table tags were still commonly used for layouts, with little concern for semantics or accessibility.

### December 1996

-   W3C introduced CSS, separating content (HTML) from presentation (CSS) and promoting semantic HTML.
-   Table tags were still prevalent.

### 1998

-   Netscape released Netscape Communicator's code under an open-source license.
-   The Web Standards Project was initiated to develop standards for HTML and CSS.

### 2000

-   Internet Explorer became the first browser to support HTML 4.01, CSS 1, and PNG format.
-   By 2001, Internet Explorer held 96% of the web browser market share.

### 2001-2012

-   Websites evolved as web usage grew.
-   Post-browser wars, new open-source browsers outperformed Internet Explorer.
-   W3C developed new standards, including HTML5, CSS3, and new JavaScript APIs.
-   HTML5 became a term encompassing HTML, CSS3, and JavaScript standards.

### 2012 and Later

-   With the rise of 3G and LTE, web traffic shifted to mobile devices.
-   Web design adopted a mobile-first approach, prioritizing mobile layouts.

## Tools and Technologies

-   Vector and raster graphics editors
-   WYSIWYG website builder software or content management systems
-   Hand-coded web pages
-   Markup validators for web accessibility guidelines (e.g., semantic HTML, ARIA)

## UX Design

UX Design focuses on creating products that provide meaningful and relevant experiences to users, particularly in web-based contexts.

## Skills and Techniques

### Marketing and Communication Design

Effective design varies based on the target market. Designers must understand whether a site is B2B or consumer-targeted, as retail and entertainment sites require different approaches. Web designers typically meet with clients to discuss layout, color, graphics, and design.

### User Experience Design and Interactive Design

Clear layout, instructions, and labeling enhance a website's perceived usefulness, encouraging continued use. The goal is to create a universal user experience that accommodates users of all skill levels.

### Progressive Enhancement

This strategy prioritizes web content, ensuring immediate access to basic content and functionality, even on low-end machines. HTML is served first, followed by CSS and JavaScript, maximizing compatibility and minimizing load times. Sites like Wikipedia use progressive enhancement, while others, like Everipedia, may not.

### Page Layout

Fixed-width websites were common in the past, but fluid layouts gained popularity around 2000. Modern responsive web designs use CSS3 and the @media rule. In March 2018, Google announced mobile-first indexing, favoring responsive designs in search results.

### Typography

Limiting font variety improves visual consistency and performance. Safe fonts available in most browsers are recommended. With CSS3, web typography has become more sophisticated, often utilizing negative space and avoiding center-aligned text.

### Motion Graphics

Entertainment websites frequently use animations. However, W3C accessibility standards require that animations be disableable by users.

### Quality of Code

Good practices, such as clear element functions and maintainable layouts, prevent "tag soup" (poorly written HTML). Use W3C validation tools to ensure your HTML is semantic and standards-compliant.

### Generated Content

Web pages can be static or dynamic:

-   **Static Websites**: Files are assembled on the server and sent as-is to the browser. Clicking a button reloads the entire page.
-   **Dynamic Websites**: Parts of the page can update independently. They may use relational or document databases (e.g., MongoDB or NoSQL). Early dynamic pages used Perl, PHP, or ASP, with templating methods like EJS tags.

Content management systems like WordPress allow users to create and manage pages without coding, including user authorization for page edits.

### Technical Communication in Web Design

Effective communication enhances the perceived validity and usefulness of work. The communication coefficient measures how well complex concepts are explained, based on these principles:

1.  Communication influences how others perceive our work.
2.  Judgments about communication quality depend on personal factors like experience, preferences, and technical background.
3.  Communication matters in all interpersonal interactions to varying degrees.

## Homepage Design

Historically, the homepage was crucial for attracting visitors. However, by the 2000s, traffic began bypassing homepages for internal content. By 2007, homepages were considered less important. In 2013, the use of carousel sliders on homepages became common, though they were later deemed ineffective for SEO and usability.

## Occupations in Web Design

Creating a website typically involves several roles:

-   **Web Designer**: Focuses on visual aspects, layout, coloring, and typography. In larger companies, this role often involves only HTML and CSS. In smaller companies, designers may also need coding skills.
-   **Web Developer**: Specializes in front-end, back-end, or full-stack development.
-   **Graphic Designer**: Creates logos, layouts, and buttons.
-   **Internet Marketing Specialist**: Develops marketing and promotional strategies to maintain web presence.
-   **SEO Writer**: Recommends keywords to improve search engine rankings.
-   **Internet Copywriter**: Writes appealing content for the target audience.
-   **User Experience (UX) Designer**: Focuses on user-centered design, testing, interaction design, and visual design.

- - -

## 2.3 How Can I Become a Really Good Web Developer?

### Do not Get into Development for the Wrong Reasons

Becoming a developer should be driven by a passion for the craft and the instant gratification that comes with seeing your code come to life. The ability to make changes and see the outcome with just a refresh can be incredibly rewarding. However, don't pursue web development solely because you dream of becoming an internet entrepreneur, are enticed by high salaries, or are attracted to the culture of tech companies. These perks are not guaranteed, and many clients you encounter may be former developers who did not succeed or gave up.

The bottom line is that if you don't genuinely have a passion for at least one aspect of web development, it's wise to reconsider. A true developer cares deeply about their work and the products they create. You'll find greater satisfaction when you value your technical skills more than any external rewards.

### Find Where You Fit In

Web development is a vast field. It's important to identify your interests and strengths. You might start as a front-end developer and later explore back-end development or vice versa. Understanding where you fit in will help you focus your learning and growth effectively.

### Get Involved in the Community

Engage with the web development community by following influential bloggers and thought leaders on platforms like Twitter. Some key figures to follow include:

-   Jeffrey Zeldman
-   Molly Holzschlag
-   Jeremy Keith
-   Eric Meyer
-   Bryan Veloso
-   Jason Kottke
-   Ben Alman
-   Paul Irish
-   Rebecca Murphy
-   Jonathan Snook

Being part of the community will keep you updated on industry trends, best practices, and provide valuable networking opportunities.

### Buy Books and Read

Invest in ePub versions of books, as physical ones can quickly become outdated. However, for topics on general practices or architecture, physical books can be useful. Some recommended front-end books include:

-   [SMACSS (free version available)](http://smacss.com/)
-   [Bulletproof Web Design](http://www.simplebits.com/publications/bulletproof/)
-   [A Book Apart Series](http://www.abookapart.com/)
-   [O'Reilly books](http://oreilly.com/css-html/index.html)

Reading extensively will expand your knowledge and keep you informed about the latest developments in the field.

### Practice, Challenge Yourself, and Work for Others

Regularly code for fun and re-create existing projects to sharpen your skills. Consider building websites for non-profit organizations to gain experience. Participate in coding challenges to push your boundaries. Always be honest about your abilities and avoid overselling yourself. Continuous practice and real-world experience are crucial to becoming a proficient web developer.

- - -

## 2.4 What Makes an Excellent Web Developer?

### The Hacker Mindset

An excellent web developer possesses a hacker mindset, meaning they love to understand how things work. This curiosity drives them to explore, experiment, and constantly learn.

### Passionate About Their Trade

A great web developer is passionate about web development. They often work on personal projects or explore new technologies in their spare time. Their interest in the field goes beyond just earning a paycheck; they genuinely enjoy and are intrigued by the work they do.

### Excellent Knowledge of HTML

HTML is the foundation of web development. An excellent web developer has a deep understanding of HTML and can use it effectively to create structured and semantic web content.

### Knowledge of HTTP

Understanding how the web works is crucial. A great web developer knows how HTTP operates, including how web servers and user-agents communicate and exchange information.

### Language/Platform-Agnostic

While specialization can be valuable, an excellent web developer is flexible and adaptable. They are not tied to one language or framework but instead choose the best tools for each project. This versatility allows them to solve problems more effectively.

### Separation of Concerns

An excellent web developer adheres to the principle of separation of concerns. They write clean HTML, separate CSS, and add JavaScript in a way that keeps each layer distinct and manageable. This also applies to back-end development, where views, controllers, and models are kept separate to maintain code clarity and organization.

- - -

## TODO

## 2.5 What Makes A Good Developer?

## 2.6 Things I Wish Someone Had Told Me When I Was Learning How to Code

## 2.7 Don’t Believe Anyone Who Tells You Learning To Code Is Easy

## 2.8 Deliberate Programming Practice
`,
    "codeLineHighlights": [
    ],
    },
    // 3
    {
        "id": 3,
        "number": 3,
        "title": "Asking for help?",
        "description": "Be better at asking questions.",
        "content": `
## Test
This is md

## Another one
This is another one

- List
- List again

\`\`\`
View.OnClickListener listener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.d("TAG", "Clicked!");
    }
}
\`\`\`
`,
    "codeLineHighlights": [
        [{start: 3, end: 4, color: 'rgba(255, 255, 255, 0.2)'},],
    ],
    },
    // 4
    {
        "id": 4,
        "number": 4,
        "title": "Computer basic",
        "description": "Understand your computer better.",
        "content": `
## Test
This is md

## Another one
This is another one

- List
- List again

\`\`\`
View.OnClickListener listener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.d("TAG", "Clicked!");
    }
}
\`\`\`
`,
    "codeLineHighlights": [
    ],
    },
];