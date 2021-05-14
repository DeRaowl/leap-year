      var readLineSync = require('readline-sync');
      const chalk = require('chalk');

      console.log("Let's check if you are born on Leap Year\n")
      var userName= readLineSync.question(chalk.inverse("\nEnter your name: "));

      console.log(`\nHey ${userName} are you excited to check, if you are a leap year kid?`)

      function getYear(){
      var dateOfBirth = readLineSync.question(chalk.blueBright("Enter your date of birth in DD/MM/YYYY format: "));
      var userYear = dateOfBirth.split('/');
      result(userYear[2]);
      }

      var year = getYear();

      function result(leapYear){
        var currentYear = new Date().getFullYear();
      if(isNaN(leapYear)){
        console.log(chalk.redBright("\nEnter valid DOB\n"));
        getYear();
      }
      else if( leapYear<1000 || leapYear>currentYear){
        console.log(chalk.redBright("\nEnter Valid Year\n"));
        getYear();
      }
      else if(leapYear%4 === 0 && leapYear%400 === 0 && leapYear%100!==0){
        console.log(chalk.green('\nLucky champ!! You born on Leap Year'));
      }
      else{
        console.log(chalk.bgRedBright('\nYou are not a Leap Year kid'));
      }
      }