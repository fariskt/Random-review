const reviews = [
  {
    id: 1,
    name: "Virat Kohli",
    job: "Indian Cricker",
    img: "https://media.crictracker.com/media/attachments/1690383625521_17kohli1.jpeg",
    text: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket.",
  },
  {
    id: 6,
    name: "Mark Zuckerberg",
    job: "CEO of Facebook",
    img: "https://im.indiatimes.in/content/2023/Aug/F7J6HNT4BRNUXNQB3OSE6LXAFM_64d0999cb635e.jpg",
    text: "Mark Elliot Zuckerberg is an American business magnate, computer programmer, internet entrepreneur, and philanthropist. He co-founded the social media website Facebook and its parent company Meta Platforms.",
  },
  {
    id: 2,
    name: "Leo Messi",
    job: "Footballer",
    img: "https://images.moneycontrol.com/static-mcnews/2022/12/Lionel-Messi-Photo-Twitter-770x433.jpg?impolicy=website&width=770&height=431",
    text: "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team.",
  },
  {
    id: 3,
    name: "Tom Cruis",
    job: "Actor",
    img: "https://telugustop.com/wp-content/uploads/2023/06/tom-cruise-would-love-to-meet-someone-special-after-three-failed-marriages-latest-eng-news-1598521.jpg",
    text: "Thomas Cruise Mapother IV is an American actor. One of the world's highest-paid actors, he has received various accolades, including an Honorary Palme d'Or and three Golden Globe Awards, in addition to nominations for four Academy Awards.",
  },
  {
    id: 4,
    name: "Cristiano Ronaldo",
    job: "Footballer",
    img: "https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg",
    text: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.",
  },
  {
    id: 5,
    name: "Elon Musk",
    job: "Ceo of Tesla",
    img: "https://media.architecturaldigest.com/photos/64af1925702c8d416df9ba7c/16:9/w_2560%2Cc_limit/GettyImages-1258889149.jpg",
    text: "Elon Reeve Musk is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla.",
  },
];

//select

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".backward");
const forwBtn = document.querySelector(".forward");
const randBTn = document.querySelector(".random-btn");

// set starting items

let currentItems = 0;

// load first value
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItems);
});

//show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener("click", function () {
  currentItems--;
  showPerson(currentItems);
});
forwBtn.addEventListener("click", function () {
  currentItems++;
  showPerson(currentItems);
});

//ramdom person

randBTn.addEventListener("click", function () {
  currentItems = Math.floor(Math.random() * reviews.length);
  showPerson(currentItems);
});
