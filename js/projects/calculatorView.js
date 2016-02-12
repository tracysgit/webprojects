// ======== JQuery Calculator =========

$(document).ready(function(){
    
    var arrinput = [];
    var factor1;
    var factor2;
    var temp;
    var operator;
    var result;
    
    //------ display a clicked button ------
    $("button").click(function(event){
        $this = $(this);
        $thisVal = $(this).val();
        $thisClass = $(this).attr('class');
        $display = $("input#display");
                
        //---- if numbers are selected ----
        if($thisClass.indexOf('number') >= 0){
            arrinput.push($thisVal);
            factor1 = parseFloat(arrinput.join(''));
            displayResult(factor1);
        } 
       
        //---- if operators are selected ----
        if($thisClass.indexOf('operator') >= 0){
            operator = $thisVal;
            displayResult(factor1);
            factor2 = factor1;  // save recorded factor
            factor1 = "";
            arrinput = [];  // clear the recorded factor    
        } 
        
        //---- if percent is selected ----
        if($thisVal == "%"){
            $("#x1").html("operator = " + operator);
            $("#x2").html("factor1 = " + factor1);
            $("#x3").html("factor2 = " + factor2);
            // percent only works after other operator is selected 
            if((factor2 != undefined) && (operator != undefined) && (factor1 != ""))
            {  // if all the variable are ready to perform the operation
                temp = (factor1 * factor2)/100;
                factor1 = temp;
                result = temp;    
            } else {
                result = ""; 
            }
            displayResult(result);
        }
        
        //---- if equals is selected ----
        if($thisVal == "="){
            // perform correct operation
            if(operator == "mul"){
                result = factor1 * factor2;
            } else if (operator == "div"){
                result = factor2/factor1;
            } else if (operator == "sub"){
                result = factor2 - factor1;
            } else if (operator == "add"){
                result = factor2 + factor1;
            } else {
                result = "";
            }
            displayResult(result);
            factor2 = factor1;  // save recorded factor
            arrinput = [];
            operator = "";
            
            /*$("#x1").html("result = " + result);
            $("#x2").html("factor1 = " + factor1);
            $("#x3").html("factor2 = " + factor2);*/
        }
     
        //---- if clears are selected ----
        if($thisClass.indexOf('clear') >= 0){
            if($thisVal == "AC"){  // this means all clear
                displayResult("");
                factor1 = "";
                factor2 = "";
                arrinput = [];      
            }
            if($thisVal == "CE"){  // this means clear the last entry
                displayResult("");
                factor1 = "";
                arrinput = [];   
            }
        } 
        
        //---- function to display results ----
        function displayResult(input){
            $display.val(input);
            $("#x1").html(input);
        }
        
    });
    
});