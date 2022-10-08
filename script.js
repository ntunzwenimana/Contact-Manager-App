const registerButton = document.querySelector(".register__btn");
const registerForm = document.querySelector(".register__form");

const nameField = document.querySelector(".name__field");
const phoneField = document.querySelector(".phone__field");
const emailField = document.querySelector(".email__field");

const homeWrapper = document.querySelector(".home__wrapper");
///Selecting and creating contact controls

const contactControl = document.querySelector(".contact__control");
const editButton = document.querySelector(".edit__btn");
const deleteButton = document.querySelector("edit__btn");

///selecting create contact elements
const createContactPage = document.querySelector(".create-contact__page");

const nameInput = document.querySelector(".name__input");
// console.log(nameInput);
const numberInput = document.querySelector(".number__input");

const contactList = document.querySelector(".contacts__list");
const saveContactButton = document.querySelector(".save-contact__btn");

SubmitButton = document.querySelector(".submit__btn");

const showForm = function () {
  registerForm.classList.remove("hide-register__form");
};

registerButton.addEventListener("click", showForm);
SubmitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    nameField.value.length > 0 &&
    phoneField.value.length > 0 &&
    emailField.value.length > 0
  ) {
    const userData = {
      username: nameField.value,
      phoneNumber: phoneField.value,
      email: emailField.value,
      id: `ec ${Math.trunc(Math.random() * 573773733288)}`,
    };
    nameField.value = phoneField.value = emailField.value = "";
    homeWrapper.classList.add("hide-home__form");
    createContactPage.classList.remove("hide-create-contact__page");
    console.log(userData);
  }
});

saveContactButton.addEventListener("click", function (e) {
  e.preventDefault();
  const contactData = {
    contactName: nameInput.value,
    phoneNumber: numberInput.value,
  };

  console.log(
    `Name: ${contactData.contactName}; Phone: ${contactData.phoneNumber}`
  );

  const contactElement = document.createElement("h4");
  contactList.appendChild(contactElement);
  contactElement.innerText = `Name: ${contactData.contactName} Phone: ${contactData.phoneNumber}`;
  contactList.classList.remove("hide-contact__list");
  numberInput.value = "";
  nameInput.value = "";
});
