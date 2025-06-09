// Wahrheit oder Pflicht
const wopModal = document.getElementById("wopModal");
const closeWopModal = document.getElementById("closeWopModal");
const wopBtnMixed = document.getElementById("wopBtnMixed");
const wopBtnCustom = document.getElementById("wopBtnCustom");
const wopCategoryOptions = document.getElementById("wopCategoryOptions");
const wopStartBtn = document.getElementById("wopStartBtn");
const wopCard = document.getElementById("wopCard"); // muss im HTML existieren

let wopSelectedMode = "mixed";
let wopSelectedCategories = [];

wopBtnMixed.addEventListener("click", () => {
  wopSelectedMode = "mixed";
  wopBtnMixed.classList.add("active");
  wopBtnCustom.classList.remove("active");
  wopCategoryOptions.style.display = "none";
  wopCategoryOptions.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
});

wopBtnCustom.addEventListener("click", () => {
  wopSelectedMode = "custom";
  wopBtnCustom.classList.add("active");
  wopBtnMixed.classList.remove("active");
  wopCategoryOptions.style.display = "flex";
});

wopStartBtn.addEventListener("click", () => {
  if (wopSelectedMode === "custom") {
    wopSelectedCategories = Array.from(
      wopCategoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (wopSelectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("WOP-Modus:", wopSelectedMode);
  console.log("WOP-Kategorien:", wopSelectedCategories);
  wopModal.classList.add("hidden");
});

wopCard.addEventListener("click", (e) => {
  e.preventDefault();
  wopModal.classList.remove("hidden");
});

closeWopModal.addEventListener("click", () => {
  wopModal.classList.add("hidden");
});

wopModal.addEventListener("click", (e) => {
  if (e.target === wopModal) {
    wopModal.classList.add("hidden");
  }
});


// Wer würde eher
const wdeModal = document.getElementById("wdeModal");
const closeWdeModal = document.getElementById("closeWdeModal");
const wdeBtnMixed = document.getElementById("wdeBtnMixed");
const wdeBtnCustom = document.getElementById("wdeBtnCustom");
const wdeCategoryOptions = document.getElementById("wdeCategoryOptions");
const wdeStartBtn = document.getElementById("wdeStartBtn");
const wdeCard = document.getElementById("wdeCard"); // muss im HTML existieren

let wdeSelectedMode = "mixed";
let wdeSelectedCategories = [];

wdeBtnMixed.addEventListener("click", () => {
  wdeSelectedMode = "mixed";
  wdeBtnMixed.classList.add("active");
  wdeBtnCustom.classList.remove("active");
  wdeCategoryOptions.style.display = "none";
  wdeCategoryOptions.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
});

wdeBtnCustom.addEventListener("click", () => {
  wdeSelectedMode = "custom";
  wdeBtnCustom.classList.add("active");
  wdeBtnMixed.classList.remove("active");
  wdeCategoryOptions.style.display = "flex";
});

wdeStartBtn.addEventListener("click", () => {
  if (wdeSelectedMode === "custom") {
    wdeSelectedCategories = Array.from(
      wdeCategoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (wdeSelectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("WDE-Modus:", wdeSelectedMode);
  console.log("WDE-Kategorien:", wdeSelectedCategories);
  wdeModal.classList.add("hidden");
});

wdeCard.addEventListener("click", (e) => {
  e.preventDefault();
  wdeModal.classList.remove("hidden");
});

closeWdeModal.addEventListener("click", () => {
  wdeModal.classList.add("hidden");
});

wdeModal.addEventListener("click", (e) => {
  if (e.target === wdeModal) {
    wdeModal.classList.add("hidden");
  }
});
