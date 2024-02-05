
let order = document.querySelector("#order");
order.addEventListener("click", function () {
    event.preventDefault();//imp
    let a = document.querySelector("#a").value;
    let a1 = document.querySelector("#a1").innerHTML;
    let b = document.querySelector("#b").value;
    let b1 = document.querySelector("#b1").innerHTML;
    let c = document.querySelector("#c").value;
    let c1 = document.querySelector("#c1").innerHTML;
    let d = document.querySelector("#d").value;
    let d1 = document.querySelector("#d1").innerHTML;
    let e = document.querySelector("#e").value;
    let e1 = document.querySelector("#e1").innerHTML;
    let f = document.querySelector("#f").value;
    let f1 = document.querySelector("#f1").innerHTML;
    let g = document.querySelector("#g").value;
    let g1 = document.querySelector("#g1").innerHTML;
    let h = document.querySelector("#h").value;
    let h1 = document.querySelector("#h1").innerHTML;
    let i = document.querySelector("#i").value;
    let i1 = document.querySelector("#i1").innerHTML;
    let s1 = document.querySelector("#s1").value;
    let k = document.querySelector("#k").innerHTML;
    let s2 = document.querySelector("#s2").value;
    let l = document.querySelector("#l").innerHTML;
    let s3 = document.querySelector("#s3").value;
    let m = document.querySelector("#m").innerHTML;
    let s4 = document.querySelector("#s4").value;
    let n = document.querySelector("#n").innerHTML;
    let s5 = document.querySelector("#s5").value;
    let o = document.querySelector("#o").innerHTML;
    let s6 = document.querySelector("#s6").value;
    let p = document.querySelector("#p").innerHTML;
    let s7 = document.querySelector("#s7").value;
    let q = document.querySelector("#r").innerHTML;
    let s8 = document.querySelector("#s8").value;
    let r = document.querySelector("#r").innerHTML;
    let s9 = document.querySelector("#s9").value;
    let s = document.querySelector("#s").innerHTML;
    let s10 = document.querySelector("#s10").value;
    let t = document.querySelector("#t").innerHTML;
    const total = a * a1 + b * b1 + c * c1 + d * d1 + e * e1 + f * f1 + g * g1 + h * h1 + i * i1+ s1*k+s2*l+s3*m+s4*n+s5*o+s6*p+s7*q+s8*r+s9*s+s10*t;
    console.log(total);
    let bill = document.querySelector(".text");
    bill.style.display = "block";
    bill.textContent = `Total bill:INR ${total}`;
    alert(`Your order is successfully placed!!Pay Rupees ${total}...`);
})


function resetOrder() {
    // Reset the quantity inputs to zero
    document.querySelectorAll(".tbl").forEach((input) => {
      input.value = 0;
    });
    document.querySelectorAll(".add").forEach((input) => {
      input.value = 0;
    });
  
    // Update the bill to zero
    let bill = document.querySelector(".text");
    bill.style.display = "block";
    bill.textContent = "Total bill: INR 0";
  }
  // Call the resetOrder function when the page loads
window.addEventListener("load", resetOrder);
let cancel = document.querySelector("#cancel");
cancel.addEventListener("click", function () {
    resetOrder();

    alert("Your order is Cancelled!!");
})
