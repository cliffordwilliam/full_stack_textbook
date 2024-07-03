const chaptersTable = [
    // CH1
    {
        "id": 1,
        "number": 1,
        "title": "What is this textbook?",
        "description": "See what you will get out of this book.",
        "content": `
## Introduction

Why choose this book? While other beginner resources often focus on specific topics, this book is designed to equip you with real industry knowledge. It will provide you with a comprehensive understanding of the tools and techniques professionals use to build websites in the real world.

This book aims to guide you from zero to becoming a full-stack developer using the best resources available on the internet. Each chapter builds upon the previous one, ensuring you acquire the skills needed to succeed as a web programmer. Your journey towards becoming a proficient full-stack developer begins here. The primary goal of this book is to cultivate a programming mindset and core programming principles. By the end, you will:

- Develop effective problem-solving skills.
- Learn to ask technical questions effectively.
- Master the art of conducting independent research.
- Expand your skills beyond courses by using documentation and effective Googling skills.
- Tools for creating websites.
- The role and responsibilities of web developers.
- A solid foundation in web development.
- Understanding how the web operates.
- Basics of computer science.
- Web programming essentials.
- Workflow for creating and serving websites.
- Setting up a development environment (Git and GitHub).
- Front-end technologies (HTML, CSS, JavaScript, React).
- Back-end technologies.
- Command-line interface (CLI).
- Comprehensive understanding of the full-stack workflow.

By the end of this book, you will not only be capable of creating basic websites like single-page applications (SPAs) but also fully hosted applications with a backend server.

## Tips for Learning

Memorization followed by application doesn't yield effective results in programming. The best approach is learning by doing. Each concept you learn in this book will be immediately applied to real-world industry scenarios. Repetitive practice will lead to natural memorization. The more you practice, the more information will stick with you, making it harder to forget.

The most effective way to learn programming is by tackling specific problems that require effort to solve. This book presents challenges or puzzles for you to solve independently. You are encouraged to attempt solving them yourself, and if necessary, use Google to find resources (e.g., how to implement a for loop starting from index 1) rather than searching for direct solutions.

## Language Skills

Programming is predominantly conducted in English. From syntax and community interactions to documentation, English proficiency is crucial. If you encounter unfamiliar terms, treat it as an opportunity to practice your Googling skills to understand their meanings or find them in a dictionary. Rather than an obstacle, embrace it as a chance to enhance one of the most critical skills for programmers.

## Conclusion

What you'll learn in this book is just the beginning. Each concept covered can be explored in greater depth. Study independently to refine the skills gained here into a specialized toolkit for web development, opening doors to various career opportunities available to web developers.
`,
        "codeLineHighlights": [
    ],
    },
    // CH2
    {
        "id": 2,
        "number": 2,
        "title": "What is a web developer?",
        "description": "Learn why learning to code is hard and the history of the web.",
        "content": `
## Introduction

Web development is a career position encompassing a variety of responsibilities, including:

-   **Building and Maintaining Websites — There are 3 Types of Web Developers**:
    -   Front-end development.
    -   Back-end development.
    -   Full-stack development.
  
-   **Working with Diverse Clients to Bring Their Products and Services Online**:
    -   Technology companies.
    -   Organizations.
    -   Government entities.
  
-   **Collaborating in Project-Based Team Environments**.
  
-   **Interests and Passion**:
    -   Solving puzzles.
    -   Building and creating things.
    -   Exploring new technologies and tools.
    -   Understanding how things around them work.
    -   Passionate about programming.

## Front-end Development

Front-end developers are responsible for presenting data visually. They create interactive elements like buttons and animations, aiming to make web pages attractive and user-friendly. Their tools include:

-   HTML
-   CSS
-   JavaScript
-   Front-end frameworks (e.g., React, Angular, Vue.js)

## Back-end Development

Back-end developers manage data storage, manipulation, and server-side logic to ensure data is served for front-end rendering. They handle user authentication, database interactions, application logic, and more using tools such as:

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

Programming is not for everyone. If you don't enjoy coding, it's best to explore other careers. Pursuing programming solely for a high salary is not advisable. Success in this field requires passion and perseverance, especially when facing challenging problems. If you enjoy the process of coding, making things and solving complex issues, then web development could be a fulfilling career for you.

- - -

## Why Learning to Code is Hard

<a href="https://web.archive.org/web/20230630111131/https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/" target="_blank" rel="noopener noreferrer">Reference</a>

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

At this stage, you attempt to build projects independently, but you encounter numerous bugs, and your online searches often yield barely functional solutions. You will escape this phase once you successfully complete a few projects. You struggle because:

- **Resource Density**: Intermediate resources are sparse from Phase 2 until Phase 3. Resources increase again in Phase 4, but most of them consist of industry blogs and documentation that may be difficult to understand.
- **Scope of Knowledge**: You need to learn a lot before the big picture becomes clear. In Phases 2 and 3, there are no correct answers; each solution depends on context. In Phase 1, the scope of knowledge is narrow, focusing on the fundamentals everyone needs to know.

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

## Web Design: Entry and History

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

## How Can I Become a Really Good Web Developer?

<a href="http://www.quora.com/Computer-Programming/How-can-I-become-a-really-good-Web-Developer-starting-from-now-at-age-20-before-age-25" target="_blank" rel="noopener noreferrer">Reference</a>

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

## What Makes an Excellent Web Developer?

<a href="http://www.quora.com/What-makes-a-great-web-developer" target="_blank" rel="noopener noreferrer">Reference</a>

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

## What Makes A Good Developer?

<a href="https://web.archive.org/web/20230630111131/https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/" target="_blank" rel="noopener noreferrer">Reference</a>

Excitement is what any web developer recruiter is looking for, from junior to senior applicants. However, this excitement manifests differently at each career stage.

### Good Junior Developers

The key characteristic of a good junior developer is their excitement for creating things like websites and desktop apps. They are thrilled by the ability to build and interact with their creations. They enjoy problem-solving and devising effective solutions. Good junior developers have a strong desire to learn and create new things, finding excitement in every new skill they acquire.

A small subset of exceptional junior developers may be drawn to more complex tasks, such as building programming languages or databases. Regardless of their specific interests, excited junior developers bring valuable energy to any team.

### Good Mid-Level Developers

Good mid-level developers have a broader range of interests, due to their exposure to common tasks and their desire to tackle new challenges. They apply familiar libraries in novel ways and focus on solving business problems rather than merely writing code. These developers see the bigger picture and strive to address issues holistically.

However, mid-level developers can sometimes overdo things. For instance, they might insist on using Test-Driven Development (TDD) for everything, whereas junior developers may not even be familiar with the concept.

### Good Senior Developers

Senior developers provide direction, stability, and experience. They can identify potential pitfalls before they occur, having navigated similar challenges in the past. Seniors contribute significantly to finding solutions, understanding systems, and aligning them with overall goals.

They mentor junior developers, helping them learn new skills, and ensure that mid-level developers do not overcomplicate the codebase. Senior developers know what tools and approaches are effective, recognizing when a solution is unsuitable and when to seek alternatives.

## TODO

## Things I Wish Someone Had Told Me When I Was Learning How to Code

## Do not Believe Anyone Who Tells You Learning To Code Is Easy

## Deliberate Programming Practice
`,
    "codeLineHighlights": [
    ],
    },
    // CH3
    {
        "id": 3,
        "number": 3,
        "title": "Asking for help?",
        "description": "Be better at asking questions.",
        "content": `
## Introduction

Asking technical questions effectively is a skill that can save time and effort for both you and the person you're asking. Well-formulated questions lead to clearer, more helpful responses and make the process smoother for everyone involved. In this chapter, you will learn how to ask better questions.

## Learning Outcomes

- Techniques for asking good questions.
- Understanding the traits of bad questions and how to avoid them.
- Ability to ask clear and productive questions moving forward.

## Provide Context

Provide as much context as possible, such as error messages, terminal outputs, and specific lines or functions in your code. Lack of context makes it difficult for others to help you and often results in back-and-forth questions for more information, which can be frustrating for both parties.

When you include detailed context, you minimize the chances of receiving an incorrect or incomplete answer. Here is an example of how to provide context effectively:

> "I'm trying to return a string from this function, but I keep getting a syntax error. I checked its data type, and it is a string. Here is my code and the pseudocode I used."

Providing your attempted solutions helps others understand what you have already tried, preventing them from suggesting redundant steps. Pseudocode can also quickly convey your approach, allowing others to point out issues or suggest better strategies without delving deeply into your actual code.

## Ask for Directions

Instead of asking vague questions like "How do I get my code to work?", describe your problem and your attempts to solve it. This demonstrates your effort and helps others provide more specific guidance. For example:

> "I'm trying to return a string from this function, but I'm getting a syntax error. I have checked its data type, and it is a string. Here is my code and the pseudocode I used. What could be causing this error?"

When you encounter obstacles, explain what you have done and ask for guidance on what to try next. Avoid immediate follow-up questions until you have researched the initial advice. However, do ask further questions if you get stuck again.

Do not underestimate your questions as being trivial. Details you find insignificant might be crucial to solving the problem. Always include all relevant information.

## Do Not Ask to Just Ask

Avoid questions like:

> "Any Java experts around?"

Such questions are unhelpful because they do not provide context and might imply doubts about others' expertise. Instead, focus on formulating your actual question with sufficient detail.

Effortless questions tend to receive less effort in responses. Detailed, context-rich questions attract more interest and higher-quality answers.

## The XY Problem

The XY problem occurs when you ask about your attempted solution (Y) rather than the actual problem (X). This often leads to wasted time and effort because Y might not be the best approach to solving X.

To avoid the XY problem:

- Share the bigger picture along with your attempted solutions.
- Provide as much context as possible.

### Example 1


\`\`\`plaintext
<bob> How can I echo the last three characters in a filename?
<feline> If they're in a variable: echo \${foo: -3}
<feline> Why 3 characters? What do you REALLY want?
<feline> Do you want the extension?
<bob> Yes.
<feline> There's no guarantee that every filename will have a three-letter extension,
<feline> so blindly grabbing three characters does not solve the problem.
<feline> echo \${foo##*.}
\`\`\`

### Example 2


\`\`\`plaintext
<Angela> 'nmap -O -A 127.0.0.1' returns some lines starting with 'OS:'. How to change it?
<Obama> Look in the source code for nmap, find how it figures out the Linux part, then rewrite your TCP/IP stack to not operate in a way nmap can detect.
<Angela> Yeah, but I don't know about the Linux system API at all.
<Obama> Well, nmap's fingerprint is based on the way the TCP/IP stack works, there's no real way except to rewrite the appropriate parts of said stack.
<Angela> I really need to avoid these messages. Can iptables do this work?
<Obama> Well, don't use OS detection or version scanning.
<Angela> I want to prevent others from knowing the type of my OS.
\`\`\`

In both examples, the initial questions focused on specific solutions (Y) rather than the underlying problems (X). By understanding and addressing the root problem, you can find more effective and efficient solutions.

By applying these principles, you can ask better technical questions, leading to faster and more accurate solutions.
`,
    "codeLineHighlights": [
    ],
    },
    // CH 4
    {
        "id": 4,
        "number": 4,
        "title": "Computer Basics",
        "description": "Get up to speed with computer basics",
        "content": `
## Introduction

Computers are the primary tools that web developers use. Without them, web development would be impossible. Therefore, it's essential to have a solid understanding of computer basics.

## Learning Outcomes

- Understanding software and hardware.
- Taking screenshots.
- Creating strong passwords.

The following lessons are sourced from Goodwill Community Foundation (GCF) resources. You can explore these resources further for a more in-depth understanding.

## What is a Computer?

A computer is an electronic device that can store, retrieve, and process information. At its core, this information is represented by the smallest building blocks: 0s and 1s, known as bits. Modern computers can store vast combinations of these bits to represent any kind of information, from the background image on your screen to the way your music is stored.

Every visual element you see on the screen and every action you perform, such as clicking an icon, are all stored and processed as combinations of 0s and 1s. These bits are grouped into bytes, which represent more complex data.

This ability to store, retrieve, and process information allows computers to perform a wide range of tasks like typing office documents, sending emails, playing games, and browsing the web.

In essence, a computer is a versatile tool that uses combinations of 0s and 1s to perform a wide range of functions, making it indispensable for web development and many other fields.

## Hardware vs. Software

All computers are composed of both hardware and software components.

### Hardware

Hardware includes all the physical parts of a computer:

- **Keyboard**: An input device used to type text and interact with the computer.
- **Mouse**: An input device used to point, click, and interact with the graphical user interface.
- **Internal Components**: Includes the central processing unit (CPU), memory (RAM), storage devices (hard drives, SSDs), motherboard, and other internal circuitry.

### Software

Software refers to the sets of instructions (encoded in 0s and 1s) that tell the computer how to perform tasks:

- **Web Browsers**: Applications like Chrome, Firefox, and Safari used to access and navigate the internet.
- **Games**: Software designed for entertainment, ranging from simple puzzles to complex simulations.
- **Rich Text Word Processors**: Applications like Microsoft Word or Google Docs used for creating and editing text documents.

Every interaction you have with a computer involves both hardware and software. For example, as you read this text, you are using web browser software, and you are likely using hardware like a mouse or keyboard to navigate through the pages.

It's important to note that different types of computers come with different sets of hardware and software. For instance, a desktop computer may have a different set of hardware components compared to a laptop or a smartphone, and they may run different types of software tailored to their specific hardware capabilities.

Understanding the distinction between hardware and software and how they work together is fundamental to mastering computer basics.

## What are the Different Types of Computers?

While the term "computer" often refers to desktops or laptops, many other devices also fall into this category. ATM machines, grocery scanners, and calculators are all examples of computers.

### Desktop Computers

Desktop computers are designed to be placed on a desk and typically consist of:

- Computer case
- Monitor
- Keyboard
- Mouse

### Laptop Computers

Laptops are similar to desktop computers but are compact and portable, with the computer case, monitor, keyboard, and mouse pad integrated into one unit. Laptops run on batteries, whereas desktop computers need to be plugged into a power socket.

### Tablet Computers

Tablets are portable devices similar to laptops but with a touch-sensitive screen instead of a built-in mouse pad.

### Servers

Servers are specialized computers designed to serve information to other computers in a network. This network can be internal (e.g., within a company) or global (e.g., the internet).

### Specialized Computers

Some computers do not fit into the traditional categories of desktops or laptops. Here are a few examples of specialized computers:

- Smartphones
- Wearables
- Game consoles
- Smart TVs

These devices are also considered computers because they store, process, and serve data like any other computer.

## PCs and Macs

Among the many types of computers, two of the most common are:

- PC
- Mac

### PC

The term "PC" began with the original IBM PC introduced in 1981. Other companies started making similar devices, known as IBM PC compatibles or simply PCs. PCs are the most common type of computer and typically come with the Windows operating system pre-installed.

### Mac

The Macintosh computer, introduced in 1984, was the first widely sold computer with a graphical user interface (GUI). All Macs are made by Apple and usually come with macOS

## What is an operating system?

TODO
`,
    "codeLineHighlights": [
    ],
    },
    // CH
    {
        "id": 5,
        "number": 5,
        "title": "asd?",
        "description": "asd.",
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
        [{start: 1, end: 2,}, {start: 4, end: 5,}],
    ],
    },
];