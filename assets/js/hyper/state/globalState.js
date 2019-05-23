var companyInfo = {
  title: 'Hong Kong',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California'
};

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description:
      'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description:
      'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 12
  },
  {
    title: 'All American Hamburger',
    description:
      'Fried eggs, Steak, baked potato or french fries, side of vegetables',
    price: 15
  }
];

var reviewsData = [
  {
    company: 'The Food Network',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A. area!',
    review:
      'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
  },
  {
    company: 'HBO',
    author: 'Jim Carry',
    authorInfo: 'Comedian',
    highlight: 'Great Food!',
    review:
      'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
  },
  {
    company: 'CWV',
    author: 'Steven Segal',
    authorInfo: 'Actor',
    highlight: 'My favourite place to go to!',
    review:
      'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
  },
  {
    company: 'Hells Kitchen',
    author: 'Gordon Ramsey',
    authorInfo: 'Master Chef',
    highlight: 'Delicious Food!',
    review:
      'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
  },
  {
    company: 'The New York Times',
    author: 'Ben Graham',
    authorInfo: 'Author',
    highlight: 'I love the food here!',
    review:
      'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
  }
];

var randomQuoteData = [
  {
    author: 'Johny',
    quote:
      'Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.'
  },
  {
    author: 'Cindy',
    quote: 'Give me pizza or give me death'
  },
  {
    author: 'Ralf',
    quote: `can't live without my pizza`
  }
];

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};
