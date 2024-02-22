// Получаем все кнопки "Купить" по классу
var buyButtons = document.getElementsByClassName("btn-vip");

// Добавляем обработчик события для каждой кнопки
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function () {
    // Отображаем модальное окно при нажатии на кнопку
    document.getElementById("paymentModal").style.display = "block";
  });
}

// Добавляем обработчик события для закрытия модального окна
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  var modal = document.getElementById("paymentModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
