// function showLocation() {
//   // Получаем элемент с информацией о местоположении
//   var locationInfo = document.querySelector(".location-info");

//   // Добавляем/удаляем класс "active" для переключения видимости блока
//   locationInfo.classList.toggle("active");

//   // Инициализация карты
//   if (locationInfo.classList.contains("active")) {
//     initMap();
//   }
// }

// function initMap() {
//   // Координаты местоположения
//   var location = { lat: 51.5074, lng: -0.1278 }; // Замените на свои координаты

//   // Создание карты
//   var map = new google.maps.Map(document.getElementById("map"), {
//     center: location,
//     zoom: 14,
//   });

//   // Создание маркера
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//     title: "Местоположение",
//   });
// }
