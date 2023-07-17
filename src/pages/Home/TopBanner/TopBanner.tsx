import { Link } from "react-router-dom";
import banner from "../../../assets/cropped-removebg-preview.png";
import "./TopBanner.css";

export default function TopBanner() {
  return (
    <div className="topBanner">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-md lg:h-full h-56 rounded-lg " />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Book Trekker</h1>
            <p className="py-6 lg:w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/all-books" className="btn btn-primary">
              See All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
