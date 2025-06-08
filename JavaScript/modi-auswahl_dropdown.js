
const modal = document.getElementById("modal");
  const btnMixed = document.getElementById("btn-mixed");
  const btnCustom = document.getElementById("btn-custom");
  const categoryOptions = document.getElementById("category-options");
  const startBtn = document.querySelector(".start-btn");

  // Standard: Gemischt
  let selectedMode = "mixed";
  let selectedCategories = [];

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

    // Simuliertes Weiterleiten oder Laden
    console.log("Modus:", selectedMode);
    console.log("Kategorien:", selectedCategories);

    // Hier würde später z.B. der Spielstart passieren
    modal.style.display = "none";
  });




  // Modal anzeigen (z.B. bei Klick auf Karte)

// Modal-Element
const modal = document.getElementById("wopModal");

// Die Card, die das Modal öffnen soll
const wopCard = document.getElementById("wopCard");

// Schließen-Button im Modal (z. B. mit class="close-modal")
const closeBtn = document.querySelector(".close-modal");

// Öffnen
wopCard.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Schließen
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});


  // modal.style.display = "flex";
