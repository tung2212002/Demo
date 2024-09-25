import classNames from "classnames/bind";

import styles from "./HomePage.module.scss";
import Menu from "../../components/Menu/Menu";
import products from "../../assests/dumps/products.json";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx("wrapper")}>
      <Menu products={products.products} />
    </div>
  );
};

export default HomePage;
