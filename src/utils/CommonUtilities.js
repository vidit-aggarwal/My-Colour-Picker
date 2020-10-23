export const hexToRgb = (hexCode) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const getOrDefault = (map, key, defaultValue) => {
  return map.has(key) ? map.get(key) : defaultValue;
};

export const copyText = (text, followUp = null) => {
  if (!followUp) {
    followUp = (...args) => {};
  }
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => followUp(text))
      .catch((e) => followUp(null));
  } else if (window.clipboardData) {
    window.clipboardData.setData("data", text)
      ? followUp(text)
      : followUp(null);
  } else fallbackCopyTextToClipboard(text, followUp);
};

export const fallbackCopyTextToClipboard = (text, followUp = null) => {
  if (!followUp) {
    followUp = (...args) => {};
  }
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  var successful = false;
  try {
    successful = document.execCommand("copy");
  } catch (err) {}
  document.body.removeChild(textArea);
  successful ? followUp(text) : followUp(null);
};
