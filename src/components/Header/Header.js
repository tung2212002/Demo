import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import { siderBar } from "../../constants";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const { store } = useParams();
  const storeName =
    siderBar.find((item) => item.params === store)?.title || siderBar[0].title;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("title")}>{storeName} Menu</h1>
      </div>
    </div>
  );
};

export default Header;
