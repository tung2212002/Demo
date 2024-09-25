import classNames from "classnames/bind";

import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ item }) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("code")}>MT-0{item.id}</h3>
        <h2 className={cx("title")}>{item.name}</h2>
      </div>
      <hr className={cx("line")} />
      <div className={cx("content")}>
        <span className={cx("topping")}>
          <span className={cx("topping-title")}>Toppings: </span>
          <p className={cx("topping-list")}>{item.toppings.join(", ")}</p>
        </span>
      </div>
      <div className={cx("footer")}>
        {item.is_trending && <span className={cx("trending")}>Trending</span>}
        <span className={cx("price")}>${item.price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
