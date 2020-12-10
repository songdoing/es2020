const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");
const error = document.querySelector("#error");
let answer;
let answerArr = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

//min(in) ~ max(in)
//Math.floor(Math.random() * (max - min + 1)) + min;
//answer = Math.floor(Math.random() * 9000) + 1000;

for (let i = 0; i <= 3; i++) {
  let index = Math.floor(Math.random() * (10 - i)); //0~9 integer
  answerArr.push(numbers[index]);
  numbers.splice(index, 1);
}
//from array to String
answer = String(answerArr.join(""));
console.log(answer);

check.addEventListener("click", () => {
  const tryAnswer = input.value;
  if (tryAnswer && tryAnswer.length === 4) {
    if (count >= 10) {
      error.textContent = `Sorry. You already tried 10 times. The answer is ${answer}. Try another one.`;
    } else {
      //baseball logs
      if (tryAnswer === answer) {
        logs.appendChild(document.createTextNode("HR!!!"));
      } else {
        console.log("different");
        let strike = 0;
        let ball = 0;
        for (const [aIndex, aNumber] of answerArr.entries()) {
          for (const [iIndex, iString] of tryAnswer.split("").entries()) {
            if (aNumber === Number(iString)) {
              if (aIndex === iIndex) {
                strike++;
              } else {
                ball++;
              }
            }
          }
        }
        logs.appendChild(
          document.createTextNode(
            `${tryAnswer} : ${strike} strike ${ball} ball`
          )
        );
      }
    }
  } else {
    error.textContent = "You should input the 4 digits.";
  }
  count++;
});
