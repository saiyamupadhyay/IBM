import React from 'react';

function Card(props)
{
  return(
<div className="card" >
  <div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.hours}:{props.minutes}:{props.seconds}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
}
// 
export default Card;