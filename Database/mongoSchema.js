const mongoose = require('mongoose');

const overviews = mongoose.Schema({
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [
    {
      feature: String,
      value: String,
    }
  ],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      default_style: Boolean,
      photos: [
        {
          thumbnail_url: String,
          url: String
        }
      ],
      skus: {
        {
          size:String,
          quantity: Number,
        }
      }
    }
  ]
});