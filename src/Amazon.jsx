import React from 'react';
import data from './CardData';
import ShowCard from './Cards';

const Amazon = ()=> {

return(
    <>
      <div className="col-md-3 main1">
        <ShowCard 
        key={data[3].id}
        imgsrc={data[3].imgsrc} 
        title={data[3].title} 
        name={data[3].name} 
        link={data[3].link} />
      </div>
    </>
  
  );
}

export default Amazon;