// Find the biggest and the smallest number in array of integers.
//
// RESTRICTIONS: do this without using sort, min or max functionalities provided by language.
//
// For example if we have an array 10,4,5,7,99,1 the smallest number will be 1 and the biggest would be 99.
// Return it as a JSON object with properties min and max.

exports.minMax = function (data) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < data.length; i++) {
    if (data[i] < min) {
      min = data[i];
    }

    if (data[i] > max) {
      max = data[i];
    }
  }

  return { min, max };
};
