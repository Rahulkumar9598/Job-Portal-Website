// import React from 'react';

// const images = [
//    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgef8gIEhm9YmO4_ZvaMLnEULx6GCvZ5F9Tg&s',
//   'https://media.istockphoto.com/id/2189598481/photo/indian-male-engineer-and-hispanic-female-manager-using-laptop-computer-and-talking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=_5xgw9NKccy1DOhMUX0vPqQeCNomrWRByn-muhpKypQ=',
//   'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9ifGVufDB8fDB8fHww',
//   'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1653669485183-f4adf5806da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
// ];
  

// const Gallery = () => {
//   const pageStyle = {
//     backgroundColor: '#000080', // Light blue-gray background
//     padding: '40px',
//     minHeight: '100vh',
//   };

//   const galleryContainerStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '16px',
//     backgroundColor: '#ffffff', // White box around images
//     padding: '20px',
//     borderRadius: '12px',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
//   };

//   const imageStyle = {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease-in-out',
//   };

//   const hoverEffect = (e) => {
//     e.target.style.transform = 'scale(1.05)';
//   };

//   const removeHoverEffect = (e) => {
//     e.target.style.transform = 'scale(1)';
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={galleryContainerStyle}>
//         {images.map((src, index) => (
//           <div key={index}>
//             <img
//               src={src}
//               style={imageStyle}
//               onMouseOver={hoverEffect}
//               onMouseOut={removeHoverEffect}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import './Imagegallary.css';

const imageCards = [
  {
    title: 'Tech Jobs',
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9ifGVufDB8fDB8fHww',
  },
  {
    title: 'Finance Jobs',
    img:  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',

  },
  {
    title: 'Remote Work',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Internships',
    img: 'https://images.unsplash.com/photo-1653669485183-f4adf5806da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Full-time',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Part-time',
    img: 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
   {
    title: 'Finance Jobs',
    img:  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',

  },
  {
    title: 'Remote Work',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const Imagegallary = () => {
  return (
    <div className="image-section">
      <h2 className="section-title">Explore Job Categories</h2>
      <div className="image-grid">
        {imageCards.map((card, index) => (
          <div className="image-card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagegallary;