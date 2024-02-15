// script.js
var activeButton = null;

// var contentBlock = document.getElementById("contentBlock");
contentBlock.innerHTML = `
    <div class ="shgfr">
          <p class ="saro">Електромонтаж</p>
                <h2 class ="sarewo">Комерційний</h2>
                <p class ="ogurg" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p class ="ogurg2">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img class ="ogurfoto" src="./img/sect2/sect23.png" alt="Фото для Кнопки 1">
`;

function showContent(buttonId) {
  // Получаем ссылку на блок для контента
  var contentBlock = document.getElementById("contentBlock");

  // Очищаем текущий контент
  contentBlock.innerHTML = "";

  // В зависимости от нажатой кнопки добавляем новый контент
  switch (buttonId) {
    case "button1":
      contentBlock.innerHTML = `
      <div class ="shgfr">
          <p class ="saro">Електромонтаж</p>
                <h2 class ="sarewo" >Комерційний</h2>
                <p class ="ogurg" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p class ="ogurg2">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img class ="ogurfoto" src="./img/sect2/sect23.png" alt="Фото для Кнопки 1">
            `;
      break;

    case "button2":
      contentBlock.innerHTML = `
              <div class ="shgfr">
          <p class ="saro">Електромонтаж</p>
                <h2 class ="sarewo">Житловий</h2>
                <p class ="ogurg">Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p class ="ogurg2">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img class ="ogurfoto" src="./img/sect2/sect24.png" alt="Фото для Кнопки 1">
            `;
      break;

    case "button3":
      contentBlock.innerHTML = `
                <div class ="shgfr">
          <p class ="saro">Електромонтаж</p>
                <h2 class ="sarewo" >Індустріальний</h2>
                <p class ="ogurg">Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p class ="ogurg2">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img class ="ogurfoto"  src="./img/sect1/foto21.png"  alt="Фото для Кнопки 1">
            `;
      break;

    default:
      break;
  }
}
