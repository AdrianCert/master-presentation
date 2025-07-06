Reveal.initialize({
  plugins: [RevealMarkdown, RevealMenu, RevealZoom, RevealQRCodePlugin],
  hash: true,
  transition: "convex",
  width: 1280,
  height: 900,
  menu: {
    themes: true,
    transitions: true,
    themesPath: "https://cdn.jsdelivr.net/npm/reveal.js/dist/theme/",
  },
  qrcode: {
    //size: '5hw'
  },
});
