export default {
  ssr: true,

  head: {
    title: "Doru - сайт по продаже медицинских препаратов",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      {
        name: "description",
        content: "Doru - сайт по продаже медицинских препаратов."
      },
      {
        name: "keywords",
        content: "doru, дору, лекарство"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@assets/css/index.css", "~/assets/scss/index.scss"],

  plugins: [
    "@/plugins/element-ui",
    { src: "@/plugins/plugins", ssr: false },
    { src: "@/plugins/ymapPlugin.js", mode: "client" }
  ],

  components: true,

  buildModules: ["@nuxtjs/style-resources"],

  modules: ["nuxt-i18n", "@nuxtjs/axios"],
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ru"
  },
  axios: {},

  build: {}
};
