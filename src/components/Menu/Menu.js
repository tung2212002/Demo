import classNames from "classnames/bind";
import { useEffect, useMemo, useState } from "react";

import styles from "./Menu.module.scss";
import MenuItem from "../MenuItem/MenuItem";

const cx = classNames.bind(styles);
const Menu = ({ products }) => {
  const [state, setState] = useState(products);
  const [filter, setFilter] = useState([]);
  const uniqueToppings = useMemo(() => {
    const seen = new Set();
    return products.reduce((toppings, product) => {
      product.toppings.forEach((topping) => {
        const lowercasedTopping = topping.toLowerCase();
        if (!seen.has(lowercasedTopping)) {
          seen.add(lowercasedTopping);
          toppings.push(topping);
        }
      });
      return toppings;
    }, []);
  }, [products]);
  const [visibleFilter, setVisibleFilter] = useState(false);

  const handleSort = (e) => {
    const value = e.target.value;
    const [key, order] = value.split("-");
    if (key === "name") {
      const sorted = [...state].sort((a, b) => {
        if (order === "asc") {
          return a[key].localeCompare(b[key]);
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
      setState(sorted);
    } else {
      const sorted = [...state].sort((a, b) => {
        if (order === "asc") {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      });
      setState(sorted);
    }
  };

  const handleSetFilter = (e) => {
    const value = e.target.htmlFor;
    if (filter.includes(value)) {
      setFilter(filter.filter((item) => item !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  useEffect(() => {
    if (filter.length === 0) {
      setState(products);
      return;
    }
    const filtered = products.filter((product) => {
      return filter.every((topping) =>
        product.toppings
          .map((topping) => topping.toLowerCase())
          .some((item) => item.includes(topping.toLowerCase()))
      );
    });
    setState(filtered);
  }, [filter, products]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <button
            type="button"
            className={cx("button")}
            onClick={() => setVisibleFilter(!visibleFilter)}
          >
            Filter
          </button>

          <div className={cx("sort-by")}>
            <span className={cx("sort-by-title")}>Sort by:</span>
            <select className={cx("select")} onChange={handleSort}>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low-High)</option>
              <option value="price-desc">Price (High-Low)</option>
            </select>
          </div>
        </div>
        <div
          className={cx("filter")}
          style={{ display: visibleFilter ? "block" : "none" }}
        >
          <div className={cx("list-filter")}>
            {uniqueToppings.map((topping, index) => (
              <div className={cx("filter-item")} key={index}>
                <input
                  type="checkbox"
                  id={topping}
                  name={topping}
                  value={topping}
                  className={cx("checkbox")}
                />
                <label
                  htmlFor={topping}
                  className={cx("label")}
                  onClick={handleSetFilter}
                >
                  {topping}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("content")}>
          <ul className={cx("list")}>
            {state.map((product, index) => (
              <li key={index} className={cx("item")}>
                <MenuItem item={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
