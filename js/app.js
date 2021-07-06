'use strict';

let yourname = prompt('what\s your name?');

alert('glad to join me ' + yourname + ' in this game to have fun');

alert('so,let\'s start');

alert(' Its easy. answer the 7 gussing questions about me ');

let score = 0;



// Question 1:

let myorgin = prompt('Am I from Jordan?');

myorgin = myorgin.toLowerCase();

if (myorgin === 'yes' || myorgin === 'y') {

    // console.log(myorgin);
    alert(`Nope, your wrong ${yourname} I\'m from Yemen`)
}

else if (myorgin === 'no' || myorgin === 'n') {

    alert(`Thats coreect ${yourname} I\'m from Yemen`)
    // console.log(myorgin);

    score++;
}

else {

    alert('your answer should be yes or no . try again ')
}



//  Question2:

let myage = prompt('Im 25 now , If I was born 3 years age, would my age be 22')
myage = myage.toLowerCase();

if (myage === 'yes' || myage === 'y') {

    // console.log(myage);
    alert(`Are you fine! ${yourname} I would be 3 years only, Think about it`);
}

else if (myage === 'no' || myage === 'n') {

    alert(`youre a wake, good job ${yourname}`);
    // console.log(myage);
    score++;

}

else {

    alert('your answer should be yes or no . try again ');
}




// Question3:

let mycountry = prompt('Does Jordan have many seas without any water like Yemen ?');

mycountry = mycountry.toLowerCase();

if (mycountry === 'yes' || mycountry === 'y') {

    // console.log(mycountry);

    alert('Thats cool, your right ' + ' its on the map, its funny');

    score++;

}

else if (mycountry === 'no' || mycountry === 'n') {

    alert('Opps, your wrong ' + yourname + ' its on the map, its funny');
    // console.log(mycountry);
}

else {

    alert('your answer should be yes or no . try again ');
}





// Question4:
let mydrinks = prompt('Do I drink hot drinks in summer?');

mydrinks = mydrinks.toLowerCase();

if (mydrinks === 'yes' || mydrinks === 'y') {

    alert(`drinks cant be eaten, good job`);

    score++;

}

else if (mydrinks === 'no' || mydrinks === 'n') {

    alert(`Absoultly yes, think about it ${yourname}, we cant drink them`);
    // console.log(mydrinks);
}

else {

    alert('your answer should be yes or no . try again ');
}




// Question5:

let pets = prompt('Are pets annoying me?');
pets = pets.toLowerCase();

if (pets === 'yes' || pets === 'y') {

    // console.log(pets);
    alert('Thats cool, your right' + ' I hate them');

    score++;

}

else if (pets === 'no' || pets === 'n') {

    alert('Opps, your wrong' + yourname);
    // console.log(pets);
}

else {

    alert('your answer should be yes or no . try again ');
}



alert('It was a funny game ' + yourname + 'now  you will get to know better');



// Question6:
let number = Number(prompt('Since when I have been staying in Jordan? choose a number from 1996 to 2021'))


for (let i = 1; i < 4; i++) {



    if (number === 2015) {

        alert(' Its awsome you got it');
        score++;

        break;
    }

    else if (number > 2015) {
        alert('its too high')
        number = Number(prompt('opps, try again'));


    }

    else if (number < 2015) {

        alert('its too low')
        number = Number(prompt('opps, try again'));


    }

}


alert('The answer is 2015');




// Question7:

let visitedcountry = prompt('Which countries that Ive visted them?')
let country = ['syria', 'turkey', 'egypt', 'libya']
let answer = 'false'
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j < country.length; j++) {
        // console.log(country)




        if (visitedcountry == country[j]) {

            answer = 'true'
            alert('good job');
            score++;
            break;

        }

    }

    if (answer == 'true') {

        break;
    }
    else {
        alert('opps,I hope ill visit it');
        visitedcountry = prompt('try again');
    }
}

alert(country)

alert(`you got ${score} out of 7`)