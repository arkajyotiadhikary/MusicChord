import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar d-flex  navbar-light bg-light shadow-sm mb-2">
            <div className="navbar-brand d-flex">
                <img
                    className="mx-2 img-fluid"
                    width="40"
                    src="https://www.shareicon.net/data/512x512/2015/12/06/683326_music_512x512.png"
                    alt="logo"
                />
                <h1 className="h3 ms-2">Music Chord</h1>
            </div>
            <button className="btn bg-secondary ms-auto be-2 rounded-circle">
                <FontAwesomeIcon className="text-white" icon={faUser} />
            </button>
        </nav>
    );
};

export default Navbar;
