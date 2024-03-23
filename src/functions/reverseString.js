export function reverseString(str) {
   if (str === null) return null;
   if (str == undefined) return undefined;

   let reversedString = '';
   for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
   }
   return reversedString;
}