import { useEffect, useState } from 'react';
import './App.css';
import ButtonImagen from './components/ButtonImg';
import startActive from './assets/star-active.svg';
import start from './assets/star.svg';
import axios from 'axios'

function App() {
  const BASE_URL = 'http://localhost:3001/rate';
  const [rate, setRate ] = useState(0)
  const [count, setCount]= useState(0);
  const array = Array.from({length: 5}, (_, i) => i + 1)

  useEffect((()=>{
    axios.get(BASE_URL).then((resp)=>{
      if(resp.status === 200) return resp.data
      throw resp;})
    .then(({rate})=> {setRate(rate); setCount(rate)})
    .catch((error)=>{ console.log('error ', error);  alert('Something went wrong!')});

  }),[])

  const onHandleClick = async (number) =>{
    try{
      const {data: {rate}} = await axios.post(BASE_URL, {rate: number});
      setRate(rate)
      if(rate === 0) setCount(rate);
    }
    catch(error){
      console.log('error: ', error);
      alert('Something went wrong!')
    }
  }

  return (
    <div className='container-center'>
      <div className='container-flex-col'>
      <span style={{color:'white', textAlign:'center', fontSize:'18px'}}> Rate us!</span>
      <div className='container-flex-row'>
          {
          array.map((element)=>{ 
            return (
              <ButtonImagen 
                src={element <= rate ? startActive: (element <= count? startActive : start)} 
                key={element} 
                onClick={()=>{onHandleClick(element)}}  
                onMouseOver={()=>setCount(element)}
                onMouseLeave={()=> setCount(rate)}/>
            );
          })
          }
      </div>
      </div>
    </div>
    );
}

export default App;
