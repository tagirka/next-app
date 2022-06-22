import { ProductType } from "../interfaces/product.type";

const DataProducts: ProductType[] = [
  {
    id: "1",
    title: "с курой",
    weight: 5,
    weightSymbol: "кг",
    description: "Филе из цыплят с трюфелями в бульоне.",
    disable: false,
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

  {
    id: "2",
    title: "с курой 2",
    weight: 5,
    weightSymbol: "кг",
    description: "Филе из цыплят с трюфелями в бульоне.",
    disable: false,
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
  {
    id: "3",
    title: "с курой 3",
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
