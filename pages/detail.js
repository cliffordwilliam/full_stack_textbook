function detail(chapterId) {
    const chapter = chaptersAPI.findById(chapterId);

    if (!chapter) {
        console.error(`Chapter with ID ${chapterId} not found.`);
        return;
    }

    const detailPageTitle = document.createElement("h1");
    detailPageTitle.textContent = `Chapter ${chapter.number}: ${chapter.title}`;

    const chapterDetailContent = document.createElement("div");
    chapterDetailContent.innerHTML = chapter.content;

    const detailGoToNextChapter = document.createElement("button");
    detailGoToNextChapter.textContent = "next chapter"
    const totalChapters = chaptersAPI.countByTitle("");
    detailGoToNextChapter.addEventListener("click", () => navigateTo("detail", Math.min(chapter.id + 1, totalChapters)));
    if (chapter.id === totalChapters) {
        detailGoToNextChapter.disabled = true;
    }

    const detailGoToPrevChapter = document.createElement("button");
    detailGoToPrevChapter.textContent = "prev chapter"
    detailGoToPrevChapter.addEventListener("click", () => navigateTo("detail", Math.max(chapter.id - 1, 1)));
    if (chapter.id === 1) {
        detailGoToPrevChapter.disabled = true;
    }

    const detailGoToHome = document.createElement("button");
    detailGoToHome.textContent = "go home"
    detailGoToHome.addEventListener("click", () => navigateTo("home"));

    let converter = new showdown.Converter();
    let text = chapter.content;
    let html = converter.makeHtml(text);
    chapterDetailContent.innerHTML = html;
    
    mainElement.appendChild(detailPageTitle);
    mainElement.appendChild(chapterDetailContent);
    mainElement.appendChild(detailGoToPrevChapter);
    mainElement.appendChild(detailGoToHome);
    mainElement.appendChild(detailGoToNextChapter);

    // Highlight code snippet.
    hljs.highlightAll();
    hljs.initLineNumbersOnLoad();
    // Create a new array each time.
    const newArray = chapter.codeLineHighlights.map(highlightRanges =>
        highlightRanges.map(range => ({ ...range, color: highlightColor }))
    );
    hljs.highlightLinesAll(newArray);
};