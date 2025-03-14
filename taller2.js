// Punto 1
function findMax(numbers) {

    if (numbers.length === 0) return undefined;
    
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

      if (numbers[i] > max) {

        max = numbers[i];
      }
    }

    return max;
}

// Punto 2
function includes(numbers, value) {

    for (let i = 0; i < numbers.length; i++) {

      if (numbers[i] === value) {

        return true;

      }
    }

    return false;
}

// Punto 3
function sum(numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

      total += numbers[i];

    }
    return total;
}

// Punto 4
function missingNumbers(numbers) {

    let min = numbers[0];
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {

      if (numbers[i] < min) {

        min = numbers[i];

      }
      if (numbers[i] > max) {

        max = numbers[i];
      }
    }
    
    
    const missing = [];
    
    for (let i = min + 1; i < max; i++) {

      let found = false;
      
      for (let j = 0; j < numbers.length; j++) {

        if (numbers[j] === i) {

          found = true;
          break;

        }
      }
      
      if (!found) {
        
        missing.push(i);
      }
    }
    
    return missing;
  }