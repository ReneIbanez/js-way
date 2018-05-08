function conMonth(){
  let month = Number(prompt("Enter your Mounth number"));
if( month == 1){
   console.log("Jannuary has " +31+ " days")
}else if( month == 2){
   console.log("Febuary has " +28+ " days")
}else if( month == 3){
    console.log("March has " +31+ " days")
}else if( month == 4){
     console.log("April has " +30+ " days")
}else if( month == 5){
      console.log("May has " +31+ " days")
}else if( month == 6){
   console.log("June has " +30+ " days")
}else if( month == 7){
    console.log("July has " +31+ " days")
}else if( month == 8){
   console.log("Augest has " +31+ " days")
}else if( month == 9){
    console.log("September has " +30+ " days")
}else if( month == 10){
   console.log("October has " +31+ " days")
}else if( month == 11){
   console.log("November has " +30+ " days")
}else if( month == 12){
   console.log("December has " +31+ " days")
}else{
   console.log("thats not a number between 1-12")
 }
}



function switchMonth(){
 let month = Number(prompt("Select your month Number"));
 switch(month){
   case 1:
       console.log("Jannuary has "+31+ " days");
       break;
   case 2:
       console.log("Febuary has "+28+ " days");
       break;
   case 3:
       console.log("March has "+31+ " days");
       break;
   case 4:
       console.log("April has "+31+ " days");
       break;
   case 5:
       console.log("May has "+31+ " days");
       break;
   case 6:
       console.log("June has "+31+ " days");
       break;
   case 7:
       console.log("July has "+31+ " days");
       break;
   case 8:
       console.log("Augest has "+31+ " days");
       break;
   case 9:
       console.log("September has "+31+ " days");
       break;
   case 10:
       console.log("October has "+31+ " days");
       break;
   case 11:
       console.log("November has "+31+ " days");
        break;
   case 12:
        console.log("December has "+31+ " days");
        break;
   default:
     console.log("that not a month number bruh");
   }
}
