/**
 * It takes an array of numbers, adds them up, and returns the mean.
 * @param numbers - An array of numbers.
 * @returns The average of the numbers in the array.
 */
export function getMean(numbers) {
  let total = 0; let
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}

/**
 * Sort the array, then return the middle value
 * @param numbers - an array of integers
 * @returns The median of the array.
 */
export function getMedian(numbers) {
  let median = 0; const
    numsLen = numbers.length;
  numbers.sort();

  if (numsLen % 2 === 0) {
    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else {
    median = numbers[(numsLen - 1) / 2];
  }

  return median;
}
