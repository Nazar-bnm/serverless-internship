interface product {
    "id": string
    "title": string,
    "price": {
      "value": number,
      "currency": string
    },
    "image": string
  }

  interface subCategory {
    "subCategoryId": string,
    "subCategoryName": string,
    "category": {
      "id": string,
      "name": string,
    },
    "products": product[]
  }

  const subCategories: { [key: string]: subCategory } = {
    '11-paint': {
      "subCategoryId": '11-paint',
      "subCategoryName": 'paint',
      "category": {
        "id": '1-walls',
        "name": 'walls',
      },
      "products": [
        {
          "id": "14bbdccd-e853-4af2-af7b-faea4ed9e3b1",
          "title": "Generic Fresh Table",
          "price": {
            "value": 20,
            "currency": "USD"
          },
          "image": "http://placeimg.com/640/480/nature?random=472"
        },
        {
          "id": "c66c75db-3dc6-4a48-9b89-4df679a83fee",
          "title": "Handcrafted Metal Soap",
          "price": {
            "value": 801,
            "currency": "USD"
          },
          "image": "http://placeimg.com/640/480/nature?random=976"
        }
      ]
    }

  }

  export default subCategories;
