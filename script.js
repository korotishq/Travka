const scrollBtn = document.getElementById("scrollTopBtn");
const themeToggle = document.getElementById("themeToggle");
window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function acceptCookies() {
    document.getElementById("cookieConsent").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

if(localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieConsent").style.display = "none";
}

// Переключение темы
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    // Изменение текста кнопки
    this.textContent = document.body.classList.contains('dark-theme') ? '☀️ Светлая тема' : '🌙 Темная тема';

    // Сохранение темы в localStorage
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Установка темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').textContent = '☀️ Светлая тема';
    }
});
