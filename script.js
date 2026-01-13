const mMenuBtn = document.getElementById("mMenuBtn");
const mNavMenu = document.getElementById("mNavMenu");

mMenuBtn.addEventListener("click", () => {
  mNavMenu.classList.toggle("active");
});


const pages = document.querySelectorAll(".page");
let current = 0;

function autoFlip() {
  if(current < pages.length){
    pages[current].classList.add("flipped");
    current++;
  } else {
    // Reset after last page
    pages.forEach(p => p.classList.remove("flipped"));
    current = 0;
  }
}

// Flip every 3 seconds
setInterval(autoFlip, 3000);


const counters = document.querySelectorAll('.counter');
let started = false;

function runCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 60;

    const update = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    runCounter();
    started = true;
  }
}, { threshold: 0.6 });

observer.observe(document.querySelector('.about-stats'));



const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".g-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let msg = `Hello, I want to book mehndi service.

Name: ${bName.value}
Mobile: ${bPhone.value}
City: ${bCity.value}
Event: ${bEvent.value}
Date: ${bDate.value}
Hands: ${bHands.value}
Message: ${bMsg.value}`;

  let url = "https://wa.me/916398898695?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
});
