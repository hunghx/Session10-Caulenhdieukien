let a=prompt("Nhập số tiền muốn vay (VND)");
let b=prompt("Nhập thời hạn muốn vay(tháng)");
const C=0.1;
let tt=a*Math.pow((1+C/12),b);
alert(`Số tiền bạn phải trả trong ${b} tháng là ${Math.round(tt)}`);
