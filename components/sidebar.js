function sidebar() {
    const buttons = [
        { name: "home" },
        { name: "about" },
    ];

    const sidebarContainer = document.createElement("div");
    sidebarContainer.className = "sidebar card";

    const closeSidebarButton = document.createElement("button");
    closeSidebarButton.textContent = "close sidebar";
    closeSidebarButton.addEventListener("click", () => {
        asideElement.classList.add("hidden");
    });
    
    sidebarContainer.appendChild(closeSidebarButton);

    buttons.forEach(button => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button.name;
        buttonElement.addEventListener("click", () => navigateTo(button.name));
        sidebarContainer.appendChild(buttonElement);
    });

    asideElement.appendChild(sidebarContainer);
}