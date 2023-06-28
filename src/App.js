import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './component/NavbarComponent';
import CardData from './component/CardData';
import {apiResponseData} from './api/apiResponse'
import FilterData from './component/FilterData';
import { useState } from 'react';
function App() {
  const [apiResponse,setApiResponse]=useState(apiResponseData)
  const applyHandler=(data)=>{
    if(data.subscription && !data.burner){
      const result=apiResponseData.filter((item)=>item.card_type === 'subscription');
      setApiResponse(result)
    }else if(data.burner && !data.subscription){
      const result=apiResponseData.filter((item)=>item.card_type === 'burner');
      setApiResponse(result)
    }else{
      setApiResponse(apiResponseData)
    }
console.log("mickey 9",data)
  }
  return (
    <div className="App">
 {/* nav bar */}
 <NavbarComponent />
{/* filter */}
<FilterData applyHandler={applyHandler}/>
 {/* card */}
 <div className='row'>
 {apiResponse.map((item,index)=>(
  <div className='col-4' key={index}>
    <CardData cardItem={item}/>
  </div>
 ))}
 </div>
    </div>
  );
}

export default App;
