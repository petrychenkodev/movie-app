import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-geanres">
        <li className="navigation-geanres-item">all</li>
        <li className="navigation-geanres-item">documentary</li>
        <li className="navigation-geanres-item">comedy</li>
        <li className="navigation-geanres-item">horror</li>
        <li className="navigation-geanres-item">crime</li>
      </ul>
      <div className="navigation-sort">
        <span>sort by</span>
        <select>
          <option>release date</option>
          <option>release date</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
