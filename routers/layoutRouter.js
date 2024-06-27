let currentLayout = "";

function setLayout(layout) {
    if (layout == currentLayout) {
        return;
    };

    currentLayout = layout;
    
    // Clear existing layout content.
    navElement.innerHTML = '';
    asideElement.innerHTML = '';
    footerElement.innerHTML = '';

    // Set new layout.
    switch (layout) {
        case "normal":
            normal();
            break;
        case "footerless":
            footerless();
            break;
        default:
            console.error(`Unknown layout: ${layout}`);
            break;
    };
};