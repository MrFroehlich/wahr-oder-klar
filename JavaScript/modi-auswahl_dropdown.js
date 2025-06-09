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





// Entweder/oder
const ewodModal = document.getElementById("ewodModal");
const closeEwodModal = document.getElementById("closeEwodModal");
const ewodBtnMixed = document.getElementById("ewodBtnMixed");
const ewodBtnCustom = document.getElementById("ewodBtnCustom");
const ewodCategoryOptions = document.getElementById("ewodCategoryOptions");
const ewodStartBtn = document.getElementById("ewodStartBtn");
const ewodCard = document.getElementById("ewodCard"); // Stelle sicher, dass das im HTML vorhanden ist!

let ewodSelectedMode = "mixed";
let ewodSelectedCategories = [];

ewodBtnMixed.addEventListener("click", () => {
  ewodSelectedMode = "mixed";
  ewodBtnMixed.classList.add("active");
  ewodBtnCustom.classList.remove("active");
  ewodCategoryOptions.style.display = "none";
  ewodCategoryOptions.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
});

ewodBtnCustom.addEventListener("click", () => {
  ewodSelectedMode = "custom";
  ewodBtnCustom.classList.add("active");
  ewodBtnMixed.classList.remove("active");
  ewodCategoryOptions.style.display = "flex";
});

ewodStartBtn.addEventListener("click", () => {
  if (ewodSelectedMode === "custom") {
    ewodSelectedCategories = Array.from(
      ewodCategoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (ewodSelectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("EWOD-Modus:", ewodSelectedMode);
  console.log("EWOD-Kategorien:", ewodSelectedCategories);
  ewodModal.classList.add("hidden");
});

ewodCard.addEventListener("click", (e) => {
  e.preventDefault();
  ewodModal.classList.remove("hidden");
});

closeEwodModal.addEventListener("click", () => {
  ewodModal.classList.add("hidden");
});

ewodModal.addEventListener("click", (e) => {
  if (e.target === ewodModal) {
    ewodModal.classList.add("hidden");
  }
});





// Lügendetektor
const ldtModal = document.getElementById("ldtModal");
const closeLdtModal = document.getElementById("closeLdtModal");
const ldtBtnMixed = document.getElementById("ldtBtnMixed");
const ldtBtnCustom = document.getElementById("ldtBtnCustom");
const ldtCategoryOptions = document.getElementById("ldtCategoryOptions");
const ldtStartBtn = document.getElementById("ldtStartBtn");
const ldtCard = document.getElementById("ldtCard"); // Stelle sicher, dass das im HTML vorhanden ist!

let ldtSelectedMode = "mixed";
let ldtSelectedCategories = [];

ldtBtnMixed.addEventListener("click", () => {
  ldtSelectedMode = "mixed";
  ldtBtnMixed.classList.add("active");
  ldtBtnCustom.classList.remove("active");
  ldtCategoryOptions.style.display = "none";
  ldtCategoryOptions.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
});

ldtBtnCustom.addEventListener("click", () => {
  ldtSelectedMode = "custom";
  ldtBtnCustom.classList.add("active");
  ldtBtnMixed.classList.remove("active");
  ldtCategoryOptions.style.display = "flex";
});

ldtStartBtn.addEventListener("click", () => {
  if (ldtSelectedMode === "custom") {
    ldtSelectedCategories = Array.from(
      ldtCategoryOptions.querySelectorAll("input:checked")
    ).map(cb => cb.value);

    if (ldtSelectedCategories.length === 0) {
      alert("Bitte wähle mindestens eine Kategorie aus!");
      return;
    }
  }

  console.log("LDT-Modus:", ldtSelectedMode);
  console.log("LDT-Kategorien:", ldtSelectedCategories);
  ldtModal.classList.add("hidden");
});

ldtCard.addEventListener("click", (e) => {
  e.preventDefault();
  ldtModal.classList.remove("hidden");
});

closeLdtModal.addEventListener("click", () => {
  ldtModal.classList.add("hidden");
});

ldtModal.addEventListener("click", (e) => {
  if (e.target === ldtModal) {
    ldtModal.classList.add("hidden");
  }
});
