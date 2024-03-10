let raceNumber = Math.floor(Math.random() *1000);
let registeredEarly = false;
let age = 19;
if (age < 17 && registeredEarly === true) {
    raceNumber += 1;
}
if ( age > 18 && registeredEarly === true){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 9:30 a.m');
} else if (age > 18 && (!(registeredEarly === true))){
   console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 11 a.m');
}
else if ( age < 18 ){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 12:30 p.m');
} else {
    console.log('Please seek the registration desk for help.');
}

 
 age = 25;
 registeredEarly = true;
 if (age < 17 && registeredEarly === true) {
    raceNumber += 1;
}
if ( age > 18 && registeredEarly === true){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 9:30 a.m');
} else if (age > 18 && (!(registeredEarly === true))){
   console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 11 a.m');
}
else if ( age < 18 ){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 12:30 p.m');
} else {
    console.log('Please seek the registration desk for help.');
}

 age = 18;
 registeredEarly = false;
 if (age < 17 && registeredEarly === true) {
    raceNumber += 1;
}
if ( age > 18 && registeredEarly === true){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 9:30 a.m');
} else if (age > 18 && (!(registeredEarly === true))){
   console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 11 a.m');
}
else if ( age < 18 ){
    console.log('Your race number is ' + (raceNumber += 1) + ' and you will run at 12:30 p.m');
} else {
    console.log('Please seek the registration desk for help.');
}