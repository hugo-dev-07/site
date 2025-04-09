const toggletheme = document.getElementById("toggletheme"); // Corrigido para "toggletheme"
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    
    // Alternar entre temas
    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    // Alternar as classes dos ícones
    toggletheme.classList.toggle("bi-sun");
    toggletheme.classList.toggle("bi-moon-stars");
}

// Adicionando o evento para trocar o tema quando clicado
toggletheme.addEventListener("click", changeTheme);