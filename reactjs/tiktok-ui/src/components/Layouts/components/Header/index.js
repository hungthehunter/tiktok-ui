import images from "~/assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark,faSpinner,faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
// use to write class such as "post-item" or "navbar-check" . syntax such as styles.post-item is wrong syntax in js so you have to import npm i classnames to use it
import classNames from "classnames/bind";
import { faRoadCircleXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
//Sample syntax cx("post-itme")
function Header() {
    //The father class always use cx("wrapper")
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* logo part */}
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
{/* search part */}
                <div className={cx("search")}>
                    <input placeholder="Search account and videos" spellCheck={false} />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx("action")}>

                </div>
            </div>
        </header>
    );
}

export default Header;
