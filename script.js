document.querySelector('button[name="calculate"]').addEventListener("click", function () {
     // Get values from inputs
     let val1 = document.getElementById("1").value;
     let val2 = document.getElementById("2").value;
     let val3 = document.getElementById("3").value;
     let val4 = document.getElementById("4").value;
     let val5 = document.getElementById("5").value;
     let val6 = document.getElementById("6").value;
     let val7 = document.getElementById("7").value;
     let val8 = document.getElementById("8").value;


    if (typeof val1 === "string" && typeof val2 === "string" && typeof val3 === "string" && typeof val4 === "string" && typeof val5 === "string" && typeof val6 === "string" && typeof val7 === "string" && typeof val8 === "string") {
       
         
       // calculates value of id=15
        let val150_to_list = document.getElementById("1").value.split("");
        let val151_to_list = document.getElementById("5").value.split("");
        let val150_list = JSON.stringify(val150_to_list [0]) + JSON.stringify(val151_to_list [0]) + JSON.stringify(val150_to_list [1]) + JSON.stringify(val151_to_list [1]);
        let val150_result = val150_list.replace(/"/g, ''); 
         
       // calculates value of id=16
        let val160_to_list = document.getElementById("2").value.split("");
        let val161_to_list = document.getElementById("5").value.split("");
        let val160_list = JSON.stringify(val160_to_list [0]) + JSON.stringify(val161_to_list [0]) + JSON.stringify(val161_to_list [1]) + JSON.stringify(val160_to_list [1]);
        let val160_result = val160_list.replace(/"/g, '');
         
       //calculates value of id=17
        let val170_to_list = document.getElementById("3").value.split("");
        let val171_to_list = document.getElementById("5").value.split("");
        let val170_list = JSON.stringify(val171_to_list [0]) + JSON.stringify(val170_to_list [0]) + JSON.stringify(val171_to_list [1]) + JSON.stringify(val170_to_list [1]);
        let val170_result = val170_list.replace(/"/g, '');
         
       //calculates value of id=18
        let val180_to_list = document.getElementById("4").value.split("");
        let val181_to_list = document.getElementById("5").value.split("");
        let val180_list = JSON.stringify(val181_to_list [0]) + JSON.stringify(val180_to_list [0]) + JSON.stringify(val181_to_list [1]) + JSON.stringify(val180_to_list [1]);
        let val180_result = val180_list.replace(/"/g, '');
         
       //calculates value of id=25
        let val120_to_list = document.getElementById("1").value.split("");
        let val121_to_list = document.getElementById("6").value.split("");
        let val120_list = JSON.stringify(val121_to_list [0]) + JSON.stringify(val120_to_list [0]) + JSON.stringify(val120_to_list [1]) + JSON.stringify(val121_to_list [1]);
        let val120_result = val120_list.replace(/"/g, '')
         
       //calculate value of id=26
        let val200_to_list = document.getElementById("2").value.split("");
        let val210_to_list = document.getElementById("6").value.split("");
        let val200_list = JSON.stringify(val210_to_list [0]) + JSON.stringify(val200_to_list [0]) + JSON.stringify(val200_to_list [1]) + JSON.stringify(val210_to_list [1]);
        let val200_result = val200_list.replace(/"/g, '');
         
       //calculate value of id=27
        let val230_to_list = document.getElementById("3").value.split("");
        let val231_to_list = document.getElementById("6").value.split("");
        let val230_list = JSON.stringify(val231_to_list [0]) + JSON.stringify(val230_to_list [0]) +
        JSON.stringify(val230_to_list [1]) + JSON.stringify(val231_to_list [1]);
        let val230_result = val230_list.replace(/"/g, '');
         
       //calculate value of id=28
        let val240_to_list = document.getElementById("4").value.split("");
        let val241_to_list = document.getElementById("6").value.split("");
        let val240_list = JSON.stringify(val241_to_list [0]) + JSON.stringify(val240_to_list [0]) + JSON.stringify(val240_to_list [1]) + JSON.stringify(val241_to_list [1])
        let val240_result = val240_list.replace(/"/g, '')
         
       //calculate value of id=35
        let val250_to_list = document.getElementById("1").value.split("");
        let val251_to_list = document.getElementById("7").value.split("");
        let val250_list = JSON.stringify(val250_to_list [0]) + JSON.stringify(val251_to_list [0]) + JSON.stringify(val250_to_list [1]) + JSON.stringify(val251_to_list [1]);
        let val250_result = val250_list.replace(/"/g, '');
         
       //calculate value of id=36
        let val260_to_list = document.getElementById("2").value.split("");
        let val261_to_list = document.getElementById("7").value.split("");
        let val260_list = JSON.stringify(val260_to_list [0]) + JSON.stringify(val261_to_list [0]) + JSON.stringify(val261_to_list [1]) + JSON.stringify(val260_to_list [1]);
        let val260_result = val260_list.replace(/"/g, '') 
         
       //calculate value of id=37
        let val270_to_list = document.getElementById("3").value.split("");
        let val271_to_list = document.getElementById("7").value.split("");
        let val270_list = JSON.stringify(val270_to_list [0]) + JSON.stringify(val271_to_list [0]) + JSON.stringify(val270_to_list [1]) + JSON.stringify(val271_to_list [1]);
        let val270_result = val270_list.replace(/"/g, '')
         
       //calculate value of id=38
        let val280_to_list = document.getElementById("4").value.split("");
        let val281_to_list = document.getElementById("7").value.split("");
        let val280_list = JSON.stringify(val280_to_list [0]) + JSON.stringify(val281_to_list [0]) + JSON.stringify(val281_to_list [1]) + JSON.stringify(val280_to_list [1]);
        let val280_result = val280_list.replace(/"/g, '')
         
       //calculate value of id=45
        let val350_to_list = document.getElementById("1").value.split("");
        let val351_to_list = document.getElementById("8").value.split("");
        let val350_list = JSON.stringify(val350_to_list [0]) + JSON.stringify(val351_to_list [0]) + JSON.stringify(val350_to_list [1]) + JSON.stringify(val351_to_list [1]);
        let val350_result = val350_list.replace(/"/g, '');
         
       //calculate value of id=46
        let val360_to_list = document.getElementById("2").value.split("");
        let val361_to_list = document.getElementById("8").value.split("");
        let val360_list = JSON.stringify(val360_to_list [0]) + JSON.stringify(val361_to_list [0]) + JSON.stringify(val360_to_list [1]) + JSON.stringify(val361_to_list [1]);
        let val360_result = val360_list.replace(/"/g, '')
         
       //calculate value of id=47
        let val370_to_list = document.getElementById("3").value.split("");
        let val371_to_list = document.getElementById("8").value.split("");
        let val370_list = JSON.stringify(val370_to_list [0]) + JSON.stringify(val371_to_list [0]) + JSON.stringify(val370_to_list [1]) + JSON.stringify(val371_to_list [1]);
        let val370_result = val370_list.replace(/"/g, '');
         
       //calculate value of id=48
        let val380_to_list = document.getElementById("4").value.split("");     
        let val381_to_list = document.getElementById("8").value.split(""); 
        let val380_list = JSON.stringify(val380_to_list [0]) + JSON.stringify(val381_to_list [0]) + JSON.stringify(val380_to_list [1]) + JSON.stringify(val381_to_list [1]);
        let val380_result = val380_list.replace(/"/g, ''); 
         
        
        
       
         
        
        
       // returns value of id=15 
        document.getElementById("15").innerText = val150_result
         
       // return value of id=16
        document.getElementById("16").innerText = val160_result
         
       //return value of id=17
        document.getElementById("17").innerText = val170_result
         
       //return value of id=18
        document.getElementById("18").innerText = val180_result
        
        //return value of id=25
        document.getElementById("25").innerText = val120_result
         
       //return value of id=26
        document.getElementById("26").innerText = val200_result
         
       //return value of id=27
        document.getElementById("27").innerText = val230_result
         
       //return value of id=28
        document.getElementById("28").innerText = val240_result
         
       //return value of id=35
        document.getElementById("35").innerText = val250_result
         
       //return value of id=36
        document.getElementById("36").innerText = val260_result
         
       //return value of id=37
        document.getElementById("37").innerText = val270_result
         
       //return value of id=38
        document.getElementById("38").innerText = val280_result
         
       //return value of id=45
        document.getElementById("45").innerText = val350_result
         
       //return value of id=46
        document.getElementById("46").innerText = val360_result
         
       //return value of id=47
        document.getElementById("47").innerText = val370_result
        
        //return value of id=48
        document.getElementById("48").innerText = val380_result
         
       document.getElementById("error_output").innerText = "result is string"   
    } else {
        document.getElementById("error_output").innerText = "result is not string"
    }

  


});

