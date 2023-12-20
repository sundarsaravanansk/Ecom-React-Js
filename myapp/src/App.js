import { useState } from 'react';
import './App.css'
import Footer from './Component/Footer';
import Header from './Component/Header';
import ProductLists from './Component/ProductLists';




function App() {

  let[status , setStatus]=useState('all');
  function handleData(data){
    setStatus(data);
  }
  function trigerpopup(){
    setTriggerpopup(true);
  }
  let[triggerpopup , setTriggerpopup]=useState(false)
  let[headerCount , setHeadercount]=useState(0);

  function setClosepopup(){
    setTriggerpopup(false);
  }

  return (
      <div>
        <Header headerCount={headerCount} onData={(data)=>{handleData(data)}} onTriggerpopup={trigerpopup}/>
        <ProductLists  onHeadercount={(count)=>{setHeadercount(count)}} status={status}  triggerpopup={triggerpopup} onclose={()=>setClosepopup(false)} />
        <Footer/>
    </div>
  );
}

export default App;
