import React from "react";

export default function Map() {

  return (
    <div className="map">
      <iframe
      src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5135750851434!2d76.64567958306347!3d30.755088673553022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff1f5cfc8ec4d%3A0xc73cb643eab79be2!2sJANNAT%20VILLA!5e1!3m2!1sen!2sin!4v1729111070375!5m2!1sen!2sin" }
      width="600" 
      height="450" 
      style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy={"no-referrer-when-downgrade"}></iframe>
    </div>
  );
}


// Coming This Error: [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>