// import React, { useEffect, useState } from "react";
// import { Blurhash } from "react-blurhash";
// import imageData from "../imageData";

// const MainGallery = () => {
//   const [loadedImages, setLoadedImages] = useState([]);

//   useEffect(() => {
//     const imageLoadPromises = imageData.map((image) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.onload = () => resolve(image.id);
//         img.src = image.imageUrl;
//       });
//     });

//     Promise.all(imageLoadPromises).then((loadedIds) => {
//       setLoadedImages(loadedIds);
//     });
//   }, []);

//   return (
//     <div className="gallery">
//       {imageData.map((image) => (
//         <div key={image.id} className="image-container">
//           {!loadedImages.includes(image.id) && (
//             <Blurhash
//               hash={image.blurhash}
//               width={320}
//               height={450}
//               resolutionX={32}
//               resolutionY={32}
//             />
//           )}

//           {loadedImages.includes(image.id) && (
//             <img src={image.imageUrl} alt={image.category} loading="lazy" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MainGallery;



import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} loading="lazy" />
      ))}
    </div>
  );
};

export default Gallery;
