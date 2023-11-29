export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation, like a fetch request
    setTimeout(() => {
      resolve('API response');
    }, 1000);
  });
}
