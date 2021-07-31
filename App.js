import React ,{useState} from 'react';
import './App.scss';
import colorsArray from "./colorsArray";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter} from '@fortawesome/free-solid-svg-icons'

//const element = <FontAwesomeIcon icon={faTwitter} />
 

const COLORS_ARRAY = ['#FF6633', '#FFB399', '#FF33FF']

function App() {
  const [quote,setQuote]=useState(' disappointed if you fail, but yo')
  const [author,setAuthor]=useState('Beverly Sills')
  const [randomNumber,setRandomNumber]=useState(0)
  const [accentColor,setAccentColor]=useState('#FFB399')
  

  
  const quotesArray =[
   {quote:"You may be disappointed if you fail, but you are doomed if you don’t try.",author:"Beverly Sills"},
   {quote:"Life shrinks or expands in proportion to one’s courage.",author:"Anais Nin"},
   {quote:"The only person you are destined to become is the person you decide to be.",author:"Ralph Waldo Emerson"}];
  
  
  const generateRandomNumber =()=> {

    const rand=Math.floor(3*Math.random())
    setRandomNumber(rand);
    setQuote(quotesArray[rand].quote);
    setAuthor(quotesArray[rand].author);
    setAccentColor(COLORS_ARRAY[rand].accentColor);
    

  }
  return (
    <div className="App">
      <header className="App-header" style ={{backgroundColor: accentColor}}>
      <div id="quote-box" style ={{backgroundColor: accentColor}}>

      <p id="text">    "{quote}"   </p>
      <p id="author">-{author}</p>
  <button id="new-quote" type="button" class="btn btn-primary" style ={{backgroundColor: accentColor}} onClick={()=>generateRandomNumber()}> new quote</button><br />
<a id="tweet-quote" href="twitter.com/intent/tweet">twitter</a>



  </div> 
      </header>
    </div>
  );
}

export default App;
