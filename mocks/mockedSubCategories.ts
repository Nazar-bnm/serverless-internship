import products from './mockedProducts';

export interface Product {
  id: string
  name: string,
  price: {
    value: number,
    currency: string
  },
  amount: {
    value: number,
    unit: string
  },
  mainImage: string
}

interface SubCategory {
  id: string,
  name: string,
  category: {
    id: string,
    name: string,
  },
  products?: Product[]
}

const subCategories: { [key: string]: SubCategory } = {
  '11-paint': {
    id: '11-paint',
    name: 'paint',
    category: {
      id: '1-walls',
      name: 'walls',
    }
  },
  '12-wallpapers': {
    id: '12-wallpapers',
    name: "wallpapers",
    category: {
      id: '1-walls',
      name: 'walls',
    }
  },
  '13-windows': {
    id: '13-windows',
    name: "windows",
    category: {
      id: '1-walls',
      name: 'walls',
    }
  },
  '14-doors': {
    id: '14-doors',
    name: "doors",
    category: {
      id: '1-walls',
      name: 'walls',
    }
  },
  '21-parquet': {
    id: '21-parquet',
    name: "parquet",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '22-linoleum': {
    id: '22-linoleum',
    name: "linoleum",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '23-carpet': {
    id: '23-carpet',
    name: "carpet",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '24-laminate': {
    id: '24-laminate',
    name: "laminate",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '25-baseboard': {
    id: '25-baseboard',
    name: "baseboard",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '26-tile': {
    id: '26-tile',
    name: "tile",
    category: {
      id: '2-floor',
      name: 'floor',
    }
  },
  '31-room': {
    id: '31-room',
    name: "room",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '32-materials': {
    id: '32-materials',
    name: "materials",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '33-cabinet': {
    id: '33-cabinet',
    name: "cabinet furniture",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '34-tables': {
    id: '34-tables',
    name: "tables",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '35-sofas': {
    id: '35-sofas',
    name: "sofas",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '36-chairs': {
    id: '36-chairs',
    name: "chairs",
    category: {
      id: '3-furniture',
      name: 'furniture',
    }
  },
  '41-painting': {
    id: '41-painting',
    name: "painting",
    category: {
      id: '4-decor',
      name: 'decor',
    }
  },
  '42-plants': {
    id: '42-plants',
    name: "plants",
    category: {
      id: '4-decor',
      name: 'decor',
    }
  },
  '33-holiday': {
    id: '33-holiday',
    name: "holiday decor",
    category: {
      id: '4-decor',
      name: 'decor',
    }
  },
  '44-lamps': {
    id: '44-lamps',
    name: "lamps",
    category: {
      id: '4-decor',
      name: 'decor',
    }
  },
  '45-mirrors': {
    id: '45-mirrors',
    name: "mirrors",
    category: {
      id: '4-decor',
      name: 'decor',
    }
  }
}

Object.keys(subCategories).forEach((key) => {
  subCategories[key].products =
    Object.values(products)
      .filter((product) => product.subCategory.id === key)
    .map(({ id, name, price, amount, mainImage,  }): Product => ({
        id, name, price, amount, mainImage,
      }));
});

export default subCategories;
