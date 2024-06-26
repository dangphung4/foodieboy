/**
 * Hardcoded data for the foods page
 * TODO the goal is to migrate to a database instead of staticaly hosting this data
 * @constant
 * @type {Array}
 * @default
 * @module src/Views/foodsTestData
 */
export const foods = [
  {
    id: 1,
    name: "Mod Pizza",
    website: "https://www.modpizza.com/",
    description: "A chain with individually sized pizzas and hand-tossed salads are fully customizable, with more than 40 toppings, 8 finishing sauces, and 8 delectable dressings.",
    review: "honestly the best pizza i've ever had.",
    images: [
      "https://gringotts.rekki.com/supplier-images/approved/de253faa-5bb1-4999-81a4-ce928bed354e_image.jpg?last_modified=1605740427",
      "https://www.visitmarin.org/site/assets/files/13941/pizza_and_drink.jpg",
      "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    ],
    rating: 4.5,
    category: "American",
  },
  {
    id: 2,
    name: "Burger Shack",
    website: "https://theburgershacks.com/",
    description: "Always fresh, gourmet burgers! Come to one of three locations in Chantilly, Ashburn & Alexandria for burgers, hotdogs, shakes and more!",
    review: "The burger was good but the parmesan fries were a little too salty",
    images: [
      "https://duyt4h9nfnj50.cloudfront.net/resized/1539190584362-w2880-26.jpg",
      "https://www.seriouseats.com/thmb/pvXMnCqXbgu6GFZSjPr9zrbWQmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-SHAKESHACKBURGERS-JANJIGIAN-3-b2c737aa12954bd2896d92f310de33b0.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/ec/d5/5e/20200215-134125-largejpg.jpg",
    ],
    rating: 4,
    category: "American",
  },
  {
    id: 3,
    name: "ChoongMan Chicken",
    website: "https://theburgershacks.com/",
    description: "Choong Man’s Korean-style fried chicken is ultra crispy and addictively good. Our chefs worked hard to perfect unique recipes you won’t find anywhere else.",
    review: "Tikkudak is so bomb. They smoke the chicken after they fry it. Hands down best fried chicken.",
    images: [
      "https://cmcalexandria.com/wp-content/uploads/2020/08/cong3.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/81/55/45/curry-chicken.jpg",
      "https://images.deliveryhero.io/image/fd-th/LH/m56q-listing.jpg",
    ],
    rating: 5,
    category: "Korean",
  },
  {
    id: 4,
    name: "Mehak Indian Restaurant ",
    website: "https://mehaksouthriding.com/",
    description: "South Riding's best indian food spot. Come try our delicious food and drinks.",
    review: "Butter chicken, Lamb Rogan Josh, and Chicken Tikka Masala are all amazing. Their breadbasket with that.... SHEESH.",
    images: [
      "https://d1ralsognjng37.cloudfront.net/36a50f2e-8248-40f6-b2a5-9da99aa9f096",
      "https://images.happycow.net/venues/1024/29/42/hcmp294252_1544439.jpeg",
      "https://duyt4h9nfnj50.cloudfront.net/resized/1538240637148-w2880-0f.jpg",
    ],
    rating: 5,
    category: "Indian",
  },
  {
    id: 5,
    name: "Everest Momo Plus",
    website: "https://mehaksouthriding.com/",
    description: "A hidden mom and pop in a gas station. Specializes in soup dumplings and other nepalese dishes.",
    review: "Their momo's are beyond good. Honestly the best momo's i've ever had.",
    images: [
      "https://cdn.doordash.com/media/photosV2/8bc0108a-7e08-4119-a7bc-22d5839f0d29-retina-large.jpeg",
      "https://northernvirginiamag.com/wp-content/uploads/2021/06/momos-1.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/9tdI--MiqK8NFnd_39d95A/1000s.jpg",
    ],
    rating: 5,
    category: "Nepalese",
  },
  {
    id: 6,
    name: "Khan Kabob House",
    website: "https://www.khankabob.com/",
    description: "For over 25 years, KHAN KABOB HOUSE has been synonymous with PAKISTANI fine dining. TARIQ KHAN executive chef/owner takes the cuisine and culture of his homeland to the next level with a breathtaking restaurant and delicious cuisine.",
    review: "Best chickpeas hands down. Their kabobs are are really good too. If you can, get their specials.",
    images: [
      "https://tb-static.uber.com/prod/image-proc/processed_images/14d0539b387f3fbc0ae84abe3a9eda2c/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/9tdI--MiqK8NFnd_39d95A/1000s.jpg",
      "https://tb-static.uber.com/prod/image-proc/processed_images/f096a82d87f82f5488cec7df092b04da/f0d1762b91fd823a1aa9bd0dab5c648d.jpeg",
    ],
    rating: 5,
    category: "Middle Eastern",
  },
];
