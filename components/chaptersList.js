function chaptersList(chapters) {
    const chaptersContainer = document.createElement("div");

    chapters.forEach(chapter => {
        const chapterElement = document.createElement("div");
        chapterElement.className = "card";

        const chapterTitle = document.createElement("h2");
        chapterTitle.textContent = `Ch.${chapter.number}: ${chapter.title}`;

        const chapterDescription = document.createElement("p");
        chapterDescription.textContent = chapter.description;

        const chapterReadMore = document.createElement("button");
        chapterReadMore.textContent = "Read more";

        chapterReadMore.addEventListener("click", () => navigateTo("detail", chapter.id));

        chapterElement.appendChild(chapterTitle);
        chapterElement.appendChild(chapterDescription);
        chapterElement.appendChild(chapterReadMore);

        chaptersContainer.appendChild(chapterElement);
    });

    return chaptersContainer;
}