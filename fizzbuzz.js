const num = Array.from({length:100}, (v,i)=>i+1)

num.forEach((i) => {
    if (i % 5 == 0)
        console.log("Buzz")
})