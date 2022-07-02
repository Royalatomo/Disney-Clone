// Libraries
import { useDispatch } from "react-redux";
import { setMovie, setSection } from "../slice/dataSlice";
import { useEffect } from "react";

// Components
import { Container } from "./styled/HomeStyled";
import ImageSlider from "../components/ImageSlider";
import Viewers from "../components/Viewers";
import Section from "../components/Section";
import { getMovies, getSection } from "../firebase_data";

const Home = () => {
  // for data manipulation
  const dispatch = useDispatch();

  // setting movie and section details - Redux
  useEffect(() => {
    getMovies()
      .then((movies) => {
        getSection().then((section) => {
          dispatch(setMovie({ movies }));
          dispatch(setSection({ section }));
        });
      })
      .catch((err) => err);

    // eslint-disable-next-line
  }, []);

  // keyword: used to refere section (database)
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Section keyword="recommends" heading="Recommended for you" />
      <Section keyword="trending" heading="Trending" />
      <Section keyword="new" heading="Newly Arrived" />
      <Section keyword="originals" heading="Originals" />
      <Section keyword="currentlyViewing" heading="Currently Watched" />
    </Container>
  );
};

export default Home;
