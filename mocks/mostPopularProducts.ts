import * as fakerHelper from './helpers';

const ITEMS_NUM = 6;

const mostPopularItem = (faker: Faker.FakerStatic) => ({
  id: faker.random.uuid(),
  title: faker.name.title(),
  price: {
    value: fakerHelper.randNum(10, 1000),
    currency: 'USD'
  },
  mainImage: fakerHelper.randomImage()
});

export default fakerHelper.timesObj(ITEMS_NUM, mostPopularItem);
