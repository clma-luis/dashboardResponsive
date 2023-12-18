import { getInitialProducts } from "./services";

export default async function () {
  const { results } = await getInitialProducts();

  const handleFormatPrice = (price: number, currency: string) => {
    if (!price) return "Sin precio";

    const value = price.toLocaleString("es-AR", {
      style: "currency",
      currency,
    });

    return value;
  };

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {results.map((item) => (
          <li className="p-4 flex flex-col justify-center">
            <div className="w-full flex justify-center">
              <img src={item.thumbnail} alt="imagen del producto" width={100} />
            </div>

            <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-200">{item.title}</h3>
            <p>{handleFormatPrice(item.price, item.currency_id)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
