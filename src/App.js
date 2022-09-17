import React, { useState } from 'react'
import Singlecolor from './components/Singlecolor';
import Values from 'values.js';
function App() {

  const [color , setcolor] =React.useState('');
  const [error,seterror] = React.useState(false);
 const [list ,setlist] =useState(new Values('#f15025').all(10));

 const handleSubmit=(e)=>{
  e.preventDefault();
  try {
    let colors =new Values(color).all(10);
    setlist(colors);
  }
  catch (error){
    seterror(true);
    console.log(error);
  }
 }
  return (
    <div>
      <section className="container"> 
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
           <input type='text' value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='#f15025'
           className={`${error} ? 'error' : null` } />
           <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index)=>{
          return (<Singlecolor key={index} 
            {...color} 
            index={index}
            hexColor={color.hex} />)
        })}
      </section>
    </div>
  );
}

export default App;
