function generateEmail() {
   const timestamp = Date.now();
   return `user${timestamp}@mailinator.com`;
}


const checkTitle = async function(page, expected){
   await expect(page).toHaveTitle(expected);
}
module.exports = { generateEmail , checkTitle};