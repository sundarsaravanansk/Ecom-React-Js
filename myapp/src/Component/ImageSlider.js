import React from 'react';
//npm i react-simple-image-slider 
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "./image/banner/fruits.jpg" },
  { url: "./image/banner/vegtable.jpg" },
  { url: "./image/banner/snacks.jpg" },
  { url: "./image/banner/spices.jpg" },
  { url: "./image/banner/dairy.jpg" },
  { url: "./image/banner/orange.jpg" },

];

const ImageSlider = () => {
    return (
        <div>
          
             <div className="" style={{ paddingTop: '16px', cursor: "pointer" }}>
                <SimpleImageSlider
                    width={'100%'}
                    height={'21rem'}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay
                />
            </div>
        </div>
    );
}

export default ImageSlider;