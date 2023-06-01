import React from 'react';
import Styles from './Search.module.css'
import {BiSearch} from 'react-icons/bi';
import {useState} from 'react';

function Searchbar(){
    const [input, setInput]=useState("");

    return(
        <div className={Styles.searchbox}>
            <div className={Styles.container}>
            <div className={Styles.wrap}>
            <BiSearch size={30} className={Styles.icon}/>
                <input placeholder='Search Twitter' value={input} onChange={(e)=>setInput(e.target.value)}/>
                
            </div>  
             
            </div>
            
        </div>
    )
}

export default Searchbar;