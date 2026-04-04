const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastmodified").innerHTML = "lastmodified: " + document.lastModified;

const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power lances" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" }
    ];
    document.addEventListener("DOMContentLoaded", () => {
        const select = document.getElementById("productName");
        
        products.forEach(p => {
            const opt = document.createElement("option");
            opt.value = p.name;
            opt.textContent = p.name;
            select.appendChild(opt);
        });
        document.getElementById("year").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = document.lastModified;
    });