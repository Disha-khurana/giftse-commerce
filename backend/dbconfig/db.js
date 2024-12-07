const mongoose = require('mongoose');
const Product = require('../models/Products'); 
require('../models/Categories')
require('../models/Slide1')

mongoose.connect('mongodb://localhost:27017/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
 

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected with mongodb server');
})

db.on('disconnected',()=>{
    console.log('disconnected with mongodb server');
})

db.on('error',(err)=>{
    console.error('Getting error',err);
})
    

    // const products = [
    //   {
    //     image: [
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_1.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_2.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_3.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_4.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_5.webp"
    //     ],
    //     link: "/decorated-chocolate-truffle-cake-half-kg",
    //     title: "Decorated Chocolate Truffle Cake Half Kg",
    //     rate: "4.5",
    //     price: "575",
    //     review: "73 reviews",
    //     deliveryOption: "Today",
    //     slug: "decorated-chocolate-truffle-cake-half-kg",
    //     productDetails: [
    //       { label: "Cake Flavour", value: "Truffle" },
    //       { label: "Type of Cake", value: "Cream Cake" },
    //       { label: "Shape", value: "Round" },
    //       { label: "Weight", value: "500 gm" },
    //       { label: "Net Quantity", value: "1 Cake" },
    //       { label: "Diameter", value: "7.5 inch" },
    //       { label: "Country Of Origin", value: "India" },
    //       { label: "Serves", value: "4-6 People" }
    //     ],
    //     ingredients: [
    //       "Chocolate premix",
    //       "Refined oil",
    //       "Breakfast Sugar",
    //       "Chocolate Truffle Base",
    //       "Dark Chocolate compound",
    //       "Milk chocolate compound",
    //       "Chocolate Glaze"
    //     ],
    //     notes: [
    //       "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //       "This cake is hand delivered in a good quality cardboard box."
    //     ],
    //     deliveryDetails: [
    //       "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //       "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //       "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //       "The delivery cannot be redirected to any other address.",
    //       "This product is hand delivered and will not be delivered along with courier products.",
    //       "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //     ],
    //     storage: [
    //       "Store cream cakes in a refrigerator.",
    //       "Fondant cakes should be stored in an air-conditioned environment.",
    //       "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //       "Use a serrated knife to cut a fondant cake.",
    //       "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //       "Please check the placement of these items before serving to small children.",
    //       "The cake should be consumed within 24 hours.",
    //       "Enjoy your cake!"
    //     ],
    //     details: [
    //       "Ferns N Petals Private Limited",
    //       "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //       "FSSAI License No. 10019011006502"
    //     ]
    //   },
    //   {
    //     image: [
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_1.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_2.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_3.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_4.webp",
    //       "/Images/birthday/decorated truffle/decorated-chocolate-truffle-cake-half-kg_5.webp"
    //     ],
    //     link: "/decorated-chocolate-truffle-cake-half-kg",
    //     title: "Decorated Chocolate Truffle Cake Half Kg",
    //     rate: "4.5",
    //     price: "575",
    //     review: "73 reviews",
    //     deliveryOption: "Today",
    //     slug: "decorated-chocolate-truffle-cake-half-kg"
    //   },
    //   {
    //     image: [
    //       "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_1.webp",
    //       "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_2.webp",
    //       "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_3.webp",
    //       "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_4.webp",
    //       "/Images/birthday/fudge brownie/fudge-brownie-cake-half-kg_5.webp"
    //     ],
    //     link: "/fudge-brownie-cake-half-kg",
    //     title: "Fudge Brownie Cake Half Kg",
    //     rate: "4.5",
    //     price: "675",
    //     review: "273 reviews",
    //     deliveryOption: "Today",
    //     slug: "fudge-brownie-cake-half-kg",
    //     productDetails: [
    //       { label: "Cake Flavour", value: "Truffle" },
    //       { label: "Shape", value: "Round" },
    //       { label: "Weight", value: "500 gm" },
    //       { label: "Net Quantity", value: "1 Cake" },
    //       { label: "Diameter", value: "7.5 inch" },
    //       { label: "Country Of Origin", value: "India" },
    //       { label: "Serves", value: "4-6 People" }
    //     ],
    //     ingredients: [
    //       "Chocolate premix",
    //       "Refined oil",
    //       "Breakfast Sugar",
    //       "Chocolate Truffle Base",
    //       "Dark Chocolate compound",
    //       "White Chocolate Compound",
    //       "Chocolate Glaze"
    //     ],
    //     notes: [
    //       "The cake stand, cutlery accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //       "This cake is hand delivered in a good quality cardboard box."
    //     ],
    //     deliveryDetails: [
    //       "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //       "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //       "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //       "The delivery cannot be redirected to any other address.",
    //       "This product is hand delivered and will not be delivered along with courier products.",
    //       "Occasionally, substitutions of flavours/designs is necessary due to temporary and/or regional unavailability issues."
    //     ],
    //     storage: [
    //       "Store cream cakes in a refrigerator.",
    //       "Fondant cakes should be stored in an air conditioned environment.",
    //       "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //       "Use a serrated knife to cut a fondant cake.",
    //       "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //       "Please check the placement of these items before serving to small children.",
    //       "The cake should be consumed within 24 hours.",
    //       "Enjoy your cake!"
    //     ],
    //     details: [
    //       "Ferns N Petals Private Limited",
    //       "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //       "FSSAI License No. 10019011006502"
    //     ]
    //   },
    //   {
    //     image: [
    //       "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_1.webp",
    //       "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp",
    //       "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_3.webp",
    //       "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_4.webp",
    //       "/Images/birthday/rich coffee cream cake/rich-coffee-cream-cake-half-kg_2.webp"
    //     ],
    //     link: "/rich-coffee-cream-cake-half-kg",
    //     title: "Rich Coffee Cream Cake Half Kg",
    //     rate: "5.0",
    //     price: "725",
    //     review: "273 reviews",
    //     deliveryOption: "Today",
    //     slug: "rich-coffee-cream-cake-half-kg",
    //     productDetails: [
    //       { label: "Cake Flavour", value: "Coffee" },
    //       { label: "Type of Cake", value: "Cream Cake" },
    //       { label: "Weight", value: "Half Kg" },
    //       { label: "Shape", value: "Round" },
    //       { label: "Serves", value: "4-6 People" },
    //       { label: "Net Quantity", value: "1 Cake" },
    //       { label: "Diameter", value: "7.5 inch" },
    //       { label: "Country Of Origin", value: "India" }
    //     ],
    //     ingredients: [
    //       "Refined Wheat Flour",
    //       "Breakfast Sugar",
    //       "Eggs",
    //       "Butter",
    //       "Coffee Essence",
    //       "Coffee Mix",
    //       "Chocolate Garnish"
    //     ],
    //     notes: [
    //       "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //       "This cake is hand delivered in a good quality cardboard box."
    //     ],
    //     deliveryDetails: [
    //       "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //       "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //       "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //       "The delivery cannot be redirected to any other address.",
    //       "This product is hand delivered and will not be delivered along with courier products.",
    //       "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //     ],
    //     storage: [
    //       "Store cream cakes in a refrigerator.",
    //       "Fondant cakes should be stored in an air-conditioned environment.",
    //       "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //       "Use a serrated knife to cut a fondant cake.",
    //       "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //       "Please check the placement of these items before serving to small children.",
    //       "The cake should be consumed within 24 hours.",
    //       "Enjoy your cake!"
    //     ],
    //     details: [
    //       "Ferns N Petals Private Limited",
    //       "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //       "FSSAI License No. 10019011006502"
    //     ]
    //   },
      
    //     {
    //       "image": [
    //         "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp",
    //         "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_2.webp",
    //         "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_3.webp",
    //         "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_4.webp",
    //         "/Images/birthday/bliss vanilla/birthday-bliss-vanilla-dream-cake-half-kg_1.webp"
    //       ],
    //       "link": "/birthday-bliss-vanilla-dream-cake-half-kg",
    //       "title": "Birthday Bliss Vanilla Dream Cake- Half Kg",
    //       "price": "649",
    //       "delivery": "Tomorrow",
    //       "slug": "birthday-bliss-vanilla-dream-cake-half-kg",
    //       "deliveryDetails": [
    //         "Celebrate with simplicity and elegance with our vanilla cream cake, adorned with a heartfelt 'Happy Birthday.' Its timeless vanilla flavour and creamy texture make it the perfect gift for any birthday celebration. Treat your loved ones to a taste of pure joy and nostalgia with this classic creation, a meaningful gesture that brings warmth and happiness to any occasion. Ideal for anyone who appreciates the simple pleasures of life."
    //       ],
    //       "productDetails": [
    //         { "label": "Flavour", "value": "Vanilla" },
    //         { "label": "Weight", "value": "Half Kg" },
    //         { "label": "Cake Version", "value": "Contains Egg" },
    //         { "label": "Type of Cake", "value": "Cream Cake" },
    //         { "label": "Shape", "value": "Round" },
    //         { "label": "Serves", "value": "4-6 People" },
    //         { "label": "Size", "value": "6 inches approx" },
    //         { "label": "Net Quantity", "value": "1" },
    //         { "label": "Country of Origin", "value": "India" }
    //       ],
    //       "notes": [
    //         "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //         "The chosen delivery time is an estimate and depends on the product's availability and the destination to which you want the product delivered.",
    //         "Since cakes are perishable, we attempt delivery of your order only once.",
    //         "The delivery cannot be redirected to any other address.",
    //         "This product is hand-delivered and will not be delivered along with courier products.",
    //         "Occasionally, substitutions of flavours/designs is necessary due to temporary and regional unavailability issues."
    //       ],
    //       "storage": [
    //         "Store cream cakes in a refrigerator.",
    //         "Fondant cakes should be stored in an air-conditioned environment.",
    //         "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //         "Use a serrated knife to cut a fondant cake.",
    //         "Sculptural elements and figurines may contain wire supports, toothpicks, or wooden skewers for support.",
    //         "Please check the placement of these items before serving to small children.",
    //         "The cake should be consumed within 24 hours.",
    //         "Enjoy your cake!"
    //       ],
    //       "details": [
    //         "Ferns N Petals Private Limited",
    //         "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //         "FSSAI License No. 10019011006502"
    //       ]
    //     },
    //     {
    //       "image": [
    //         "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp",
    //         "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_2.webp",
    //         "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_3.webp",
    //         "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_4.webp",
    //         "/Images/birthday/dry cake/dates-walnuts-mixed-dry-cake-500gms_1.webp"
    //       ],
    //       "link": "/dates-walnuts-mixed-dry-cake-500gms",
    //       "title": "Dates & Walnuts Mixed Dry Cake 500gms",
    //       "rate": "5.0",
    //       "price": "999",
    //       "review": "273 reviews",
    //       "delivery": "Today",
    //       "slug": "dates-walnuts-mixed-dry-cake-500gms",
    //       "deliveryDetails": [
    //         "A healthy and delicious cake made with the goodness of dates and walnuts. Perfect for those who prefer eggless cakes with a rich, dry texture. A wonderful choice for any occasion."
    //       ],
    //       "productDetails": [
    //         { "label": "Cake Flavour", "value": "Dates Walnuts" },
    //         { "label": "Type of Cake", "value": "Eggless Dry Cake" },
    //         { "label": "Weight", "value": "500 gms" },
    //         { "label": "Net Quantity", "value": "1 Cake" },
    //         { "label": "Shape", "value": "Round" },
    //         { "label": "Serves", "value": "4-6 People" },
    //         { "label": "Diameter", "value": "7.5 inch" },
    //         { "label": "Candles & Knife", "value": "Not included" },
    //         { "label": "Country of Origin", "value": "India" }
    //       ],
    //       "ingredients": [
    //         "Calpro Choco Premix",
    //         "Refined Oil",
    //         "Bake Magic",
    //         "Dates",
    //         "Walnut"
    //       ],
    //       "notes": [
    //         "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //         "All orders will be delivered between 9 AM and 9 PM.",
    //         "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //         "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product delivered.",
    //         "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //         "The delivery cannot be redirected to any other address.",
    //         "This product is hand delivered and will not be delivered along with courier products.",
    //         "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //       ],
    //       "storage": [
    //         "Store cream cakes in a refrigerator.",
    //         "Fondant cakes should be stored in an air-conditioned environment.",
    //         "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //         "Use a serrated knife to cut a fondant cake.",
    //         "Sculptural elements and figurines may contain wire supports, toothpicks, or wooden skewers for support.",
    //         "Please check the placement of these items before serving to small children.",
    //         "The cake should be consumed within 24 hours.",
    //         "Enjoy your cake!"
    //       ],
    //       "details": [
    //         "Ferns N Petals Private Limited",
    //         "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //         "FSSAI License No. 10019011006502"
    //       ]
    //     },
        
    //         {
    //           "image": [
    //             "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_1.webp",
    //             "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_2.webp",
    //             "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_3.webp",
    //             "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_7.webp",
    //             "/Images/plants/raisin-pots/set-of-3-air-purifying-plants-in-raisin-pots_8.webp"
    //           ],
    //           "link": "/set-of-3-air-purifying-plants-in-raisin-pots",
    //           "slug": "set-of-3-air-purifying-plants-in-raisin-pots",
    //           "title": "Set of 3 Air Purifying Plants In Raisin Pots",
    //           "rate": "4.5",
    //           "price": "1499",
    //           "review": "60 reviews",
    //           "delivery": "Tomorrow",
    //           "deliveryDetails": [
    //             "1 Guruji Green Top Girl Vase without Collar - 3.5 Inches",
    //             "1 Guruji Red Top Girl Vase with Collar - 3.5 Inches",
    //             "1 Guruji Resin Thinking Girl Vase with White Top - 3.5 Inches",
    //             "Net Quantity: 3 Vases",
    //             "Plant Height: Upto 6 to 10 Inches",
    //             "Total Weight: Approx 2 Kg"
    //           ],
    //           "notes": [
    //             "The image is indicative in nature. Actual product may vary in shape, color, or design as per availability.",
    //             "The number of leaves and size of the plant depends on seasonal availability.",
    //             "As this product is shipped via courier services, delivery may occur before or after the estimated date.",
    //             "Since this product is a courier product, it will be delivered separately from hand-delivered items.",
    //             "Deliveries will not be made on Sundays or National Holidays."
    //           ],
    //           "plant_care_instructions": [
    //             "Keep plants in medium light locations, out of direct sunlight.",
    //             "Natural light is best, but some plants can also thrive in office fluorescent light.",
    //             "Keep plant soil moist at all times, but avoid overwatering.",
    //             "Do not allow plants to stand in water.",
    //             "Avoid wetting plant leaves excessively.",
    //             "A light spray of water can help flowering plants.",
    //             "Maintain a cool spot for plants (between 18-28°C).",
    //             "Remove any waste leaves and stems from time to time."
    //           ],
    //           "details": [
    //             "Ferns N Petals Pvt Ltd",
    //             "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_1.webp",
    //             "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_2.webp",
    //             "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_3.webp",
    //             "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_4.webp",
    //             "/Images/plants/pink-pot/pink-fortune-aglaonema-plant-with-pot_1.webp"
    //           ],
    //           "link": "/pink-fortune-aglaonema-plant-with-pot",
    //           "slug": "pink-fortune-aglaonema-plant-with-pot",
    //           "title": "Pink Fortune Aglaonema Plant with Pot",
    //           "price": "1249",
    //           "delivery": "Tomorrow",
    //           "deliveryDetails": [
    //             "Plant Name: Green Aglaonema with Red Spray on Leaves",
    //             "Plant Type: Foliage",
    //             "Plant Placement: Indoor and Outdoor",
    //             "Plant Height: Up to 8 Inches",
    //             "Pot Type: Hexagon Pink Ceramic Pot",
    //             "Pot Dimensions: 4 x 3 Inches"
    //           ],
    //           "notes": [
    //             "The number of leaves and the size of the plant depends on seasonal availability.",
    //             "Flowers, if present, may be in fully bloomed, semi-bloomed, or bud stage.",
    //             "This product is shipped through courier, so delivery time is an estimate.",
    //             "The delivery may happen before or after the chosen date.",
    //             "No deliveries are made on Sundays or National Holidays.",
    //             "This product will be delivered separately from hand-delivered items."
    //           ],
    //           "plant_care": [
    //             "Keep plants in medium light locations, out of direct sunlight.",
    //             "Natural light is best, but some plants thrive in office fluorescent light as well.",
    //             "Ensure plant soil remains moist but avoid overwatering.",
    //             "Do not allow plants to stand in water.",
    //             "Avoid excessive wetting of plant leaves.",
    //             "Keep plants in a cool spot (between 18-28°C).",
    //             "Remove waste leaves and stems periodically."
    //           ],
    //           "plant_trivia": [
    //             "Origin: These plants primarily grow in tropical climates of Southeast Asian countries like the Philippines, Thailand, Laos, and New Guinea.",
    //             "Aglaonema plants are kept indoors and are known for their air purification qualities."
    //           ],
    //           "details": [
    //             "Ferns N Petals Pvt Ltd",
    //             "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_1.webp",
    //             "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_2.webp",
    //             "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_3.webp",
    //             "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_4.webp",
    //             "/Images/plants/good-vibes-plant-cake/good-vibes-plant-n-cake-combo_6.webp"
    //           ],
    //           "link": "/good-vibes-plant-n-cake-combo",
    //           "slug": "good-vibes-plant-n-cake-combo",
    //           "title": "Good Vibes Plant & Cake Combo",
    //           "rate": "4.8",
    //           "price": "1099",
    //           "review": "28 reviews",
    //           "delivery": "Today",
    //           "deliveryDetails": [
    //             "Plant Name: Jade Plant",
    //             "Plant Height: 5 Inches",
    //             "Golden Tropical Metal Pot: 3 x 3 Inches",
    //             "Chocolate Cream Cake: 500 Gms",
    //             "Net Quantity: 1 Plant and 1 Cake",
    //             "Dimensions: Approx 1 x 1.5 Feet",
    //             "Weight: Approx 1-1.5 Kg"
    //           ],
    //           "notes": [
    //             "The image displayed is indicative in nature.",
    //             "Since plants are natural products, actual product may vary in shape and size based on availability.",
    //             "The plant's size and number of leaves may vary depending on regional availability.",
    //             "Flowers, if present, may be in fully bloomed, semi-bloomed, or bud stage.",
    //             "The delivery of this product may occur before or after the chosen date as per courier schedules.",
    //             "No deliveries are made on Sundays or National Holidays.",
    //             "This product is hand delivered and will not be delivered along with courier products."
    //           ],
    //           "plant_care": [
    //             "Keep plants in medium light locations, out of direct sunlight.",
    //             "Natural light is best, but some plants can also thrive in office fluorescent light.",
    //             "Ensure plant soil remains moist at all times, but avoid overwatering.",
    //             "Do not allow plants to stand in water.",
    //             "Avoid excessive wetting of plant leaves.",
    //             "Keep plants in a cool spot (between 18-28°C).",
    //             "Remove waste leaves and stems periodically."
    //           ],
    //           "cake_care": [
    //             "Store cream cakes in a refrigerator.",
    //             "Fondant cakes should be stored in an air-conditioned environment.",
    //             "Slice and serve the cake at room temperature, ensuring it is not exposed to heat.",
    //             "Use a serrated knife to cut a fondant cake.",
    //             "Sculptural elements or figurines may contain wire supports or toothpicks for stability, so check before serving to small children.",
    //             "The cake should be consumed within 24 hours."
    //           ],
    //           "plant_trivia": [
    //             "Origin: Jade plant originates from South Africa, but it is now found in temperate regions worldwide.",
    //             "Jade Plant is a perennial plant, often blooming delicate pink or white flowers in spring, with a lifespan of over 2 years.",
    //             "Jade Plant is a low-maintenance succulent known for its attractive, vibrant green leaves.",
    //             "The Jade plant symbolizes luck and prosperity, making it a great gift for any occasion."
    //           ],
    //           "details": [
    //             "Ferns N Petals Pvt Ltd",
    //             "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
          
    //         {
    //           "image": [
    //             "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_1.webp",
    //             "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_2.webp",
    //             "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_3.webp",
    //             "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_4.webp",
    //             "/Images/birthday/pink-rose-cake/10-pink-roses-with-pineapple-cake-standard_5.webp"
    //           ],
    //           "link": "/10-pink-roses-with-pineapple-cake-standard",
    //           "title": "10 Pink Roses With Pineapple Cake Standard",
    //           "rate": "4.8",
    //           "price": "1149",
    //           "slug": "10-pink-roses-with-pineapple-cake-standard",
    //           "deliveryOption": "Today",
    //           "review": "13 reviews",
    //           "delivery": [
    //             "10 Pink Roses",
    //             "1 Pineapple Cake - 500gms",
    //             "Net Quantity: 1 Flower Bouquet and 1 Cake",
    //             "Cellophane Packing",
    //             "Pink Ribbon",
    //             "Dimensions: Approx 2x2 feet",
    //             "Weight: Approx 2-2.5 Kg"
    //           ],
    //           "personalisation": [
    //             "For personalisation, please provide us with the recipient's name and a special message."
    //           ],
    //           "notes": [
    //             "The image displayed is indicative in nature.",
    //             "Actual product may vary in shape or design as per availability.",
    //             "Flowers may be delivered in fully bloomed, semi-bloomed, or bud stage.",
    //             "This product is hand delivered and will not be delivered along with courier products.",
    //             "Occasionally, substitution of flowers, flavours, or designs is necessary due to temporary or regional unavailability issues."
    //           ],
    //           "storage": [
    //             "When your flowers arrive, just trim the stems and add water.",
    //             "Re-cut 1-2 inches of the stems at a 45-degree angle.",
    //             "Use a clean vase and clean water.",
    //             "Remove the leaves below the waterline but do not remove all leaves along the stem length.",
    //             "Check the water level daily and replenish as needed.",
    //             "Don’t place flowers in direct sunlight or near any other source of excessive heat.",
    //             "All flowers benefit from a daily mist of water.",
    //             "Store cream cakes in a refrigerator.",
    //             "Fondant cakes should be stored in an air-conditioned environment.",
    //             "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //             "Use a serrated knife to cut a fondant cake.",
    //             "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support. Please check the placement of these items before serving to small children.",
    //             "The cake should be consumed within 24 hours."
    //           ],
    //           "flowers_trivia": [
    //             "Did you know that roses have been used in perfumes, potpourri, and even medicine for thousands of years?",
    //             "Pink Roses are often associated with grace, gratitude, and admiration."
    //           ],
    //           "ingredients": [
    //             "Vanilla premix",
    //             "Refined oil",
    //             "Breakfast Sugar",
    //             "Whip topping cream",
    //             "Pineapple Essence",
    //             "Pineapple Crush",
    //             "Pineapple Slice",
    //             "Karonda Cherry"
    //           ],
    //           "price_breakup": [
    //             "Fresh Flower ₹869",
    //             "Cake ₹330"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/together/candle-choco/jasmine-whispers-n-chocolate-dreams_1.webp",
    //             "/Images/together/candle-choco/jasmine-whispers-n-chocolate-dreams_2.webp",
    //             "/Images/together/candle-choco/jasmine-whispers-n-chocolate-dreams_3.webp",
    //             "/Images/together/candle-choco/jasmine-whispers-n-chocolate-dreams_4.webp",
    //             "/Images/together/candle-choco/jasmine-whispers-n-chocolate-dreams_5.webp"
    //           ],
    //           "link": "/jasmine-whispers-n-chocolate-dreams",
    //           "title": "Jasmine Whispers & Chocolate Dreams",
    //           "rate": "5",
    //           "price": "1249",
    //           "slug": "jasmine-whispers-n-chocolate-dreams",
    //           "deliveryOption": "Today",
    //           "review": "133 reviews"
    //         },
    //         {
    //           "image": [
    //             "/Images/birthday/fudge brownie/fudge-brownie-cake-half_1.webp",
    //             "/Images/birthday/fudge brownie/fudge-brownie-cake-half_2.webp",
    //             "/Images/birthday/fudge brownie/fudge-brownie-cake-half_3.webp",
    //             "/Images/birthday/fudge brownie/fudge-brownie-cake-half_4.webp"
    //           ],
    //           "link": "/fudge-brownie-cake-half",
    //           "title": "Fudge Brownie Cake Half Kg",
    //           "rate": "4.8",
    //           "price": "649",
    //           "review": "202 reviews",
    //           "slug": "fudge-brownie-cake-half",
    //           "deliveryOption": "Today",
    //           "productDetails": [
    //             { "label": "Cake Flavour", "value": "Truffle" },
    //             { "label": "Shape", "value": "Round" },
    //             { "label": "Weight", "value": "500 gm" },
    //             { "label": "Net Quantity", "value": "1 Cake" },
    //             { "label": "Diameter", "value": "7.5 inch" },
    //             { "label": "Country Of Origin", "value": "India" },
    //             { "label": "Serves", "value": "4-6 People" }
    //           ],
    //           "ingredients": [
    //             "Chocolate premix",
    //             "Refined oil",
    //             "Breakfast Sugar",
    //             "Chocolate Truffle Base",
    //             "Dark Chocolate compound",
    //             "White Chocolate Compound",
    //             "Chocolate Glaze"
    //           ],
    //           "notes": [
    //             "The cake stand, cutlery accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //             "This cake is hand delivered in a good quality cardboard box."
    //           ],
    //           "deliveryDetails": [
    //             "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //             "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //             "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //             "The delivery cannot be redirected to any other address.",
    //             "This product is hand delivered and will not be delivered along with courier products.",
    //             "Occasionally, substitutions of flavours/designs is necessary due to temporary and/or regional unavailability issues."
    //           ],
    //           "storage": [
    //             "Store cream cakes in a refrigerator.",
    //             "Fondant cakes should be stored in an air conditioned environment.",
    //             "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //             "Use a serrated knife to cut a fondant cake.",
    //             "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //             "Please check the placement of these items before serving to small children.",
    //             "The cake should be consumed within 24 hours.",
    //             "Enjoy your cake!"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/lifestyle/couple-mug/personalized-special-couple-mug_1.webp",
    //             "/Images/lifestyle/couple-mug/personalized-special-couple-mug_2.webp",
    //             "/Images/lifestyle/couple-mug/personalized-special-couple-mug_3.webp",
    //             "/Images/lifestyle/couple-mug/personalized-special-couple-mug_4.webp",
    //             "/Images/lifestyle/couple-mug/personalized-special-couple-mug_5.webp"
    //           ],
    //           "link": "/personalized-special-couple-mug",
    //           "title": "Personalized Special Couple Mug",
    //           "price": "249",
    //           "deliveryOption": "Tomorrow",
    //           "rate": "4.2",
    //           "review": "473 reviews",
    //           "slug": "personalized-special-couple-mug"
    //         },
    //         {
    //           "image": [
    //             "/Images/lifestyle/love-mug/forever-annoying-love-mug_1.webp",
    //             "/Images/lifestyle/love-mug/forever-annoying-love-mug_2.webp",
    //             "/Images/lifestyle/love-mug/forever-annoying-love-mug_3.webp",
    //             "/Images/lifestyle/love-mug/forever-annoying-love-mug_4.webp"
    //           ],
    //           "link": "/forever-annoying-love-mug",
    //           "title": "Forever Annoying Love Mug",
    //           "price": "249",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "forever-annoying-love-mug"
    //         },
    //         {
    //           "image": [
    //             "/Images/lifestyle/rose-mug/personalized-red-rose-mug-set_1.webp",
    //             "/Images/lifestyle/rose-mug/personalized-red-rose-mug-set_2.webp",
    //             "/Images/lifestyle/rose-mug/personalized-red-rose-mug-set_3.webp",
    //             "/Images/lifestyle/rose-mug/personalized-red-rose-mug-set_4.webp",
    //             "/Images/lifestyle/rose-mug/personalized-red-rose-mug-set_5.webp"
    //           ],
    //           "link": "/personalized-red-rose-mug-set",
    //           "title": "Personalised Red Rose Mug Set",
    //           "price": "599",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "personalized-red-rose-mug-set"
    //         },
    //         {
    //           "image": [
    //             "/Images/lifestyle/coffee-mug/3d-ceramic-black-matte-marble-coffee-mug_1.webp",
    //             "/Images/lifestyle/coffee-mug/3d-ceramic-black-matte-marble-coffee-mug_2.webp",
    //             "/Images/lifestyle/coffee-mug/3d-ceramic-black-matte-marble-coffee-mug_3.webp",
    //             "/Images/lifestyle/coffee-mug/3d-ceramic-black-matte-marble-coffee-mug_4.webp"
    //           ],
    //           "link": "/3d-ceramic-black-matte-marble-coffee-mug",
    //           "title": "3D Ceramic Black Matte Marble Coffee Mug",
    //           "price": "599",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "3d-ceramic-black-matte-marble-coffee-mug"
    //         },
    //         {
    //           "image": [
    //             "/Images/gifts/scorpio/rotating-photo-frame-scorpions_1.webp",
    //             "/Images/gifts/scorpio/rotating-photo-frame-scorpions_2.webp",
    //             "/Images/gifts/scorpio/rotating-photo-frame-scorpions_3.webp",
    //             "/Images/gifts/scorpio/rotating-photo-frame-scorpions_4.webp"
    //           ],
    //           "link": "/rotating-photo-frame-for-scorpions",
    //           "title": "Rotating Photo Frame For Scorpions",
    //           "price": "799",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "rotating-photo-frame-for-scorpions"
    //         },
    //         {
    //           "image": [
    //             "/Images/gifts/scorpio/fierce-scorpio-beer-mug_1.webp",
    //             "/Images/gifts/scorpio/fierce-scorpio-beer-mug_2.webp",
    //             "/Images/gifts/scorpio/fierce-scorpio-beer-mug_3.webp",
    //             "/Images/gifts/scorpio/fierce-scorpio-beer-mug_4.webp"
    //           ],
    //           "link": "/fierce-scorpio-beer-mug",
    //           "title": "Fierce Scorpion Beer Mug",
    //           "price": "549",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "fierce-scorpio-beer-mug"
    //         },
    //         {
    //           "image": [
    //             "/Images/gifts/libra/libra-zodiac-lamp_1.webp",
    //             "/Images/gifts/libra/libra-zodiac-lamp_2.webp",
    //             "/Images/gifts/libra/libra-zodiac-lamp_3.webp",
    //             "/Images/gifts/libra/libra-zodiac-lamp_4.webp"
    //           ],
    //           "link": "/personalized-libra-zodiac-sign-gift-lamp",
    //           "title": "Personalised Libra Zodiac Sign Gift Lamp",
    //           "price": "699",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "personalized-libra-zodiac-sign-gift-lamp"
    //         },
    //         {
    //           "image": [
    //             "/Images/gifts/libra/libra-zodiac-photo-frame_1.webp",
    //             "/Images/gifts/libra/libra-zodiac-photo-frame_2.webp",
    //             "/Images/gifts/libra/libra-zodiac-photo-frame_3.webp",
    //             "/Images/gifts/libra/libra-zodiac-photo-frame_4.webp"
    //           ],
    //           "link": "/personalized-libra-zodiac-sign-rotating-photo-frame",
    //           "title": "Personalised Libra Zodiac Sign Rotating Photo Frame",
    //           "price": "799",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "personalized-libra-zodiac-sign-rotating-photo-frame"
    //         },
    //         {
    //           "image": [
    //             "/Images/plants/jade-plant/jade-plant-in-gold-tone-metal-pot_1.webp",
    //             "/Images/plants/jade-plant/jade-plant-in-gold-tone-metal-pot_2.webp",
    //             "/Images/plants/jade-plant/jade-plant-in-gold-tone-metal-pot_3.webp",
    //             "/Images/plants/jade-plant/jade-plant-in-gold-tone-metal-pot_4.webp"
    //           ],
    //           "link": "/jade-plant-in-gold-tone-metal-pot",
    //           "title": "Jade Plant In Gold Tone Metal Pot",
    //           "price": "249",
    //           "rate": "4.8",
    //           "deliveryOption": "Tomorrow",
    //           "slug": "jade-plant-in-gold-tone-metal-pot"
    //         },
          
        
    //         {
    //           "image": [
    //             "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_1.webp",
    //             "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_2.webp",
    //             "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_4.webp",
    //             "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_5.webp",
    //             "/Images/birthday/timeless-love-cake/timeless-love-red-roses-bouquet-chocolate-cake_6.webp"
    //           ],
    //           "link": "/timeless-love-red-roses-bouquet-chocolate-cake",
    //           "title": "Timeless Love Red Roses Bouquet & Chocolate Cake",
    //           "rate": "4.7",
    //           "price": "1449",
    //           "slug": "timeless-love-red-roses-bouquet-chocolate-cake",
    //           "delivery": "Today",
    //           "review": "360 reviews",
    //           "deliveryDetails": [
    //             "10 Red Roses",
    //             "White Gypsophila Gypsy Fillers",
    //             "1 Chocolate Cream Cake- 500 gm",
    //             "Net Quantity: 1 Flower Bouquet and 1 Cake",
    //             "FNP Red Non Woven Packing Sheet",
    //             "One Non-Woven Red Paper",
    //             "Beautifully Tied with FNP Branded Ribbon",
    //             "One Message Card",
    //             "Weight: Approx 2-2.5 Kg",
    //             "Dimensions: Approx 2.5x2 feet"
    //           ],
    //           "personalisation": [
    //             "For personalisation, please provide us with 6 images, the couple's names, and the date in dd/mm/yy format."
    //           ],
    //           "notes": [
    //             "The image displayed is indicative in nature.",
    //             "Actual product may vary in shape or design as per the availability.",
    //             "Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.",
    //             "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //             "Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.",
    //             "The delivery cannot be redirected to any other address.",
    //             "This product is hand delivered and will not be delivered along with courier products.",
    //             "Occasionally, substitution of flowers is necessary due to temporary and/or regional unavailability issues."
    //           ],
    //           "storage": [
    //             "When your flowers arrive, just trim the stems and add water.",
    //             "Re-cut 1-2 of the stems at a 45-degree angle.",
    //             "Use a clean vase and clean water.",
    //             "Remove the leaves below the waterline but do not remove all leaves along the stem length.",
    //             "Check the water level daily and replenish as needed.",
    //             "Don't place flowers in direct sunlight or near any other source of excessive heat.",
    //             "All flowers benefit from a daily mist of water."
    //           ],
    //           "flowers_trivia": [
    //             "Did you know a rose bush can grow quite tall? The tallest ever recorded rose bush stands at over 23 feet (7 meters) tall.",
    //             "Red Roses are perfect expressions of love and romance since ancient times."
    //           ],
    //           "ingredients": [
    //             "Chocolate premix",
    //             "Refined oil",
    //             "Breakfast Sugar",
    //             "Whip topping cream",
    //             "Chocolate Truffle Base",
    //             "Dark Chocolate compound",
    //             "White Chocolate Compound",
    //             "Silver Ball"
    //           ],
    //           "price_breakup": [
    //             "Fresh Flower ₹1146",
    //             "Cake ₹30"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_1.webp",
    //             "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_2.webp",
    //             "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_4.webp",
    //             "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_5.webp",
    //             "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_8.webp"
    //           ],
    //           "link": "/elegant-vibe-red-roses-bouquet-pineapple-cake",
    //           "title": "Elegant Vibe Red Roses Bouquet & Pineapple Cake",
    //           "rate": "4.9",
    //           "price": "1449",
    //           "slug": "elegant-vibe-red-roses-bouquet-pineapple-cake",
    //           "deliveryOption": "Today",
    //           "review": "86 reviews"
    //         },
    //         {
    //           "image": [
    //             "/Images/together/dry-fruits-combo/dry-fruits-feast_1.webp",
    //             "/Images/together/dry-fruits-combo/dry-fruits-feast_2.webp",
    //             "/Images/together/dry-fruits-combo/dry-fruits-feast_3.webp",
    //             "/Images/together/dry-fruits-combo/dry-fruits-feast_4.webp",
    //             "/Images/together/dry-fruits-combo/dry-fruits-feast_1.webp"
    //           ],
    //           "link": "/dry-fruits-feast",
    //           "title": "Dry Fruits Feast",
    //           "price": "2099",
    //           "slug": "dry-fruits-feast",
    //           "deliveryOption": "Today"
    //         },
    //         {
    //           "image": [
    //             "/Images/flowers/rustic-dry/rustic-dry-flower-arrangement_1.webp",
    //             "/Images/flowers/rustic-dry/rustic-dry-flower-arrangement_2.webp",
    //             "/Images/flowers/rustic-dry/rustic-dry-flower-arrangement_3.webp",
    //             "/Images/flowers/rustic-dry/rustic-dry-flower-arrangement_4.webp",
    //             "/Images/flowers/rustic-dry/rustic-dry-flower-arrangement_5.webp"
    //           ],
    //           "link": "/rustic-dry-flower-arrangement",
    //           "title": "Rustic Dry Flower Arrangement",
    //           "price": "549",
    //           "slug": "rustic-dry-flower-arrangement",
    //           "deliveryOption": "Tomorrow",
    //           "delivery": [
    //             "Pampaas grass",
    //             "Palm stick",
    //             "Tishi grass in pink",
    //             "Sola belli 2",
    //             "Jute fabric",
    //             "White raffia knot",
    //             "Net quantity 1",
    //             "Dimensions 8x6 inch",
    //             "Weight Approx 500gms1kg",
    //             "Country of origin India"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/flowers/personalised/personalised-blushing-beauty-love-combo_1.webp",
    //             "/Images/flowers/personalised/personalised-blushing-beauty-love-combo_2.webp",
    //             "/Images/flowers/personalised/personalised-blushing-beauty-love-combo_3.webp",
    //             "/Images/flowers/personalised/personalised-blushing-beauty-love-combo_5.webp",
    //             "/Images/flowers/personalised/personalised-blushing-beauty-love-combo_6.webp"
    //           ],
    //           "link": "/personalised-blushing-beauty-love-combo",
    //           "title": "Personalised Antique Beauty Love Combo",
    //           "price": "1199",
    //           "rate": "5.0",
    //           "slug": "personalised-blushing-beauty-love-combo",
    //           "deliveryOption": "Tomorrow",
    //           "review": "1 reviews",
    //           "deliveryDetails": [
    //             "Antique pink preserved rose",
    //             "FNP black colour forever kappa board box: 11 x 11 x 9.5 inches",
    //             "Personalised box cover cum frame",
    //             "Frame stand: 7 x 3 inches",
    //             "For personalisation, please provide us with 1 photo"
    //           ],
    //           "notes": [
    //             "Since this product is shipped using the services of our courier partners, the date of delivery is an estimate.",
    //             "Your gift may be delivered prior or after the chosen date of delivery.",
    //             "A courier product is delivered separately from other hand delivered products.",
    //             "Our courier partners do not call prior to delivering an order, so we recommend that you provide an address at which someone will be present to receive the package.",
    //             "The delivery cannot be redirected to any other address.",
    //             "All courier orders are carefully packed and shipped from our warehouse.",
    //             "Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift."
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
          
    //     {
    //       "image": [
    //         "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_1.webp",
    //         "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_2.webp",
    //         "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_3.webp",
    //         "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_4.webp",
    //         "/Images/birthday/butterscotch rsmlai/butterscotch-cake-with-rasmalai-1kg_5.webp"
    //       ],
    //       "link": "/butterscotch-cake-with-rasmalai-1kg",
    //       "title": "Butterscotch Cake With Rasmalai 1kg",
    //       "rate": "5.0",
    //       "price": "1325",
    //       "review": "227 reviews",
    //       "delivery": "Today",
    //       "slug": "butterscotch-cake-with-rasmalai-1kg",
    //       "deliveryDetails": [
    //         "A fusion of Butterscotch and Rasmalai, this cake brings a delightful combination of flavors for your celebrations. Perfect for large gatherings, this creamy cake serves 10-12 people."
    //       ],
    //       "productDetails": [
    //         { "label": "Cake Flavour", "value": "Butterscotch with Rasmalai" },
    //         { "label": "Type of Cake", "value": "Cream" },
    //         { "label": "Weight", "value": "1 Kg" },
    //         { "label": "Shape", "value": "Round" },
    //         { "label": "Serves", "value": "10-12 People" },
    //         { "label": "Size", "value": "9 inches approx" },
    //         { "label": "Net Quantity", "value": "1 Cake" },
    //         { "label": "Country of Origin", "value": "India" }
    //       ],
    //       "notes": [
    //         "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //         "Every cake we offer is handcrafted, and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //         "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product delivered.",
    //         "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //         "The delivery cannot be redirected to any other address.",
    //         "This product is hand-delivered and will not be delivered along with courier products.",
    //         "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //       ],
    //       "storage": [
    //         "Store cream cakes in a refrigerator.",
    //         "Fondant cakes should be stored in an air-conditioned environment.",
    //         "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //         "Use a serrated knife to cut a fondant cake.",
    //         "Sculptural elements and figurines may contain wire supports, toothpicks, or wooden skewers for support.",
    //         "Please check the placement of these items before serving to small children.",
    //         "The cake should be consumed within 24 hours.",
    //         "Enjoy your cake!"
    //       ],
    //       "details": [
    //         "Ferns N Petals Private Limited",
    //         "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //         "FSSAI License No. 10019011006502"
    //       ]
    //     },
        
    //         {
    //           "image": [
    //             "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_2.webp",
    //             "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_3.webp",
    //             "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_4.webp",
    //             "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_5.webp",
    //             "/Images/birthday/truffle cake/chocolate-truffle-cream-cake-half-kg_6.webp"
    //           ],
    //           "link": "/chocolate-truffle-cream-cake-half-kg",
    //           "slug": "chocolate-truffle-cream-cake-half-kg",
    //           "title": "Chocolate Truffle Cream Cake Half Kg",
    //           "rate": "4.5",
    //           "price": "575",
    //           "review": "273 reviews",
    //           "delivery": "Today",
    //           "deliveryDetails": [
    //             "A delicious and indulgent Truffle cake that is perfect for celebrations. Adorned with chocolate glaze and cherries, this creamy, decadent cake will leave everyone asking for more."
    //           ],
    //           "productDetails": [
    //             { "label": "Cake Flavour", "value": "Truffle" },
    //             { "label": "Shape", "value": "Round" },
    //             { "label": "Weight", "value": "500 gm" },
    //             { "label": "Net Quantity", "value": "1 Cake" },
    //             { "label": "Diameter", "value": "7.5 inch" },
    //             { "label": "Country of Origin", "value": "India" },
    //             { "label": "Serves", "value": "4-6 People" }
    //           ],
    //           "ingredients": [
    //             "Chocolate premix",
    //             "Refined oil",
    //             "Breakfast Sugar",
    //             "Chocolate Truffle Base",
    //             "Dark Chocolate compound",
    //             "Karonda Cherry",
    //             "Chocolate Glaze"
    //           ],
    //           "notes": [
    //             "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //             "This cake is hand delivered in a good quality cardboard box.",
    //             "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //             "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //             "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //             "The delivery cannot be redirected to any other address.",
    //             "This product is hand delivered and will not be delivered along with courier products.",
    //             "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //           ],
    //           "storage": [
    //             "Store cream cakes in a refrigerator.",
    //             "Fondant cakes should be stored in an air-conditioned environment.",
    //             "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //             "Use a serrated knife to cut a fondant cake.",
    //             "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //             "Please check the placement of these items before serving to small children.",
    //             "The cake should be consumed within 24 hours.",
    //             "Enjoy your cake!"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_1.webp",
    //             "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_2.webp",
    //             "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_3.webp",
    //             "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_4.webp",
    //             "/Images/anniversary/anniversary-cake/anniversary-special-chocolate-cake-half-kg_5.webp"
    //           ],
    //           "slug": "anniversary-special-chocolate-cake-half-kg",
    //           "link": "/anniversary-special-chocolate-cake-half-kg",
    //           "title": "Anniversary Special Chocolate Cake- Half Kg",
    //           "rate": "4.9",
    //           "price": "725",
    //           "review": "28 reviews",
    //           "deliveryOption": "Today",
    //           "deliveryDetails": [
    //             "A heart-shaped chocolate cake perfect for your loved ones. Made with the finest ingredients, this cake combines the richness of chocolate and the creamy texture of a smooth cream base, ideal for a romantic gesture or special celebration."
    //           ],
    //           "productDetails": [
    //             { "label": "Flavour", "value": "Chocolate" },
    //             { "label": "Type of Cake", "value": "Cream" },
    //             { "label": "Weight", "value": "Half Kg" },
    //             { "label": "Cake Shape", "value": "Heart Shaped" },
    //             { "label": "Serves", "value": "4-6 People" },
    //             { "label": "Size", "value": "6 Inches in Diameter" },
    //             { "label": "Net Quantity", "value": "1" },
    //             { "label": "Country of Origin", "value": "India" }
    //           ],
    //           "notes": [
    //             "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //             "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //             "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //             "The delivery cannot be redirected to any other address.",
    //             "This product is hand delivered and will not be delivered along with courier products.",
    //             "Occasionally, substitutions of flavours/designs is necessary due to temporary and/or regional unavailability issues."
    //           ],
    //           "storage": [
    //             "Store cream cakes in a refrigerator.",
    //             "Fondant cakes should be stored in an air-conditioned environment.",
    //             "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //             "Use a serrated knife to cut a fondant cake.",
    //             "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //             "Please check the placement of these items before serving to small children.",
    //             "The cake should be consumed within 24 hours.",
    //             "Enjoy your cake!"
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
    //         {
    //           "image": [
    //             "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_1.webp",
    //             "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_2.webp",
    //             "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_3.webp",
    //             "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_4.webp",
    //             "/Images/birthday/pastel carnations/love-for-pastel-carnations-bouquet_5.webp"
    //           ],
    //           "slug": "love-for-pastel-carnations-bouquet",
    //           "link": "/love-for-pastel-carnations-bouquet",
    //           "title": "Love For Pastel Carnations Bouquet",
    //           "rate": "4.8",
    //           "price": "949",
    //           "review": "92 reviews",
    //           "deliveryOption": "Today",
    //           "deliveryDetails": [
    //             "15 Baby Pink Carnations",
    //             "White Gypsophila Gypsy Fillers",
    //             "FNP Off White N Light Pink Non Woven Packing",
    //             "One Non-Woven Pink Paper",
    //             "Beautifully Tied with Raffia",
    //             "FNP Green message card and lock string",
    //             "Net Quantity: 1 Bouquet",
    //             "Dimensions: 20x14 inch",
    //             "Weight: Approx 250-500 gms",
    //             "Country of Origin: India"
    //           ],
    //           "flowers_trivia": [
    //             "Did you know that for over 400 years, Carnations have been used to add flavour to different wines, liquors, and beers?",
    //             "Carnations were cultivated as garden flowers in ancient Rome and Greece."
    //           ],
    //           "notes": [
    //             "The image displayed is indicative in nature. Actual product may vary in shape or design as per the availability.",
    //             "Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.",
    //             "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //             "Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.",
    //             "The delivery cannot be redirected to any other address."
    //           ],
    //           "storage": [
    //             "Please ensure the flower stems are in fresh water.",
    //             "For best results, unwrap and place flowers in fresh water immediately after unboxing."
    //           ],
    //           "details": [
    //             "Ferns N Petals Private Limited",
    //             "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //             "FSSAI License No. 10019011006502"
    //           ]
    //         },
            
    //             {
    //               "image": [
    //                 "/Images/plants/jade-plant-sea/jade-plant-in-sea-house-planter_1.webp",
    //                 "/Images/plants/jade-plant-sea/jade-plant-in-sea-house-planter_2.webp",
    //                 "/Images/plants/jade-plant-sea/jade-plant-in-sea-house-planter_3.webp",
    //                 "/Images/plants/jade-plant-sea/jade-plant-in-sea-house-planter_4.webp",
    //                 "/Images/plants/jade-plant-sea/jade-plant-in-sea-house-planter_5.webp"
    //               ],
    //               "link": "/jade-plant-in-sea-house-planter",
    //               "slug": "jade-plant-in-sea-house-planter",
    //               "title": "Jade Plant In Sea House Planter",
    //               "rate": "4.8",
    //               "price": "899",
    //               "review": "12 reviews",
    //               "deliveryOption": "Tomorrow",
    //               "delivery": [
    //                 "Plant Name: Jade Plant",
    //                 "Plant Height: 6 Inches",
    //                 "Sea House Resin Planter: Blue and White, Dimensions: 4x5 Inches",
    //                 "Net Quantity: 1 Plant in 1 Resin Planter",
    //                 "Dimensions: Approx 1 x 1.5 Feet",
    //                 "Weight: Approx 500 Gms"
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Since plants are natural products, actual product may vary in shape and size based on availability.",
    //                 "The plant's size and number of leaves may vary depending on regional availability.",
    //                 "Flowers, if present, may be in fully bloomed, semi-bloomed, or bud stage.",
    //                 "The delivery of this product may occur before or after the chosen date as per courier schedules.",
    //                 "No deliveries are made on Sundays or National Holidays.",
    //                 "This product is hand delivered and will not be delivered along with courier products."
    //               ],
    //               "plant_care": [
    //                 "Keep plants in medium light locations, out of direct sunlight.",
    //                 "Natural light is best, but some plants can also thrive in office fluorescent light.",
    //                 "Ensure plant soil remains moist at all times, but avoid overwatering.",
    //                 "Do not allow plants to stand in water.",
    //                 "Avoid excessive wetting of plant leaves.",
    //                 "Keep plants in a cool spot (between 18-28°C).",
    //                 "Remove waste leaves and stems periodically."
    //               ],
    //               "plant_trivia": [
    //                 "Origin: Jade plant originates from South Africa, but it is now found in temperate regions worldwide.",
    //                 "Jade Plant is a perennial plant, often blooming delicate pink or white flowers in spring, with a lifespan of over 2 years.",
    //                 "Jade Plant is a low-maintenance succulent known for its attractive, vibrant green leaves.",
    //                 "The Jade plant symbolizes luck and prosperity, making it a great gift for any occasion."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030",
    //                 "FSSAI License No. 10019011006502"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/plants/plant-ceramic-pot/syngonium-plant-in-grey-ceramic-pot_1.webp",
    //                 "/Images/plants/plant-ceramic-pot/syngonium-plant-in-grey-ceramic-pot_2.webp",
    //                 "/Images/plants/plant-ceramic-pot/syngonium-plant-in-grey-ceramic-pot_3.webp",
    //                 "/Images/plants/plant-ceramic-pot/syngonium-plant-in-grey-ceramic-pot_4.webp",
    //                 "/Images/plants/plant-ceramic-pot/syngonium-plant-in-grey-ceramic-pot_5.webp"
    //               ],
    //               "link": "/syngonium-plant-in-grey-ceramic-pot",
    //               "slug": "syngonium-plant-in-grey-ceramic-pot",
    //               "title": "Syngonium Plant In Grey Ceramic Pot",
    //               "price": "399",
    //               "deliveryOption": "Tomorrow",
    //               "delivery": [
    //                 "Plant Name: Syngonium Plant",
    //                 "Plant Type: Air Purifying Foliage",
    //                 "Plant Placement: Indoors and Outdoors",
    //                 "Plant Height: Upto 6 Inches",
    //                 "Grey Ceramic Pot Dimensions: 3 x 3 Inches",
    //                 "Coverage: One plant in a 6-8 inch diameter container can purify air in roughly 100 square feet of floor space."
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Since plants are natural products, actual product may vary in shape, size, and design.",
    //                 "The plant's size and number of leaves may vary depending on regional availability.",
    //                 "Flowers, if present, may be in fully bloomed, semi-bloomed, or bud stage.",
    //                 "Delivery may occur before or after the chosen date depending on courier schedules.",
    //                 "No deliveries are made on Sundays or National Holidays.",
    //                 "The product will be delivered separately from other hand-delivered products."
    //               ],
    //               "plant_care": [
    //                 "Keep the plant in medium light, away from direct sunlight.",
    //                 "Natural light is ideal, but it can also thrive under office fluorescent lighting.",
    //                 "Ensure the soil is kept moist at all times, but avoid overwatering.",
    //                 "Do not let plants stand in water.",
    //                 "Avoid excessive wetting of plant leaves.",
    //                 "Spray water on leaves for humidity if required.",
    //                 "Maintain a cool spot for the plant (between 18-28°C).",
    //                 "Remove waste leaves and stems periodically to encourage new growth."
    //               ],
    //               "plant_trivia": [
    //                 "Syngonium plants have a high transpiration rate, helping increase humidity in a room.",
    //                 "Also known as the Arrow Head Plant, it has distinct arrow-shaped leaves.",
    //                 "Believed to help reduce stress, anxiety, and sleep disorders due to its calming presence.",
    //                 "Syngonium is a popular air-purifying plant known for improving indoor air quality."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030",
    //                 "FSSAI License No. 10019011006502"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/plants/terranium/jade-plant-4-glass-terrarium_1.webp",
    //                 "/Images/plants/terranium/jade-plant-4-glass-terrarium_2.webp",
    //                 "/Images/plants/terranium/jade-plant-4-glass-terrarium_3.webp",
    //                 "/Images/plants/terranium/jade-plant-4-glass-terrarium_4.webp",
    //                 "/Images/plants/terranium/jade-plant-4-glass-terrarium_1.webp"
    //               ],
    //               "link": "/jade-plant-4-glass-terrarium",
    //               "slug": "jade-plant-4-glass-terrarium",
    //               "title": "Jade Plant 4 Glass Terrarium",
    //               "rate": "5",
    //               "price": "399",
    //               "review": "2 reviews",
    //               "deliveryOption": "Tomorrow",
    //               "delivery": [
    //                 "Plant Name: Syngonium Plant",
    //                 "Plant Type: Air Purifying Foliage",
    //                 "Plant Placement: Indoors and Outdoors",
    //                 "Plant Height: Upto 6 Inches",
    //                 "Grey Ceramic Pot Dimensions: 3 x 3 Inches",
    //                 "Coverage: One plant in a 6-8 inch diameter container can purify air in roughly 100 square feet of floor space."
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Since plants are natural products, actual product may vary in shape, size, and design.",
    //                 "The plant's size and number of leaves may vary depending on regional availability.",
    //                 "Flowers, if present, may be in fully bloomed, semi-bloomed, or bud stage.",
    //                 "Delivery may occur before or after the chosen date depending on courier schedules.",
    //                 "No deliveries are made on Sundays or National Holidays.",
    //                 "The product will be delivered separately from other hand-delivered products."
    //               ],
    //               "plant_care": [
    //                 "Keep the plant in medium light, away from direct sunlight.",
    //                 "Natural light is ideal, but it can also thrive under office fluorescent lighting.",
    //                 "Ensure the soil is kept moist at all times, but avoid overwatering.",
    //                 "Do not let plants stand in water.",
    //                 "Avoid excessive wetting of plant leaves.",
    //                 "Spray water on leaves for humidity if required.",
    //                 "Maintain a cool spot for the plant (between 18-28°C).",
    //                 "Remove waste leaves and stems periodically to encourage new growth."
    //               ],
    //               "plant_trivia": [
    //                 "Syngonium plants have a high transpiration rate, helping increase humidity in a room.",
    //                 "Also known as the Arrow Head Plant, it has distinct arrow-shaped leaves.",
    //                 "Believed to help reduce stress, anxiety, and sleep disorders due to its calming presence.",
    //                 "Syngonium is a popular air-purifying plant known for improving indoor air quality."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030",
    //                 "FSSAI License No. 10019011006502"
    //               ]
    //             },
              
    //             {
    //               "image": [
    //                 "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_1.webp",
    //                 "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_2.webp",
    //                 "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_3.webp",
    //                 "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_4.webp",
    //                 "/Images/birthday/fruit overload cake/fruit-overload-cake-half-kg_5.webp"
    //               ],
    //               "link": "/fruit-overload-cake-half-kg",
    //               "title": "Overload Fruit Cake Half Kg",
    //               "rate": "5.0",
    //               "price": "725",
    //               "review": "273 reviews",
    //               "delivery": "Today",
    //               "slug": "fruit-overload-cake-half-kg",
    //               "productDetails": [
    //                 { "label": "Cake Flavour", "value": "Truffle" },
    //                 { "label": "Type of Cake", "value": "Cream Cake" },
    //                 { "label": "Shape", "value": "Round" },
    //                 { "label": "Weight", "value": "500 gm" },
    //                 { "label": "Net Quantity", "value": "1 Cake" },
    //                 { "label": "Diameter", "value": "7.5 inch" },
    //                 { "label": "Country Of Origin", "value": "India" },
    //                 { "label": "Serves", "value": "4-6 People" }
    //               ],
    //               "ingredients": [
    //                 "Chocolate premix",
    //                 "Refined oil",
    //                 "Breakfast Sugar",
    //                 "Chocolate Truffle Base",
    //                 "Dark Chocolate compound",
    //                 "Milk chocolate compound",
    //                 "Chocolate Glaze"
    //               ],
    //               "notes": [
    //                 "The cake stand, cutlery, and accessories used in the image are only for representation purposes. They are not delivered with the cake.",
    //                 "This cake is hand delivered in a good quality cardboard box."
    //               ],
    //               "deliveryDetails": [
    //                 "Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.",
    //                 "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //                 "Since cakes are perishable in nature, we attempt delivery of your order only once.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "This product is hand delivered and will not be delivered along with courier products.",
    //                 "Occasionally, substitutions of flavours/designs are necessary due to temporary and/or regional unavailability issues."
    //               ],
    //               "storage": [
    //                 "Store cream cakes in a refrigerator.",
    //                 "Fondant cakes should be stored in an air conditioned environment.",
    //                 "Slice and serve the cake at room temperature and make sure it is not exposed to heat.",
    //                 "Use a serrated knife to cut a fondant cake.",
    //                 "Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.",
    //                 "Please check the placement of these items before serving to small children.",
    //                 "The cake should be consumed within 24 hours.",
    //                 "Enjoy your cake!"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Private Limited",
    //                 "Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, South Delhi, Delhi, 110030",
    //                 "FSSAI License No. 10019011006502"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_1.webp",
    //                 "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_2.webp",
    //                 "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_3.webp",
    //                 "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_4.webp",
    //                 "/Images/anniversary/gift-box/personalised-champange-couple-gift-box_1.webp"
    //               ],
    //               "link": "/personalised-champange-couple-gift-box",
    //               "title": "Personalised Champange Couple Gift Box",
    //               "rate": "5.0",
    //               "price": "1699",
    //               "review": "1 reviews",
    //               "delivery": "Tomorrow",
    //               "slug": "personalised-champange-couple-gift-box",
    //               "deliveryDetails": [
    //                 "Personalised champagne glass: Set of 2",
    //                 "Personalised photo frame",
    //                 "Red cardboard box: 10 x 10 inches"
    //               ],
    //               "personalisation": [
    //                 "For personalisation, please provide us with 2 names and 1 photo."
    //               ],
    //               "notes": [
    //                 "Since this product is shipped using the services of our courier partners, the date of delivery is an estimate.",
    //                 "Your gift may be delivered prior to or after the chosen date of delivery.",
    //                 "A courier product is delivered separately from other hand-delivered products.",
    //                 "Our courier partners do not call prior to delivering an order, so we recommend that you provide an address at which someone will be present to receive the package.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "All courier orders are carefully packed and shipped from our warehouse.",
    //                 "Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift."
    //               ],
    //               "storage": [
    //                 "Handle the items with care."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_1.webp",
    //                 "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_2.webp",
    //                 "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_3.webp",
    //                 "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_4.webp",
    //                 "/Images/birthday/red rose/vivid-love-6-red-roses-bouquet_1.webp"
    //               ],
    //               "link": "/vivid-love-6-red-roses-bouquet",
    //               "title": "Vivid Love 6 Red Roses Bouquet",
    //               "rate": "5.0",
    //               "price": "549",
    //               "slug": "vivid-love-6-red-roses-bouquet",
    //               "delivery": "Today",
    //               "deliveryDetails": [
    //                 "6 Red Roses",
    //                 "Red Packing Paper",
    //                 "Red Ribbon",
    //                 "Fillers- White Gypsy Fillers, Green Delhi Asparagus Fillers",
    //                 "Net Quantity: 1 Bouquet",
    //                 "Dimensions: 18x10 inch",
    //                 "Weight: Approx 250-500 gms"
    //               ],
    //               "personalisation": [
    //                 "For personalisation, please provide us with 6 images, the couple's names, and the date in dd/mm/yy format."
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Actual product may vary in shape or design as per the availability.",
    //                 "Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.",
    //                 "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //                 "Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "This product is hand delivered and will not be delivered along with courier products.",
    //                 "Occasionally, substitution of flowers is necessary due to temporary and/or regional unavailability issues."
    //               ],
    //               "storage": [
    //                 "When your flowers arrive, simply cut the stems and put them in water.",
    //                 "Cut the stems at 45 degrees, about 1-2 inches from the bottom.",
    //                 "Remove the leaves below the waterline.",
    //                 "Check the water level every day and add more if necessary.",
    //                 "Don’t place flowers in direct sunlight or near any other source of excessive heat.",
    //                 "All flowers benefit from a daily mist of water."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
               
              
              
    //             {
    //               "image": [
    //                 "/Images/flowers/blue/indigo-hued-flower-tabletop_1.webp",
    //                 "/Images/flowers/blue/indigo-hued-flower-tabletop_2.webp",
    //                 "/Images/flowers/blue/indigo-hued-flower-tabletop_3.webp",
    //                 "/Images/flowers/blue/indigo-hued-flower-tabletop_4.webp",
    //                 "/Images/flowers/blue/indigo-hued-flower-tabletop_5.webp"
    //               ],
    //               "link": "/indigo-hued-flower-tabletop",
    //               "title": "Indigo Hued Flower Tabletop",
    //               "price": "699",
    //               "slug": "indigo-hued-flower-tabletop",
    //               "deliveryOption": "Today",
    //               "deliveryDetails": [
    //                 "Flower table top",
    //                 "1 Unit",
    //                 "10x5x5 cm",
    //                 "250 gm",
    //                 "To be kept indoors only",
    //                 "Made with 100% natural flowers",
    //                 "Lasts for 2-3 years",
    //                 "India"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/anniversary/twin roses/twin-heart-arrangement_1.webp",
    //                 "/Images/anniversary/twin roses/twin-heart-arrangement_2.webp",
    //                 "/Images/anniversary/twin roses/twin-heart-arrangement_1.webp",
    //                 "/Images/anniversary/twin roses/twin-heart-arrangement_2.webp",
    //                 "/Images/anniversary/twin roses/twin-heart-arrangement_1.webp"
    //               ],
    //               "link": "/twin-heart-arrangement",
    //               "slug": "twin-heart-arrangement",
    //               "title": "Red Roses Connected Heart Arrangement",
    //               "rate": "4.5",
    //               "price": "2449",
    //               "review": "80 reviews",
    //               "deliveryOption": "Today",
    //               "delivery": [
    //                 "37 Red Roses",
    //                 "Green Color Delhi Asparagus Fillers",
    //                 "Brown Color Round Cane Basket 9 Inch"
    //               ],
    //               "personalisation": [
    //                 "For personalisation, please provide us with 6 images, the couple's names, and the date in dd/mm/yy format."
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Actual product may vary in shape or design as per the availability.",
    //                 "Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.",
    //                 "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //                 "Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "This product is hand delivered and will not be delivered along with courier products.",
    //                 "Occasionally, substitution of flowers is necessary due to temporary and/or regional unavailability issues."
    //               ],
    //               "storage": [
    //                 "When your flowers arrive, simply cut the stems and put them in water.",
    //                 "Cut the stems at 45 degrees, about 1-2 inches from the bottom.",
    //                 "Remove the leaves below the waterline.",
    //                 "Check the water level every day and add more if necessary.",
    //                 "Don’t place flowers in direct sunlight or near any other source of excessive heat.",
    //                 "All flowers benefit from a daily mist of water."
    //               ],
    //               "flowers_trivia": [
    //                 "Did you know that the rose is edible, can live for a very long time, has been mentioned in the bible, and is a great source of vitamin C?",
    //                 "Roses can live for a very long time. There are rose fossils discovered that date back 35 million years.",
    //                 "The large rose bush that covers the wall of the Cathedral of Hildesheim in Germany has been there for over a millennium."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/anniversary/memories-frame/heartfelt-memories-frame_1.webp",
    //                 "/Images/anniversary/memories-frame/heartfelt-memories-frame_2.webp",
    //                 "/Images/anniversary/memories-frame/heartfelt-memories-frame_1.webp",
    //                 "/Images/anniversary/memories-frame/heartfelt-memories-frame_2.webp",
    //                 "/Images/anniversary/memories-frame/heartfelt-memories-frame_1.webp"
    //               ],
    //               "link": "/heartfelt-memories-frame",
    //               "title": "Heartfelt Memories Frame",
    //               "price": "449",
    //               "delivery": "Today",
    //               "slug": "heartfelt-memories-frame",
    //               "delivery": [
    //                 "Personalised photo frame: 1",
    //                 "Material: MDF and wooden",
    //                 "Size: 7X7.2 inches",
    //                 "Frame stand: 7X3 inches",
    //                 "Red cardboard box: 10 x 10 inches"
    //               ],
    //               "personalisation": [
    //                 "For personalisation, please provide us with 6 images, the couple's names, and the date in dd/mm/yy format."
    //               ],
    //               "notes": [
    //                 "Since this product is shipped using the services of our courier partners, the date of delivery is an estimate.",
    //                 "Your gift may be delivered prior to or after the chosen date of delivery.",
    //                 "A courier product is delivered separately from other hand-delivered products.",
    //                 "Our courier partners do not call prior to delivering an order, so we recommend that you provide an address at which someone will be present to receive the package.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "All courier orders are carefully packed and shipped from our warehouse.",
    //                 "Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift."
    //               ],
    //               "storage": [
    //                 "Keep it away from water.",
    //                 "Wipe clean with a soft cloth."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/personalized/ram/shri-ram-photo-frame-table-top_1.webp",
    //                 "/Images/personalized/ram/shri-ram-photo-frame-table-top_2.webp",
    //                 "/Images/personalized/ram/shri-ram-photo-frame-table-top_3.webp",
    //                 "/Images/personalized/ram/shri-ram-photo-frame-table-top_1.webp",
    //                 "/Images/personalized/ram/shri-ram-photo-frame-table-top_2.webp"
    //               ],
    //               "link": "/shri-ram-photo-frame-table-top",
    //               "title": "Shri Ram Photo Frame Table Top",
    //               "rate": "5.0",
    //               "review": "1 reviews",
    //               "price": "449",
    //               "delivery": "Today",
    //               "slug": "shri-ram-photo-frame-table-top",
    //               "delivery": [
    //                 "Printed photo frame table top: 1",
    //                 "Material: MDF and wooden",
    //                 "Size: 7X7.2inches",
    //                 "Frame stand: 7X3inch",
    //                 "Net quantity: 1 Unit",
    //                 "Country Of Origin: India"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_1.webp",
    //                 "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_2.webp",
    //                 "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_4.webp",
    //                 "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_5.webp",
    //                 "/Images/birthday/red-rose-pineapple/elegant-vibe-red-roses-bouquet-pineapple-cake_8.webp"
    //               ],
    //               "link": "/elegant-vibe-red-roses-bouquet-pineapple-cake",
    //               "title": "Elegant Vibe Red Roses Bouquet & Pineapple Cake",
    //               "rate": "4.9",
    //               "price": "1449",
    //               "slug": "elegant-vibe-red-roses-bouquet-pineapple-cake",
    //               "delivery": "Today",
    //               "review": "86 reviews",
    //               "delivery": [
    //                 "10 Red Roses",
    //                 "Green Murraya Leaf Filler",
    //                 "FNP White & Black Non Woven Packing",
    //                 "1 kg Pineapple Cake",
    //                 "Eggless Cake"
    //               ],
    //               "personalisation": [
    //                 "Add your message for a personal touch."
    //               ],
    //               "notes": [
    //                 "The image displayed is indicative in nature.",
    //                 "Actual product may vary in shape or design as per the availability.",
    //                 "Flowers may be delivered in fully bloomed, semi-bloomed or bud stage.",
    //                 "The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.",
    //                 "Since flowers are perishable in nature, we will be able to attempt delivery of your order only once.",
    //                 "The delivery cannot be redirected to any other address.",
    //                 "This product is hand delivered and will not be delivered along with courier products.",
    //                 "Occasionally, substitution of flowers is necessary due to temporary and/or regional unavailability issues."
    //               ],
    //               "storage": [
    //                 "When your flowers arrive, simply cut the stems and put them in water.",
    //                 "Cut the stems at 45 degrees, about 1-2 inches from the bottom.",
    //                 "Remove the leaves below the waterline.",
    //                 "Check the water level every day and add more if necessary.",
    //                 "Don’t place flowers in direct sunlight or near any other source of excessive heat.",
    //                 "All flowers benefit from a daily mist of water."
    //               ],
    //               "flowers_trivia": [
    //                 "Did you know that the rose is edible, can live for a very long time, has been mentioned in the bible, and is a great source of vitamin C?",
    //                 "Roses can live for a very long time. There are rose fossils discovered that date back 35 million years.",
    //                 "The large rose bush that covers the wall of the Cathedral of Hildesheim in Germany has been there for over a millennium."
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
              
              
            
    //             {
    //               "image": [
    //                 "/Images/personalized/hamper/thoughtfully-curated-gift-hamper-for-men_1.webp",
    //                 "/Images/personalized/hamper/thoughtfully-curated-gift-hamper-for-men_2.webp",
    //                 "/Images/personalized/hamper/thoughtfully-curated-gift-hamper-for-men_3.webp",
    //                 "/Images/personalized/hamper/thoughtfully-curated-gift-hamper-for-men_2.webp",
    //                 "/Images/personalized/hamper/thoughtfully-curated-gift-hamper-for-men_3.webp"
    //               ],
    //               "link": "/thoughtfully-curated-gift-hamper-for-men",
    //               "slug": "thoughtfully-curated-gift-hamper-for-men",
    //               "title": "Thoughtfully Curated Gift Hamper For Men",
    //               "price": "2949",
    //               "rate": "5.0",
    //               "review": "2 reviews",
    //               "deliveryOption": "Today",
    //               "deliveryDetails": [
    //                 "1 Tie, Cufflinks Set",
    //                 "1 Zara Perfume 30 ml",
    //                 "1 Sepoy Co. Ginger Ale",
    //                 "2 Handmade Cookies",
    //                 "Black gift box",
    //                 "Net Quantity: 1 Set",
    //                 "Dimensions: 10x8x4 Inches",
    //                 "Weight: Approx 200 gm",
    //                 "Country Of Origin: UK Ginger Ale and India"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/personalized/lamp/personalised-birthday-special-led-speaker_1.webp",
    //                 "/Images/personalized/lamp/personalised-birthday-special-led-speaker_2.webp",
    //                 "/Images/personalized/lamp/personalised-birthday-special-led-speaker_3.webp",
    //                 "/Images/personalized/lamp/personalised-birthday-special-led-speaker_4.webp",
    //                 "/Images/personalized/lamp/personalised-birthday-special-led-speaker_5.webp"
    //               ],
    //               "link": "/personalised-birthday-special-led-speaker",
    //               "slug": "personalised-birthday-special-led-speaker",
    //               "title": "Personalised Birthday Special LED Lamp Speaker",
    //               "price": "849",
    //               "deliveryOption": "Tomorrow",
    //               "deliveryDetails": [
    //                 "One Personalised Happy Birthday Bluetooth Multi Colour LED Speaker",
    //                 "Touch Lamp Portable Speaker",
    //                 "Warm-White LED Table Lamp",
    //                 "Built-in Smart Touchable Induction",
    //                 "Portable Bluetooth 3W Speaker",
    //                 "High Quality Wireless Stereo Speaker",
    //                 "Supports Micro SD/TF Card, 3.5mm AUX Input For Outdoor/Indoor Usage",
    //                 "Support Hands-Free Calling",
    //                 "Built-in 800mAh battery provides about 10 hours working time",
    //                 "It can be a wireless speaker, a table lamp or a music player",
    //                 "Net Quantity: 1 Unit",
    //                 "Dimensions: 3Watt 4.7x4 inches",
    //                 "For personalisation, please provide us with 3 images"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/personalized/neon/krishna-devotion-led-radiance_1.webp",
    //                 "/Images/personalized/neon/krishna-devotion-led-radiance_2.webp",
    //                 "/Images/personalized/neon/krishna-devotion-led-radiance_3.webp",
    //                 "/Images/personalized/neon/krishna-devotion-led-radiance_4.webp",
    //                 "/Images/personalized/neon/krishna-devotion-led-radiance_5.webp"
    //               ],
    //               "link": "/krishna-devotion-led-radiance",
    //               "slug": "krishna-devotion-led-radiance",
    //               "title": "Krishna Devotion LED Radiance",
    //               "price": "2999",
    //               "deliveryOption": "Today",
    //               "deliveryDetails": [
    //                 "Neon light",
    //                 "Material: Acrylic and LED",
    //                 "Dimension: 12X24"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_1.webp",
    //                 "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_2.webp",
    //                 "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_3.webp",
    //                 "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_4.webp",
    //                 "/Images/birthday/wallet/personalised-mens-classy-essentials-gift-box_5.webp"
    //               ],
    //               "link": "/personalised-mens-classy-essentials-gift-box",
    //               "slug": "personalised-mens-classy-essentials-gift-box",
    //               "title": "Personalised Mens Classy Essentials Gift Box",
    //               "rate": "4.7",
    //               "price": "1499",
    //               "deliveryDetails": [
    //                 "Personalised passport cover",
    //                 "Closed passport cover size: 14 x 10 cms",
    //                 "Open passport cover size: 14 x 20 cms",
    //                 "Personalised wallet: 8.7 x 11.5 cms",
    //                 "Personalised keychain: 1",
    //                 "Personalised eye wear case: 1",
    //                 "Material: PU leather",
    //                 "Net Quantity: 1 Set",
    //                 "1 Passport Cover, 1 Wallet, 1 Sunglass cover and 1 Key Chain",
    //                 "Country Of Origin: India",
    //                 "Packed in a reusable gift box",
    //                 "For personalisation, please provide us with a name, charm no. for key chain, charm no. for wallet, charm no. for passport cover, charm no. for eye wear case"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/personalized/caricature/personalised-couple-caricature-table-top_1.webp",
    //                 "/Images/personalized/caricature/personalised-couple-caricature-table-top_2.webp",
    //                 "/Images/personalized/caricature/personalised-couple-caricature-table-top_3.webp",
    //                 "/Images/personalized/caricature/personalised-couple-caricature-table-top_4.webp",
    //                 "/Images/personalized/caricature/personalised-couple-caricature-table-top_5.webp"
    //               ],
    //               "link": "/personalised-couple-caricature-table-top",
    //               "slug": "personalised-couple-caricature-table-top",
    //               "title": "Personalised Couple Caricature Table Top",
    //               "rate": "5.0",
    //               "price": "399",
    //               "deliveryOption": "Today",
    //               "deliveryDetails": [
    //                 "One Personalised Couple on Bike Caricature Table Top",
    //                 "Material: MDF Wood",
    //                 "Dimensions: 4 x 7.2 inches",
    //                 "For personalisation, please provide us with 2 front face images",
    //                 "A fun and quirky gift idea for couples to eternalize their beautiful memories. Get this for your special someone or give it as a marriage anniversary gift for your favourite couple. A lovely surprise sure to make them feel special.",
    //                 "Net Quantity: 1 Unit",
    //                 "Country of Origin: India"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             },
    //             {
    //               "image": [
    //                 "/Images/personalized/cushion/personalised-love-affair-led-cushion_1.webp",
    //                 "/Images/personalized/cushion/personalised-love-affair-led-cushion_2.webp",
    //                 "/Images/personalized/cushion/personalised-love-affair-led-cushion_3.webp",
    //                 "/Images/personalized/cushion/personalised-love-affair-led-cushion_4.webp",
    //                 "/Images/personalized/cushion/personalised-love-affair-led-cushion_5.webp"
    //               ],
    //               "link": "/personalised-love-affair-led-cushion",
    //               "slug": "personalised-love-affair-led-cushion",
    //               "title": "Personalised Love Affair LED Cushion",
    //               "rate": "5.0",
    //               "price": "549",
    //               "deliveryOption": "Today",
    //               "deliveryDetails": [
    //                 "Personalised LED Cushion with Yellow Light",
    //                 "Material: Canvas Poly Duck",
    //                 "Recron Filled Cushion",
    //                 "Dimensions: 10 x 11 inches",
    //                 "Net Quantity: 1 Unit",
    //                 "Material: Polyester",
    //                 "Country of Origin: India",
    //                 "For personalisation, please provide us with one image"
    //               ],
    //               "details": [
    //                 "Ferns N Petals Pvt Ltd",
    //                 "Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030"
    //               ]
    //             }
              
              
          
          
      
      
    // ];
    
    // const removeDuplicates = async () => {
    //     try {
    //       const products = await Product.aggregate([
    //         {
    //           $group: {
    //             _id: "$slug", 
    //             doc: { $first: "$$ROOT" }  
    //           }
    //         },
    //         {
    //           $replaceRoot: { newRoot: "$doc" }  
    //         }
    //       ]);
      
        
    //       await Product.deleteMany({});
      
          
    //       await Product.insertMany(products);
      
    //       console.log('Duplicates removed and only unique products are retained.');
    //     } catch (error) {
    //       console.error("Error removing duplicates:", error);
    //     }
    //   };
    //   removeDuplicates();


  module.exports=db; 
