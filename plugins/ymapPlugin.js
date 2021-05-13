import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey: "12ef8471-f59e-4770-9ba3-3a747c17909f",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
  debug: true
};

Vue.use(YmapPlugin, settings);
