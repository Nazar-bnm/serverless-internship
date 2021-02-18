># GET /most-popular
>
## Access data of most popular items
Success Response:
```
Status Code: 200
Response:
 {
    "id": string,
    "title": string,
    "price": {
      "value": integer,
      "currency": string
    },
    "image": string (location or URL)
  }
```
Error Response:
```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

># GET /products/{category}/{sub-category}/{id}
>[category, sub-category and id is required]
## Access list of items that are stored under spesific sub-category
### Should access /product/{id} first and then use only required fields
Success Response:
```
Status Code: 200
Response:
 {
    "id": string
    "title": string,
    "price": {
      "value": integer,
      "currency": string
    },
    "image": string (URL or location)
  }
```
Error Response:
```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

># GET /product/{id}
>[id is required]
## Access data of particular items
Success Response:
```
Status Code: 200
Response:
 {
    "id": string,
    "name": string,
    "description": string,
    "shortDescritpion": "string,
    "type": string,
    "dimensions": {
      "width": string,
      "height": string
    },
    "color": string,
    "style": string,
    "brand": string,
    "amount": {
      "value": integer,
      "unit": string
    },
    "availability": string,
    "price": {
      "value": integer,
      "currency": string
    },
    "label": string,
    "sku": string,
    "averageRating": float,
    "reviews": [
      {
        "title": string,
        "text": string,
        "author": string,
        "date": date,
        "rating": integer
      }
    ],
    "tags": [string],
    "shares": [
      {
        "name": string,
        "url": string (URL)
      }
    ],
    "relatedProducts": [
      {
        "title": string,
        "price": {
          "value": integer,
          "currency": string
        },
        "image": string (URL or location),
        "label": string
      }
    ],
    "images": [string (URL or location)]
  }
```
Error Response:
```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```

># GET /related-products/{category}/{sub-category}
>[category and sub-category is required]
## Access data of related to current items
Success Response:
```
Status Code: 200
Response:
 {
    "id": string,
    "title": string,
    "price": {
      "value": integer,
      "currency": string
    },
    "image": string (location or URL)
  }
```
Error Response:
```
Code: 404 NOT FOUND
Content: { error : "Page doesn't exist" }
```