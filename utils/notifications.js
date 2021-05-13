import { Notification } from "element-ui";
export default class NTFS {
  instance = null;

  static getInstance() {
    if (NTFS.instance == null) {
      NTFS.instance = new NTFS();
    }
    return NTFS.instance;
  }

  NTFS(title, message, type) {
    Notification({
      title: title,
      message: message, // 'Пароли не совпадают :(',
      type: type // 'warning'
    });
  }
}
