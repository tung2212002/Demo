import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", { open: isOpen })}>
        <button className={cx("toggle")} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className={cx("sidebar")}>
          <Sidebar />
          <button className={cx("close")} onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <main className={cx("main")}>
          <div className={cx("header")}>
            <Header />
          </div>
          <div className={cx("content")}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
