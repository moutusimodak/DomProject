const cardContainer = document.getElementById("card");
const addCardInput = document.getElementById("addCard");
const emptyMessage = document.getElementById("empty-message");

function checkMessage() {
  if (cardContainer.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}


addCardInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = e.target.value;

    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const cardContent = `
            <span class="card-text">${inputValue}</span>
            <input type="text" class="edit-input" style="display: none;" />
            <button class="edit"><i class="fas fa-pencil-alt"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        `;

    cardElement.innerHTML = cardContent;
    cardContainer.appendChild(cardElement);

    e.target.value = "";

    checkMessage();
  }
});

// Delete
cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete") || e.target.closest(".delete")) {
    const cardElement = e.target.closest(".card");
    if (cardElement) {
      cardElement.remove();

      checkMessage();
    }
  }

  //Edit
  else if (e.target.classList.contains("edit") || e.target.closest(".edit")) {
    const cardElement = e.target.closest(".card");
    const cardText = cardElement.querySelector(".card-text");
    const editInput = cardElement.querySelector(".edit-input");
    const editButton = cardElement.querySelector('.edit i')

    if (editInput.style.display === "none") {
      editInput.value = cardText.textContent;
      cardText.style.display = "none";
      editInput.style.display = "inline";
      editButton.className = "fa-solid fa-floppy-disk";
    }



    else{
      const newText = editInput.value;
      if (newText !== "") {
        cardText.textContent = newText;
        editInput.style.display = "none";
        cardText.style.display = "inline";
        editButton.className = "fas fa-pencil-alt";
      }}
        
      }
    });
  

