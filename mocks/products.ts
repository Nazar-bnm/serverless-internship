interface Share {
  name: string,
  url: string
}

interface Review {
  title: string,
  text: string,
  author: string,
  date: Date,
  rating: number
}

interface RelatedProduct {
  title: string,
  price: {
    value: number,
    currency: string
  },
  image: string,
  label: string,
}

interface Product {
  id: string,
  name: string,
  description: string,
  shortDescription: string,
  type: string,
  dimensions: {
    width: string,
    height: string
  },
  color: string,
  style: string,
  brand: string,
  amount: {
    value: number,
    unit: string
  },
  availability: string,
  price: {
    value: number,
    currency: string
  },
  label: string,
  sku: string,
  averageRating: number,
  reviews: Review[],
  tags: string[],
  shares: Share[],
  relatedProducts: RelatedProduct[],
  images: string[],
  mainImage: string
}

import * as fakerHelper from './helpers';

const DOORS_NUM = 20;
const RELATED_PRODUCTS_NUM = 5;
const REVIEWS_NUM = 3;
const SHARES_NUM = 5;
const IMAGES_NUM = 5;
const TAGS_NUM = 3;

const relatedProduct = (faker: Faker.FakerStatic): RelatedProduct => ({
  title: faker.name.title(),
  price: {
    value: fakerHelper.randNum(10, 1000),
    currency: 'USD'
  },
  image: fakerHelper.randomImage(),
  label: faker.random.arrayElement(['Sale', 'New'])
});

const review = (faker: Faker.FakerStatic): Review => ({
  title: faker.name.title(),
  text: faker.hacker.phrase(),
  author: faker.internet.userName(),
  date: faker.date.past(),
  rating: faker.random.number({ min: 1, max: 5 }) // integer
});

const image = () => fakerHelper.randomImage();

const tag = (faker: Faker.FakerStatic) => faker.commerce.productAdjective();

const share = (faker: Faker.FakerStatic) => ({
  name: faker.internet.domainWord(), // 'facebook'
  url: faker.internet.url()
});

const door = (faker: Faker.FakerStatic): Product => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  shortDescription: faker.commerce.productDescription(), // summary
  type: `${faker.random.words().toLowerCase()} doors`,
  dimensions: {
    width: `${fakerHelper.randNum(600, 1500)}mm`,
    height: `${fakerHelper.randNum(1900, 2500)}mm`
  },
  color: faker.commerce.color(),
  style: `${faker.random.arrayElement(['panel', 'lite'])}-${fakerHelper.randNum(
    1,
    10
  )} `,
  brand: faker.company.companyName(),
  amount: {
    value: fakerHelper.randNum(1, 50),
    unit: 'unit(s)'
  },
  availability: faker.random.arrayElement(['In stock', 'Out of stock']),
  price: {
    value: fakerHelper.randNum(10, 1000),
    currency: 'USD'
  },
  label: faker.random.arrayElement(['Sale', 'New']),
  sku: faker.random.uuid(),
  averageRating: faker.random.float({ min: 1, max: 5 }), // float
  reviews: fakerHelper.timesArr(REVIEWS_NUM, review),
  tags: fakerHelper.timesArr(TAGS_NUM, tag),
  shares: fakerHelper.timesArr(SHARES_NUM, share),
  relatedProducts: fakerHelper.timesArr(RELATED_PRODUCTS_NUM, relatedProduct),
  images: fakerHelper.timesArr(IMAGES_NUM, image),
  mainImage: fakerHelper.randomImage()
});

export default fakerHelper.timesObj(DOORS_NUM, door);
