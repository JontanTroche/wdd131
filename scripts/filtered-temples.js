const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastmodified").innerHTML = "lastmodified: " + document.lastModified;

/* hamburguer button */
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");


    if (navMenu.classList.contains("show")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});

/* temple data */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "La Paz Bolivia",
    location: "La Paz, Bolivia",
    dedicated: "2021, October, 3",
    area: 18850,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/la-paz-bolivia-temple/la-paz-bolivia-temple-44435.jpg" 
  },
  {
    templeName: "Santa Cruz Bolivia",
    location: "Santa Cruz, Bolivia",
    dedicated: "2020, October, 4", 
    area: 29000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-48551.jpg"
  }
];

/* temple gallery */
const templeGallery = document.getElementById("temple-gallery");

function renderTemples(filteredTemples) {
    templeGallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        card.className = "temple-card";
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        templeGallery.appendChild(card);
    });
}
renderTemples(temples);
const navLinks = document.querySelectorAll(".nav-menu a");
const pageTitle = document.getElementById("page-title");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        
        const filterType = e.target.textContent;
        pageTitle.textContent = filterType;
        if (window.innerWidth < 768) {
            navMenu.classList.remove("show");
            menuButton.textContent = "☰";
        }
        let filtered = [];
        switch (filterType) {
            case "Old":
                filtered = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900);
                break;
            case "New":
                filtered = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000);
                break;
            case "Large":
                filtered = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                filtered = temples.filter(t => t.area < 10000);
                break;
            default: 
                filtered = temples;
                break;
        }
        renderTemples(filtered);
    });
});