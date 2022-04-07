export const columns = [
  {
    name: "List Name",
    selector: "title",
    sortable: true
  },
  {
    name: "Group Name",
    selector: "genres[0]",
    sortable: false
  },
  {
    name: "Contacts",
    selector: "runtime",
    sortable: true
  },
  {
    name: "Added By",
    selector: "genres[1]",
    sortable: true
  },
  {
    name: "Last Activity",
    selector: "year",
    sortable: true
  },
  // {
  //   name: "Genres",
  //   selector: "genres",
  //   sortable: true,
  //   cell: d => <span>{d.genres.join(", ")}</span>
  // },
  {
    name: "Created On",
    selector: "date",
    sortable: true
  }
];

export const data = [
  {
    id: 1,
    title: "Beetlejuice",
    date: "Jul 04, 2022",
    year: "Aug 27, 2022",
    runtime: "92",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    plot:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
  },
  {
    id: 2,
    title: "The Cotton Club",
    date: "Jul 03, 2022",
    year: "Aug 26, 2022",
    runtime: "127",
    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    plot:
      "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    date: "Jul 02, 2022",
    year: "Aug 25, 2022",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    plot:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
  },
  {
    id: 4,
    title: "Crocodile Dundee",
    date: "Jul 01, 2022",
    year: "Aug 24, 2022",
    runtime: "97",
    genres: ["Adventure", "Comedy"],
    director: "Peter Faiman",
    actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
    plot:
      "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
  },
  {
    id: 5,
    title: "Valkyrie",
    date: "Jun 30, 2022",
    year: "Aug 23, 2022",
    runtime: "121",
    genres: ["Drama", "History", "Thriller"],
    director: "Bryan Singer",
    actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    plot:
      "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
  },
  {
    id: 6,
    title: "Ratatouille",
    date: "Jun 29, 2022",
    year: "Aug 22, 2022",
    runtime: "111",
    genres: ["Animation", "Comedy", "Family"],
    director: "Brad Bird, Jan Pinkava",
    actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    plot:
      "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
  },
  {
    id: 7,
    title: "City of God",
    date: "Jun 28, 2022",
    year: "Aug 21, 2022",
    runtime: "130",
    genres: ["Crime", "Drama"],
    director: "Fernando Meirelles, Kátia Lund",
    actors:
      "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    plot:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
  },
  {
    id: 8,
    title: "Memento",
    date: "Jun 27, 2022",
    year: "Aug 20, 2022",
    runtime: "113",
    genres: ["Mystery", "Thriller"],
    director: "Christopher Nolan",
    actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
    plot:
      "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 9,
    title: "The Intouchables",
    date: "Jun 26, 2022",
    year: "Aug 19, 2022",
    runtime: "112",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache, Eric Toledano",
    actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
    plot:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
  },
  {
    id: 10,
    title: "Stardust",
    date: "Jun 25, 2022",
    year: "Aug 18, 2022",
    runtime: "127",
    genres: ["Adventure", "Family", "Fantasy"],
    director: "Matthew Vaughn",
    actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
    plot:
      "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
  },
  {
    id: 11,
    title: "Apocalypto",
    date: "Jun 24, 2022",
    year: "Aug 17, 2022",
    runtime: "139",
    genres: ["Action", "Adventure", "Drama"],
    director: "Mel Gibson",
    actors:
      "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
    plot:
      "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
  },
  {
    id: 12,
    title: "Taxi Driver",
    date: "Jun 23, 2022",
    year: "Aug 16, 2022",
    runtime: "113",
    genres: ["Crime", "Drama"],
    director: "Martin Scorsese",
    actors: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
    plot:
      "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 13,
    title: "No Country for Old Men",
    date: "Jun 22, 2022",
    year: "Aug 15, 2022",
    runtime: "122",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Ethan Coen, Joel Coen",
    actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
    plot:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
  },
  {
    id: 14,
    title: "Planet 51",
    date: "Jun 22, 2022",
    year: "Aug 14, 2022",
    runtime: "91",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Jorge Blanco, Javier Abad, Marcos Martínez",
    actors: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
    plot:
      "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg"
  },
  {
    id: 15,
    title: "Looper",
    date: "Jun 21, 2022",
    year: "Aug 13, 2022",
    runtime: "119",
    genres: ["Action", "Crime", "Drama"],
    director: "Rian Johnson",
    actors: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
    plot:
      "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg"
  },
  {
    id: 16,
    title: "Corpse Bride",
    date: "Jun 20, 2022",
    year: "Aug 12, 2022",
    runtime: "77",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
    actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    plot:
      "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg"
  },
  {
    id: 17,
    title: "The Third Man",
    date: "Jun 19, 2022",
    year: "Aug 11, 2022",
    runtime: "93",
    genres: ["Film-Noir", "Mystery", "Thriller"],
    director: "Carol Reed",
    actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
    plot:
      "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
  },
  {
    id: 18,
    title: "The Beach",
    date: "Jun 18, 2022",
    year: "Aug 10, 2022",
    runtime: "119",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
    plot:
      "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 19,
    title: "Scarface",
    date: "Jun 17, 2022",
    year: "Aug 09, 2022",
    runtime: "170",
    genres: ["Crime", "Drama"],
    director: "Brian De Palma",
    actors:
      "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
    plot:
      "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
  },
  {
    id: 20,
    title: "Sid and Nancy",
    date: "Jun 16, 2022",
    year: "Aug 08, 2022",
    runtime: "112",
    genres: ["Biography", "Drama", "Music"],
    director: "Alex Cox",
    actors: "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
    plot:
      "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
  },
  {
    id: 21,
    title: "Black Swan",
    date: "Jun 15, 2022",
    year: "Aug 07, 2022",
    runtime: "108",
    genres: ["Drama", "Thriller"],
    director: "Darren Aronofsky",
    actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
    plot:
      'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
  },
  {
    id: 22,
    title: "Inception",
    date: "Jun 14, 2022",
    year: "Aug 06, 2022",
    runtime: "148",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    id: 23,
    title: "The Deer Hunter",
    date: "Jun 13, 2022",
    year: "Aug 05, 2022",
    runtime: "183",
    genres: ["Drama", "War"],
    director: "Michael Cimino",
    actors: "Robert De Niro, John Cazale, John Savage, Christopher Walken",
    plot:
      "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    id: 24,
    title: "Chasing Amy",
    date: "Jun 12, 2022",
    year: "Aug 04, 2022",
    runtime: "113",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Kevin Smith",
    actors: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
    plot:
      "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 25,
    title: "Django Unchained",
    date: "Jun 11, 2022",
    year: "Aug 03, 2022",
    runtime: "165",
    genres: ["Drama", "Western"],
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    plot:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
  },
  {
    id: 26,
    title: "The Silence of the Lambs",
    date: "Jun 10, 2022",
    year: "Aug 02, 2022",
    runtime: "118",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    actors:
      "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
    plot:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
  },
  {
    id: 27,
    title: "American Beauty",
    date: "Jun 09, 2022",
    year: "Aug 01, 2022",
    runtime: "122",
    genres: ["Drama", "Romance"],
    director: "Sam Mendes",
    actors: "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
    plot:
      "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SX300.jpg"
  },
  {
    id: 28,
    title: "Snatch",
    date: "Jun 08, 2022",
    year: "Jul 31, 2022",
    runtime: "102",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
    plot:
      "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 29,
    title: "Midnight Express",
    date: "Jun 07, 2022",
    year: "Jul 30, 2022",
    runtime: "121",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Alan Parker",
    actors: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
    plot:
      "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
  },
  {
    id: 30,
    title: "Pulp Fiction",
    date: "Jun 06, 2022",
    year: "Jul 29, 2022",
    runtime: "154",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
    plot:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
  },
  {
    id: 31,
    title: "Lock, Stock and Two Smoking Barrels",
    date: "Jun 05, 2022",
    year: "Jul 28, 2022",
    runtime: "107",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
    plot:
      "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 32,
    title: "Lucky Number Slevin",
    date: "Jun 04, 2022",
    year: "Jul 27, 2022",
    runtime: "110",
    genres: ["Crime", "Drama", "Mystery"],
    director: "Paul McGuigan",
    actors: "Josh Hartnett, Bruce Willis, Lucy Liu, Morgan Freeman",
    plot:
      "A case of mistaken identity lands Slevin into the middle of a war being plotted by two of the city's most rival crime bosses: The Rabbi and The Boss. Slevin is under constant surveillance by relentless Detective Brikowski as well as the infamous assassin Goodkat and finds himself having to hatch his own ingenious plot to get them before they get him.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg"
  },
  {
    id: 33,
    title: "Rear Window",
    date: "Jun 03, 2022",
    year: "Jul 26, 2022",
    runtime: "112",
    genres: ["Mystery", "Thriller"],
    director: "Alfred Hitchcock",
    actors: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
    plot:
      "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 34,
    title: "Pan's Labyrinth",
    date: "Jun 02, 2022",
    year: "Jul 25, 2022",
    runtime: "118",
    genres: ["Drama", "Fantasy", "War"],
    director: "Guillermo del Toro",
    actors: "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
    plot:
      "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    posterUrl: ""
  },
  {
    id: 35,
    title: "Shutter Island",
    date: "Jun 01, 2022",
    year: "Jul 24, 2022",
    runtime: "138",
    genres: ["Mystery", "Thriller"],
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
    plot:
      "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
  }
];
