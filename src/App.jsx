import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => (
    <>
    <h1 className='heading_style'>Top 5 Netflix Series</h1>
    {Sdata.map((val) => {
        return(
            <Card
              key={val.key} 
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              Links={val.Links}
            />
          );
    })}

    <div className='footer'>
        <h4>Coded by <span className='vm'>Vedant Manuja ♥</span></h4>
    </div> 
    
  </>
);

export default App;