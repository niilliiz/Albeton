const DisableScroll = ({ disable = false }) => {
  if (disable) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
export default DisableScroll;
