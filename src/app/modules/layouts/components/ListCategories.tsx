import { Category } from "components/app/services";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  categories: Category[];
  parentCategory?: string | null;
}

interface ItemProps {
  id: string;
  name: string;
  categories: Category[];
}

const CategoryItem = (props: ItemProps) => {
  const { name, id, categories } = props;
  const [expand, setExpand] = useState(false);

  const hasSubCategories =
    categories.filter(({ parentId }) => {
      return id === parentId;
    }).length > 0;

  const handleBtn = () => {
    const value = hasSubCategories ? "-" : "";
    return expand ?  "+"  : value;
  };

  return (
    <>
      <div className="flex">
        <button onClick={() => setExpand((prev) => !prev)}>{handleBtn()}</button>
        <Link href={`/${id}`}> {name}</Link>
      </div>

      {expand && <ListCategories categories={categories} parentCategory={id} />}
    </>
  );
};

const ListCategories = (props: Props) => {
  const { categories, parentCategory } = props;

  const rootCategories = categories.filter(({ parentId }) => {
    return parentCategory === parentId;
  });

  return (
    <ul className="ml-4">
      {rootCategories.map((category) => (
        <li key={category.id} className="text-slate-300">
          <>
            <CategoryItem id={category.id} name={category.name} categories={categories} />
          </>
        </li>
      ))}
    </ul>
  );
};

export default ListCategories;
