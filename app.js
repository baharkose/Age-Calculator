const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");


function calculateAge(){

   const birthdayValue = birthdayEl.value;
   console.log(birthdayValue);

   if(birthdayValue === ""){
    alert("please select a birthday")
   }
   else{
    const age = getAge(birthdayValue)
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
}

btnEl.addEventListener("click", calculateAge);