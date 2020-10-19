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
}
