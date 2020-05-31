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
            '<span class="sub-text still-me">a product marketing manager</span>',
            '<span class="sub-text still-me">currently working @alphasights</span>',
            '<span class="sub-text still-me">a graduate from NYU `18</span>',
            '<span class="sub-text still-me">an absolute beast</span>',
            '<span class="sub-text still-me">proficient in Excel</span>',
            '<span class="sub-text still-me">a lost human</span>',
            '<span class="sub-text still-me">easily distrac...</span>',
            '<span class="sub-text still-me">a pro amateur minor league volleyball prodigy</span>',
            '<span class="sub-text still-me">a Southern California native</span>',
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
