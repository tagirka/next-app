import { ProductType } from "../interfaces/product.type";

const DataProducts: ProductType[] = [
  {
    id: "1",
    title: "с фуа-гра",
    weight: 5,
    weightSymbol: "кг",
    description: "Печень утки разварная с артишоками.",
    disable: false,
    listOptions: [
      {
        id: "1",
        title: "10 порций",
      },
      {
        id: "2",
        title: "мышь в подарок",
      },
    ],
  },

  {
    id: "2",
    title: "с рыбой",
    weight: 2,
    weightSymbol: "кг",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    disable: false,
    listOptions: [
      {
        id: "1",
        title: "40 порций",
      },
      {
        id: "2",
        title: "2 мышей в подарок",
      },
    ],
  },
  {
    id: "3",
    title: "с курой",
    weight: 5,
    weightSymbol: "кг",
    description: "Филе из цыплят с трюфелями в бульоне.",
    disable: true,
    listOptions: [
      {
        id: "1",
        title: "100 порций",
      },
      {
        id: "2",
        title: "5 мышей в подарок",
      },
      {
        id: "3",
        title: "заказчик доволен",
      },
    ],
  },
];

export default DataProducts;
