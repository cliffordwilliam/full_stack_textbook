function footer() {
    const footerContainer = document.createElement("div");
    footerContainer.className = "card";

    const footerTitleElement = document.createElement("h2");
    footerTitleElement.textContent = "Footer";

    const footerOpeningParagraphElement = document.createElement("p");
    footerOpeningParagraphElement.textContent = "This single-page application (SPA) is created by Clifford William using only HTML, CSS, and JavaScript. No frameworks were used.";

    const footerAdditionalInfo = document.createElement("p");
    footerAdditionalInfo.textContent = "Explore more about web development, programming tips, and practical coding advice on this platform.";

    // const footerContactInfo = document.createElement("p");
    // footerContactInfo.innerHTML = `Contact: <a href='mailto:clifford@example.com'>clifford@example.com</a>`;

    const footerGithubLink = document.createElement("p");
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/cliffordwilliam";
    githubLink.textContent = "GitHub Profile";
    footerGithubLink.appendChild(githubLink);

    const footerCopyright = document.createElement("small");
    footerCopyright.textContent = "\u00A9 2024 Clifford William. All rights reserved.";

    footerContainer.appendChild(footerTitleElement);
    footerContainer.appendChild(footerOpeningParagraphElement);
    footerContainer.appendChild(footerAdditionalInfo);
    // footerContainer.appendChild(footerContactInfo);
    footerContainer.appendChild(footerGithubLink);
    footerContainer.appendChild(footerCopyright);

    const footerElement = document.getElementById("footer");
    footerElement.appendChild(footerContainer);
}
