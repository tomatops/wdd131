const reviewCount = document.querySelector(".reviews");
let count = Number(window.localStorage.getItem("count-ls")) || 0;

if (count !== 0) {
    reviewCount.textContent = count;
} else {
    reviewCount.textContent = `1`;
}

count++;
localStorage.setItem("count-ls", count);