// Libraries
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Components
import { Container, Content, Movie } from "./styled/SectionStyled";

const Section = ({ heading, keyword }) => {
  const data = useSelector((state) => state.data);
  const sections = data["section"][keyword];

  // for chaning slider's view and speed - in different devices
  const [width, setWidth] = useState(window.innerWidth);

  // slider's speed on different devices
  const showAndSlide = () => {
    if (width > 1060) {
      return { show: 4, slide: 2 };
    } else if (width < 1060 && width > 900) {
      return { show: 3, slide: 2 };
    } else if (width < 900 && width > 600) {
      return { show: 2, slide: 1 };
    } else {
      return { show: 1, slide: 1 };
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: showAndSlide().show,
    slidesToScroll: showAndSlide().slide,
    autoplay: false,
  };

  // Change slider's setting with change in size
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <h1>{heading}</h1>
      <Content {...settings}>
        {sections?.map((movieId) => {
          return (
            <Movie to={`/detailed/${movieId}`} key={movieId}>
              <img src={data["movies"][movieId].cardImg} alt="" />
            </Movie>
          );
        })}
      </Content>
    </Container>
  );
};

export default Section;
