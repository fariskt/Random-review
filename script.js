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
  {
    id: 6,
    name: "Michael Jordan",
    job: "American Bastket Ball Player",
    img: "https://etimg.etb2bimg.com/photo/99593616.cms",
    text: "Michael Jeffrey Jordan (born February 17, 1963), also known by his initials MJ, is an American former professional basketball player and businessman.",
  },
  {
    id: 7,
    name: "Shah Rukh Khan",
    job: "Indian Actor",
    img: "https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2023/2/11/63-Shah-Rukh-Khan.jpg",
    text: "Shah Rukh Khan, also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the Baadshah of Bollywood and King Khan, he has appeared in more than 90 films.",
  },
  {
    id: 8,
    name: "Drake",
    job: "Canadian Rapper",
    img: "https://media1.popsugar-assets.com/files/thumbor/zan-t_Me63if8oqWYE9ENiPLlhA/0x224:2826x3050/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg",
    text: "Aubrey Drake Graham is a Canadian rapper, singer, and songwriter. An influential figure in contemporary popular music, Drake has been credited for popularizing singing and R&B sensibilities in hip hop.",
  },
  {
    id: 9,
    name: "Dwayne Johnson",
    job: "American Actor",
    img: "https://media.architecturaldigest.com/photos/64af1925702c8d416df9ba7c/16:9/w_2560%2Cc_limit/GettyImages-1258889149.jpg",
    text: "Dwayne Douglas Johnson, also known by his ring name the Rock, is an American actor, film producer, and retired professional wrestler.",
   },
  {
    id: 10,
    name: "Steve Jobs",
    job: "American business magnate",
    img: "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
    text: "Steven Paul Jobs was an American business magnate and inventor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar.",  
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

// for keyborad buttons
addEventListener("keydown", function(ev){
  if(ev.key == "ArrowRight" && currentItems <= 9){
      currentItems++;
      showPerson(currentItems);
  }
   else if(ev.key == "ArrowLeft" && currentItems >=1){
      currentItems--;
      showPerson(currentItems);
  }
    else if(ev.key == "Enter"){
      currentItems = Math.floor(Math.random() * reviews.length);
      showPerson(currentItems);
    };
});


//ramdom button

randBTn.addEventListener("click", function () {
  currentItems = Math.floor(Math.random() * reviews.length);
  showPerson(currentItems);
});
