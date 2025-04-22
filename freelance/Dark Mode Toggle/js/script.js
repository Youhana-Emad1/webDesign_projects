const toggleButton = document.getElementById('toggle-btn');  

// Check localStorage for theme preference  
const currentTheme = localStorage.getItem('theme');  
if (currentTheme) {  
    document.documentElement.setAttribute('data-theme', currentTheme);  
    toggleButton.setAttribute('aria-pressed', currentTheme === 'dark');  
}  
 
toggleButton.addEventListener('click', () => {  
    let theme = document.documentElement.getAttribute('data-theme');  

    if (theme === 'light') {  
        document.documentElement.setAttribute('data-theme', 'dark');  
        localStorage.setItem('theme', 'dark');  
        toggleButton.setAttribute('aria-pressed', 'true');  
        document.getElementById('icon').textContent = '🌜'; 
    } else {  
        document.documentElement.setAttribute('data-theme', 'light');  
        localStorage.setItem('theme', 'light');  
        toggleButton.setAttribute('aria-pressed', 'false');  
        document.getElementById('icon').textContent = '🌞';
    }  
});  