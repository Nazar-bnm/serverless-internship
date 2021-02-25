import * as fakerHelper from './helpers';

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

const mostPopularItem = (faker: Faker.FakerStatic): MostPopularItem => ({
  id: faker.random.uuid(),
  name: faker.name.title(),
  price: {
    value: fakerHelper.randNum(10, 1000),
    currency: 'USD'
  },
  mainImage: fakerHelper.randomImage()
});

export default fakerHelper.timesObj(ITEMS_NUM, mostPopularItem);
