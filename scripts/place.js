const windChill = document.querySelector("#windChill");

const tempText = document.getElementById("temp");
const speedText = document.getElementById("speed");

const temp = parseFloat(tempText.textContent.slice(0, 2));
const speed = parseFloat(speedText.textContent.slice(0, 2));

function calculateWindChill(t, s) {
    let windChillFactor = 13.12 + 0.6215 * t - 11.37 * (s ** 0.16) + 0.3965 * t * (s ** 0.16);
    return windChillFactor;
}

if (temp <= 10 && speed > 4.8) {
    windChill.innerHTML = `${calculateWindChill(temp, speed).toFixed(1)} °C`;
} else {
    windChill.innerHTML = "N/A";
}