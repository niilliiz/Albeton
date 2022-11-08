const DisableScroll = ({ isHidden = false }) => {
  if (isHidden) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
export default DisableScroll;
