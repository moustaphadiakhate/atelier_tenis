import { getMean, getMedian } from './helpers/statistics.js';

const dataset = [
  { listValue: [1, 2, 3], median: 2, mean: 2 },
  { listValue: [1, 3, 4], median: 3, mean: 2.6666666666666665 },
  { listValue: [1, 2, 2, 1], median: 1.5, mean: 1.5 },
  { listValue: [3, 2, 2, 10], median: 2, mean: 4.25 },
];
// Test for Root test api
dataset.forEach((data) => {
  console.log(data.listValue, getMean(data.listValue));
});
