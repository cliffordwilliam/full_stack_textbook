function about() {
    const aboutPageTitle = document.createElement("h1");
    aboutPageTitle.textContent = "About";

    const aboutOpeningParagraphElement = document.createElement("p");
    aboutOpeningParagraphElement.innerHTML = `
        Welcome to this website and thank you for exploring! I'm Clifford William, a web developer based in Indonesia. Through this platform, my goal is to share comprehensive web development knowledge to empower learners worldwide.
        <br><br>
        My journey into web development began with a passion for creating digital solutions that make a difference. This book and website represent my dedication to fostering a community of lifelong learners in the field of web development.
        <br><br>
        I extend my deepest gratitude to my parents for their unwavering support and encouragement throughout my career.
    `;
    
    mainElement.appendChild(aboutPageTitle);
    mainElement.appendChild(aboutOpeningParagraphElement);
}
