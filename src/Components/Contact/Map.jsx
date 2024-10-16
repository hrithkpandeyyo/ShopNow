import React from "react";

export default function Map() {

  return (
    <div className="map">
      <iframe
        title="JANNAT VILLA SOLUTIONS"
        src="https://maps.app.goo.gl/s6bQqLPmRj8Xm13P9"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}


// Coming This Error: [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>