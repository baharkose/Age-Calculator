const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");


function calculateAge(){

   const birthdayValue = birthdayEl.value;
   console.log(birthdayValue);

   if(birthdayValue === ""){
    alert("please select a birthday")
   }
   else{

    const age = getAge(birthdayValue);
    console.log(age);
    resultEl.innerText = `Your age is ${age}  ${age > 1 ? "years" : "year"} old`;
   }

}

function getAge(birthdayValue){
    const currentDate = new Date();

    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    console.log(age);


    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(month < 0 || (month === 0) && currentDate.getDate() < birthdayDate.getDate() ){
        age--
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);