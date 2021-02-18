const nameButton = document.getElementById(`button-name`);
// const nameValue = document.getElementById(`name-value`).value;
// console.log(nameValue);
// console.log(buttonName);

const addNewName = () => {
  const nameValue = document.getElementById(`name-value`).value;
  const nameString = nameValue.toString();
  //   console.log(nameString);
  const tableList = document.getElementById(`list-names`);
  const newA = tableList.createElement(`a`);
  newA.classList.add("list-group-item", "list-group-item-action", "active");
  newA.setAttribute("aria-current", "true");
  newA.setAttribute("href", "#");
  //     "href" = "#",
  //     "class" = "list-group-item list-group-item-action active",
  //     "aria-current" = "true",
  //   })
};
nameButton.addEventListener("click", addNewName);
