// script.js
console.log("Portfolio Loaded: Gendri Raditia");
// Certificate Popup
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".cert-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) modal.style.display = "none";
};

// SLIDER LOGIC
document.querySelectorAll('.slider').forEach(slider => {
  let index = 0;
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const total = images.length;

  slider.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });

  slider.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });
});

// PROJECT IMAGE POPUP (pakai modal yang sudah ada)
document.querySelectorAll(".slides img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
