
const { request } = require('@playwright/test');

async function getToken() {
   const apiContext = await request.newContext();

   const response = await apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/auth/login',
      {
         data: {
            userEmail: 'rahulshettyacademy',
            userPassword: 'Learning@830$3mK2'
         }
      }
   );

   const body = await response.json();
   return body.token;
}

module.exports = { getToken };