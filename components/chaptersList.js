function chaptersList(chapters) {
    const chaptersContainer = document.createElement("div");

    chapters.forEach(chapter => {
        const chapterElement = document.createElement("button");
        chapterElement.className = "chapter-button";

        const chapterTitle = document.createElement("h2");
        chapterTitle.textContent = `Ch.${chapter.number}: ${chapter.title}`;

        const chapterDescription = document.createElement("p");
        chapterDescription.textContent = chapter.description;

        chapterElement.addEventListener("click", () => navigateTo("detail", chapter.id));

        chapterElement.appendChild(chapterTitle);
        chapterElement.appendChild(chapterDescription);

        chaptersContainer.appendChild(chapterElement);
    });

    return chaptersContainer;
}