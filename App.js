import "./App.css";

const letterFrequency = (phrase) => {
  console.log(phrase);
  let result = {};

  for (const letter of phrase) {
    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return { result };
};

console.log(letterFrequency("hi, my name is gautama"));
function App() {
  return <></>;
}

export default App;
