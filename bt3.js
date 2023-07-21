let a = +prompt("Nhập hệ số a của phương tình ax+b = 0");
let b = +prompt("Nhập hệ số b của phương tình ax+b = 0");
let x;
if (a == 0) {
  if (b == 0) {
    alert("phương trình vô số nghiệm");
  } else {
    alert("phương trình vô nghiệm");
  }
} else {
  x = -b / a;
  alert("Phương trinh có nghiệm là x = " + x);
}
