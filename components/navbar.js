function navbar() {

    const navbarContainer = document.createElement("div");
    navbarContainer.className = "navbar card";

    const navbarTitle = document.createElement("span");
    navbarTitle.textContent = "Full stack textbook";
    navbarTitle.className = "navbar-title";

    const openSidebarButton = document.createElement("button");
    openSidebarButton.textContent = "open sidebar";
    openSidebarButton.addEventListener("click", () => {
        asideElement.classList.remove("hidden");
    });
    
    navbarContainer.appendChild(navbarTitle);
    navbarContainer.appendChild(openSidebarButton);
    navElement.appendChild(navbarContainer);
};