// 1부터 100까지의 숫자를 포함하는 배열 생성
const nums = Array.from({ length: 100 }, (_, i) => i + 1);

// FizzBuzz 로직을 적용하여 결과 출력
nums.map((num) => {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log('FizzBuzz');
	} else if (num % 3 === 0) {
		console.log('Fizz');
	} else if (num % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(num);
	}
});
