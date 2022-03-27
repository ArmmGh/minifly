const commentsReg = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
const spacesReg = /(\s*)((?:=|>|\(|\)|\(|{|}|;|,|:)+)(\s*)/g;

export const minify = (input: string): string => input.replace(commentsReg, '').replace(spacesReg, '$2');
