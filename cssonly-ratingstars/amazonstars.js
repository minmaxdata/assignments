const stars = document.querySelectorAll(".star");
let lastHovered;
function toggleStar(el) {
  el.classList.toggle("star-solid");
}
function handleStarChange(e) {
  toggleStar(e.target);
  let siblings = e.target.parentElement.children;
  console.dir(siblings);
  const childs = Array.from(siblings);

  for (let i = 0; i < childs.length; i++) {
    console.log()
    if (childs[i] === this) {
      return;
    }
    childs[i].classList.toggle('star-solid');

  }
  console.log(this);
}

stars.forEach(star => {
  star.addEventListener("mouseover", handleStarChange);
  star.addEventListener("mouseout", handleStarChange);
});
