let person = {
    name: "sara", age: "28", sagNameAlter() {
        // alert("my name is " + this.name + " and i am " + this.age);
        //I.E. this.name means the name property of this = person.
    }
}
person.sagNameAlter()
console.log(person.name);
console.log(person.age);

// Lev1_4 object Accessing
let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ],
        changeName(fName, sName) {
            this.names.length = 0;
            this.names.push(fName, sName)
            console.log(this.names);
        }
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);
console.log(unsereHaustiere[0].names);
unsereHaustiere[1].changeName("Blue ", "Snoopy");

// Lev1_5 object Accessing
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//lev1_6: Objects Arrays Accessing
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic)
console.log(myMusic[0].artist)
console.log(myMusic[1].medium[3])
console.log(myMusic[1].gold)
console.log(myMusic[2].release_year)
console.log(myMusic[3].release_year)
console.log(myMusic[3].medium[2])
console.log(myMusic[3].title.slice(17, 20))
console.log(myMusic[2].title.slice(13))
console.log(myMusic[1].artist.slice(5))

//lev1_7: Objects Arrays Loop Accessing

let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let output5 = document.getElementById("output5");
myMusic.forEach(element => {
    console.log(element.artist + element.title + element.medium);
    output.innerHTML += element.artist + "<br>" + element.title + "<br>" + element.medium + "<br>";


    if (element.release_year < 1975) {
        output2.innerHTML += element.release_year + "<br>";
    }

});
//lev1_8: Objects Arrays Loop Accessing
let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(element => {
    console.log(element.name);
    console.log(element.coop);
    console.log(element.emails);
})
studentData.forEach(element => {
    let x = element.address.city.split();
    console.log(x)
})
// lev2_2:  Array Object sort() 
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];
singers.sort((x, y) => {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
})
console.log(singers)