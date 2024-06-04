export default function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") : null
  }
}
