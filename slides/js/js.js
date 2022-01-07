let index = 0;
show();
function show() {
  let a;
  const slide = document.getElementsByClassName("slide");
  for (a = 0; a < slide.length; a++) {
    slide[a].style.display = "none";
  }
  index++;
  if (index > slide.length) {
    index = 1;
  }

  slide[index - 1].style.display = "block";
  setTimeout(show, 1500);
}
