import * as faker from 'faker';

export function timesObj
  <ItemObject extends { id: string }>(itemsNum: number, item: (faker: Faker.FakerStatic) => ItemObject): { [key: string]: ItemObject } {
    const items: { [key: string]: ItemObject } = {};

    for (let i = 0; i < itemsNum; i++) {
      // to generate the same sequence each time
      faker.seed(i);

      const id = faker.random.uuid();
      const itemObj = item(faker);

      itemObj.id = id;
      items[id] = itemObj;
    }

    return items;
  }

export function timesArr <ItemObject>(itemsNum: number, item: (faker: Faker.FakerStatic) => ItemObject): ItemObject[] {
  const items: ItemObject[] = [];

  for (let i = 0; i < itemsNum; i++) {
    items.push(item(faker));
  }

  return items;
}

export const randNum = (min: number, max: number): number => faker.random.number({ min, max });

export const randomImage = (): string => `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`;

