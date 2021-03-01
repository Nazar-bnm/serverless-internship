import products from './mockedProducts';

const ITEMS_NUM = 6;
interface MostPopularItem {
  id: string,
  name: string,
  price: {
    value: number,
    currency: string,
  },
  mainImage: string
}

export default Object.values(products).slice(0, ITEMS_NUM)
  .map (({ id, name, price, mainImage, }): MostPopularItem => ({
    id, name, price, mainImage
  }));
