const num = Array.from({length:100}, (v,i)=>i+1)

num.forEach((i) => {
   if (i % 5 == 0)
        console.log("Buzz")
})

for (let i = 0; i <= 100; i++) {
   i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") : null
}
