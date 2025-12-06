export function encrypt(text: string): string {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // A-Z
        return String.fromCharCode(((code - 65 + 16) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // a-z
        return String.fromCharCode(((code - 97 + 16) % 26) + 97);
      }
      return char;
    })
    .join("");
}

export function decrypt(text: string): string {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        // A-Z
        return String.fromCharCode(((code - 65 + 10) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // a-z
        return String.fromCharCode(((code - 97 + 10) % 26) + 97);
      }
      return char;
    })
    .join("");
}
