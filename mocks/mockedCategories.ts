interface SubCategory {
  "id": string,
  "name": string
}

interface Category {
  "id": string,
  "name": string,
  "subCategories": SubCategory[]
}

const categories: { [key: string]: Category } = {
  '1-walls': {
    "id": '1-walls',
    "name": 'walls',
    "subCategories": [
      {
        "id": '11-paint',
        "name": "paint"
      },
      {
        "id": '12-wallpapers',
        "name": "wallpapers"
      },
      {
        "id": '13-windows',
        "name": "windows"
      },
      {
        "id": '14-doors',
        "name": "doors"
      }
    ]
  },
  '2-floor': {
    "id": '2-floor',
    "name": 'floor',
    "subCategories": [
      {
        "id": '21-parquet',
        "name": "parquet"
      },
      {
        "id": '22-linoleum',
        "name": "linoleum"
      },
      {
        "id": '23-carpet',
        "name": "carpet"
      },
      {
        "id": '24-laminate',
        "name": "laminate"
      },
      {
        "id": '25-baseboard',
        "name": "baseboard"
      },
      {
        "id": '26-tile',
        "name": "tile"
      }
    ]
  },
  '3-furniture': {
    "id": '3-furniture',
    "name": 'furniture',
    "subCategories": [
      {
        "id": '31-room',
        "name": "room"
      },
      {
        "id": '32-materials',
        "name": "materials"
      },
      {
        "id": '33-cabinet',
        "name": "cabinet furniture"
      },
      {
        "id": '34-tables',
        "name": "tables"
      },
      {
        "id": '35-sofas',
        "name": "sofas"
      },
      {
        "id": '36-chairs',
        "name": "chairs"
      }
    ]
  },
  '4-decor': {
    "id": '4-decor',
    "name": 'decor',
    "subCategories": [
      {
        "id": '41-painting',
        "name": "painting"
      },
      {
        "id": '42-plants',
        "name": "plants"
      },
      {
        "id": '33-holiday',
        "name": "holiday decor"
      },
      {
        "id": '44-lamps',
        "name": "lamps"
      },
      {
        "id": '45-mirrors',
        "name": "mirrors"
      }
    ]
  }
}

export default categories;
