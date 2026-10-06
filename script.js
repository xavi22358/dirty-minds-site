// =========================
// GROUP MEMBERS
// =========================

const members = [
    {
        name: "Nafyad",
        nickname: "Naf",
        interest: "Football ⚽"
    },

    {
        name: "Wendimagegn",
        nickname: "Wende",
        interest: "Basketball 🏀"
    },

    {
        name: "Habtamu",
        nickname: "LIL",
        interest: "Girls & confidence 😎"
    },

    {
        name: "Yeab",
        nickname: "Liyu",
        interest: "Chicken Road 🎮"
    },

    {
        name: "Besufikad",
        nickname: "Bese",
        interest: "Fashion Design 👗"
    },

    {
        name: "Getahun",
        nickname: "Gech",
        interest: "Agriculture 🌱"
    }
];


// =========================
// RANDOM MEMBER
// =========================

function chooseRandomMember() {

    const randomNumber =
        Math.floor(Math.random() * members.length);

    const member =
        members[randomNumber];

    document.getElementById("randomName").textContent =
        member.name;

    document.getElementById("randomNick").textContent =
        `"${member.nickname}"`;

    document.getElementById("randomInterest").textContent =
        member.interest;
}


// First random button
document.getElementById("randomBtn")
    .addEventListener("click", chooseRandomMember);


// Second random button
document.getElementById("randomBtn2")
    .addEventListener("click", chooseRandomMember);


// =========================
// DARK / LIGHT MODE
// =========================

const themeButton =
    document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️ Theme";

    } else {

        themeButton.textContent = "🌙 Theme";

    }

});


// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();