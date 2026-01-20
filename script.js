// Hide/Unhide About me
const toggleAboutBtn = document.getElementById('toggleAboutBtn');
const aboutSection = document.getElementById('aboutMe');

toggleAboutBtn.addEventListener('click', () => {
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
        toggleAboutBtn.textContent = 'Hide About Me';
    } else {
        aboutSection.style.display = 'none';
        toggleAboutBtn.textContent = 'Show About Me';
    }
});

//DARK/LIGHT MODE
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Light Mode';
    } else {
        darkModeBtn.textContent = 'Dark Mode';
    }
});
