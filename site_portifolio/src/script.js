console.log("JavaScript funcionando!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});