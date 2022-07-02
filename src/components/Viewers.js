// Library
import { useEffect } from "react";
// Component
import { Container, Wrap } from "./styled/ViewersStyled";

const Viewers = () => {

  // Play video: on first load
  useEffect(() => {
    document.querySelectorAll("video").forEach((video) => video.play())
  }, [])


  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        <video src="/videos/disney.mp4" muted="muted" loop={true} playsInline={true} />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney" />
        <video src="/videos/pixar.mp4" muted="muted" loop={true} playsInline={true} />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney" />
        <video src="/videos/marvel.mp4" muted="muted" loop={true} playsInline={true} />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney" />
        <video src="/videos/star-wars.mp4" muted="muted" loop={true} playsInline={true} />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt="disney" />
        <video src="/videos/national.mp4" muted="muted" loop={true} playsInline={true} />
      </Wrap>
    </Container>
  );
};

export default Viewers;
