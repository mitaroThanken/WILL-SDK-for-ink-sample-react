export const disalbeZoom = () => {
  const keyCodes = [61, 107, 173, 109, 187, 189];

  window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && (keyCodes.indexOf(e.which) !== -1))
      e.preventDefault();
  });

  window.addEventListener("wheel", function (e) {
    if (e.cancelable && (e.ctrlKey || e.metaKey))
      e.preventDefault();
  }, { passive: false });

  // prevents Scribble for iOS
  window.addEventListener("touchmove", function (e) {
    e.preventDefault();
  }, { passive: false });
}
