import TypeIt from "typeit";

const DEFAULT_SPEED = 100;
const typitElementId = "#main-text";
const linksElementId = "#links";

const showLinks = () => {
  const linksContainer = document.querySelector(linksElementId);

  setTimeout(() => {
    linksContainer.classList.remove("collapsed");
  }, 500);
};

export default () => {
  const typeItInstance = new TypeIt(typitElementId, {
    speed: DEFAULT_SPEED,
    cursorChar: "_",
    autoStart: false,
    afterComplete: showLinks
  });

  typeItInstance
    .empty()
    .type('<div class="header">Hi, I\'m Judith!</div>')
  typeItInstance.init();
  typeItInstance.destroy();
};
