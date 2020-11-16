const breakpoints = [
  { xs: 0 },
  { s: 480 },
  { m: 768 },
  { l: 1000 },
  { xl: 1920 },
  { res2k: 2048 },
  { res4k: 3840 },
  { res8k: 7680 },
];

export const styledComponentBreakpoints = {
  xs: `(min-width: ${0})`,
  s: `(min-width: ${480})`,
  m: `(min-width: ${768})`,
  l: `(min-width: ${1000})`,
  xl: `(min-width: ${1920})`,
  res2k: `(min-width: ${2048})`,
  res4k: `(min-width: ${3840})`,
  res8k: `(min-width: ${7680})`,
};

export default breakpoints;
