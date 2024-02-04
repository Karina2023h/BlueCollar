// scrpt.js

function subscribe(form) {
  const emailInput = form.querySelector("#emailInput");
  const userEmail = emailInput.value;

  // Проверка корректности email-адреса (по желанию)
  if (!validateEmail(userEmail)) {
    alert("Некорректный email-адрес");
    return false;
  }

  // Отправка формы на сервер
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        alert("Вы успешно подписались!");
        // Очистка инпута после успешной подписки
        emailInput.value = "";
      } else {
        alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
    });

  return false; // Отмена отправки формы (не перезагружать страницу)
}

// Проверка корректности email-адреса (по желанию)
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
