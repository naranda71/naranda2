// components/Hours.js
import React from 'react';
 
const Hours = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
 
  return (
<div>
<h2>Horas del día</h2>
<ul>
        {hours.map((hour) => (
<li key={hour}>{hour}:00</li>
        ))}
</ul>
</div>
  );
};
 
export default Hours;// Placeholder to host a component
