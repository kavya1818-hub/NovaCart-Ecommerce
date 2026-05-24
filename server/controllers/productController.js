const Product =
  require("../models/Product")

const addProduct = async (
  req,
  res
) => {

  try {

    const {

      name,
      price,
      image,
      category,
      description,
      countInStock

    } = req.body

    const product =
      await Product.create({

        name,
        price,
        image,
        category,
        description,
        countInStock

      })

    res.status(201).json({

      message:
        "Product added successfully",

      product

    })

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

const getProducts = async (
  req,
  res
) => {

  try {

    const products =
      await Product.find()

    res.status(200).json(
      products
    )

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

module.exports = {

  addProduct,
  getProducts

}