/*Класс (шаблон) для создания каоточек, в конструктор принимает:
1ым параметром - объект со значениями ссылки на картинку и её заголовка в карточке;
2ым параметром - селектор темплейта по которому будет создан клон разметки для каждой карточки;
3им параметром - примимает ссылку на функцыю для обработки открытия картинки в попапе для картинок*/
export default class Card {
  constructor (cardData, selectorTemlate, openImagePopup, openDelete) {
    this._link = cardData.link;
    this._name = cardData.title;
    this._openImagePopup = openImagePopup;
    this._openDelete = openDelete;
    this._cloneElement = document.querySelector(selectorTemlate).content.querySelector('.elements__list').cloneNode(true);
    this._imageElement = this._cloneElement.querySelector('.elements__image');
    this._likeIconElement = this._cloneElement.querySelector('.elements__like-icon');
    this._trashElement = this._cloneElement.querySelector('.elements__trash');
    this._subTitle = this._cloneElement.querySelector('.elements__subtitle');
  }

  _handleLike = () => {
    this._likeIconElement.classList.toggle('elements__like-icon_active');
  }

  _handleDeleteElement = () => {
    this._openDelete(this);
  }

  _handleOpenImageInPopupImage = () => {
    this._openImagePopup({title: this._name, link: this._link});
  }

  _setEventListener() {
    this._likeIconElement.addEventListener('click', this._handleLike);
    this._trashElement.addEventListener('click', this._handleDeleteElement);
    this._imageElement.addEventListener('click', this._handleOpenImageInPopupImage);
  }

  removeCardElement() {
    this._cloneElement.remove();
    this._cloneElement = null;
  }

  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = `Изображение ${this._name}`;
    this._subTitle.textContent = this._name;
    this._setEventListener();
    return this._cloneElement;
  }
}
