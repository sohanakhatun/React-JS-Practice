// A fake heavy computation function
export default function processData() {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }
  return sum;
}
