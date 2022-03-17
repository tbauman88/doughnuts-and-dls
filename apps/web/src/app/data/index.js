import faker from '@faker-js/faker';

export const drinks = [
  {
    id: 'double-shot-espresso',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Double Shot Espresso',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/IMG_5225-2-300x300-1.jpg',
    description:
      'A double shot of speciality Canadian roasted Espresso from 49th Parallel in Vancouver.'
  },
  {
    id: 'americano',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Americano',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/Batch-Brew.jpg',
    description:
      'Simply put, delicious Canadian specialty roasted espresso topped with hot water.  Our iced version is espresso, cold filter water, and topped off with ice.'
  },
  {
    id: 'batch-brew',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Batch Brew',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/Batch-Brew.jpg',
    description:
      'We have the finest batch brew coffee in town. Currently we are offering our Light, Medium and Dark roast. All brewed from Canadian specialty roasted beans.'
  },
  {
    id: 'cafe-au-lait',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Cafe Au Lait',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/10/IMG_4165-scaled.jpg',
    description:
      'Our Cafe au Lait hits the spot every single time! Half batch brew coffee, half perfectly steamed milk.'
  },
  {
    id: 'irish-cream-cold-brew',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Irish Cream Cold Brew',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2022/02/IMG-6256-scaled.jpg',
    description:
      'Our perfectly steeped cold brew topped with our Irish cream flavor infused cream.'
  },
  {
    id: 'cappuccino',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Cappuccino',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/F1D8CBEC-64D6-40D4-BEC6-736E2AF3E7C5-scaled-1.jpeg',
    description:
      'A classic and timeless espresso based drink. Our baristas perfectly steam milk or alternative and add a double shot of espresso.'
  },
  {
    id: 'lucky-charm-latte',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Lucky Charm Latte',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/09/IMG-6272-scaled.jpg',
    description:
      'Our perfectly steamed milk or alternative added to a double shot of Canadian Roasted espresso and mint syrup, whip cream and lucky charm cereal to top it off.'
  },
  {
    id: 'matcha-tea-latte ',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Matcha Tea Latte ',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/matcha-iced.jpg',
    description:
      'Whole milk or alternative infused with organic Japanese matcha tea, either over ice or steamed to perfection.'
  },
  {
    id: 'latte-iced-or-hot',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Latte *Iced or Hot',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/iced-latte.jpg',
    description:
      'Whether they are iced or hot, you for sure will taste the high quality of the coffee beans we use from our selected Canadian Coffee Roasters.'
  },
  {
    id: 'mocha-iced-or-hot',
    price: faker.commerce.price(2, 12, 2, '$'),
    name: 'Mocha *Iced or Hot',
    imageUrl:
      'https://pre1673.boxcardonuts.ca/wp-content/uploads/2021/07/iced-mocha.jpg',
    description:
      'For our iced version we use whole milk or alternative, double shot of espresso, drizzled with pure chocolate sauce, topped with whip cream if desired, and chocolate drizzle! For out hot version, we perfectly steam whole milk or alternative.'
  }
];

