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

export const copyText = (text, id = null) => {
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  else if (window.clipboard) window.clipboard.copyText(text);
  else fallbackCopyTextToClipboard(text);
};

export const fallbackCopyTextToClipboard = (text) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    if (!successful) alert("Copy not supported on your device");
  } catch (err) {
    alert("Copy not supported on your device");
  }

  document.body.removeChild(textArea);
};
