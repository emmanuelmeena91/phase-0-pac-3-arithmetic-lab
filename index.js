function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }

  console.log(makeInt('32')); // Output: 32

console.log(preserveDecimal('3.14')); // Output: 3.14
