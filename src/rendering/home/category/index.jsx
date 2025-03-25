import React from "react";
import "./category.scss";
import ViewMore from "../../../common/viewMore";
import { category, SectionTitle } from "../../../dataset/herobannerSlider";
export default function Category() {
  return (
    <div>
      <div className="container">
        <div className="padding">
          <div className="categoryIcon">
            <div className="categoryTitle">
              <img src={SectionTitle[0].geticon} alt="" />
              <p>{SectionTitle[0].title}</p>
            </div>
            <ViewMore />
          </div>
          <div className="allCatergory">
            {category.map((el, index) => (
              <div className="categoryCard" key={index}>
                <div className="categoryImg">
                  <img src={el.categoryImg} alt="category" />
                </div>
                <div className="categoryDIsc">
                  <h4>{el.categoryTitle}</h4>
                  <p>{el.totalCategory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
