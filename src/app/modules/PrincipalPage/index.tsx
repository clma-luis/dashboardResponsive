"use client";
import { Result } from "components/app/interfaces";
import { getCategories } from "components/app/services";
import { handleFormatPrice } from "components/app/shared/helpers/helpers";
import useDashboard from "components/app/shared/hooks/useDashboard";
import { useMemo } from "react";

const PrincipalPage = ({ results }: { results: Result[] }) => {
  const { setCategories } = useDashboard();

  const getValue = async () => {
    const currentValue = await getCategories(results);
    setCategories(currentValue);
  };

  useMemo(() => {
    if (results) {
      getValue();
    }
  }, [results]);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {results.map((item) => (
        <li className="p-4 flex flex-col justify-center" key={item.id}>
          <div className="w-full flex justify-center">
            <img src={item.thumbnail} alt="imagen del producto" width={100} />
          </div>

          <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-200">{item.title}</h3>
          <p>{handleFormatPrice(item.price, item.currency_id)}</p>
        </li>
      ))}
    </ul>
  );
};

export default PrincipalPage;
