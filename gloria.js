let currentPage = 1;
const totalPages = 5;
const music = document.getElementById("bg-music");

function showPage(page) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).classList.remove("active");
  }
  document.getElementById(`page${page}`).classList.add("active");
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    playMusic();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function playMusic() {
  if (music && music.paused) {
    music.volume = 0.4;
    music.play().catch(() => {
      // Autoplay blocked until user interacts
    });
  }
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

// Show first page on load
showPage(currentPage);
