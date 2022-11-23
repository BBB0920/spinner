let spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const spinner = (numOfSpins) => {

  for(i = 8; i <= numOfSpins * 8; i+=8) {
    spinArr.forEach (function (element, index) {
      setTimeout(() => {
        process.stdout.write(element);
      }, (200 * (index + i)));
    })
  }  
  
  setTimeout(() => {
    process.stdout.write(spinArr[0]);
  }, 200 * (8 + numOfSpins * 8));
}

spinner(1);