// Components
import { Container, BgImg, Logo, SignUp } from "./styled/LoginStyled";
import { Description, InfoBox } from "./styled/LoginStyled";

const Login = () => {
  return (
    <Container>
      <BgImg>
        <InfoBox>
          <Logo src="/images/cta-logo-one.svg" alt="logo" />
          <SignUp to="/">get all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for and additional
            fee with a Disney+ subscription. As of 03/26/21, the price of
            Disney+ and The Disney Bundle will increase by $1
          </Description>
          <Logo src="/images/cta-logo-two.png" alt="logo" />
        </InfoBox>
      </BgImg>
    </Container>
  );
};

export default Login;
