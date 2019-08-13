import React from "react";
import classNames from "classnames";

import Button from "@components/Buttons/Button";
import { Category } from "../../types/categories";
import "./Categories.scss";

interface Props {
  onClick: (selectedCategory: string) => void;
  selectedCategory: string;
  categories: Category[];
}

// Popular/Following/Explorer;
const Categories = ({ selectedCategory, categories, onClick }: Props) => {
  return (
    <div className="categories">
      <div className="categories__content">
        {categories.map(category => (
          <Button
            key={category.id}
            onClick={() => onClick(category.title)}
            className={classNames({
              "categories--active": category.title === selectedCategory,
            })}
            text={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
