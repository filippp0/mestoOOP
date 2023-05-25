/*массив значений для начальных карточек*/
const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

/*кнопки для открытия форм*/
const profileEditButtonElement = document.querySelector('.profile__edit');
const profileAddButtonElement = document.querySelector('.profile__add-button');
const avatarElement = document.querySelector('.profile__avatar-overlay')
const avatarImageElement = document.querySelector('.profile__avatar')
/*Объект для хранения всех экземпляров FormValidator со страницы*/
const formsValidator = {};

/*константы с селекторами нужными для создания экземпляров(можно сделать из них конфиг и брать их по свойству конфига)*/
const selectorTemlate = '#cardElement';
const listsElementSelector = '.elements__lists';
const popupProfileSelector = '.profile-popup';
const popupAddCardSelector = '.card-popup';
const popupImageSelector = '.image-popup';
const popupDeleteSelector = '.delete-popup';
const popupEditAvatarSelector = '.edit-avatar-popup';

/*конфиг(объект) для UserInfo*/
const configInfo = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
};

/*конфиг(объект) для валидации*/
const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  errorSelectorTemplate: '.popup__error_type_',
  disableButtonClass: 'popup__submit_disable',
  inputErrorClass: 'popup__input_invalid',
};

export {
  initialCards,
  profileEditButtonElement,
  profileAddButtonElement,
  avatarElement,
  avatarImageElement,
  formsValidator,
  selectorTemlate,
  listsElementSelector,
  popupProfileSelector,
  popupAddCardSelector,
  popupImageSelector,
  popupDeleteSelector,
  popupEditAvatarSelector,
  configInfo,
  validationConfig
};
