let creditCardAttempts = 0;

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const creditCard = document.getElementById("creditCard").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const errorMessage = document.getElementById("errorMessage");
    const firstNameHint = document.getElementById("firstNameHint");
    const lastNameHint = document.getElementById("lastNameHint");
    const creditCardHint = document.getElementById("creditCardHint");
    const phoneHint = document.getElementById("phoneHint");
    const emailHint = document.getElementById("emailHint");

    errorMessage.textContent = "";
    firstNameHint.textContent = "";
    lastNameHint.textContent = "";
    creditCardHint.textContent = "";
    phoneHint.textContent = "";
    emailHint.textContent = "";

    let isValid = true;

    const namePattern = /^[A-Za-zА-Яа-яІіЇїЄє]+$/;
    if (!namePattern.test(firstName)) {
      firstNameHint.textContent = "Ім'я може містити лише літери.";
      isValid = false;
    }

    if (!namePattern.test(lastName)) {
      lastNameHint.textContent = "Прізвище може містити лише літери.";
      isValid = false;
    }

    const creditCardPattern = /^\d{16}$/;
    if (!creditCardPattern.test(creditCard)) {
      creditCardAttempts++;
      if (creditCardAttempts >= 3) {
        errorMessage.textContent =
          "Ви перевищили кількість спроб введення номера кредитної картки.";
        return;
      }
      creditCardHint.textContent = `Номер кредитної картки має містити 16 цифр. Спроба: ${creditCardAttempts}/3.`;
      isValid = false;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
      phoneHint.textContent =
        "Номер телефону має відповідати формату +380123456789.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailHint.textContent =
        "Будь ласка, введіть коректну адресу електронної пошти.";
      isValid = false;
    }

    if (isValid) {
      alert("Форма успішно надіслана!");
    }
  });

document.getElementById("checkButton").addEventListener("click", function () {
  const inputString = document.getElementById("inputString").value;
  const pattern = /\ba(e+|x+)a\b/g;
  const matches = inputString.match(pattern);

  const resultElement = document.getElementById("result");
  if (matches) {
    resultElement.textContent = matches.join(", ");
  } else {
    resultElement.textContent = "Нічого не знайдено";
  }
});
