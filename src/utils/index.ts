export const minify = (input: string): string => input.replace(/\s{2,}/g, ' ').replace(/(\s*)(=+)(\s*)/g, '$2');
