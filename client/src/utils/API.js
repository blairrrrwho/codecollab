// export const getMe = (token) => {
//     return fetch('/api/users/user', {
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };
  
//   export const createUser = (userData) => {
//     return fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//   };
  
//   export const loginUser = (userData) => {
//     return fetch('/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//   };