function sidebar() {
    const buttons = [
        { name: "home" },
        { name: "about" },
    ];

    const sidebarContainer = document.createElement("div");
    sidebarContainer.className = "sidebar";

    const closeSidebarButton = document.createElement("button");
    closeSidebarButton.textContent = "close sidebar";
    closeSidebarButton.addEventListener("click", () => {
        asideElement.classList.add("hidden");
    });
    
    sidebarContainer.appendChild(closeSidebarButton);

    const sidebarLine = document.createElement("hr");
    sidebarContainer.appendChild(sidebarLine);

    buttons.forEach(button => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button.name;
        buttonElement.addEventListener("click", () => {
            asideElement.classList.add("hidden");
            navigateTo(button.name)
        });
        sidebarContainer.appendChild(buttonElement);
    });

    asideElement.appendChild(sidebarContainer);
}