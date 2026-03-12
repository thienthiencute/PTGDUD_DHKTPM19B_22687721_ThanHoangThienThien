// Hàm calcTip từ bài trước
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// 1. Array bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Array rỗng
const tips = [];
const totals = [];

// 3. Dùng for loop tính tip và total
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);


// Bonus: tính trung bình
function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// gọi hàm
console.log("Average total:", calcAverage(totals));