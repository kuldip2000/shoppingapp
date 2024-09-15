import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="navbar flex-row">
      <Link to="/">
        <img className="myntra_home" src="images/myntra_logo.webp" alt="logo" />
      </Link>

      <nav className="nav-links-container flex-row">
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
      </nav>
      <div className="search-container flex-row center">
        <search className="search-icon"></search>
        <input
          className="search-box"
          placeholder="Search for products, brands..."
        />
      </div>
      <div className="action-item">
        <p className="action-icon" />
        <BsFillPersonFill />
        <p className="action-text">Profile</p>
      </div>

      <div className="action-item">
        <p className="action-icon" />
        <FaFaceGrinHearts />
        <p className="action-text">Wishlist</p>
      </div>

      <div className="action-item">
        <Link className="action-item" to="/bag">
          <p className="action-icon" />
          <FaShoppingBag />
          <p className="action-text">Bag</p>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
