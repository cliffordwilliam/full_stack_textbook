function navigateTo(page, prop) {
    mainElement.innerHTML = '';

    // Navigate to the requested page.
    switch (page) {
        case "home":
            setLayout("normal");
            home();
            // Go to top of page.
            window.scrollTo(0, 0);
            break;
        case "about":
            setLayout("normal");
            about();
            // Go to top of page.
            window.scrollTo(0, 0);
            break;
        case "detail":
            if (typeof prop === 'number') {
                setLayout("normal");
                detail(prop);
            } else {
                console.error(`Invalid prop (${prop}) for page 'detail'.`);
            }
            // Go to top of page.
            window.scrollTo(0, 0);
            break;
        default:
            console.error(`Unknown page: ${page}`);
            break;
    };
};