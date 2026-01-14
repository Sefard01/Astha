const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

/* Toggle only when clicking hamburger */
hamburger.addEventListener("click", (e)=>{
  e.stopPropagation(); 
  navLinks.classList.toggle("show");
});

/* Prevent closing when clicking inside menu */
navLinks.addEventListener("click", (e)=>{
  e.stopPropagation();
});

/* Close menu when clicking anywhere else on page */
document.addEventListener("click", ()=>{
  navLinks.classList.remove("show");
});



const pages = document.querySelectorAll(".page");

const images = [
    "https://chatgpt.com/backend-api/estuary/content?id=file_000000006b1c71f88d6825ddb3eed23b&ts=491224&p=fs&cid=1&sig=0490cf9f383d92165a173994dc58247947b582d9c87d7f9eabb278fd3ba6cb04&v=0",
    "https://media.istockphoto.com/id/2196078826/photo/indian-brides-wedding-henna-mehendi-mehndi-hands-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=0_RuntCndweiGjyroEXda5MoA7AwxCxKG3TQPOZT644=",
    "https://media.istockphoto.com/id/2247140651/photo/the-image-displays-an-intricate-example-of-mehndi-which-is-a-form-of-temporary-body-art-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=YHnt8-kFtsPntE5taxImUQtF1eSbPZIxdBVUwhM42WM=",
    "https://media.istockphoto.com/id/2233699820/photo/the-image-displays-hands-with-a-fresh-application-of-henna-also-known-as-mehandi.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEBQJ-yPjexuhKfAipi39JEqODHvgwt__Av-0wT77eU=",
    "https://media.istockphoto.com/id/2234267018/photo/intricate-mehndi-design-with-a-circular-floral-pattern-on-the-palm-detailed-fingertip-motifs.webp?a=1&b=1&s=612x612&w=0&k=20&c=xYjAFBuIwx6SWXQv6aQ5truiQY2lJhbt2tWYk30YeXQ=",
    "https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVoYW5kaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1147965459/photo/henna-tattoo.webp?a=1&b=1&s=612x612&w=0&k=20&c=1PoLPfrRCALQYNvfuotgy8EzetJBEHKJjYYdAogW1TU=",
    "https://media.istockphoto.com/id/1605676658/photo/mehndi-artist-making-mehndi-bridal-hand-in-india-mehndi-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtuHb5dfTQ_xcr67DKEDbRrg5wjI49xMCoBT63rpAeM=",
    "https://media.istockphoto.com/id/1746431413/photo/henna-on-hands-indian-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=gLc43XLOiEAI1eUd8vHm9dGR8yFG2D3O6jFaNVT6MXE=",
    "https://media.istockphoto.com/id/2179574059/photo/a-woman-is-preparing-for-the-karwa-chauth-festival-by-getting-beautiful-mehendi-applied-to.jpg?s=612x612&w=0&k=20&c=LEyy1umjmaVPuB2sCxOwKOVBw6tT7XQY6UmcRO2Pr-Y=",
    "https://media.istockphoto.com/id/2179574074/photo/two-joyful-indian-women-show-their-beautiful-henna-designs-captured-during-the-karva-chauth.jpg?s=612x612&w=0&k=20&c=NSmDEpcRQyt197aQ1qvtF2qv3olVHPTXUiMamd8lvHE=",
    "https://images.unsplash.com/photo-1703008199278-82b6c9fe3aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVoYW5kaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1132794878/photo/mehndi-henna-tattoo-hands.jpg?s=612x612&w=0&k=20&c=RLiWYsp3b8qhO0r4VelQrzzH-D_Bxt7nTZFAd-ydvZI=",
    "https://media.istockphoto.com/id/1276691490/photo/mehndi-designs-of-hand-of-a-groom.jpg?s=612x612&w=0&k=20&c=VypifjT2i326it44-psRel-ZU2kkQWLV3hSl0LdTT2o=",
    "https://media.istockphoto.com/id/1142794047/photo/popular-mehndi-designs-for-hands-or-hands-painted-with-mehandi-indian-traditions.jpg?s=612x612&w=0&k=20&c=JUQq6S2Npx4WSsYZAd-NusamOw1Vk9iuhGgs-oYvN8M=",
    "https://media.istockphoto.com/id/1480613961/photo/beautiful-artwork-drawn-on-the-hand-of-an-indian-bride-with-herbal-heena-in-wet-condition.jpg?s=612x612&w=0&k=20&c=oO97eenPCjLwu6xxt9AEQyuZXptWS9BzpOVQVu_jXXs=",
    "https://media.istockphoto.com/id/1358965095/photo/hand-decorated-with-henna.jpg?s=612x612&w=0&k=20&c=dOsMp1TbOTdH6S7J9Q-TbrgIlfMeYa8vLb_AMJSl0LU=",
    "https://media.istockphoto.com/id/1148566343/photo/indian-woman-in-traditional-sari-dress-with-henna-tattoo-doing-hands-dance-movement.jpg?s=612x612&w=0&k=20&c=NoPcdjDZ37UVOi2wrXrPBekLeG_s2ndxWhdeV4GUQrw=",
    "https://media.istockphoto.com/id/1067216368/photo/bengali-wedding-rituals.jpg?s=612x612&w=0&k=20&c=rdiBezF-jn-cbfYV__0GP0Lfhz5Y1S8oQ9t6FO1BOzM=",
    "https://media.istockphoto.com/id/1033161262/photo/artist-grafting-temporary-henna-mehendi-tattoo-art-onto-hand-finger.jpg?s=612x612&w=0&k=20&c=hRGdXkM5qhoRGBVOmfN9fw8czpzFMKAwIxHvBntuOWs=",
    

    
];

