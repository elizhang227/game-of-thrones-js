console.log(`There are ${characters.length} characters in the array.`);

count = 0;
characters.forEach(function(character) {
    if (character.name[0].includes('A')) {
        count +=1;
    }
});
//console.log(`There are ${count} people with A.`);

count = 0;
characters.forEach(function(character) {
    if (character.name[0].includes('Z')) {
        count +=1;
    }
});
//console.log(`There are ${count} people with Z.`);

count = 0;
characters.forEach(function(character) {
    if (character.died != '') {
        count +=1;
    }
});
//console.log(`There are ${count} people dead.`);

count = 0;
let person = [];
characters.forEach(function(character) {
    if (character.titles.length > count) {
        count = character.titles.length;
        person = character.name;
    }
    else {
        person = person;
    }
});
//console.log(`The peron with the most titles is ${name}.`);

count = 0;
characters.forEach(function(character) {
    if (character.culture.includes('Valyrian')) {
        count += 1;
    }
});
//console.log(`There are ${count} Valyrians.`);

let actor = [];
characters.forEach(function(character) {
    if (character.name.includes('Hot Pie')) {
        actor = character.playedBy;
    }
})
//console.log(`The actor that plays Hot Pie is ${actor}.`);

count = 0;
characters.forEach(function(character) {
    if (character.tvSeries[0] === '') {
        count += 1;
    }
})
//console.log(`There are ${count} characters not in the tv show.`);

let tList = [];
let firstName = '';
characters.forEach(function(character) {
    firstName = character.name.substring(0, '');
})
console.log(firstName);