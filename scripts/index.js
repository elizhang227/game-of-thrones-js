console.log('test');

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
characters.forEach(function(character) {
    if (character.name.includes('Targaryen')) {
        tList.push(character.name);
    }
})
//console.log(`Here is a list of all Targaryens: ${tList}`);

let dict = {'a': 1, 'b': 2};
//let test = [];
characters.forEach(function(character) {
    for (const [key, value] of Object.entries(dict)) {
        console.log(key,value);
    }
    // if (character.allegiances in dict) {
    //     console.log('true');
    //     //dict.character.allegiances += 1;
    // }
    // else {
    //     character.allegiances.forEach(function(allegiance) {
    //         test.push(character.allegiances);
    //     })
    //     //dict.chararacter.allegiances[0];
    //     //console.log('false');
    //     //dict.character.allegiances = 1; 
    // }
});
console.log(dict);