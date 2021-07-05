'use strict';

let yourname = prompt('what\s your name?');
alert('glad to join me ' + yourname + ' in this game to have fun');
alert('so,let\'s start');
alert(' Its easy. answer the 5 gussing questions about me ');



let myorgin = prompt('Am I from Jordan?');
myorgin = myorgin.toLowerCase();

if (myorgin === 'yes' || myorgin==='y') {

    // console.log(myorgin);
    alert('Opps, your wrong ' + yourname + ' I\'m from Yemen')
}

else if (myorgin === 'no' || myorgin==='n') {

    alert('Thats coreect' + yourname + ' I\'m from Yemen')
    // console.log(myorgin);
}

else {

    alert('your answer should be yes or no . try again ')
}






let myage = prompt('Im 25 now , If I was born 3 years age, would my age be 22');
myage = myage.toLowerCase();

if (myage === 'yes' || myage==='y') {

    // console.log(myage);
    alert('Opps, your wrong ' + yourname + ' I would be 3 years only, Think about it')
}

else if (myage === 'no' || myagee=== 'n') {

    alert('Oh your right ' + yourname + ' your clever')
    // console.log(myage);
}

else {

    alert('your answer should be yes or no . try again ')
}





let mycountry = prompt('Does Jordan have many seas without any water like Yemen ?');
mycountry = mycountry.toLowerCase();

if (mycountry === 'yes' || mycountry==='y') {

    console.log(mycountry);
    alert('Thats cool, your right ' + ' its on the map, its funny')
}

else if (mycountry === 'no' || mycountry==='n') {

    alert('Opps, your wrong ' + yourname + ' its on the map, its funny')
    console.log(mycountry);
}

else {

    alert('your answer should be yes or no . try again ')
}






let mydrinks = prompt('Do I drink hot drinks in summer?');
mydrinks = mydrinks.toLowerCase();

if (mydrinks === 'yes' ||mydrinks=== 'y') {

    console.log(mydrinks);
    alert('Thats cool, your right' + ' because I cant eat them, its funny')
}

else if (mydrinks === 'no' || mydrinks=== 'n') {

    alert('Opps, your wrong' + yourname + ' I dink them because I cant eat them, its funny')
    console.log(mydrinks);
}

else {

    alert('your answer should be yes or no . try again ')
}




let pets = prompt('Are pets annoying me?');
pets = pets.toLowerCase();

if (pets === 'yes' || pets==='y') {

    // console.log(pets);
    alert('Thats cool, your right' + ' I hate them')
}

else if (pets === 'no' || pets=== 'n') {

    alert('Opps, your wrong' + yourname)
    // console.log(pets);
}

else {

    alert('your answer should be yes or no . try again ')
}



alert('It was a funny game ' + yourname + 'now  you will get to know better');