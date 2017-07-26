// sirovi podaci
var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

// vezba 1.
// Napraviti novi objekat koji će da sadrži broj zaposlenih u svakom departmentu

var noviObjekat = [];
var it = [];
var en = [];
var me = [];

for ( i = 0; i < people.length; i++) {

  if(people[i].department == "IT") {

    it.push(people[i].name);
  }
  else if (people[i].department == "Engineering") {

    en.push(people[i].name);
  }
  else {
    me.push(people[i].name);
  }
}
noviObjekat.push({

  IT: it.length,
  Engineering: en.length,
  Management: me.length

});

console.log(noviObjekat);

// update sirovih podataka
var people2 = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];

// vezba 2.
//Napraviti novi objekat koji će da sadrži zaposlene razvrstane po iskustvu
var strucnost = [];
var newbie = [];
var amateur = [];
var pro = [];
var expert = [];

for( i = 0; i < people2.length; i++) {

  if(people2[i].yearsExperience <= 2 ) {

    newbie.push(people2[i].name);
  }
  else if(people2[i].yearsExperience > 2 && people2[i].yearsExperience <= 5){

    amateur.push(people2[i].name);
  }
  else if (people2[i].yearsExperience > 5 && people2[i].yearsExperience <= 10) {

    pro.push(people2[i].name);
  }
  else {
    expert.push(people2[i].name);
  }
}

strucnost.push({

  NEWBIE: newbie.slice(),
  AMATEUR: amateur,
  PRO: JSON.parse(JSON.stringify(pro)),
  EXPERT: JSON.parse(JSON.stringify(expert))
  
})

console.log(strucnost);

// vezba 3.
//Napraviti novi niz koji će da sadrži imena zaposlenih

var imena = [];

for( i = 0; i < people2.length; i++){
  imena.push(people2[i].name);
}

console.log(imena);

// test nizovi
var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

//vezba 4.
// Novi niz koji se dobija množenjem parnih elemenata sa 3, a neparnih sa 4, funkcija vraća niz

function multiplyEvenAndOdds (array) {

  var novi = [];

  for( i = 0; i < array.length; i++){

    if(array[i] % 2 == 0){
      novi.push(array[i] * 3);
    }
    else{
      novi.push(array[i] * 4);
    }
  }

  return novi;
}

console.log(multiplyEvenAndOdds(test_niz1));
console.log(multiplyEvenAndOdds(test_niz2));
console.log(multiplyEvenAndOdds(test_niz3));

// vezba 5.
// Koliko elemenata ulaznog niza je veće od zadatog broja?
// Funkcija vraća broj.

function getNumberOfElementsGreaterThan (array, limit) {

  var count = 0;

  for( i = 0; i < array.length; i++){

    if(array[i] > limit) {
      count++;
    }
  }

  return count;
}

console.log(getNumberOfElementsGreaterThan(test_niz1, 5));
console.log(getNumberOfElementsGreaterThan(test_niz2, 47));
console.log(getNumberOfElementsGreaterThan(test_niz3, 3));

// vezba 6.
// Ako je treći argument true treba napraviti novi niz od elemenata ulaznog koji su VEĆI ili JEDNAKI od zadatog broja. 
// Ako je treći argument false treba napraviti novi niz od elemenata ulaznog koji su  MANJI od zadatog broja. 
// Funkcija vraća niz.

function filterOutElements(array, limit, direction) {

  var noviNiz = [];

  if (direction) {

    for ( i = 0; i < array.length; i++ ){
      if(array[i] >= limit)
        noviNiz.push(array[i]);
    }
  }
  else {
    for ( i = 0; i < array.length; i++ ){
      if(array[i] <= limit)
        noviNiz.push(array[i]);

  }
}

 return noviNiz;
}

console.log(filterOutElements(test_niz1, 5, true));
console.log(filterOutElements(test_niz1, 7, false));

console.log(filterOutElements(test_niz2, 47, false));
console.log(filterOutElements(test_niz2, 47, true));

console.log(filterOutElements(test_niz3, 1, true));
console.log(filterOutElements(test_niz3, 5, false));