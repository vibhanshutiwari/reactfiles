
import React from 'react';


function Result() {
  
  const person = [{
    id : 1,
    name: 'shubham',
    job: 'teaher',
  },
  {
    id: 2,
    name: 'aman',
    job: 'accounted',
  },
  {
   id: 3,
   name: 'manish',
   job: 'watchman',
  }
];
 const personresult = person.map(value => (
  <p key={value.id} >  {value.name} {value.job} </p>
  ));
  
  return <div className="container"> {personresult}</div>
}

export default Result;


