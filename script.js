function eraseText(event) {
  if (event.ctrlKey && (event.key === "Enter" || event.keyCode === 13)) {
    const input = document.getElementById("myInput");
    input.value = "";
  }
}