// Set background images via JS only
pages.forEach((page, index) => {
    page.style.backgroundImage = `url(${images[index]})`;
});

let current = 0;

// Auto flip effect
setInterval(() => {
    if (current < pages.length) {
        pages[current].classList.add("flipped");
        current++;
    } else {
        pages.forEach(p => p.classList.remove("flipped"));
        current = 0;
    }
}, 2000);

const aboutSection = document.createElement("section");
aboutSection.id = "services";
aboutSection.className = "about";

aboutSection.innerHTML = `
  <div class="about-card">
    <div class="artist-img">
      <img src="images/didi.jpg" alt="Mehndi Artist">
    </div>

    <div class="artist-info">
      <h2>Astha – Lead Mehndi Artist</h2>
      <span>10+ Years of Bridal & Festive Art</span>
      <p>
        Main sirf mehndi apply nahi karti, main har bride ke haathon par
        uski kahani likhti hoon. Traditional Indian patterns se lekar
        Arabic aur Indo-Western fusion designs tak, har artwork ek emotion hai.
      </p>

      <ul>
        <li>✔ 500+ Happy Brides</li>
        <li>✔ Premium Herbal Mehndi</li>
        <li>✔ Destination Wedding Expert</li>
        <li>✔ Custom Design Guarantee</li>
      </ul>
    </div>
  </div>
`;

document.body.appendChild(aboutSection);



const gallerySection = document.createElement("section");
gallerySection.id = "gallery";
gallerySection.className = "pinterest-gallery";

let galleryHTML = `<h2 class="gallery-title">Our Mehndi Creations</h2><div class="grid">`;

images.forEach(img=>{
  galleryHTML += `
    <div class="grid-item">
      <img src="${img}" alt="Mehndi Design">
    </div>
  `;
});

galleryHTML += `</div>`;
gallerySection.innerHTML = galleryHTML;

document.body.appendChild(gallerySection);


const designData = {
  Bridal: [
     "https://media.istockphoto.com/id/2196078826/photo/indian-brides-wedding-henna-mehendi-mehndi-hands-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=0_RuntCndweiGjyroEXda5MoA7AwxCxKG3TQPOZT644=",
    "https://media.istockphoto.com/id/2247140651/photo/the-image-displays-an-intricate-example-of-mehndi-which-is-a-form-of-temporary-body-art-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=YHnt8-kFtsPntE5taxImUQtF1eSbPZIxdBVUwhM42WM=",
    "https://media.istockphoto.com/id/2233699820/photo/the-image-displays-hands-with-a-fresh-application-of-henna-also-known-as-mehandi.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEBQJ-yPjexuhKfAipi39JEqODHvgwt__Av-0wT77eU=",
  ],
  Arabic: [
    
    "https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVoYW5kaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1147965459/photo/henna-tattoo.webp?a=1&b=1&s=612x612&w=0&k=20&c=1PoLPfrRCALQYNvfuotgy8EzetJBEHKJjYYdAogW1TU=",
    "https://media.istockphoto.com/id/1605676658/photo/mehndi-artist-making-mehndi-bridal-hand-in-india-mehndi-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtuHb5dfTQ_xcr67DKEDbRrg5wjI49xMCoBT63rpAeM=",
    "https://media.istockphoto.com/id/1746431413/photo/henna-on-hands-indian-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=gLc43XLOiEAI1eUd8vHm9dGR8yFG2D3O6jFaNVT6MXE=",
  ],
  Minimal: [
   
    "https://media.istockphoto.com/id/1132794878/photo/mehndi-henna-tattoo-hands.jpg?s=612x612&w=0&k=20&c=RLiWYsp3b8qhO0r4VelQrzzH-D_Bxt7nTZFAd-ydvZI=",
    "https://media.istockphoto.com/id/1276691490/photo/mehndi-designs-of-hand-of-a-groom.jpg?s=612x612&w=0&k=20&c=VypifjT2i326it44-psRel-ZU2kkQWLV3hSl0LdTT2o=",
    "https://media.istockphoto.com/id/1142794047/photo/popular-mehndi-designs-for-hands-or-hands-painted-with-mehandi-indian-traditions.jpg?s=612x612&w=0&k=20&c=JUQq6S2Npx4WSsYZAd-NusamOw1Vk9iuhGgs-oYvN8M=",
    "https://media.istockphoto.com/id/1480613961/photo/beautiful-artwork-drawn-on-the-hand-of-an-indian-bride-with-herbal-heena-in-wet-condition.jpg?s=612x612&w=0&k=20&c=oO97eenPCjLwu6xxt9AEQyuZXptWS9BzpOVQVu_jXXs=",
  ],
  Festival: [
    
    "https://media.istockphoto.com/id/1358965095/photo/hand-decorated-with-henna.jpg?s=612x612&w=0&k=20&c=dOsMp1TbOTdH6S7J9Q-TbrgIlfMeYa8vLb_AMJSl0LU=",
    "https://media.istockphoto.com/id/1148566343/photo/indian-woman-in-traditional-sari-dress-with-henna-tattoo-doing-hands-dance-movement.jpg?s=612x612&w=0&k=20&c=NoPcdjDZ37UVOi2wrXrPBekLeG_s2ndxWhdeV4GUQrw=",
    "https://media.istockphoto.com/id/1067216368/photo/bengali-wedding-rituals.jpg?s=612x612&w=0&k=20&c=rdiBezF-jn-cbfYV__0GP0Lfhz5Y1S8oQ9t6FO1BOzM=",
    "https://media.istockphoto.com/id/1033161262/photo/artist-grafting-temporary-henna-mehendi-tattoo-art-onto-hand-finger.jpg?s=612x612&w=0&k=20&c=hRGdXkM5qhoRGBVOmfN9fw8czpzFMKAwIxHvBntuOWs=",
  ]
};

