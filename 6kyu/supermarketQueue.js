function queueTime(customers, n) {
    const wait = new Array(n).fill(0);
    for (let t of customers) {
      let index = wait.indexOf(Math.min(...wait));
      wait[index] += t;
    }
    return Math.max(...wait);
  }

//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript