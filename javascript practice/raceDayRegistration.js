let raceNumber = Math.floor(Math.random() * 1000);

earlyRegister = true;

runnerAge = 22;

if (runnerAge >= 18 && earlyRegister) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRegister) {
  console.log(`Runner ${raceNumber}, you are racing at 9:30am.`);
}
else if (runnerAge >= 18 && !earlyRegister) {
  console.log(`Runner ${raceNumber}, you are racing at 11:00am.`);
}
else {
  console.log(`Runner ${raceNumber}, you are running at 12:30pm.`);
}
