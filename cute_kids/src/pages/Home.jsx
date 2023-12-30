import React from 'react'
import Product from '../components/Product'

const Home = () => {

  const productsBoys = [{
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  },
    , {
      "name": "jacket",
      "price": "30$",
      "image_url": "",
      "description": "black cotton jacket ",
      "available_sizes": {
        "S": true,
        "M": false,
        "L": true,
        "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }]

  const productsGirls = [{
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  },
    , {
      "name": "jacket",
      "price": "30$",
      "image_url": "",
      "description": "black cotton jacket ",
      "available_sizes": {
        "S": true,
        "M": false,
        "L": true,
        "XL": true
    }
  }, {
    "name": "jacket",
    "price": "30$",
    "image_url": "",
    "description": "black cotton jacket ",
    "available_sizes": {
      "S": true,
      "M": false,
      "L": true,
      "XL": true
    }
  }]

  return (
    <div className=' grid grid-cols-5 '>
      {productsBoys.map((product) => (
        <>
          <div>
            <Product product={product} />
          </div>
        </>
      ))}
    </div>
  )
}

export default Home