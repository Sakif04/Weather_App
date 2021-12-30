
import React from 'react';
import styles from './heading.module.css';

export default function Heading(){    
    return(   
    <h2 className= {`${styles.text} text-center`} >
         Weather 
    <span className="text-warning">  ForeCast </span>
    </h2>) 
}