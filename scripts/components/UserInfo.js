export default class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileJob =  document.querySelector(configInfo.profileJobSelector);
  }

  getUserInfo() {
    return {username: this._profileName.textContent, job: this._profileJob.textContent}
  }

  setUserInfo(dataUser) {
    this._profileName.textContent = dataUser.username
    this._profileJob.textContent = dataUser.job
  }
}