const doughnuts = [
  {
    id: 'vanilla-cherry-chip',
    name: 'Vanilla Cherry Chip',
    description:
      'Classic cake donut that gives you the crunch outside and soft cake inside.  Dunked in a vanilla glaze and topped with a vanilla icing drizzle.',
    price: '$3.25',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_ba3f1b579edd4d7a9653368da043be40~mv2_d_1512_2016_s_2.jpg'
  },
  {
    id: 'apple-fritter',
    name: 'Apple Fritter',
    description: 'Crisp apples, cinnamon and classic yeast risen dough.',
    price: '$3.00',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_ac5faac4316d4e65a5f900513cf003b8~mv2.jpg'
  },
  {
    id: 'og-sprinkle',
    name: 'OG Sprinkle',
    description:
      'Vanilla glaze and colourful sprinkles.  Another timeless classic.',
    price: '$2.50',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_6503ced7170e43cb908a20690afd2f0c~mv2.jpg'
  },
  {
    id: 'boston-cream',
    name: 'Boston Cream',
    description:
      'Fluffy bismark, filled with custard and topped with a chocolate ganache.',
    price: '$3.25',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_e0db6928537f4507a06a9d4c4add71da~mv2.jpg'
  },
  {
    id: 'cinnamon-bun-donut',
    name: 'Cinnamon Bun Donut',
    description: 'Cinnamon and vanilla glaze over swirled cinnamon dough.',
    price: '$3.25',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_a660e4c40cba4d2a9ec3b93b0356ad71~mv2.jpg'
  },
  {
    id: 'old-fashion-chocolate-cake',
    name: 'Old Fashion Chocolate Cake',
    description: 'Classic chocolate cake donut with a vanilla glaze.',
    price: '$3.00',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_61a3dd22de2843018f6aa81f0a5fe862~mv2.jpg'
  },
  {
    id: 'cinnamon-twist',
    name: 'Cinnamon Twist',
    description:
      'Cinnamon dough twisted like a braid and topped with a vanilla cinnamon glaze.',
    price: '$3.00',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_2562a309510d4ae4bb6e882820962805~mv2.jpg'
  },
  {
    id: 'dutchie',
    name: 'Dutchie',
    description:
      'Fresh dough with raisins scattered throughout.a serious classic donut. Definitely delicious!',
    price: '$2.75',
    type: 'standard',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_c2acae5ec17d4457b3d2ced57f0367bd~mv2.jpeg'
  },
  {
    id: 'tequila-lime',
    name: 'Tequila Lime',
    description:
      'Transporting you to another place with this one! Even if you can’t leave your house, at least we can dream!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_05d2d00ea300478a8a872528a46eddba~mv2.jpg'
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    description:
      'Our house glaze infused with fresh ground 49th Parallel espresso. Our coffee shop might not be open but this is really all you need!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_11e1b4fe41c14dddaf44c4f06aa5635f~mv2.jpg'
  },
  {
    id: 'hibiscus-almond',
    name: 'Hibiscus Almond',
    description:
      'Steeped loose leaf hibiscus tea, our house glaze glaze and toasted almonds! We know you want one! The bright fresh natural colour makes this one a really really good choice.',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_882c3665b0114248bca3c36606dc959c~mv2.jpg'
  },
  {
    id: 'chocolate-fudge-brownie',
    name: 'Chocolate Fudge Brownie',
    description:
      'Our yeast risen donut dipped in chocolate ganache, topped with fudge brownies, walnuts and caramel.',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_2954670fae2a4d948b891be2551dd57d~mv2.jpg'
  },
  {
    id: 'vanilla-passionfruit',
    name: 'Vanilla Passionfruit',
    description:
      'Fresh and delicious. It’s Tropical getaway and you get to eat it.',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_e947327030974f558503b1ff81510f17~mv2.jpg'
  },
  {
    id: 'lemon-blueberry-bar',
    name: 'Lemon Blueberry Bar',
    description:
      'Lemon cream filled long john with a limoncello glaze & blueberry. If ya love lemon, you’ll love this!',
    price: '$3.75',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_ebdab83bb11a4b79b337bb2a1c368742~mv2.jpg'
  },
  {
    id: 'peanut-butter-bliss',
    name: 'Peanut Butter Bliss',
    description:
      'Our PB fans where ya at??  This is definitely for you. PB glaze, chopped roasted peanuts, dark chocolate drizzle. OMGosh! So so yummy!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_b955a4c6f011477d99f20f2cf354f231~mv2.jpg'
  },
  {
    id: 'blue-raspberry-lemonade',
    name: 'Blue Raspberry Lemonade',
    description:
      'Because you can’t hit up the snow cone truck, we got you! This is one of our all time classics and we’ve brought it this week.',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_5d3398b3b6314475b23fa05d2858571b~mv2.jpg'
  },
  {
    id: 'churros',
    name: 'Churros',
    description:
      'Cinnamon glaze topped with churro cereal pieces and a vanilla drizzle.',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_2e1968a735704ea4879945e0ee423114~mv2.jpg'
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description:
      'Black Forest cake transformed into a donut. Chocolate ganache, cherry cream filling, buttercream, chocolate shavings.',
    price: '$3.75',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_a60ba5a641f640d3a02705297f20c913~mv2.jpg'
  },
  {
    id: 'smores',
    name: "S'mores",
    description:
      'Chocolate ganache, custard filled, toasted marshmallow fluff, graham crackers! Campfire season is just around the corner but we’re getting the jump on it now!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_09cf239c8c684c9ea4ceedeaeb651cd7~mv2.jpg'
  },
  {
    id: 'peanut-butter-whiskey-milkshake',
    name: 'Peanut Butter Whiskey Milkshake',
    description:
      'A special flavour request that we LOVED so we made it for the week! Rich peanut butter glaze infused with whisky essence and topped with chocolate buttercream, chocolate drizzle, peanuts and chocolate chips!',
    price: '$3.75',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_53bb1021928a44d68067e8f3c28cc879~mv2.jpg'
  },
  {
    id: 'key-lime-pie',
    name: 'Key Lime Pie',
    description:
      'One of our very first flavours we made when we opened last year! This is to die for! Natural key lime infused glaze, fresh lime zest and graham crackers. So delicious!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_ba2a9056d22a43f2828baa857f7ae108~mv2.jpg'
  },
  {
    id: 'red-velvet-cheesecake',
    name: 'Red Velvet Cheesecake',
    description:
      'Super rich cream cheese glaze topped with red velvet cheesecake crumble and cream cheese drizzle. OMG!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_5ade3f0ed3574a7b8b6f7599c16f8d96~mv2.jpg'
  },
  {
    id: 'toasted-coconut-cream',
    name: 'Toasted Coconut Cream',
    description:
      'Our classic Bismarck donut filled with coconut cream, topped with a coconut infused glaze and toasted coconut! Tropical getaway right here!',
    price: '$3.50',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_3b740d4e8e924a18963b1007a88b9203~mv2.jpg'
  },
  {
    id: 'vietnamese-coffeee',
    name: 'Vietnamese Coffee',
    description:
      'Light and fluffy yeast risen donut topped with our signature 49th Parallel espresso glaze topped with condensed milk drizzle. Heaven!',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_4fbe77849d4f4fb18185adb0dc9fd219~mv2.jpg'
  },
  {
    id: 'lavender-+-honey',
    name: 'Lavender + Honey',
    description:
      'The perfect combination! Lavender infused glaze, honey drizzle and honeycomb toffee. Yum!',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_a9c34eb592eb4e2f851ee0bab33d80ea~mv2.jpg'
  },
  {
    id: 'fruity-pebbles',
    name: 'Fruity Pebbles',
    description:
      'Our house vanilla glaze infused with natural fruit flavours and topped with fruity pebbles to give it nice crunch. A super fun and tasty creation!',
    price: '$3.25',
    type: 'weekly',
    imageUrl:
      'https://static.wixstatic.com/media/1f7fda_9ee71035221f4d24b76fd474fd9fc212~mv2.jpg'
  },
  {
    id: 'mint-chip-brownie',
    name: 'Mint Chip Brownie',
    price: '$3.75',
    type: 'weekly',
    description:
      'Our rich mint chocolate ganache topped melt in your mouth fudge brownie and a vanilla mint drizzle. OMG…You gotta try this!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/FB3A017E-AE7F-4B74-8536-DFED476E3B15-scaled.jpeg'
  },
  {
    id: 'the-fat-“elvis”',
    name: 'The Fat “Elvis”',
    price: '$3.75',
    type: 'weekly',
    description:
      'Named after Elvis Presley himself – his fave combo is on our donuts! Our light and fluffy yeast risen donut smothered in house made maple glaze and topped with fresh banana, bacon crumble and peanut butter drizzle. Obvi Elvis knows best!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/CF552782-5C64-4846-BA88-738EEB0291D5-scaled.jpeg'
  },
  {
    id: 'lemon-sherbet',
    name: 'Lemon Sherbet',
    price: '$3.25',
    type: 'weekly',
    description:
      'Our house glaze infused with naturallemon flavour and a touch of lemon buttercream. Tart and tangy on top of our soft yeast risen donut.',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/271BE853-10DE-4DB2-B7A2-A38CB876A865-scaled.jpeg'
  },
  {
    id: 'summer-berry-cheesecake',
    name: 'Summer Berry Cheesecake',
    price: '$3.75',
    type: 'weekly',
    description:
      'Our classic Bismarck donut filled with a mix of Summer Berries and topped with a rich cream cheese glaze and graham crackers. Delicious!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/46520AC1-8EAE-407B-B55E-845F913D4413-scaled.jpeg'
  },
  {
    id: 'caramel-green-apple',
    name: 'Caramel Green Apple',
    price: '$3.25',
    type: 'weekly',
    description:
      'One of our very first flavours we made when we opened last year! This is to die for! Natural key lime infused glaze, lime zest and graham crackers. So delicious!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/44545B69-BB99-472B-8BB1-2E69E53C344B-scaled.jpeg'
  },
  {
    id: 'almond-mocha-mudslide',
    name: 'Almond Mocha Mudslide',
    price: '$3.50',
    type: 'weekly',
    description:
      'Our house made glaze infused with Detour dark roast coffee topped with toasted almonds, oreo crumb, and milk chocolate drizzle. Heaven heaven heaven! 12/10',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/C193EAC4-8924-4870-A5D6-C267D04012D4-scaled.jpeg'
  },
  {
    id: 'sharkleberry',
    name: 'Sharkleberry',
    price: '$3.25',
    type: 'weekly',
    description:
      'One of our first ever flavours! Classic Sharkleberry. A blend of strawberry, orange, banana. Childhood memories! So good!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/861F3E2D-124C-4800-ACE6-B6FED529E8FA-scaled.jpeg'
  },
  {
    id: 'butterfly-pea-flower',
    name: 'Butterfly Pea Flower',
    price: '$3.25',
    type: 'weekly',
    description:
      'This Southeast Asia flower is delightful. A fruity and floral flavour when added to culinary dishes. Garnished with a few little edible blue flowers. Yum!',
    imageUrl:
      'https://boxcardonuts.ca/wp-content/uploads/2020/05/19B13794-30A2-45EE-9723-7F658F554166-scaled.jpeg'
  }
];
