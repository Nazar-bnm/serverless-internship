interface Share {
  "name": string,
  "url": string
}

interface Review {
  "title": string,
  "text": string,
  "author": string,
  "date": string,
  "rating": number
}

interface Product {
  "id": string,
  "name": string,
  "description": string,
  "shortDescription": string,
  "type": string,
  "dimensions": {
    "width": string,
    "height": string
  },
  "color": string,
  "style": string,
  "brand": string,
  "amount": {
    "value": number,
    "unit": string
  },
  "availability": string,
  "price": {
    "value": number,
    "currency": string
  },
  "label": string,
  "sku": string,
  "averageRating": number,
  "reviews": Review[],
  "tags": string[],
  "shares": Share[] 
  "images": string[]
}

const products: { [key: string]: Product } = {
  "14bbdccd-e853-4af2-af7b-faea4ed9e3b1": {
    "id": "14bbdccd-e853-4af2-af7b-faea4ed9e3b1",
    "name": "Generic Fresh Table",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "shortDescription": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "type": "circuit methodology doors",
    "dimensions": {
      "width": "1061mm",
      "height": "2360mm"
    },
    "color": "indigo",
    "style": "lite-2 ",
    "brand": "Nolan, Schaden and Nienow",
    "amount": {
      "value": 15,
      "unit": "unit(s)"
    },
    "availability": "In stock",
    "price": {
      "value": 20,
      "currency": "USD"
    },
    "label": "New",
    "sku": "fe9ea431-c169-44fd-bbd2-a71729f6e5fe",
    "averageRating": 2.1,
    "reviews": [
      {
        "title": "Senior Implementation Strategist",
        "text": "Try to bypass the SQL microchip, maybe it will back up the haptic transmitter!",
        "author": "Randall.Lindgren91",
        "date": "2020-09-22T22:59:11.997Z",
        "rating": 2
      },
      {
        "title": "Dynamic Solutions Engineer",
        "text": "The JBOD program is down, transmit the mobile application so we can connect the XML driver!",
        "author": "Lora_Kozey90",
        "date": "2020-08-13T21:46:12.678Z",
        "rating": 5
      },
      {
        "title": "Human Configuration Administrator",
        "text": "Try to override the SDD capacitor, maybe it will index the wireless array!",
        "author": "Chad70",
        "date": "2020-04-21T12:33:16.796Z",
        "rating": 1
      }
    ],
    "tags": [
      "Fantastic",
      "Fantastic",
      "Licensed"
    ],
    "shares": [
      {
        "name": "ernestina",
        "url": "http://elvie.info"
      },
      {
        "name": "sebastian",
        "url": "http://kristina.info"
      },
      {
        "name": "jessy",
        "url": "https://alexa.name"
      },
      {
        "name": "holly",
        "url": "https://kade.net"
      },
      {
        "name": "selina",
        "url": "https://alia.name"
      }
    ],
    "images": [
      "http://placeimg.com/640/480/nature?random=472",
      "http://placeimg.com/640/480/nature?random=819",
      "http://placeimg.com/640/480/nature?random=745",
      "http://placeimg.com/640/480/nature?random=494",
      "http://placeimg.com/640/480/nature?random=252"
    ]
  },
  "c66c75db-3dc6-4a48-9b89-4df679a83fee": {
    "id": "c66c75db-3dc6-4a48-9b89-4df679a83fee",
    "name": "Handcrafted Metal Soap",
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "shortDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "type": "scsi doors",
    "dimensions": {
      "width": "948mm",
      "height": "2390mm"
    },
    "color": "magenta",
    "style": "panel-7 ",
    "brand": "Barrows, Kuphal and Nolan",
    "amount": {
      "value": 4,
      "unit": "unit(s)"
    },
    "availability": "Out of stock",
    "price": {
      "value": 801,
      "currency": "USD"
    },
    "label": "Sale",
    "sku": "be462076-0446-413a-8912-7047e8d31cc8",
    "averageRating": 3.45,
    "reviews": [
      {
        "title": "Dynamic Accountability Representative",
        "text": "We need to synthesize the back-end GB array!",
        "author": "Wilfred_Walsh56",
        "date": "2020-12-21T03:19:41.958Z",
        "rating": 4
      },
      {
        "title": "Lead Quality Developer",
        "text": "transmitting the interface won't do anything, we need to program the redundant AGP bandwidth!",
        "author": "Breanna_Predovic",
        "date": "2020-09-01T03:53:44.505Z",
        "rating": 5
      },
      {
        "title": "Principal Directives Planner",
        "text": "If we bypass the alarm, we can get to the COM card through the back-end COM capacitor!",
        "author": "Elias26",
        "date": "2020-09-01T19:41:08.881Z",
        "rating": 3
      }
    ],
    "tags": [
      "Gorgeous",
      "Handcrafted",
      "Ergonomic"
    ],
    "shares": [
      {
        "name": "dallin",
        "url": "https://delilah.info"
      },
      {
        "name": "grant",
        "url": "http://armani.biz"
      },
      {
        "name": "otto",
        "url": "http://hank.org"
      },
      {
        "name": "jackie",
        "url": "https://conor.biz"
      },
      {
        "name": "ethel",
        "url": "https://lempi.net"
      }
    ],
    "images": [
      "http://placeimg.com/640/480/nature?random=976",
      "http://placeimg.com/640/480/nature?random=302",
      "http://placeimg.com/640/480/nature?random=807",
      "http://placeimg.com/640/480/nature?random=344",
      "http://placeimg.com/640/480/nature?random=539"
    ],
  },
  "b1a26981-d34b-4e1e-8fec-e9874cdbc076": {
    "id": "b1a26981-d34b-4e1e-8fec-e9874cdbc076",
    "name": "Refined Plastic Keyboard",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "shortDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "type": "copy maximize doors",
    "dimensions": {
      "width": "923mm",
      "height": "2206mm"
    },
    "color": "red",
    "style": "lite-4 ",
    "brand": "Witting - Rogahn",
    "amount": {
      "value": 50,
      "unit": "unit(s)"
    },
    "availability": "Out of stock",
    "price": {
      "value": 178,
      "currency": "USD"
    },
    "label": "New",
    "sku": "e6fb5062-fbbe-4cb2-850a-c68c3ff0a2cd",
    "averageRating": 4.58,
    "reviews": [
      {
        "title": "Dynamic Configuration Orchestrator",
        "text": "You can't connect the card without backing up the mobile USB interface!",
        "author": "Freeda_Rodriguez64",
        "date": "2020-06-03T20:29:29.139Z",
        "rating": 2
      },
      {
        "title": "Forward Group Engineer",
        "text": "Try to parse the SMS application, maybe it will bypass the multi-byte driver!",
        "author": "Denis15",
        "date": "2020-12-19T05:48:32.317Z",
        "rating": 5
      },
      {
        "title": "Human Marketing Director",
        "text": "I'll compress the digital JSON driver, that should alarm the SMS port!",
        "author": "Ken86",
        "date": "2020-11-01T12:29:24.040Z",
        "rating": 5
      }
    ],
    "tags": [
      "Fantastic",
      "Small",
      "Licensed"
    ],
    "shares": [
      {
        "name": "giovanna",
        "url": "http://alvis.net"
      },
      {
        "name": "charity",
        "url": "http://emie.org"
      },
      {
        "name": "max",
        "url": "http://maegan.name"
      },
      {
        "name": "alfred",
        "url": "https://denis.name"
      },
      {
        "name": "clay",
        "url": "https://sherman.com"
      }
    ],
    "images": [
      "http://placeimg.com/640/480/nature?random=244",
      "http://placeimg.com/640/480/nature?random=35",
      "http://placeimg.com/640/480/nature?random=6",
      "http://placeimg.com/640/480/nature?random=890",
      "http://placeimg.com/640/480/nature?random=442"
    ],
  },
};

export default products;
