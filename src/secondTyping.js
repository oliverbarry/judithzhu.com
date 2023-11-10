import TypeIt from "typeit";

const DEFAULT_SPEED = 120;
const typitElementId = "#first-subtext";


export default () => {

  const typeItSecondInstance = new TypeIt(typitElementId, {
    strings: ['<span class="sub-text">I\'m...</span>'],
    speed: DEFAULT_SPEED,
    cursor:false,
    autoStart: false,
    startDelay: 3000,
    breakLines: false,
    afterComplete: () => {

        new TypeIt("#second-subtext", {
            speed: DEFAULT_SPEED-60,
            lifeLike: true,
            strings: [
            '<span class="sub-text still-me">a backend software engineer experienced in building cloud native systems that scale</span>',
            '<span class="sub-text still-me">currently working @gemini</span>',
            '<span class="sub-text still-me">a graduate from NYU Shanghai `17</span>',
            '<span class="sub-text still-me">easily distrac...</span>',
            '<span class="sub-text still-me">a pro amateur minor league table football prodigy</span>',
            '<span class="sub-text still-me">a pool extraordinare sinking the 8 ball</span>',
            ],
            cursorChar: "_",
            loop: true,
            breakLines: false,
            nextStringDelay: [1, 2000]
        }).go();
        typeItSecondInstance.destroy();
    },
  }).go();
};
