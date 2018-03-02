module.exports = function getZerosCount(number, base) {
  // your implementation
    var count = 0;
    var zero = Number.MAX_VALUE;

      for (var i = 2; i <= base; i++) {
        if (base % i == 0) {
              count = 0;
              while (base % i == 0) {
                count++;
                base = base / i;
            }
              var count1 = 0;
              var count2 = number / i;
                while (count2 > 0) {
                   count1 = count1 + count2;
                   count2 = Math.floor(count2 / i);
            }
            zero = Math.min(zero, Math.floor(count1 / count));
        }
    }
   return zero;
};
