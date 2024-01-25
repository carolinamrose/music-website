export const themeAnalysis = () => {
    const button = document.querySelector(".header__btn");
    const root = document.querySelector("html")
    let darkMode = false;

    button.addEventListener('click', () => {
        darkMode = !darkMode;
        root.classList.toggle('dark-mode');
        button.classList.toggle('header__btn--dark-mode');
    
        localStorage.setItem('theme', JSON.stringify(darkMode));
    })

    darkMode = JSON.parse(localStorage.getItem('theme'));
    if (darkMode){
        root.classList.add('dark-mode');
        button.classList.toggle('header__btn--dark-mode');
    }
}
