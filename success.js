document.getElementById("try-again").addEventListener("click", function () {
  window.location.href = "index.html";
});
const urlParams = new URLSearchParams(window.location.search);
const points = urlParams.get("points");
console.log(points);
const point = (document.getElementById("poeni").textContent = points);
