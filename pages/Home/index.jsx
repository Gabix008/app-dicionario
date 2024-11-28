import { Container } from "./style"
import { BiBookAlt } from "react-icons/bi";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { HiOutlineMoon } from "react-icons/hi";
import Divider from '@mui/material/Divider';
import { HiMiniMoon } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import api from "../../services/api";
import * as React from 'react';
import { IoIosPause } from "react-icons/io";

import { useEffect } from "react";
const data = [

]
function index() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [open, setOpen] = React.useState(true);
    const [word,setWord] = React.useState([]);
    const [search,setSearch] = React.useState('');
    const [font,setFont] = React.useState('sans-serif');
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    useEffect(()=>{
        async function loadWords(search ){
            await api.get(`/${search}`,{
                params: {}
            })
            .then((response) => {
                console.log(response.data[0])
                setWord(response.data)
            })
            .catch(() => {
                return;
            })
        }
         loadWords(search)
    },[search])

    function handleSearch(e){
        setSearch(e.target.value)
    }

    function click(){
        setIsActive(!isActive)
    }
   
    return (
        <ThemeProvider theme={open ? lightTheme : darkTheme} >
       <Container>
        <GlobalStyles font={font} />
        <div className="menu">
            <BiBookAlt size={30} color="#737373"/>
            <div className="control">
                    <select name="select" className="select" onChange={(e) => setFont(e.target.value)}>
                    <option value="serif">Serif</option>
                    <option value="sans-serif" selected>Sans serif</option>
                    <option value="monospace">Monospace</option>
                    </select>
                    <Divider orientation="vertical" variant="middle" flexItem className="divider"/>
                    <FormGroup>
                    <FormControlLabel control={<Switch {...label} color="secondary"/>}
                    label={ open? <HiOutlineMoon size={25} color="#737373"/>:<HiMiniMoon size={25}/>} onClick={handleClick} className="switch"/>
                    </FormGroup>
            </div>
            
        </div>
        <div className="search" >
            <input type="text" className="input-text" onChange={handleSearch}/>
            <button type="submit" ><IoIosSearch className="icon" color="#A447E5" /></button>
        </div>

      
       {word.length > 0 ? (
        <div className="conteudo">
            <div className="palavra">
                    
                <h1>{word[0].word}</h1>
              <p className="destaque">{word[0].phonetic}</p>
            </div>

            {word[0].phonetics.length >1 &&(
                word[0].phonetics.find(audio => audio !== '')?(

                    <div >
                        <button className="play" onClick={() => new Audio(word[0].phonetics.find(phonetic => phonetic.audio).audio).play()} > 
                      <FaPlay size={20} color="#A447E5"/>
                        </button>
                    </div>
                ):(
                    <p>Não tem audio</p>
                )
                
                ) 
            }
    
       
        <Divider orientation="horizontal" className="top-divider-horizontal"/>
        {word[0].meanings.map((item) => (
                <div className="meanings">
                <p className="palavra-destaque">{item.partOfSpeech}</p>

                {item.definitions.map((defItem) => (
                    <ul>
                    <li>{defItem.definition}</li>
                    {defItem.example && <p className="text-example">"{defItem.example}"</p>}
                    </ul>
                ))}
                {word[0].meanings[0].synonyms.length > 0 &&<p className="sinonimos">Sinonyms   <span className="destaque">{word[0].meanings[0].synonyms}</span></p>}
                <Divider orientation="horizontal" className="bottom-divider-horizontal"/>
                </div>
                
        ))} 
       {word[0].sourceUrls.map((sourceItem) => (
                <p className="source"> Source <a className="source-destaque" href={sourceItem}>{sourceItem} </a></p>
        ))}
          

       </div>
       
        ):(
            <div className="not-found">
                <h1>Palavra não encontrada</h1>
            </div>
        )}
 
       </Container>
       </ThemeProvider>
    )
  }
  
  export default index;
  