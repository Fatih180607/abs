const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "/buy";
    // console.log("berhasil");
  });
});
