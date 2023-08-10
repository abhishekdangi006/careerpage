import React from 'react'
import jobs from '../data.json';
import Cart from '../pages/Cart';

function Jobs() {
    return (
        <div style={{ 'background-color': '#c2c2c2', 'padding' : '3rem'}}>
          {jobs.map((job => {
            return(
            <div key={job.id}>
                <Cart job={job}/>
            </div>
            )
          }))}
        </div>
      )
}

export default Jobs;
