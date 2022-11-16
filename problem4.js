const romanNumerals = (num) => {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
    
    for (key in map) {  
      const repeatCounter = Math.floor(num / map[key]);
      
      if (repeatCounter !== 0) {
        result += key.repeat(repeatCounter);
      }
      
      num %= map[key];
      
      if (num === 0) return result;
    }
    
    return result;
  };

console.log(romanNumerals(6))    // VI
console.log(romanNumerals(9))    // IX
console.log(romanNumerals(23))   // XXIII
console.log(romanNumerals(2021)) // MMXXI
console.log(romanNumerals(1646)) // MDCXLVI