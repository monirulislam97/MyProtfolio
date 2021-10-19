/*
********************************************************
* Individual Assignment (JS)				   		   *
* 			                                           *
* Name:  MD MONIRUL ISLAM MOLLA             		   *
* Matric Number:  A19EC4013                            *
* Section:  06                                         *
********************************************************
*/





/*Assessment item - Task 1*/
/*Based on your understanding, provide a detailed description of how function addNewSubject() works

The addNewSubject() function is basically create a new three specific column to add new Class,  credits 
and marks in my GPA Calculator.So whenever I click the button "Add Subject" the addNewSubject() function
will be called automically it will first execute the DOM object getElementById() and copy the "table_body"
into new var tbody. After that another DOM object createElement() will be executed and a newTr is created 
which is "tr" type.

After that this function will execute a for lopp operation with three(3) iteration  that means in each 
iteration a new column will be appended in the table bellow and conditioned with if else wchich validate the
column number and assigned the input type and size.Else the column input type, size, and maxLength will be 
keep default.if the iteration exceed three times the for loop will be terminated and push all the columns in 
a single row. After that  last DOM object appendChild() will be executed and appended the row below in the 
given table.So basically the new Row should be appended to the given table which consist of three column and
input type.

*/


function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {  
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "15";
            input.maxLength = "8";
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}




/*Assessment item - Task 2*/
/*Based on your understanding, provide a detailed description of how function deleteLastSubject() works

deleteLastSubject()  is a function which deleting the last row from the table except the first row. 
So whenever I click the Delete last subject function deleteLastSubject() will be invoked and executed.
initially a new var x will be stored the number of rows in the table by using rows.Length operration.
then it will chceck the conditioned whether the deleted row is the first row or not. if condition doesn't
meet successfully it will return the false value so that the first row will never be deleted if the number of row is one.

Else, if the number of row is more than one whenever I click the button this function will delete one row on each click from 
the table and decrement the number of current row in the table and store the current value into x.


*/
function deleteLastSubject() {
   
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}




/*Assessment item - Task 3*/
/*Based on your understanding, provide a detailed description of how function sendElementToCalculate() works

This sendElementToCalculate() is a fucntion which started to execute whenever I click the "Calculate" button.
During the execution  firstly the "Tbale_body" will be copied to the tbody object. and also all the elements 
from table_form will be pushed into elements. After that this function will call another function  CalculateGPA() 
and pass all the elements through this funtions parameter which elements weere copied from the "Tbale_body". 
So basically that is how the table elements will be send to the another function to Calculate GPA.


*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    var elements = tbody.getElementsByTagName("input");
    CalculateGPA(elements);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a detailed description of how function CalculateGPA() works.

This CalculateGPA() function basically calculate the Total Credit and GPA  for the user.
Whenever I click "Calculate GP" button this CalculateGPA()  function will be called by sendElementToCalculate() 
and all the elements also passed by this function to CalculateGPA() function. So when the CalculateGPA() function
will be executed with the stored elements and declerd some variables ( totalCredits,totalPoints,allOK, length) and 
it will executing a foor loop untill the  elements.length with threem times increment. This loop normally validate the fields 
as well as calculate the Total Credit, Marks  and points etc. for all the subjects. If I keep the required input/value empty
for the subject column and click the Calculate button it will display an alert message for example(Please Enter The Name of The 
Subject!). Ohterwise it will marked the the column border with green color. 

This functin check if the inserted value for credit is empty or decimal number if I put any decimal number or fully empty the program
will display the message (Please Insert Value of The Credit or The Value of Credit Must Be In Whole Number!) and marked this filrd with red border.

Same functionality apply for the Grade also after putting the grade it will execute to calculate the total points by appying credit*getPoint() function.
To calculate the points for each grade the program will execute another function getPoint()  called After calculating the total points for loop woill
be terminated after executing all the elements of rows and columns. After that a GPA variable will be declard to store the GPA by calculating
(totalPoints/totalCredits).


*/
function CalculateGPA(elements) {

    var totalCredits = 0;
    var totalPoints = 0;
    var allOK = 0;
    var length = elements.length;
    
    

    for (var i = 0; i < length; i += 3) {
        
        if (elements[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            elements[i].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i].style.borderColor = 'green';
            
        }  
        
        if (elements[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            elements[i+1].style.borderColor = 'red';
            return false;
        }else if (elements[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            elements[i+1].style.borderColor = 'red';
             
        }
        else{
            elements[i+1].style.borderColor = 'green';
            var credit = parseFloat(elements[i+1].value); 
            totalCredits += credit;
        }  

        
        
        var grade = elements[i+2].value;
        if (grade == "") {
            alert("Please fill in the point");
            elements[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(grade);
        
       
    }
    var GPA = totalPoints/totalCredits;
      
    document.results.total_credits.value = totalCredits;
    document.results.gpa.value = GPA.toPrecision(3);
     
    
   
}


function getPoint(grade) {
    
    if (grade >= 80) {
        return 4.00;
    }
    else if (grade >= 75){
        return 3.67;
    }
    else if (grade >= 70){
        return 3.33;
    }
    else if (grade >= 65){
        return 3.00;
    }
    else if (grade >= 60){
        return 2.67;
    }
    else if (grade >= 55){
        return 2.33;
    }
    else if (grade >= 50){
        return 2.00;
    }
    else if (grade >= 45){
        return 1.67;
    }
    else if (grade >= 40){
        return 1.33;
    }
    else if (grade >= 35){
        return 1.00;
    }
    else if (grade >= 30){
        return 0.67;
    }
    else if (grade >= 0){
        return 0.00;
    }
}