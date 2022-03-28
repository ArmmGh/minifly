const commentsReg = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
const whiteSpacesReg = /[\s]{1,}/g;
const spacesReg = /(\s*)((?:=|>|\(|\)|\(|{|}|;|,|:|\|)+)(\s*)/g;

export const minify = (input: string): string =>
    input.trim().replace(whiteSpacesReg, ' ').replace(commentsReg, '').replace(spacesReg, '$2');
