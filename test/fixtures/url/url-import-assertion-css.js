import sheet from './url.css' assert { type: "css" };

console.log(sheet instanceof CSSStyleSheet);

document.adoptedStyleSheets = [sheet];
