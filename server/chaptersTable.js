const chaptersTable = [
    // 1
    {
        "id": 1,
        "number": 1,
        "title": "What is this textbook?",
        "description": "See what you will get out of this book.",
        "content": `
<p>
    This book aims to empower you as a full-stack developer with curated resources from the best sources on the internet.
</p>
<h2>
    What will you learn?
</h2>
<p>
    By the end of this book, you will confidently tackle programming challenges independently. Instead of relying on tutorials, courses, or books, you'll leverage documentation and self-study effectively. You will gain a robust understanding of:
</p>
<ul>
    <li>The web.</li>
    <li>Computer fundamentals.</li>
    <li>Web programming.</li>
    <li>Development environments.</li>
    <li>Essential development tools.</li>
    <li>Building websites from scratch.</li>
</ul>
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
<h2>Job Description</h2>
<p>This position involves various responsibilities, including:</p>
<ul>
   <li>
      <strong>Building and Maintaining Sites</strong>:
      <ul>
         <li>Front-end development.</li>
         <li>Back-end development.</li>
         <li>Full-stack development.</li>
      </ul>
   </li>
   <li>
      <strong>Working for Different Clients</strong>:
      <ul>
         <li>Technology companies.</li>
         <li>Organizations.</li>
         <li>Government entities.</li>
      </ul>
   </li>
   <li><strong>Collaborating in a Team Environment</strong>.</li>
   <li>
      <strong>Interests and Passion</strong>:
      <ul>
         <li>Solving puzzles.</li>
         <li>Building and creating things.</li>
         <li>Exploring new technologies and tools.</li>
         <li>Understanding how things work.</li>
         <li>Passionate about programming.</li>
      </ul>
   </li>
</ul>
<h2>Front-end Development</h2>
<p>Front-end developers are responsible for presenting data visually. They create interactive elements like buttons and animations, aiming to make web pages attractive and user-friendly. Their tools include:</p>
<ul>
   <li>HTML</li>
   <li>CSS</li>
   <li>JavaScript</li>
   <li>Front-end frameworks (e.g., React, Angular, Vue.js)</li>
</ul>
<h2>Back-end Development</h2>
<p>Back-end developers handle data manipulation and server-side logic. They manage user authentication, database interactions, and application logic. Their tools typically include:</p>
<ul>
   <li>Java</li>
   <li>Python</li>
   <li>Ruby</li>
   <li>JavaScript (Node.js)</li>
   <li>Back-end frameworks (e.g., Django, Ruby on Rails, Spring)</li>
</ul>
<h2>Full-stack Development</h2>
<p>Full-stack developers manage both front-end and back-end development, bridging the gap between user interface and server-side logic.</p>
<h2>Career Prospects</h2>
<p>Web developers have various career paths to choose from:</p>
<ul>
   <li>
      <strong>Large Tech Companies</strong>:
      <ul>
         <li>Companies like Google, Meta, and Amazon offer high salaries but may have limited opportunities for personal growth.</li>
      </ul>
   </li>
   <li>
      <strong>Startups</strong>:
      <ul>
         <li>Fast-paced environments with lower pay but significant learning opportunities.</li>
      </ul>
   </li>
   <li>
      <strong>Freelancing</strong>:
      <ul>
         <li>Finding your own work with unstable income, requiring more social interaction.</li>
      </ul>
   </li>
   <li>
      <strong>Consulting</strong>:
      <ul>
         <li>Similar to freelancing but with a greater focus on coding tasks.</li>
      </ul>
   </li>
   <li>
      <strong>Established Companies</strong>:
      <ul>
         <li>Slower-paced environments with good pay but dealing with challenging legacy code.</li>
      </ul>
   </li>
</ul>
<h2>Essential Tools for Web Developers</h2>
<ul>
   <li>Computer</li>
   <li>Google (for research and problem-solving)</li>
   <li>Text Editor (e.g., VS Code, Sublime Text)</li>
   <li>Command Line Interface (CLI)</li>
   <li>Stack Overflow (for community support and troubleshooting)</li>
   <li>Git (version control)</li>
   <li>GitHub (code hosting and collaboration)</li>
</ul>
<h2>Motivation</h2>
<p>Programming is not for everyone. If you don't enjoy coding, it's best to explore other careers. Pursuing programming solely for a high salary is not advisable. Success in this field requires passion and perseverance, especially when facing challenging problems. If you enjoy the process of coding and solving complex issues, then web development could be a fulfilling career for you.</p>
<hr/>
<h2>2.1 Why Learning to Code is Hard</h2>
<p>The journey ahead is challenging due to several factors:</p>
<ul>
    <li><strong>Resource Availability</strong>: Resources are abundant for beginners and advanced learners but sparse for intermediates.</li>
    <li><strong>Scope of Knowledge</strong>: You need to learn a lot before you can see the big picture.</li>
</ul>
<h2>Phases</h2>
<figure>
<img src="./public/four_phases_of_coding_journey.webp" alt="four phases of coding journey">
<figcaption>Figure 1: Thinkful. (2023, June 30). Why learning to code is so damn hard [Image]. Wayback Machine. Retrieved June 21, 2024, from https://web.archive.org/web/20230630111131/https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/</figcaption>
</figure>
<h2>Phase I: The Hand-Holding Honeymoon</h2>
<p>When you start learning to code, there are numerous resources designed for beginners, such as Codecademy. These resources are polished and make the learning process seem easy, instilling:</p>
<ul>
    <li>Hope</li>
    <li>Expectations</li>
    <li>Confidence</li>
</ul>
<p>However, after this phase, the abundance of resources diminishes rapidly. You'll feel lost due to the vast scope of topics you need to learn. Unless you have a clear goal, like web development, the variety of subjects can be overwhelming.</p>
<h3>Tips</h3>
<p>During this phase, experiment with various courses until you find one that resonates with you. Your goal is to discover your preferred learning style and areas of interest.</p>
<h2>Phase II: The Cliff of Confusion</h2>
<p>At this stage, you attempt to build projects independently but struggle because:</p>
<ul>
    <li><strong>Resource Density</strong>: Intermediate resources are sparse. You'll often rely on industry blogs and documentation that might be difficult to understand.</li>
    <li><strong>Scope of Knowledge</strong>: You need to learn a lot before the big picture becomes clear. Even within web development, the field is vast, making it hard to choose a specific path.</li>
</ul>
<h3>Tips</h3>
<p>To overcome this phase:</p>
<ul>
    <li>Collaborate with others to ease the debugging process.</li>
    <li>Read others' code to understand their approach, rather than copying blindly.</li>
    <li>Continuously build small projects and seek help when needed.</li>
</ul>
<h2>Phase III: The Desert of Despair</h2>
<p>By now, you should be able to create projects, but distractions on what to build next can derail your progress. Focus on what you want to specialize in rather than trying too many things at once.</p>
<h3>Tips</h3>
<ul>
    <li><strong>Set a Strong Goal</strong>: Specialize in a specific area. Trying to learn everything will dilute your expertise.</li>
    <li><strong>Find a Clear Path</strong>: Use resources that align with your goal.</li>
    <li><strong>Stay Focused</strong>: Avoid distractions and concentrate on coding.</li>
</ul>
<h2>Phase IV: The Upswing of Awesome</h2>
<p>After much trial and error, you've reached a level where you can:</p>
<ul>
    <li>Efficiently use Google for problem-solving.</li>
    <li>Understand industry blogs.</li>
    <li>Be proficient in a specific language or framework and build applications.</li>
</ul>
<p>However, you might still feel like a fraud because you do not fully understand the underlying workings of your tools and frameworks. Keep learning to fill in these gaps.</p>
<h3>Tips</h3>
<p>To land a job and continue improving:</p>
<ul>
    <li><strong>Follow Best Practices</strong>: Aim for production-quality code.</li>
    <li><strong>Verify Assumptions</strong>: Ensure you fully understand the concepts you're working with.</li>
    <li><strong>Tackle Unsexy Skills</strong>: Learn crucial skills like unit testing, data modeling, architecture, and deployment.</li>
    <li><strong>Seek Feedback</strong>: Get feedback from professionals to ensure your code is legible, modular, and maintainable, making you more attractive in a professional setting.</li>
</ul>
<hr/>
<h2>2.2 Web Design: Entry and History</h2>
<p>Web design today primarily refers to front-end development, though it once encompassed the entire process, including:</p>
<ul>
    <li>Web graphic design</li>
    <li>UI design</li>
    <li>Authoring</li>
    <li>UX design</li>
    <li>Search engine optimization (SEO)</li>
</ul>
<h2>Timeline</h2>
<h3>November 1989</h3>
<ul>
    <li>Tim Berners-Lee created the global hypertext project, which became known as the World Wide Web.</li>
    <li>Text-only HTML was the standard.</li>
    <li>Most browsers were Unix-based.</li>
    <li>The Mosaic browser began integrating graphic design.</li>
</ul>
<h3>November 1992</h3>
<ul>
    <li>CERN launched the first website on the World Wide Web.</li>
    <li>Websites used table elements for layouts.</li>
</ul>
<h3>November 1993</h3>
<ul>
    <li>ALIWEB, the first search engine, was created.</li>
</ul>
<h3>October 1994</h3>
<ul>
    <li>W3C (World Wide Web Consortium) was established to prevent monopolization by proprietary browsers and programming languages.</li>
    <li>W3C continues to set web standards.</li>
</ul>
<h3>1994</h3>
<ul>
    <li>Andreessen formed Mosaic Communications Corp, later Netscape Communications, and released the Netscape 0.9 browser.</li>
</ul>
<h3>1996 to 1999: The Browser Wars</h3>
<ul>
    <li>Microsoft and Netscape competed, leading to innovations like CSS, JavaScript, and Dynamic HTML.</li>
</ul>
<h3>1996</h3>
<ul>
    <li>Microsoft released its first competitive browser, supporting style sheets.</li>
    <li>Table tags were still commonly used for layouts, with little concern for semantics or accessibility.</li>
</ul>
<h3>December 1996</h3>
<ul>
    <li>W3C introduced CSS, separating content (HTML) from presentation (CSS) and promoting semantic HTML.</li>
    <li>Table tags were still prevalent.</li>
</ul>
<h3>1998</h3>
<ul>
    <li>Netscape released Netscape Communicator's code under an open-source license.</li>
    <li>The Web Standards Project was initiated to develop standards for HTML and CSS.</li>
</ul>
<h3>2000</h3>
<ul>
    <li>Internet Explorer became the first browser to support HTML 4.01, CSS 1, and PNG format.</li>
    <li>By 2001, Internet Explorer held 96% of the web browser market share.</li>
</ul>
<h3>2001-2012</h3>
<ul>
    <li>Websites evolved as web usage grew.</li>
    <li>Post-browser wars, new open-source browsers outperformed Internet Explorer.</li>
    <li>W3C developed new standards, including HTML5, CSS3, and new JavaScript APIs.</li>
    <li>HTML5 became a term encompassing HTML, CSS3, and JavaScript standards.</li>
</ul>
<h3>2012 and Later</h3>
<ul>
    <li>With the rise of 3G and LTE, web traffic shifted to mobile devices.</li>
    <li>Web design adopted a mobile-first approach, prioritizing mobile layouts.</li>
</ul>
<h2>Tools and Technologies</h2>
<ul>
    <li>Vector and raster graphics editors</li>
    <li>WYSIWYG website builder software or content management systems</li>
    <li>Hand-coded web pages</li>
    <li>Markup validators for web accessibility guidelines (e.g., semantic HTML, ARIA)</li>
</ul>
<h2>UX Design</h2>
<p>UX Design focuses on creating products that provide meaningful and relevant experiences to users, particularly in web-based contexts.</p>
<h2>Skills and Techniques</h2>
<h3>Marketing and Communication Design</h3>
<p>Effective design varies based on the target market. Designers must understand whether a site is B2B or consumer-targeted, as retail and entertainment sites require different approaches. Web designers typically meet with clients to discuss layout, color, graphics, and design.</p>
<h3>User Experience Design and Interactive Design</h3>
<p>Clear layout, instructions, and labeling enhance a website's perceived usefulness, encouraging continued use. The goal is to create a universal user experience that accommodates users of all skill levels.</p>
<h3>Progressive Enhancement</h3>
<p>This strategy prioritizes web content, ensuring immediate access to basic content and functionality, even on low-end machines. HTML is served first, followed by CSS and JavaScript, maximizing compatibility and minimizing load times. Sites like Wikipedia use progressive enhancement, while others, like Everipedia, may not.</p>
<h3>Page Layout</h3>
<p>Fixed-width websites were common in the past, but fluid layouts gained popularity around 2000. Modern responsive web designs use CSS3 and the @media rule. In March 2018, Google announced mobile-first indexing, favoring responsive designs in search results.</p>
<h3>Typography</h3>
<p>Limiting font variety improves visual consistency and performance. Safe fonts available in most browsers are recommended. With CSS3, web typography has become more sophisticated, often utilizing negative space and avoiding center-aligned text.</p>
<h3>Motion Graphics</h3>
<p>Entertainment websites frequently use animations. However, W3C accessibility standards require that animations be disableable by users.</p>
<h3>Quality of Code</h3>
<p>Good practices, such as clear element functions and maintainable layouts, prevent "tag soup" (poorly written HTML). Use W3C validation tools to ensure your HTML is semantic and standards-compliant.</p>
<h3>Generated Content</h3>
<p>Web pages can be static or dynamic:</p>
<ul>
    <li><strong>Static Websites</strong>: Files are assembled on the server and sent as-is to the browser. Clicking a button reloads the entire page.</li>
    <li><strong>Dynamic Websites</strong>: Parts of the page can update independently. They may use relational or document databases (e.g., MongoDB or NoSQL). Early dynamic pages used Perl, PHP, or ASP, with templating methods like EJS tags.</li>
</ul>
<p>Content management systems like WordPress allow users to create and manage pages without coding, including user authorization for page edits.</p>
<h3>Technical Communication in Web Design</h3>
<p>Effective communication enhances the perceived validity and usefulness of work. The communication coefficient measures how well complex concepts are explained, based on these principles:</p>
<ol>
    <li>Communication influences how others perceive our work.</li>
    <li>Judgments about communication quality depend on personal factors like experience, preferences, and technical background.</li>
    <li>Communication matters in all interpersonal interactions to varying degrees.</li>
</ol>
<h2>Homepage Design</h2>
<p>Historically, the homepage was crucial for attracting visitors. However, by the 2000s, traffic began bypassing homepages for internal content. By 2007, homepages were considered less important. In 2013, the use of carousel sliders on homepages became common, though they were later deemed ineffective for SEO and usability.</p>
<h2>Occupations in Web Design</h2>
<p>Creating a website typically involves several roles:</p>
<ul>
    <li><strong>Web Designer</strong>: Focuses on visual aspects, layout, coloring, and typography. In larger companies, this role often involves only HTML and CSS. In smaller companies, designers may also need coding skills.</li>
    <li><strong>Web Developer</strong>: Specializes in front-end, back-end, or full-stack development.</li>
    <li><strong>Graphic Designer</strong>: Creates logos, layouts, and buttons.</li>
    <li><strong>Internet Marketing Specialist</strong>: Develops marketing and promotional strategies to maintain web presence.</li>
    <li><strong>SEO Writer</strong>: Recommends keywords to improve search engine rankings.</li>
    <li><strong>Internet Copywriter</strong>: Writes appealing content for the target audience.</li>
    <li><strong>User Experience (UX) Designer</strong>: Focuses on user-centered design, testing, interaction design, and visual design.</li>
</ul>
<hr />
<h2>2.3 How Can I Become a Really Good Web Developer?</h2>
<h3>Do not Get into Development for the Wrong Reasons</h3>
<p>Becoming a developer should be driven by a passion for the craft and the instant gratification that comes with seeing your code come to life. The ability to make changes and see the outcome with just a refresh can be incredibly rewarding. However, don't pursue web development solely because you dream of becoming an internet entrepreneur, are enticed by high salaries, or are attracted to the culture of tech companies. These perks are not guaranteed, and many clients you encounter may be former developers who did not succeed or gave up.</p>
<p>The bottom line is that if you don't genuinely have a passion for at least one aspect of web development, it's wise to reconsider. A true developer cares deeply about their work and the products they create. You'll find greater satisfaction when you value your technical skills more than any external rewards.</p>
<h3>Find Where You Fit In</h3>
<p>Web development is a vast field. It's important to identify your interests and strengths. You might start as a front-end developer and later explore back-end development or vice versa. Understanding where you fit in will help you focus your learning and growth effectively.</p>
<h3>Get Involved in the Community</h3>
<p>Engage with the web development community by following influential bloggers and thought leaders on platforms like Twitter. Some key figures to follow include:</p>
<ul>
    <li>Jeffrey Zeldman</li>
    <li>Molly Holzschlag</li>
    <li>Jeremy Keith</li>
    <li>Eric Meyer</li>
    <li>Bryan Veloso</li>
    <li>Jason Kottke</li>
    <li>Ben Alman</li>
    <li>Paul Irish</li>
    <li>Rebecca Murphy</li>
    <li>Jonathan Snook</li>
</ul>
<p>Being part of the community will keep you updated on industry trends, best practices, and provide valuable networking opportunities.</p>
<h3>Buy Books and Read</h3>
<p>Invest in ePub versions of books, as physical ones can quickly become outdated. However, for topics on general practices or architecture, physical books can be useful. Some recommended front-end books include:</p>
<ul>
    <li><a rel="noreferrer" target="_new" href="http://smacss.com/">SMACSS (free version available)</a></li>
    <li><a rel="noreferrer" target="_new" href="http://www.simplebits.com/publications/bulletproof/">Bulletproof Web Design</a></li>
    <li><a rel="noreferrer" target="_new" href="http://www.abookapart.com/">A Book Apart Series</a></li>
    <li><a rel="noreferrer" target="_new" href="http://oreilly.com/css-html/index.html">O'Reilly books</a></li>
</ul>
<p>Reading extensively will expand your knowledge and keep you informed about the latest developments in the field.</p>
<h3>Practice, Challenge Yourself, and Work for Others</h3>
<p>Regularly code for fun and re-create existing projects to sharpen your skills. Consider building websites for non-profit organizations to gain experience. Participate in coding challenges to push your boundaries. Always be honest about your abilities and avoid overselling yourself. Continuous practice and real-world experience are crucial to becoming a proficient web developer.</p>
<hr />
<h2>2.4 What Makes an Excellent Web Developer?</h2>
<h3>The Hacker Mindset</h3>
<p>An excellent web developer possesses a hacker mindset, meaning they love to understand how things work. This curiosity drives them to explore, experiment, and constantly learn.</p>
<h3>Passionate About Their Trade</h3>
<p>A great web developer is passionate about web development. They often work on personal projects or explore new technologies in their spare time. Their interest in the field goes beyond just earning a paycheck; they genuinely enjoy and are intrigued by the work they do.</p>
<h3>Excellent Knowledge of HTML</h3>
<p>HTML is the foundation of web development. An excellent web developer has a deep understanding of HTML and can use it effectively to create structured and semantic web content.</p>
<h3>Knowledge of HTTP</h3>
<p>Understanding how the web works is crucial. A great web developer knows how HTTP operates, including how web servers and user-agents communicate and exchange information.</p>
<h3>Language/Platform-Agnostic</h3>
<p>While specialization can be valuable, an excellent web developer is flexible and adaptable. They are not tied to one language or framework but instead choose the best tools for each project. This versatility allows them to solve problems more effectively.</p>
<h3>Separation of Concerns</h3>
<p>An excellent web developer adheres to the principle of separation of concerns. They write clean HTML, separate CSS, and add JavaScript in a way that keeps each layer distinct and manageable. This also applies to back-end development, where views, controllers, and models are kept separate to maintain code clarity and organization.</p>
</div>
<hr />
<h2>TODO</h2>
<h2>2.5 What Makes A Good Developer?</h2>
<h2>2.6 Things I Wish Someone Had Told Me When I Was Learning How to Code</h2>
<h2>2.7 Don’t Believe Anyone Who Tells You Learning To Code Is Easy</h2>
<h2>2.8 Deliberate Programming Practice</h2>
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
<p></p>
<ul>
    <li>asd</li>
    <li>asd</li>
</ul>
<pre><code>View.OnClickListener listener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.d(&#x22;TAG&#x22;, &#x22;Clicked!&#x22;);
    }
}
</code></pre>
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
<p></p>
<ul>
    <li>asd</li>
    <li>asd</li>
</ul>
<pre><code>View.OnClickListener listener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.d(&#x22;TAG&#x22;, &#x22;Clicked!&#x22;);
    }
};
</code></pre>`,
    "codeLineHighlights": [
    ],
    },
];