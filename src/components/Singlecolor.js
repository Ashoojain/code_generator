import React , {useEffect, useState} from 'react'
import rgbToHex from '../utils'

function Singlecolor({rgb,weight,index,hexColor}) {

    const [alert , setalert] =useState(false);
    const bcg=rgb.join(',');
    const hex= rgbToHex(...rgb);
    const HexValue = `#${hexColor}`;

    useEffect(()=>{
        const timeout = setTimeout(()=>{
           setalert(false);
        },3000);

        return ()=>clearTimeout(timeout);
    },[alert])
  return (
   <article className={`color ${index > 10 && 'color-light'}`} 
   style={{backgroundColor:`rgb(${bcg})`}}
   onClick={()=>{setalert(true)
     navigator.clipboard.writeText(HexValue)}}> 


          <p className='percent-value'>{weight}%</p>
          <p className='color-value'>{HexValue}</p>

          {alert &&  <p className='alert'>Copied to clipboard</p>}
   </article>
  )
}

export default Singlecolor
