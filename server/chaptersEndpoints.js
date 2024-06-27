const chaptersAPI = {
    findById: (chapterId) => {
        return chaptersTable.find(chapter => chapter.id === chapterId);
    },
    findByTitle: (title, limit = 10, offset = 0, sort = 'ASC') => {
        let filteredChapters = chaptersTable.filter(chapter =>
            chapter.title.toLowerCase().includes(title.toLowerCase())
        );

        // Sorting logic based on sort order (ASC or DESC)
        if (sort === 'ASC') {
            filteredChapters.sort((a, b) => a.number - b.number);
        } else if (sort === 'DESC') {
            filteredChapters.sort((a, b) => b.number - a.number);
        }

        return filteredChapters.slice(offset, offset + limit);
    },
    countByTitle: (title) => {
        return chaptersTable.filter(chapter =>
            chapter.title.toLowerCase().includes(title.toLowerCase())
        ).length;
    },
};
