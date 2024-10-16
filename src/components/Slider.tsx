import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
function FirstSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        waitForAnimate: false

      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src='https://media1.thrillophilia.com/filestore/8vh1qgvmud08c5vm2goj4aucretr_ew41nl9hgdajdas55cjfe02isgid_119.jpg' />
            </div>
            <div>
              <img src='https://4kwallpapers.com/images/walls/thumbs_3t/19145.jpg' />
            </div>
            {/* <div>
              <img src={baseUrl + "/abstract02.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract03.jpg"} />
            </div>
            <div>
              <img src={baseUrl + "/abstract04.jpg"} />
            </div> */}
          </Slider>
        </div>
      );
}

export default FirstSlider
