export const handleFormatPrice = (price: number, currency: string) => {
  if (!price) return "Sin precio";

  const value = price.toLocaleString("es-AR", {
    style: "currency",
    currency,
  });

  return value;
};
