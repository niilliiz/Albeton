const DisableScroll = ({ isHidden = false }) => {
  if (isHidden) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
  }
};
export default DisableScroll;
