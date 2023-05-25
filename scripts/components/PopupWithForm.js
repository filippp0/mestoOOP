import Popup from './Popup.js';

/*Наследник от Popup для попапов с формой*/
export default class PopupWithForm extends Popup {
  constructor (popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputsValue())
      this.close();
    })
  }
/*метод getInputsValue не смог сделать приватным, т.к. он используется вне экземпляра класса*/
  _getInputsValue() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value
    })
    return this._values
  }
/*метод setInputsValue не описан в тз, но необходим для установки value инпутов со страницы*/
  setInputsValue(dataUser) {
    this._inputList.forEach(input => {
      input.value = dataUser[input.name];
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}
