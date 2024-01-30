// script.js
var activeButton = null;

// var contentBlock = document.getElementById("contentBlock");
contentBlock.innerHTML = `
    <div style="margin-left: 30px; margin-bottom: 70px; display: flex;
    flex-direction: column;
    align-items: center;">
          <p style="font-family: 'Inter';
font-size: 17px;
font-weight: 400;
line-height: 27px;
color: rgba(28, 39, 82, 1);
background: rgba(244, 244, 244, 1);
width: max-content;
">Електромонтаж</p>
                <h2 style="font-size: 40px;margin-top: 1px;margin-top: 1px;
font-weight: 400;color: rgba(28, 39, 82, 1);

" >Комерційний</h2>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img style="margin-right: 30px" src="/img/sect2/sect23.png" width="416" height="366" alt="Фото для Кнопки 1">
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
      <div style="margin-left: 30px;margin-bottom: 70px;display: flex;
    flex-direction: column;
    align-items: center;">
          <p style="font-family: 'Inter';
font-size: 17px;
font-weight: 400;
line-height: 27px;
color: rgba(28, 39, 82, 1);
background: rgba(244, 244, 244, 1);
width: max-content;
">Електромонтаж</p>
                <h2 style="font-size: 40px;margin-top: 1px;margin-top: 1px;
font-weight: 400;color: rgba(28, 39, 82, 1);

" >Комерційний</h2>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img style="margin-right: 30px" src="/img/sect2/sect23.png" width="416" height="366" alt="Фото для Кнопки 1">
            `;
      break;

    case "button2":
      contentBlock.innerHTML = `
              <div style="margin-left: 30px; margin-bottom: 70px; display: flex;
    flex-direction: column;
    align-items: center;">
          <p style="font-family: 'Inter';
font-size: 17px;
font-weight: 400;
line-height: 27px;
color: rgba(28, 39, 82, 1);
background: rgba(244, 244, 244, 1);
width: max-content;
">Електромонтаж</p>
                <h2 style="font-size: 40px;margin-top: 1px;margin-top: 1px;
font-weight: 400;color: rgba(28, 39, 82, 1);

" >Житловий</h2>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img style="margin-right: 30px" src="/img/sect2/sect24.png" width="416" height="366" alt="Фото для Кнопки 1">
            `;
      break;

    case "button3":
      contentBlock.innerHTML = `
                <div style="margin-left: 30px; margin-bottom: 70px; display: flex;
    flex-direction: column;
    align-items: center;">
          <p style="font-family: 'Inter';
font-size: 17px;
font-weight: 400;
line-height: 27px;
color: rgba(28, 39, 82, 1);
background: rgba(244, 244, 244, 1);
width: max-content;
">Електромонтаж</p>
                <h2 style="font-size: 40px;margin-top: 1px;margin-top: 1px;
font-weight: 400;color: rgba(28, 39, 82, 1);

" >Індустріальний</h2>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

" >Electrical & Maintenance Services Ltd пропонує повний спектр електричних послуг відповідно до ваших потреб – від переміщення вимикача до повної заміни електропроводки в будинку.</p>
                <p style="font-family: 'Inter';margin-top: 1px;
font-size: 18px;
font-weight: 400;
line-height: 27px;color: rgba(126, 126, 126, 1);

">Окрім надання повністю кваліфікованих, компетентних електриків у Лондоні та його околицях, компанія також має оптовий магазин електротехніки.</p>
                </div>
                <img style="margin-right: 30px" src="/img/sect1/foto21.png" width="416" height="366" alt="Фото для Кнопки 1">
            `;
      break;

    default:
      break;
  }
}
