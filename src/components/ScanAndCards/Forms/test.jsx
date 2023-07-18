// const customNumber = function (e) {
//   const inputValue = e.target.value;
//   const isBackspace = e.nativeEvent.inputType === 'deleteContentBackward';

//   if (isBackspace) {
//     // Handle backspace key
//     const strippedValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
//     const formattedValue = strippedValue
//       .slice(0, 16) // Limit input to a maximum of 16 digits
//       .replace(/(\d{4})/g, '$1-'); // Insert a dash after every 4 digits

//     // Remove the last dash if it exists
//     e.target.value = formattedValue.endsWith('-')
//       ? formattedValue.slice(0, -1)
//       : formattedValue;
//   } else {
//     const strippedValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
//     const formattedValue = strippedValue
//       .slice(0, 16) // Limit input to a maximum of 16 digits
//       .replace(/(\d{4})/g, '$1-'); // Insert a dash after every 4 digits

//     e.target.value = formattedValue;
//   }
// };

//-------------
// *work
// const customNumber = function (e) {
//   const inputValue = e.target.value;
//   const formattedValue = inputValue.replace(/\D/g, '').slice(0, 16);
//   e.target.value = formattedValue;
//   setCardDigits(formattedValue);
// };

//----------------
//length = 20
// let deleteLast = formattedValue;
// if (formattedValue.length === 20) {
//   deleteLast = formattedValue.split('');
//   deleteLast.pop();
//   deleteLast = deleteLast.join('');
// }

//------------------------
// *pass : can use this
// const separateCardDigits = (cardDigits) => {
//   return cardDigits.map((cardDigit) => {
//     return cardDigit.split('-').join('');
//   });
// };
// const separatedValues = separateCardDigits(cardDigits);
// console.log('Separated values:', separatedValues);
