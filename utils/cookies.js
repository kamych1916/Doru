export const cookiesEvents = {
  methods: {
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (let i in ca) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    delCookie: function(cname) {
      this.setCookie(cname, "", null);
    },
    readCookie(name) {
      let result = document.cookie.match(new RegExp(name + "=([^;]+)"));
      result && (result = JSON.parse(result[1]));
      return result || "";
    }
  }
};
