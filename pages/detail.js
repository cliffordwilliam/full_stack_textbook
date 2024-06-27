function detail(chapterId) {
    const chapter = chaptersAPI.findById(chapterId);

    if (!chapter) {
        console.error(`Chapter with ID ${chapterId} not found.`);
        return;
    }

    const chapterDetailTitle = document.createElement("h1");
    chapterDetailTitle.textContent = `Ch.${chapter.number}: ${chapter.title}`;

    const chapterDetailContent = document.createElement("div");
    chapterDetailContent.innerHTML = chapter.content;

    const goToNextChapter = document.createElement("button");
    goToNextChapter.textContent = "next chapter"
    const totalChapters = chaptersAPI.countByTitle("");
    goToNextChapter.addEventListener("click", () => navigateTo("detail", Math.min(chapter.id + 1, totalChapters)));
    if (chapter.id === totalChapters) {
        goToNextChapter.disabled = true;
    }

    const goToPrevChapter = document.createElement("button");
    goToPrevChapter.textContent = "prev chapter"
    goToPrevChapter.addEventListener("click", () => navigateTo("detail", Math.max(chapter.id - 1, 1)));
    if (chapter.id === 1) {
        goToPrevChapter.disabled = true;
    }

    mainElement.appendChild(chapterDetailTitle);
    mainElement.appendChild(chapterDetailContent);
    mainElement.appendChild(goToPrevChapter);
    mainElement.appendChild(goToNextChapter);

    // Highlight code snippet.
    hljs.highlightAll();
};