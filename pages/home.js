function home() {
    let searchString = "";
    const totalChapters = chaptersAPI.countByTitle(searchString);
    let limit = Math.min(5, totalChapters);
    let offset = 0;
    let sort = "ASC";

    const homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Home";

    const homePageOpeningParagraph = document.createElement("p");
    homePageOpeningParagraph.textContent = "Use this page to find the chapters you want to read.";

    const chapterSearchLabel = document.createElement("label");
    chapterSearchLabel.htmlFor = 'chaptersSearchInput';
    chapterSearchLabel.textContent = "Search by title: ";

    const chaptersSearchInput = document.createElement("input");
    chaptersSearchInput.type = "text";
    chaptersSearchInput.placeholder = "Enter chapter title to search";
    chaptersSearchInput.addEventListener("input", (event) => { setSearchString(event) });
    chaptersSearchInput.setAttribute("id", "chaptersSearchInput");

    const chaptersLimitInput = document.createElement("input");
    chaptersLimitInput.type = "number";
    chaptersLimitInput.min = 1;
    chaptersLimitInput.value = limit;
    chaptersLimitInput.addEventListener("input", (event) => { setLimit(event) });
    chaptersLimitInput.setAttribute("id", "chaptersLimitInput");

    const chapterLimitLabel = document.createElement("label");
    chapterLimitLabel.htmlFor = 'chaptersLimitInput';
    chapterLimitLabel.textContent = "Items per page: ";

    const sortChapterDropdown = document.createElement("select");
    sortChapterDropdown.innerHTML = `
        <option value="ASC" selected>Ascending</option>
        <option value="DESC">Descending</option>
    `;
    sortChapterDropdown.addEventListener("change", (event) => { setSortOrder(event.target.value) });
    sortChapterDropdown.setAttribute("id", "sortChapterDropdown");

    const chapterSortLabel = document.createElement("label");
    chapterSortLabel.htmlFor = 'sortChapterDropdown';
    chapterSortLabel.textContent = "Sort chapters: ";

    const nextChapterPageButton = document.createElement("button");
    nextChapterPageButton.textContent = "Next page";
    nextChapterPageButton.addEventListener("click", () => { setOffset(offset + limit) });

    const prevChapterPageButton = document.createElement("button");
    prevChapterPageButton.textContent = "Prev page";
    prevChapterPageButton.addEventListener("click", () => { setOffset(Math.max(0, offset - limit)) });

    const pageInfo = document.createElement("p");
    pageInfo.setAttribute("id", "pageInfo");
    
    mainElement.appendChild(homePageTitle);
    mainElement.appendChild(homePageOpeningParagraph);
    mainElement.appendChild(chapterSearchLabel);
    mainElement.appendChild(chaptersSearchInput);
    mainElement.appendChild(chapterLimitLabel);
    mainElement.appendChild(chaptersLimitInput);
    mainElement.appendChild(chapterSortLabel);
    mainElement.appendChild(sortChapterDropdown);
    mainElement.appendChild(prevChapterPageButton);
    mainElement.appendChild(nextChapterPageButton);
    mainElement.appendChild(pageInfo);

    fetchChapters();

    function setSearchString(event) {
        searchString = event.target.value.trim().toLowerCase();
        fetchChapters();
    }

    function setOffset(newOffset) {
        const totalChapters = chaptersAPI.countByTitle(searchString);
        const maxOffset = Math.max(0, totalChapters - limit);
        offset = Math.min(maxOffset, newOffset);
        fetchChapters();
    }

    function setLimit(event) {
        offset = 0;
        const totalChapters = chaptersAPI.countByTitle(searchString);
        limit = Math.min(parseInt(event.target.value), totalChapters);
        fetchChapters();
    }

    function setSortOrder(order) {
        sort = order;
        fetchChapters();
    }

    function fetchChapters() {
        const filteredChapters = chaptersAPI.findByTitle(searchString, limit, offset, sort);
        renderChapters(filteredChapters);
        updatePageInfo();
    }

    function renderChapters(chapters) {
        let chaptersContainer = document.getElementById("chaptersContainer");
        if (chaptersContainer) {
            mainElement.removeChild(chaptersContainer);
        }

        let chaptersContainerErrorMessage = document.getElementById("chaptersContainerErrorMessage");
        if (chaptersContainerErrorMessage) {
            mainElement.removeChild(chaptersContainerErrorMessage);
        }

        if (!chapters || chapters.length === 0) {
            const chaptersContainerErrorMessage = document.createElement("p");
            chaptersContainerErrorMessage.setAttribute("id", "chaptersContainerErrorMessage");
            chaptersContainerErrorMessage.textContent = "No chapters available.";
            mainElement.appendChild(chaptersContainerErrorMessage);
        } else {
            const chaptersContainer = chaptersList(chapters);
            chaptersContainer.setAttribute("id", "chaptersContainer");
            mainElement.appendChild(chaptersContainer);
        }

        const totalChapters = chaptersAPI.countByTitle(searchString);
        prevChapterPageButton.disabled = offset === 0;
        nextChapterPageButton.disabled = offset + limit >= totalChapters;
    }

    function updatePageInfo() {
        const totalChapters = chaptersAPI.countByTitle(searchString);
        const totalPages = Math.ceil(totalChapters / limit);
        const currentPage = Math.ceil(offset / limit) + 1;
    
        const pageInfo = document.getElementById("pageInfo");
    
        // Check for NaN or undefined in currentPage and totalPages
        const displayCurrentPage = isNaN(currentPage) ? 1 : currentPage;
        const displayTotalPages = isNaN(totalPages) ? 1 : totalPages;
    
        pageInfo.textContent = `Page ${displayCurrentPage} of ${displayTotalPages}`;
    }
    
}
