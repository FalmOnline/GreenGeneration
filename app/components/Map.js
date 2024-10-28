import React from 'react';

const Map = () => {
  return (
    <div className="!h-96 !md:h-full mb-10 lg:mb-0" style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33423.54821634352!2d23.543283340253094!3d46.19599069975281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ead60503b6bfb%3A0x3d3fff031257e4db!2sAsocia%C8%9Bia%20Uman!5e0!3m2!1sen!2sro!4v1727601124962!5m2!1sen!2sro"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
