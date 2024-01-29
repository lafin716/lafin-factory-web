export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "Lafin Factory",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "레이핀의 공장",
          name: "LF",
          content: "유용한 도구를 제공합니다.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["~/assets/css/tailwind.css", "~/assets/scss/index.scss"],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],

  // google fonts
  googleFonts: {
    families: {
      Karla: true,
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
});
