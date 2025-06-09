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



// Ich hab noch nie...
const ihnnModal = document.getElementById("ihnnModal");
const closeIhnnModal = document.getElementById("closeIhnnModal");
const ihnnBtnMixed = document.getElementById("ihnnBtnMixed");
const ihnnBtnCustom = document.getElementById("ihnnBtnCustom");
const ihnnCategoryOptions = document.getElementById("ihnnCategoryOptions");
const ihnnStartBtn = document.getElementById("ihnnStartBtn");
const ihnnCard = document.getElementById("ihnnCard"); // muss im HTML existieren

let ihnnSelectedMode = "mixed";
let ihnnSelectedCategories = [];

ihnnBtnMixed.addEventListener("click", () => {
  ihnnSelectedMode = "mixed";
  ihnnBtnMixed.classList.add("active");
  ihnnBtnCustom.classList.remove("active");
  ihnnCategoryOptions.style.display = "none";
  ihnnCategoryOptions.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
});

ihnnBtnCustom.addEventListener("click", () => {
  ihnnSelectedMode = "custom";
  ihnnBtnCustom.classList.add("active");
  ihnnBtnMixed.classList.remove("active");
  ihnnCategoryOptions.style.display = "flex";
});

ihnnStartBtn.addEventListener("click", () => {
  if (ihnnSelectedMode === "custom") {
    ihnnSelectedCategories = Array.from(
      ihnnCategoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (ihnnSelectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("Ich hab noch nie-Modus:", ihnnSelectedMode);
  console.log("Ich hab noch nie-Kategorien:", ihnnSelectedCategories);
  ihnnModal.classList.add("hidden");
});

ihnnCard.addEventListener("click", (e) => {
  e.preventDefault();
  ihnnModal.classList.remove("hidden");
});

closeIhnnModal.addEventListener("click", () => {
  ihnnModal.classList.add("hidden");
});

ihnnModal.addEventListener("click", (e) => {
  if (e.target === ihnnModal) {
    ihnnModal.classList.add("hidden");
  }
});
