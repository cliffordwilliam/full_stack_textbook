function navigateTo(page, prop) {
    mainElement.innerHTML = '';

    // Navigate to the requested page.
    switch (page) {
        case "home":
            setLayout("normal");
            home();
            // Go to top of page.
            window.scrollTo(0, 0);
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            break;
        case "about":
            setLayout("normal");
            about();
            // Go to top of page.
            window.scrollTo(0, 0);
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            break;
        default:
            console.error(`Unknown page: ${page}`);
            break;
    };
};