import React from 'react';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Fade extends React.Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider className="slider" {...settings}>
          <div>
            <img className="prodImg" src="https://www.red.com/SSP%20Applications/Red@SuiteCentric/SCA%20Kilimanjaro/img/products/710-0317_0.png?resizeid=5&resizeh=1200&resizew=1200" alt="black camera body"/>
          </div>
          <div>
            <img className="prodImg" src="https://www.usa.canon.com/internet/wcm/connect/us/923abb72-0bd7-4539-b8b7-cf4bbbaaa725/ef-35-14l-usm-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-923abb72-0bd7-4539-b8b7-cf4bbbaaa725-l0UGosv" alt="black 35mm lens"/>
          </div>
          <div>
            <img className="prodImg" src="https://ksr-ugc.imgix.net/assets/025/855/992/1c00ede28eba30818fd7f52d1e5e0bad_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563493272&auto=format&frame=1&q=92&s=c1449771c3012a07d5f4611904b84b44" alt="black peak design tripod"/>
          </div>
          <div>
            <img className="prodImg" src="https://cdn.shopify.com/s/files/1/1343/1935/products/MX_SMD_bulb.jpg?v=1522207724" alt="black and red aputure light"/>
          </div>
          <div>
            <img className="prodImg" src="https://www.onabags.com/media/catalog/product/b/r/brixton_smoke_front_large.jpg" alt="brown and grey crossbody camera bag"/>
          </div>
          <div>
            <img className="prodImg" src="https://cdn.shopify.com/s/files/1/0953/0522/products/gnarbox2-productshotA_3f875b46-dbbd-4373-9031-1ce99ca333d4_800x.jpg?v=1554332554" alt="black gnarbox"/>
          </div>
        </Slider>
      </div>
    );
  };
};

export default Fade