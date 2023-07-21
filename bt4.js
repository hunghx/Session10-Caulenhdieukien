// cách gải pt bậc 2
let a = +prompt("Hãy nhập hệ số a của pt ");
let b = +prompt("Hãy nhập hệ số b của pt ");
let c = +prompt("Hãy nhập hệ số c của pt ");
if (a !== 0) {
  // ax2+bx+c=0 (a≠0)
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("phương trình vô nghiệm");
  } else if (delta == 0) {
    let x = -b / (2 * a);
    document.write("phương trình có 2 nghiệm kép x1=x2= " + x);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("Phương trình có nghiệm x1=" + x1);
    document.write("Phương trình có nghiệm x2=" + x2);
  }
}
