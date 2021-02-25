># GET /products/categories/{id}
>[id of category is required]
## Access list of items that are stored under specific category

Success Response:

```
Status Code: 200
Response:
{
  "id": string,
  "name": string,
  "subCategories": [
    {
    "id": string,
    "name": string
    }
  ]
}
```

Error Response:

```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

> # GET /products/sub-categories/{id}
> [id of sub-category is required]

## Access list of items that are stored under specific sub-category

Success Response:

```
Status Code: 200
Response:
{
  "subCategoryId": string,
  "subCategoryName": string,
  "category": {
    "id": string,
    "name": string,
  },
  "products": [
    {
      "id": string
      "title": string,
      "price": {
        "value": integer,
        "currency": string
      },
      "image": string (URL or location)
    }
  ]
}
```

Error Response:

```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

> # GET /product/{id}
> [id is required]

## Access data of particular items

Success Response:

```
Status Code: 200
Response:
{
  id: string,
  name: string,
  category: {
    id: string,
    name: string,
  },
  subCategory: {
    id: string,
    name: string,
  }
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
  reviews: {
    title: string,
    text: string,
    author: string,
    date: Date,
    rating: number
  },
  tags: [string],
  shares: {
    name: string,
    url: string
  },
  relatedProducts: {
    title: string,
    price: {
      value: number,
      currency: string
    },
    image: string,
    label: string
  },
  images: [string],
  mainImage: string
}
```

Error Response:

```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

> # GET /most-popular

## Access data of most popular items

Success Response:

```
Status Code: 200
Response:
[
  {
    id: string,
    name: string,
    price: {
      value: number,
      currency: string,
    },
    mainImage: string
  }
]
```

Error Response:

```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

> # GET /related-products/{category}/{sub-category}


> [category and sub-category is required]

## Access data of related to current items

Success Response:

```
Status Code: 200
Response:
[
  {
    "productId": string,
    "title": string,
    "price": {
      "value": integer,
      "currency": string
    },
    "image": string (location or URL)
  }
]
```

Error Response:

```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```
