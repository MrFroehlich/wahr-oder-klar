const modal = document.getElementById("wopModal");
const btnMixed = document.getElementById("btn-mixed");
const btnCustom = document.getElementById("btn-custom");
const categoryOptions = document.getElementById("category-options");
const startBtn = document.querySelector(".start-btn");
const wopCard = document.getElementById("wopCard");
const closeBtn = document.querySelector(".close-modal");

let selectedMode = "mixed";
let selectedCategories = [];

// Modus-Umschaltung
btnMixed.addEventListener("click", () => {
  selectedMode = "mixed";
  btnMixed.classList.add("active");
  btnCustom.classList.remove("active");
  categoryOptions.style.display = "none";
});

btnCustom.addEventListener("click", () => {
  selectedMode = "custom";
  btnCustom.classList.add("active");
  btnMixed.classList.remove("active");
  categoryOptions.style.display = "flex";
});

// Start-Button
startBtn.addEventListener("click", () => {
  if (selectedMode === "custom") {
    selectedCategories = Array.from(
      categoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (selectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("Modus:", selectedMode);
  console.log("Kategorien:", selectedCategories);

  modal.classList.add("hidden");
});

// Modal öffnen
wopCard.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

// Modal schließen über Button
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Modal schließen über Klick außerhalb (Bonus)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
