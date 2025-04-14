const moodChange = document.querySelector("#mood");

const body = document.querySelector("body");
const projectItemsColores = document.querySelectorAll(".porjectContainer");


// Function to change the background and text color
moodChange.addEventListener("click", () => {
    let colors = [
        { bg: "#f5f5f5", text: "#000000" },
        { bg: "#ffffff", text: "#000000" },
        { bg: "#f0f8ff", text: "#000000" },
        { bg: "#f9fafb", text: "#000000" },
        { bg: "#e3f2fd", text: "#000000" },
        { bg: "#fff3e0", text: "#000000" },
        { bg: "#e8f5e9", text: "#000000" },
        { bg: "#fce4ec", text: "#000000" },
        { bg: "#e0f7fa", text: "#000000" },
        { bg: "#f3e5f5", text: "#000000" },
        { bg: "#1e1e1e", text: "#ffffff" },
        { bg: "#0f172a", text: "#ffffff" },
        { bg: "#121212", text: "#ffffff" },
        { bg: "#2d2d2d", text: "#ffffff" },
        { bg: "#1a1a2e", text: "#ffffff" },
        { bg: "#1f2937", text: "#ffffff" },
        { bg: "#343a40", text: "#ffffff" },
        { bg: "#2c3e50", text: "#ffffff" },
        { bg: "#212121", text: "#ffffff" },
        { bg: "#3e3e3e", text: "#ffffff" }
      ];
      
      
      let randomColor = colors[Math.floor(Math.random() * colors.length)];

      document.body.style.backgroundColor = randomColor.bg;
    //   document.body.style.color = randomColor.text;

        
      
      console.log(randomColor.bg);
      console.log(randomColor.text);
      
});
const aboutToggle = document.getElementById('aboutToggle');
const aboutText = document.getElementById('aboutText');


aboutToggle.addEventListener('click', () => {
  if (aboutText.style.display === 'none') {
    aboutText.style.display = 'block';
  } else {
    aboutText.style.display = 'none';
  }
});