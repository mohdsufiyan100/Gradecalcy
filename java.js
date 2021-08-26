
function calcy(){
    let sub1 = document.getElementById('sub1').value; 
    let sub2 = document.getElementById('sub2').value;
    let sub3 = document.getElementById('sub3').value;
    let sub4 = document.getElementById('sub4').value;
    let clg = document.getElementById('clg').value;
    let name = document.getElementById('studentname').value;
    let rollno = document.getElementById('studentrollno').value;
    let btn = document.getElementById('calcybtn');

    let grade = "";
    let result = "";    
    
    let totalgrade = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) +  parseFloat(sub4);

    // -------------------------------date-------------------------

    let Dt = new Date();
    let gd = Dt.getDate();
    let gm = Dt.getMonth();
    let gy = Dt.getFullYear();
    
    // -------------------------------percentage-------------------------
    
    let perc = (totalgrade/400)*100;

    // -------------------------------grade-------------------------

    if(perc <=100 && perc >= 80){
        grade = "A";
    }
    else if(perc <=79 && perc >= 60){
        grade = "A";
    }
    else if(perc <=59 && perc >= 33){
        grade = "B";
    }
    else{
        grade = "F";
    }

    // -------------------------------pass or fail-------------------------

    if(perc >= 33){
        result = 'congratulations you are Pass';
    }
    else{
        result = 'you are Fail';

    }
    console.log('running');

    btn.addEventListener('click', ()=>{
        document.getElementById('container').style.display = 'none';
        document.getElementById('data_container').style.display = 'block';
    })

    if( document.getElementById('sub1').value == "" ||  document.getElementById('sub2').value == ""||
        document.getElementById('sub3').value == ""||  document.getElementById('sub4').value == ""||
        document.getElementById('clg').value == ""|| document.getElementById('studentname').value ==""||
        document.getElementById('studentrollno').value == "")
        {
            window.alert('Please fill complete detail');
        }
        else{
            
            document.getElementById('cn'). innerHTML = `${clg}`;
            document.getElementById('n').innerHTML = `Name: ${name}`;
            document.getElementById('rn').innerHTML = `Roll No: ${rollno}`;
            document.getElementById('sd').innerHTML = ` Out of 500 your total is ${totalgrade}.Percentage is ${perc}% . Your grade is ${grade} , \n and ${result}. `;
            document.getElementById('d').innerHTML = `Date: ${gd}/${gm}/${gy}`;
        }
}