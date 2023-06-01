import React, {useState} from 'react';
import './App.css';
 import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
function App() {



 const data=[
{
  id:0,
  name:"Jai Sriram (Adipurush)",
  track:song1,
  img:"https://cdn.gulte.com/wp-content/uploads/2023/04/Adipurush-New-Poster.jpeg"
},
{
  id:1,
  name:"Almost Padipoyane (Dass Ki Damki)",
  track:song2,
  img:"https://c.saavncdn.com/332/Almost-Padipoyindhe-Pilla-From-Das-Ka-Dhamki-Telugu-2022-20221205084208-500x500.jpg"
},
{
  id:2,
  name:"Malli Malli (Agent)",
  track:song3,
  img:"https://c.saavncdn.com/351/Malli-Malli-From-Agent-Telugu-2023-20230222201744-500x500.jpg"
}

 ]
 const [song, setSong]= useState(data[0])

const [select, setSelect]= useState(0)


 function previousSong()
 {
if(song.id===0)
{
  return setSong(data[data.length-1])
}
  return setSong(data[song.id-1])

 }
 
 function nextSong()
 {
  if(song.id===data.length-1)
  {
    return setSong(data[0])
  }
  return setSong(data[song.id+1])      

 }

function handleClick(i)
{

setSelect(i)

}



  // const audioRef = useRef(null);

  // const handlePlayClick = () => {
  //   audioRef.current.play();
  // }

  // const handlePauseClick = () => {
  //   audioRef.current.pause();
  // }
  // const [volume, setVolume] = useState(1);

  // const handleVolumeChange = (event) => {
  //   setVolume(event.target.value);
  //   audioRef.current.volume = event.target.value;
  // };
  return (


    <div className="App">


     {data.map((each,i)=>
     {
       return(
      
        <div id='list' key={i}>
            
   
            <li  className={select===i?"selected":""} onClick={()=> 
              {
                setSong(data[each.id])
                handleClick(i)
              }}>
          
              {each.name}
            </li>
         
          </div>
       )


     })}



      <h1 style={{textDecoration:"underline"}}>Songs Player</h1>
      <h2>{song.name}</h2>
      <img alt='' src={song.img} />
      <audio   id='audios' autoPlay controls  src={song.track}  />     
      {/* <label  onClick={()=>handlePlayClick()}>play</label>                            ref={audioRef}  ==> use this in audio tag
      <label onClick={()=>handlePauseClick()}>pause</label>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} /> */}
      <br/>
      <div id='buttons'>
      <button onClick={()=>{previousSong()}} >Previous</button>
      <button onClick={()=>{nextSong()}} >Next</button>
      </div>


    </div>
  );
}

export default App;