const { request } = require('@playwright/test');

async function createUser() {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in'
  });

  try {
    return await apiContext.post('/api/users', {
      data: {
        name: 'shiv',
        job: 'qa'
      }
    });
  } finally {
    await apiContext.dispose();
  }
}

module.exports = { createUser };
