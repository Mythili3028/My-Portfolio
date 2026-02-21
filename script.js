const viewMoreBtn = document.getElementById("viewMoreBtn");
const moreCertificates = document.getElementById("more-certificates");

viewMoreBtn.addEventListener("click", () => {

  moreCertificates.style.display = "contents";

  viewMoreBtn.style.display = "none";

});