const designSection = document.createElement("section");
designSection.id = "contact";
designSection.className = "design-section";

let btns = `<div class="filter-btns">`;
Object.keys(designData).forEach(cat=>{
  btns += `<button onclick="filterDesign('${cat}')">${cat}</button>`;
});
btns += `</div><div id="designGrid" class="design-grid"></div>`;

designSection.innerHTML = `<h2 class="design-title">Choose Your Mehndi Style</h2>` + btns;
document.body.appendChild(designSection);

function filterDesign(category){
  const grid = document.getElementById("designGrid");
  grid.innerHTML = "";

  designData[category].forEach(img=>{
    grid.innerHTML += `
      <div class="design-item">
        <img src="${img}">
      </div>
    `;
  });
}

filterDesign("Bridal");
const bookingSection = document.createElement("section");
bookingSection.className = "booking-section";

bookingSection.innerHTML = `
  <h2 class="booking-title" id="bookNow">Book Your Mehndi Session</h2>

  <form id="bookingForm" class="booking-form">
    <input type="text" id="name" placeholder="Full Name" required>
    <input type="tel" id="mobile" placeholder="Mobile Number" required>
    <input type="date" id="date" required>
    <select id="style" required>
      <option value="">Select Mehndi Style</option>
      <option>Bridal</option>
      <option>Arabic</option>
      <option>Minimal</option>
      <option>Festival</option>
    </select>
    <textarea id="message" placeholder="Your Message / Venue / Special Request"></textarea>
    <button type="submit">Confirm Booking</button>
  </form>
`;

document.body.appendChild(bookingSection);

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const date = document.getElementById("date").value;
  const style = document.getElementById("style").value;
  const message = document.getElementById("message").value;

  // Construct WhatsApp message
  const whatsappMessage = `Hello! I would like to book a Mehndi session.%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Date: ${date}%0A
Mehndi Style: ${style}%0A
Message: ${message}`;

  // Replace PHONE_NUMBER with the artist's WhatsApp number (with country code)
  const whatsappNumber = "916398898695"; // example: +91 for India
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");

  // Reset form
  this.reset();
});

const footer = document.createElement("footer");
footer.className = "site-footer";

footer.innerHTML = `
  <div class="footer-box">
    <div class="footer-brand">
      <img src="images/logo.png">
      <p>Bridal | Arabic | Minimal | Festival Mehndi Designs</p>

      <div class="footer-socials">
        <a href="#" title="Instagram"><img src="images/insta.svg" alt="ins"></a>
        <a href="#" title="Facebook"><img src="images/fb.svg" alt="fb"></a>
        <a href="#" title="YouTube"><img src="images/yt.svg" alt="yt"></a>
        <a href="#" title="WhatsApp"><img src="images/whatsapp.svg" alt="wa"></a>
      </div>
    </div>
 
    <div class="footer-links">
      <h4>Quick Links</h4>
      <a href="#services">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Design</a>
    </div>

    <div class="footer-contact">
      <h4>Contact</h4>
      <p> +91 98765 43210</p>
      <p> merimehndi@gmail.com</p>
      <p> Auraiya, Uttar Pradesh, India</p>
    </div>
  </div>

  <div class="footer-bottom">
    © 2026 Meri Mehndi. All Rights Reserved. <br>
    Developed by <strong>Ordermysite</strong>
  </div>

  <button id="toTop">↑</button>
`;

document.body.appendChild(footer);

/* Back To Top */
document.getElementById("toTop").onclick = ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
};




