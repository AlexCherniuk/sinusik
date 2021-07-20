import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let paintingsData = [
  {
    "_id": "woman",
    "image": "https://media.artsper.com/artwork/939240_1_m.jpg",
    "title": "woman in room",
    "description": "this girl in the room",
    "category": [
      "2020"
    ]
  },
  {
    "_id": "head",
    "image": "https://media.artsper.com/artwork/943362_1_m.jpg",
    "title": "head in the room",
    "description": "this head in the room",
    "category": [
      "2020"
    ]
  }
]

let aboutData = "By using traditional techniques in oil painting Volodymyr Sinusik’s (b. 1991) in Cherkasy, Ukraine work comprises the aesthetics of landscapes and his surrounding in every-day life. His works speak volume about the beauty within nature, using also drawing techniques to evolve his body of work.  The use of a specific shade of colors, unique brush strokes,  and Sinusik’s consistence style evokes a world of harmonious sounds,  which could be referred to extensive range of tones.  Sinusik’s work and travel experience in 2019 in Denmark, influenced and inspired  his recent artworks, as he felt a personal connection to the country. His interested lies also in cultural differences, other forms of art, and the exchange with other artists.  His works are housed in private collections in USA, United Kingdom"

let contactData = [
  {
      "year": "2018",
      "location": "Filosoffen, Odense, Denmark, 2019",
      "images": [
          "/images/exhibitions/Odense1.jpg", "/images/exhibitions/Odense2.jpg", "/images/exhibitions/Odense3.jpg"
      ]
  },
  {
      "year": "2019",
      "location": "The Brick Lane Gallery, London, UK, 2018",
      "images": [
          "/images/exhibitions/London1.jpg", "/images/exhibitions/London2.jpg", "/images/exhibitions/London3.jpg"
      ]
  },
  {
      "year": "2020",
      "location": "Gallery Art, Cherkasy, Ukraine, 2020",
      "images":  "/images/exhibitions/Cherkasy1.jpg"
  },]

ReactDOM.render(
  <React.StrictMode>
    <App contact={contactData} about={aboutData} data={paintingsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
