import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithDeleteForm from '../scripts/components/PopupWithDeleteForm.js';
import {
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
} from '../scripts/utils/constants.js'

initialCards.forEach(element => {
  element.title = element.name;
  delete element.name;
})

const popupDelete = new PopupWithDeleteForm(popupDeleteSelector, (element) => {
    element.removeCardElement()
  }
);

/*создаю экземпляр класса UserInfo*/
const userInfo = new UserInfo(configInfo);

/*создаю экземпляр класса PopupWithImage*/
const popupImage = new PopupWithImage(popupImageSelector);

function creatNewCard(element) {
  const card = new Card(element, selectorTemlate, popupImage.open, popupDelete.open);
  return card.createCard();
}
/*создаю экземпляр класса Section с объектом начальных карточек и функцией создания разметки карточки*/
const section = new Section((element) => {
  section.addItem(creatNewCard(element))
  }, listsElementSelector);

/*Добавляем начальные карточки при загрузке страницы*/
section.addCardFromArray(initialCards)

/*создаю экземпляр класса PopupWithForm для формы редактирования профиля со своим сабмитом*/
const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data)
});

/*создаю экземпляр класса PopupWithForm для формы добавления карточек со своим сабмитом*/
const popupAddCard = new PopupWithForm(popupAddCardSelector, (data) => {
  section.addItem(creatNewCard(data));
});

/*создаю экземпляр класса PopupWithForm для формы добавления карточек со своим сабмитом*/
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, (data) => {
  avatarImageElement.src = data.avatar;
});


/*создаю экземпляры класса FormValidator и сразу активирую валидацию для каждого экземпляра*/
Array.from(document.forms).forEach(item => {
  const form = new FormValidator(validationConfig, item);
  const name = item.getAttribute('name');
  formsValidator[name] = form;
  form.enableValidation()
})

/*Вешаю слушатели клика на оверлэй и крестик для каждого попапа*/
popupImage.setEventListeners()
popupProfile.setEventListeners()
popupAddCard.setEventListeners()
popupEditAvatar.setEventListeners()
popupDelete.setEventListeners()

/*открытие попап редоктирования профиля*/
profileEditButtonElement.addEventListener('click', () => {
  formsValidator.personalData.resetErrorForOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo())
  popupProfile.open()
})

/*открытие попап редоктирования карточек*/
profileAddButtonElement.addEventListener('click', () => {
  formsValidator.addCard.resetErrorForOpenForm();
  popupAddCard.open();
})

avatarElement.addEventListener('click', ()=> {
  formsValidator.editAvatar.resetErrorForOpenForm()
  popupEditAvatar.open()
})
