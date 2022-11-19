on('onResourceStart', (name: string) => {
  if (name == GetCurrentResourceName()) {
    setTimeout(() => {
      console.log(`^3 TEST RESOURCE ^0`);
    }, 500);
  }
});
