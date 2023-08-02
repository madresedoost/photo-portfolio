import React, { useState } from "react";
import MainGallery from "./GalleryPage/MainGallery";
import SubMenu from "./GalleryPage/SubMenu";
import imageData from "./imageData";
import { Navbar } from "./components";



function GalleryPage() {
  const categories = [...new Set(imageData.map((image) => image.category))];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredImages = imageData.filter(
    (image) => image.category === activeCategory
  );

  return (
      <div className="app">
        <Navbar />
        <SubMenu
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory} 
        />
        <MainGallery images={filteredImages} />
      </div>

  )
};

export default GalleryPage;