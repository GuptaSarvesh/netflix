import React from 'react';
import data from './CardData';
import ShowCard from './Cards';

const Netflix = ()=> {

return(
    <>
      <div className="col-md-3 main1">
        <ShowCard 
        key={data[0].id}
        imgsrc={data[0].imgsrc} 
        title={data[0].title} 
        name={data[0].name} 
        link={data[0].link} />
      </div>
    </>
  
  );
}

export default Netflix;