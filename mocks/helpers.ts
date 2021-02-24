import * as faker from 'faker';

export const timesObj = (itemsNum: number, item: (faker: Faker.FakerStatic) => any): any => {
  const items: { [key: string]: any } = {};

  for (let i = 0; i < itemsNum; i++) {
    const id = faker.random.uuid();
    const itemObj = item(faker);

    itemObj.id = id;
    items[id] = itemObj;
  }

  return items;
};

export const timesArr = (itemsNum: number, item: (faker: Faker.FakerStatic) => any): any => {
  const items = [];

  for (let i = 0; i < itemsNum; i++) {
    items.push(item(faker));
  }

  return items;
};

export const randNum = (min: number, max: number) => faker.random.number({ min, max });

export const randomImage = () => `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`;
