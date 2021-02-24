interface sub {
  "id": string,
  "name": string
}

interface Category {
  "categoryId": string,
  "categoryName": string,
  "subCategories": sub[]
}

const categories: { [key: string]: Category } = {
  '1-walls': {
    "categoryId": '1-walls',
    "categoryName": 'walls',
    "subCategories": [
      {
        "id": '11-paint',
        "name": "paint"
      },
      {
        "id": '12-wallpaper',
        "name": "wallpaper"
      },
      {
        "id": '13-window',
        "name": "window"
      },
      {
        "id": '14-doors',
        "name": "doors"
      }
    ]
  },
  '2-floor': {
    "categoryId": '2-floor',
    "categoryName": 'floor',
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
  '3-furnuture': {
    "categoryId": '3-furnuture',
    "categoryName": 'furnuture',
    "subCategories": [
      {
        "id": '31-room',
        "name": "room"
      },
      {
        "id": '32-material',
        "name": "material"
      },
      {
        "id": '33-cabinet',
        "name": "cabinet furniture"
      },
      {
        "id": '34-table',
        "name": "table"
      },
      {
        "id": '35-sofa',
        "name": "sofa"
      },
      {
        "id": '36-chair',
        "name": "chair"
      }
    ]
  },
  '4-decor': {
    "categoryId": '4-decor',
    "categoryName": 'decor',
    "subCategories": [
      {
        "id": '41-painting',
        "name": "painting"
      },
      {
        "id": '42-plant',
        "name": "plant"
      },
      {
        "id": '33-holiday',
        "name": "holiday decor"
      },
      {
        "id": '44-lamp',
        "name": "lamp"
      },
      {
        "id": '45-mirror',
        "name": "morror"
      }
    ]
  }
}

export default categories;

