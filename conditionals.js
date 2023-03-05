function whichSchool(age){
  if (age < 13){
    console.log ("Elementary School");
  }
  else if(age >= 13 && age <= 18){
    console.log("Secondary School")
  }
  else{ 
    console.log("LightHouse Labs");
  }
}
}
const whichSchool = function (age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
};
