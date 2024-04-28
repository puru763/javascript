// function generateRandomCode() {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// const codeLength = 8;
// const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let code = '';
// for (let i = 0; i < codeLength; i++) {
// code += charset[Math.floor(Math.random() * charset.length)];
// }
//   if (Math.random() < 0.8) {
//     resolve(code);
//   } else {
//     reject(new Error('Failed to generate a valid code'));
//   }
// }, 2000);

// });
// }
// generateRandomCode()
// .then((code) => {
// console.log('Generated code:', code);
// })
// .catch((error) => {
// console.error('Error:', error.message);
// })




function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'Example Data' };
        if (Math.random() < 0.8) {
          resolve(data);
        } else {
          reject(new Error('Failed to fetch data from the API'));
        }
      }, 2000);
    });
  }
  
  fetchDataFromAPI()
    .then((data) => {
      console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    })