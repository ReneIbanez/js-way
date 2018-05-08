function weekdayCon() {
  let weekday = prompt("Select your day");
  if(weekday == "sunday"){
    console.log("monday");
  }else if(weekday == "monday"){
    console.log("tuesday");
  }else if(weekday == "tuesday"){
    console.log("wednesday");
  }else if(weekday == "wednesday"){
    console.log("thursday");
  }else if(weekday == "thursday"){
    console.log("friday");
  }else if(weekday == "friday"){
    console.log("saturday");
  }else if(weekday == "saturday"){
    console.log("sunday");
  }else{
    console.log("thats not a weekday ");
  }
}


// switch statments
function weekdayCase(){
  let weekday = prompt("Select your day");
  switch(weekday){
    case "sunday":
      console.log("monday");
      break;
    case "monday":
      console.log("tuesday");
      break;
    case "tuesday":
      console.log("wednesday");
      break;
    case "wednesday":
      console.log("thursday");
      break;
    case "thursday":
      console.log("friday");
      break;
    case "friday":
      console.log("saturday");
      break;
    case "saturday":
      console.log("sunday");
      break;
    default:
      console.log("that not a day of the week bruh");

  }
}
