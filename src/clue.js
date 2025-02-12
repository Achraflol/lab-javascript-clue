// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstname: "Jacob",
        lastname: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: "green"
    },
    {
        firstname: "Jacob",
        lastname: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: "green"
    },
    {
        firstname: "Doctor",
        lastname: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: "white"
    },
    {
        firstname: "Victor",
        lastname: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: "purple"
    },
    {
        firstname: "Kasandra",
        lastname: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: "red"
    },
    {
        firstname: "Eleanor",
        lastname: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: "blue"
    },
    {
        firstname: "Jack",
        lastname: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: "yellow"
    }
];

// Rooms Collection
const roomsArray = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observartory', 'Theater', 'Guest House', 'Patio'];

// Weapons Collection
const weaponsArray = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    }

];




// ITERATION 2
function selectRandom(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    if (arr.length > 1) {
        let random = Math.floor(Math.random() * (arr.length));
        return arr[random];
    }

}

function pickMystery() {
    let mystery = {
        suspect: {},
        room: {},
        weapon: {}
    }

    mystery["room"] = selectRandom(roomsArray);

    mystery["suspect"] = selectRandom(suspectsArray);

    mystery["weapon"] = selectRandom(weaponsArray);

    console.log(mystery)



    return mystery;
}
// ITERATION 3

function revealMystery(obj) {

    console.log(obj)

    let killer = `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`
    return killer;
}