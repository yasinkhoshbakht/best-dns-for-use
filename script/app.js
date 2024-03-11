let darkSwitch = document.getElementById("dark")[0];
let main = document.getElementsByTagName("main")[0];
dark.addEventListener("click", () => {
  main.classList.toggle("darkmode");
});
