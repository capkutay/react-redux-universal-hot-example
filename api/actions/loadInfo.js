export default function loadInfo() {
  console.log('LOAD ACTION', Date.now());
  return new Promise((resolve) => {
    resolve({
      message: 'This came from the api',
      time: Date.now()
    });
  });
}
