const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

/* weather */
const temperature = 10; 
    const windSpeed = 5;
    const conditions = "Partly Cloudy"; 

    document.getElementById('temp').textContent = temperature + " °C";
    document.getElementById('condition').textContent = conditions;
    document.getElementById('wind').textContent = windSpeed + " km/h";

    const calculateWindChill = (t, v) => 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

    const windChillElement = document.getElementById('windChill');
        
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    } else {
        windChillElement.textContent = "N/A";
    }