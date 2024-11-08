import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    originalMovies: [
      {
        Title: "Big Hero 6",
        Year: "2014",
        Rated: "PG",
        Released: "07 Nov 2014",
        Runtime: "102 min",
        Genre: "Animation, Action, Adventure",
        Director: "Don Hall, Chris Williams",
        Writer: "Jordan Roberts, Robert L. Baird, Daniel Gerson",
        Actors: "Ryan Potter, Scott Adsit, Jamie Chung",
        Plot: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
        Language: "English",
        Country: "United States",
        Awards: "Won 1 Oscar. 17 wins & 58 nominations total",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjQ3YzUyOGQtNjdlYS00YmRhLWIyOWYtMGQ3YjkwMjJiYzRjXkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.8/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "90%",
          },
          {
            Source: "Metacritic",
            Value: "74/100",
          },
        ],
        Metascore: "74",
        imdbRating: "7.8",
        imdbVotes: "513,893",
        imdbID: "tt2245084",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "$222,527,828",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Hero",
        Year: "2002",
        Rated: "PG-13",
        Released: "27 Aug 2004",
        Runtime: "120 min",
        Genre: "Action, Adventure, Drama",
        Director: "Yimou Zhang",
        Writer: "Feng Li, Yimou Zhang, Bin Wang",
        Actors: "Jet Li, Tony Leung Chiu-wai, Maggie Cheung",
        Plot: "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
        Language: "Mandarin",
        Country: "Hong Kong, China",
        Awards: "Nominated for 1 Oscar. 46 wins & 48 nominations total",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTlkZWVjYzQtZmI1My00MGM2LTlmZjEtNjU1M2Y1MTRkNmZjXkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.9/10",
          },
          {
            Source: "Metacritic",
            Value: "85/100",
          },
        ],
        Metascore: "85",
        imdbRating: "7.9",
        imdbVotes: "188,957",
        imdbID: "tt0299977",
        Type: "movie",
        DVD: "06 Jan 2004",
        BoxOffice: "$53,710,019",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Last Action Hero",
        Year: "1993",
        Rated: "PG-13",
        Released: "18 Jun 1993",
        Runtime: "130 min",
        Genre: "Action, Adventure, Comedy",
        Director: "John McTiernan",
        Writer: "Zak Penn, Adam Leff, Shane Black",
        Actors: "Arnold Schwarzenegger, F. Murray Abraham, Art Carney",
        Plot: "With the help of a magic ticket, a young movie fan is transported into the fictional world of his favorite action movie character.",
        Language: "English",
        Country: "United States",
        Awards: "1 win & 16 nominations",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGU2NWQyY2ItY2JiZS00ZDJhLWI0NDQtNjMyNWU3MDA1NTgzXkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "6.5/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "42%",
          },
          {
            Source: "Metacritic",
            Value: "44/100",
          },
        ],
        Metascore: "44",
        imdbRating: "6.5",
        imdbVotes: "166,384",
        imdbID: "tt0107362",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "$50,016,394",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "My Hero Academia",
        Year: "2016–",
        Rated: "TV-14",
        Released: "05 May 2018",
        Runtime: "24 min",
        Genre: "Animation, Action, Adventure",
        Director: "N/A",
        Writer: "Kôhei Horikoshi",
        Actors: "Daiki Yamashita, Justin Briner, Nobuhiko Okamoto",
        Plot: "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
        Language: "Japanese, English",
        Country: "Japan",
        Awards: "29 wins & 44 nominations",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "8.2/10",
          },
        ],
        Metascore: "N/A",
        imdbRating: "8.2",
        imdbVotes: "84,910",
        imdbID: "tt5626028",
        Type: "series",
        totalSeasons: "7",
        Response: "True",
      },
      {
        Title: "An Action Hero",
        Year: "2022",
        Rated: "N/A",
        Released: "02 Dec 2022",
        Runtime: "130 min",
        Genre: "Action, Comedy, Crime",
        Director: "Anirudh Iyer",
        Writer: "Anirudh Iyer, Neeraj Yadav",
        Actors: "Ayushmann Khurrana, Jaideep Ahlawat, Gautam Joglekar",
        Plot: "A murder accusation turns a movie star's own life into an eccentric action thriller as he flees the country, with a vengeful politician hot on his heels.",
        Language: "Hindi",
        Country: "India, United Kingdom",
        Awards: "5 wins & 18 nominations",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWUzNzljNjMtYTdiZS00MWQ2LWFkZWItYTM0MzVmZGFhYzNjXkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.0/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "85%",
          },
        ],
        Metascore: "N/A",
        imdbRating: "7.0",
        imdbVotes: "32,613",
        imdbID: "tt15600222",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "N/A",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "A Hero",
        Year: "2021",
        Rated: "PG-13",
        Released: "21 Jan 2022",
        Runtime: "127 min",
        Genre: "Drama",
        Director: "Asghar Farhadi",
        Writer: "Asghar Farhadi",
        Actors: "Amir Jadidi, Mohsen Tanabandeh, Sahar Goldoost",
        Plot: "Rahim is in prison because of a debt he was unable to repay. During a two-day leave, he tries to convince his creditor to withdraw his complaint against the payment of part of the sum. But things don't go as planned.",
        Language: "Persian",
        Country: "Iran, France",
        Awards: "18 wins & 42 nominations",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjMxNDFjN2ItYTllOC00ZDA1LTg4MDUtMjY5ZmE0ZjQ4Y2E2XkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.5/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "97%",
          },
          {
            Source: "Metacritic",
            Value: "82/100",
          },
        ],
        Metascore: "82",
        imdbRating: "7.5",
        imdbVotes: "30,508",
        imdbID: "tt11777738",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "N/A",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Local Hero",
        Year: "1983",
        Rated: "PG",
        Released: "29 Apr 1983",
        Runtime: "111 min",
        Genre: "Comedy, Drama",
        Director: "Bill Forsyth",
        Writer: "Bill Forsyth",
        Actors: "Burt Lancaster, Peter Riegert, Fulton Mackay",
        Plot: "An American oil company has plans for a new refinery and sends someone to Scotland to buy up an entire village, but things don't go as expected.",
        Language: "English, Russian, Japanese",
        Country: "United Kingdom",
        Awards: "Won 1 BAFTA Award4 wins & 6 nominations total",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjRmYWNlYWMtOTcxZS00YzU5LWEwZTctYjEzZWZlNmQxN2Y1XkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.3/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "100%",
          },
          {
            Source: "Metacritic",
            Value: "84/100",
          },
        ],
        Metascore: "84",
        imdbRating: "7.3",
        imdbVotes: "27,149",
        imdbID: "tt0085859",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "$5,895,761",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Hero",
        Year: "1992",
        Rated: "PG-13",
        Released: "02 Oct 1992",
        Runtime: "119 min",
        Genre: "Comedy, Drama, Romance",
        Director: "Stephen Frears",
        Writer: "Laura Ziskin, Alvin Sargent, David Webb Peoples",
        Actors: "Dustin Hoffman, Geena Davis, Andy Garcia",
        Plot: "A not-so-nice man rescues passengers from a crashed airliner, only to see someone else take credit.",
        Language: "English, Spanish",
        Country: "United States",
        Awards: "N/A",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMWY2NDA0NjctMThiZi00NTI1LWFjODEtODlmZTdkMzJlYzc5XkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "6.5/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "67%",
          },
          {
            Source: "Metacritic",
            Value: "61/100",
          },
        ],
        Metascore: "61",
        imdbRating: "6.5",
        imdbVotes: "24,096",
        imdbID: "tt0104412",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "$19,507,345",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Starship Troopers 2: Hero of the Federation",
        Year: "2004",
        Rated: "R",
        Released: "04 May 2004",
        Runtime: "88 min",
        Genre: "Action, Adventure, Horror, Sci-Fi",
        Director: "Phil Tippett",
        Writer: "Edward Neumeier",
        Actors: "Billy Brown, Richard Burgi, Kelly Carlson, Cy Carter",
        Plot: "In the sequel to Paul Verhoeven's loved/reviled sci-fi film, a group of troopers taking refuge in an abandoned outpost after fighting alien bugs, failing to realize that more danger lays in wait.",
        Language: "English",
        Country: "USA",
        Awards: "1 win & 1 nomination.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWNiNzRlOWMtNzY2Yi00M2MzLWE0MGEtYzM0NmZhODk3NjUyXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "3.6/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "33%",
          },
        ],
        Metascore: "N/A",
        imdbRating: "3.6",
        imdbVotes: "22,274",
        imdbID: "tt0367093",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "N/A",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
      {
        Title: "Bilal: A New Breed of Hero",
        Year: "2015",
        Rated: "PG-13",
        Released: "02 Feb 2018",
        Runtime: "105 min",
        Genre: "Animation, Action, Adventure",
        Director: "Khurram H. Alavi, Ayman Jamal",
        Writer: "Ayman Jamal, Alexander Kronemer, Michael Wolfe",
        Actors: "Adewale Akinnuoye-Agbaje, Ian McShane, Engin Altan Düzyatan",
        Plot: "A thousand years ago, one boy with a dream of becoming a great warrior is abducted with his sister and taken to a land far away from home. Thrown into a world where greed and injustice rule all, Bilal finds the courage to raise hi...",
        Language: "English",
        Country: "United Arab Emirates",
        Awards: "1 nomination",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTM3YTdmZDgtNTViZi00MmNmLWIyMDUtMmFkNWQ5YzdiZDA5XkEyXkFqcGc@._V1_SX300.jpg",
        Ratings: [
          {
            Source: "Internet Movie Database",
            Value: "7.6/10",
          },
          {
            Source: "Rotten Tomatoes",
            Value: "58%",
          },
          {
            Source: "Metacritic",
            Value: "52/100",
          },
        ],
        Metascore: "52",
        imdbRating: "7.6",
        imdbVotes: "19,324",
        imdbID: "tt3576728",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "$490,973",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
      },
    ],
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setOriginalMovies: (state, action) => {
      state.originalMovies = action.payload;
    },
  },
});

export const { setMovies, setOriginalMovies } = configSlice.actions;
export default configSlice.reducer;
