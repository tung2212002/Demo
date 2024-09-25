import classNames from "classnames/bind";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { siderBar } from "../../constants";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { store } = useParams();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1 className={cx("title")}>Mike Store</h1>
        <ul className={cx("list")}>
          {siderBar.map((item, index) => (
            <li
              key={index}
              className={cx("item", {
                active: item.params === store || (index === 0 && !store),
              })}
            >
              <NavLink to={`/${item.params}`} className={cx("link")}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
