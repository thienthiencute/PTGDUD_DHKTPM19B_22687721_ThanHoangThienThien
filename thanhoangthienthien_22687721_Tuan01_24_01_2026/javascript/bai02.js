const person = [
  {
    name: "Mark",
    weight: 78,
    height: 1.69
  },
  {
    name: "John",
    weight: 92,
    height: 1.95
  }
];

const bmi = (weight, height) => {
  return weight / (height * height);
};

const bmiRun = () => {
  const { name, weight, height } = person[0];
  const { name: name2, weight: weight2, height: height2 } = person[1];

  const bmi1 = bmi(weight, height);
  const bmi2 = bmi(weight2, height2);

  if (bmi1 > bmi2) {
    console.log(
      `${name}'s BMI (${bmi1.toFixed(1)}) is higher than ${name2}'s (${bmi2.toFixed(1)})!`
    );
  } else {
    console.log(
      `${name2}'s BMI (${bmi2.toFixed(1)}) is higher than ${name}'s (${bmi1.toFixed(1)})!`
    );
  }
};

bmiRun();
