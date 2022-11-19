const DisableScroll = ({ isHidden = false }) => {
  if (isHidden) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.height = "auto";
    document.body.style.width = "auto";
  }
};
export default DisableScroll;
