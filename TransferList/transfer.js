const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const checkedToRight = document.querySelector(".checked-to-right");
const checkedToLeft = document.querySelector(".checked-to-left");
const allToRight = document.querySelector(".all-to-right");
const allToLeft = document.querySelector(".all-to-left");

function moveItems(a, b, checked) {
  const items = a.querySelectorAll("li");

  for (let i = 0; i < items.length; i++) {
    const c = items[i].querySelector('input[type="checkbox"]');

    if (!checked || c.checked) {
      c.checked = false;
      b.append(items[i]);
    }
  }
}

checkedToRight.addEventListener("click", () =>
  moveItems(leftSide, rightSide, true)
);
checkedToLeft.addEventListener("click", () =>
  moveItems(rightSide, leftSide, true)
);
allToRight.addEventListener("click", () =>
  moveItems(leftSide, rightSide, false)
);
allToLeft.addEventListener("click", () =>
  moveItems(rightSide, leftSide, false)
);
