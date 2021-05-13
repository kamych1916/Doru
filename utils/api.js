import axios from "axios";
const API_BASE_URL = "test";
import NTFS from "~/utils/notifications";

export default class Api {
  instance = null;

  static getInstance() {
    if (Api.instance == null) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (let i in ca) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length).split('"')[1];
      }
    }
    return "";
  }

  static setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  static sendNTFS(title, message, type) {
    NTFS.getInstance().NTFS(title, message, type);
  }

  static typicalNTFS(status, successData) {
    if (status) {
      if (status == 500) {
        Api.sendNTFS("Ошибка", "Сервер не доступен :(", "error");
      } else if (status == 422) {
        Api.sendNTFS("Ошибка", "Сервер отправил неверные данные :(", "error");
      } else if (status == 401) {
        Api.sendNTFS("Ошибка", "Вы не авторизованы", "warning");
        Api.setCookie("ui", "", null);
        Api.setCookie("session_token", "", null);
        window.location.href = "/account/login";
      } else if (status == 409) {
        Api.sendNTFS("Ошибка", "Данные получены неверно", "warning");
      } else if (status == 403) {
        Api.sendNTFS(
          "Ошибка",
          "У вас нет доступа к данной странице",
          "warning"
        );
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else if (status == 404) {
        Api.sendNTFS("Ошибка", "Данный запрос не найден", "warning");
      } else if (status == 426) {
        Api.sendNTFS(
          "Ошибка",
          "Ваш аккаунт не активирован! Проверьте почту",
          "warning"
        );
        setTimeout(() => {
          window.location.href = "/account/activate";
        }, 1000);
      }
    } else {
      this.sendNTFS("Отлично!", successData, "success");
    }
  }
}
