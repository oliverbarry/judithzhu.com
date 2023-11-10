export default () => {
  const outboundLinks = document.querySelectorAll(".outlink");
  const inboundLinks = document.querySelectorAll(".inlink")

  outboundLinks.forEach(link => {
    link.addEventListener("click", () => {
      const outboundLink = link.getAttribute("data-href");

      window.open(outboundLink);
    });
  });

  inboundLinks.forEach(link => {
    link.addEventListener("click", () => {
      const inboundLink = link.getAttribute("data-href");

      window.open(inboundLink, "_self");
    });
  });
};
