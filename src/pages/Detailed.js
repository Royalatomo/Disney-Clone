// Libraries
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Componenets
import { Container, Background, ImgTitle } from "./styled/DetailedStyled";
import { Controls, Player, Trailer, AddList } from "./styled/DetailedStyled";
import { GroupWatch, OtherIcons } from "./styled/DetailedStyled";
import { ContentMeta, SubTitles, Description } from "./styled/DetailedStyled";

const Detailed = () => {
  const { id } = useParams();
  const Movie = useSelector((state) => state.data)["movies"][id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Background>
        <img src={Movie.backgroundImg} alt="" />
      </Background>

      <ImgTitle>
        <img src={Movie.titleImg} alt="" />
      </ImgTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>play</span>
          </Player>

          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>trailer</span>
          </Trailer>

          <OtherIcons>
            <AddList>
              <span></span>
              <span></span>
            </AddList>

            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </OtherIcons>
        </Controls>

        <SubTitles>
          <p>{Movie.subTitle}</p>
        </SubTitles>

        <Description>
          <p>{Movie.description}</p>
        </Description>
      </ContentMeta>
    </Container>
  );
};

export default Detailed;
