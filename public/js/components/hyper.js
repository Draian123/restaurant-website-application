webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var actions = exports.actions = {
  reviewRightClicked: reviewRightClicked,
  reviewLeftClicked: reviewLeftClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'Hong Kong',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 12
}, {
  title: 'All American Hamburger',
  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',
  price: 15
}];

var reviewsData = [{
  company: 'The Food Network',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A. area!',
  review: 'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
}, {
  company: 'HBO',
  author: 'Jim Carry',
  authorInfo: 'Comedian',
  highlight: 'Great Food!',
  review: 'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
}, {
  company: 'CWV',
  author: 'Steven Segal',
  authorInfo: 'Actor',
  highlight: 'My favourite place to go to!',
  review: 'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
}, {
  company: 'Hells Kitchen',
  author: 'Gordon Ramsey',
  authorInfo: 'Master Chef',
  highlight: 'Delicious Food!',
  review: 'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
}, {
  company: 'The New York Times',
  author: 'Ben Graham',
  authorInfo: 'Author',
  highlight: 'I love the food here!',
  review: 'Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland.'
}];

var randomQuoteData = [{
  author: 'Johny',
  quote: 'Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.'
}, {
  author: 'Cindy',
  quote: 'Give me pizza or give me death'
}, {
  author: 'Ralf',
  quote: 'can\'t live without my pizza'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour of Autum"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "Address" },
              "435 main st",
              (0, _hyperapp.h)("br", null),
              "Hollywood, CA 12402"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              ' ',
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@primesteak.com" },
                "info@primesteak.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "342-346-6789"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday ",
              (0, _hyperapp.h)("br", null),
              "Bookings from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily",
              (0, _hyperapp.h)("br", null),
              "from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    { id: "Contact" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#Home" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#OurStory" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Reviews" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#SpecialMenu" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Contact" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.youtube.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2019 Copyright"
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    { id: "Home" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "nav" },
        (0, _hyperapp.h)(
          "label",
          { "for": "toggle" },
          "\u2630"
        ),
        (0, _hyperapp.h)("input", { type: "checkbox", id: "toggle" }),
        (0, _hyperapp.h)(
          "div",
          { "class": "menu" },
          (0, _hyperapp.h)(
            "a",
            { href: "#Home" },
            "Home"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#OurStory" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#SpecialMenu" },
            "Special Menu"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#Reviews" },
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#Contact", id: "last-link" },
            "Contact Us"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OutStory;

var _hyperapp = __webpack_require__(0);

function OutStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet vHS lomo pour-over everyday carry, hell of austin jianbing succulents poke next level affogato migas williamsburg lo-fi kitsch. Flexitarian meditation portland ethical, squid mlkshk palo santo cray fingerstache direct trade snackwave pok pok ramps. Actually pour-over artisan mumblecore ennui. Fam fixie subway tile kale chips."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best steak in thw town Huntington\"-",
            ' ',
            (0, _hyperapp.h)(
              "div",
              { "class": "strong" },
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    {
      id: "RandomQuote",
      style: {
        backgroundImage: "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0, #000 100%), url(\"https://i.postimg.cc/5jcQxvDZ/gew-rze.png\"\n          )"
        // http://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png
      }
    },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"Good painting is like good cooking; it can be tasted, but not explained.\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Johny -"
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        ' ',
        "-",
        ' ',
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "arrows" },
        (0, _hyperapp.h)("i", {
          onclick: leftClickBTN,
          "class": "fas fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : '')
        }),
        (0, _hyperapp.h)("i", {
          onclick: rightClickBTN,
          "class": "fas fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready')
        })
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", {
              src: "https://i.postimg.cc/8cfrQwXR/female-chef.jpg"
              // http://pluspng.com/img-png/png-female-chef-celebrating-the-dozen-or-so-female-chefs-working-in-australia-the-shallot-1536.jpg
              , alt: "PNG Female Chef"
            })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview()
        )
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              item.price,
              "$"
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour Of Autum"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome to"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) - 219 - 8652"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri:"
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend:"
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group('Action Info');
      console.log('Name:', name);
      console.log('Data:', data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);