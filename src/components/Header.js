// Libraries
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import { Nav, Logo, NavMenu, Login} from "./styled/HeaderStyled";
import { UserImg, SignOut, DropDown} from "./styled/HeaderStyled";
import { auth, provider } from "../firebase";
import { setUserDetails, logoutUser } from "../slice/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Deals in logging the user inside
  const handelAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(
        setUserDetails({
          firstName: result._tokenResponse.firstName,
          fullName: result._tokenResponse.fullName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Deals in getting the user outside
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logoutUser());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Nav>
      <Logo to="/">
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!user.active ? (
        // If user not logged in - else show login button only
        <Login onClick={handelAuth}>
          <button className="login-btn">Login</button>
        </Login>
      ) : (
        // else show nav-menu & user-profile
        <>
          <NavMenu>
            <Link className="nav-links" to="/">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>home</span>
            </Link>

            <Link className="nav-links" to="/">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>search</span>
            </Link>

            <Link className="nav-links" to="/">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>watchlist</span>
            </Link>

            <Link className="nav-links" to="/">
              <img src="/images/original-icon.svg" alt="ORIGINAL" />
              <span>original</span>
            </Link>

            <Link className="nav-links" to="/">
              <img src="/images/movie-icon.svg" alt="MOVIE" />
              <span>movie</span>
            </Link>

            <Link className="nav-links" to="/">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>series</span>
            </Link>
          </NavMenu>

          <SignOut>
            <UserImg
              className="user-img"
              src={user.photo}
              alt={user.fullName}
            />
            <DropDown className="dropdown-menu">
              <span onClick={signOut}>Sing out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
