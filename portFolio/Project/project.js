const aboutToggles = document.querySelectorAll('.aboutToggle');
const aboutTexts = document.querySelectorAll('.aboutText');

aboutToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    const aboutText = aboutTexts[index];
    if (aboutText.style.display === 'none') {
      aboutText.style.display = 'block';
    } else {
      aboutText.style.display = 'none';
    }
  });
});