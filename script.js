document.querySelector('button[name="calculate"]').addEventListener("click", function () {
    // Get values from inputs
    let val1 = parseFloat(document.getElementById("1").value) || 0;
    let val2 = parseFloat(document.getElementById("2").value) || 0;
    let val3 = parseFloat(document.getElementById("3").value) || 0;
    let val4 = parseFloat(document.getElementById("4").value) || 0;
    let val5 = parseFloat(document.getElementById("5").value) || 0;
    let val6 = parseFloat(document.getElementById("6").value) || 0;
    let val7 = parseFloat(document.getElementById("7").value) || 0;
    let val8 = parseFloat(document.getElementById("8").value) || 0;

    // first row
    let result15 = val5.toString() + val1.toString();
    let result16 = val6.toString() + val1.toString();
    let result17 = val7.toString() + val1.toString();
    let result18 = val8.toString() + val1.toString();

    // second row
    let result25 = val5.toString() + val2.toString();
    let result26 = val6.toString() + val2.toString();
    let result27 = val7.toString() + val2.toString();
    let result28 = val8.toString() + val2.toString();

   // third row
   let result35 = val5.toString() + val3.toString();
   let result36 = val6.toString() + val3.toString();
   let result37 = val7.toString() + val3.toString();
   let result38 = val8.toString() + val3.toString();

   // fourth row
   let result45 = val5.toString() + val4.toString();
   let result46 = val6.toString() + val4.toString();
   let result47 = val7.toString() + val4.toString();
   let result48 = val8.toString() + val4.toString();

    // Display result
    document.getElementById("result").innerText = "Result: " + result48;
});

