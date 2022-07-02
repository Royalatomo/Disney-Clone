// Library
import { collection, getDocs} from "firebase/firestore";
// Component
import db from "./firebase";

// Getting Movies Collection Document firestore
const getMovies = async () => {
  try {
    const moviesResponse = await getDocs(collection(db, "movies"));
    let result = "";
    moviesResponse.forEach((movie) => {
      result = movie.data();
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// Getting Section Collection Document firestore
const getSection = async () => {
  try {
    const sectionResponse = await getDocs(collection(db, "section"));
    let result = "";
    sectionResponse.forEach((section) => {
      result = section.data();
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { getMovies, getSection };
