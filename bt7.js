let a = +prompt(`Mời bạn nhập vào số a:`);
let b = +prompt(`Mời bạn nhập vào số b:`);
let caculator = prompt(`Nhập dấu phép tính \(\+,\-,\*,\/\):`);
let rs;
switch (caculator) {
  case "/":
    if (b == 0) {
      alert("Không thể chia một số  cho không");
    } else {
      rs = a / b;
    }
    break;
  case "+":
    rs = a + b;
    break;

  case "-":
    rs = a - b;
    break;

  case "*":
    rs = a * b;
    break;
}
alert(`Kết quả của phép tính trên là: a ${caculator} b = ${rs}`);
