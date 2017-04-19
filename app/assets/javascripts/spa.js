/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 211);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kyle/projects/guild-website/node_modules/react/react.js'\n    at Error (native)");

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var loginTitle = ENV.membership_level > 99 ? 'Login' : 'Member level ' + ENV.membership_level;
      return _react2.default.createElement(
        'div',
        { className: 'menu' },
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { inverse: true, collapseOnSelect: true },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                'F O O L S A V G E'
              )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Nav,
              null,
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '#' },
                'Forum'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 3, href: '#' },
                'About'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 4, href: '#' },
                'Achievements'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 5, href: '/spa/members' },
                'Members'
              ),
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 6, href: '#' },
                'Recruitment'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { pullRight: true },
              _react2.default.createElement(
                _reactBootstrap.NavDropdown,
                { eventKey: 1, title: loginTitle, id: 'basic-nav-dropdown' },
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 1.1 },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 1.2 },
                  'Another action'
                ),
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 1.3 },
                  'Something else here'
                ),
                _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { eventKey: 1.3 },
                  'Separated link'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kyle/projects/guild-website/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _announcements = __webpack_require__(202);

var _announcements2 = _interopRequireDefault(_announcements);

var _footer = __webpack_require__(205);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(128);

var _header2 = _interopRequireDefault(_header);

var _homeCarousel = __webpack_require__(206);

var _homeCarousel2 = _interopRequireDefault(_homeCarousel);

var _progress = __webpack_require__(207);

var _progress2 = _interopRequireDefault(_progress);

var _recruitment = __webpack_require__(209);

var _recruitment2 = _interopRequireDefault(_recruitment);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home-div' },
        _react2.default.createElement(_header2.default, { className: 'header' }),
        _react2.default.createElement(
          'div',
          { className: 'banner-div' },
          _react2.default.createElement('img', { className: 'banner', src: '/images/kubrickheader.jpg' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'main-page' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'top-row' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 8 },
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    null,
                    _react2.default.createElement(_homeCarousel2.default, null)
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12, md: 8 },
                    _react2.default.createElement(_announcements2.default, null)
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(_recruitment2.default, null)
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 4 },
                _react2.default.createElement(_progress2.default, null)
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'footer' },
              _react2.default.createElement(_footer2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(128);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = function (_React$Component) {
  _inherits(Members, _React$Component);

  function Members() {
    _classCallCheck(this, Members);

    return _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).apply(this, arguments));
  }

  _createClass(Members, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        'MEMBERS HERE'
      );
    }
  }]);

  return Members;
}(_react2.default.Component);

exports.default = Members;

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kyle/projects/guild-website/node_modules/page/index.js'\n    at Error (native)");

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var propTypes = React.propTypes;

var Announcements = function (_React$Component) {
  _inherits(Announcements, _React$Component);

  function Announcements() {
    _classCallCheck(this, Announcements);

    return _possibleConstructorReturn(this, (Announcements.__proto__ || Object.getPrototypeOf(Announcements)).apply(this, arguments));
  }

  _createClass(Announcements, [{
    key: 'componentWillMount',

    // static propTypes = {
    //   maxShown: propTypes.number
    // };
    //
    // static defaultProps = {
    //   maxShown: 1000
    // };

    value: function componentWillMount() {
      this.setState({ items: [] });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ items: ['announcement1', 'announcement2', 'announcement3'] });
      }, 5000);
      // $.get('endpoint', function (results) {
      //   this.setState({items: results})
      // });
    }
  }, {
    key: 'renderAnnouncements',
    value: function renderAnnouncements() {
      var announcements = [];
      this.state.items.forEach(function (item) {
        // if (announcements.length >= this.props.maxShown) {
        //   return;
        // }
        announcements.push(_react2.default.createElement(
          'li',
          { key: item },
          item
        ));
      });
      return _react2.default.createElement(
        'ul',
        null,
        announcements
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.items.length === 0) {
        return _react2.default.createElement(
          'h2',
          null,
          'No announcements'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          this.state.items.length,
          ' announcements'
        ),
        this.renderAnnouncements()
      );
    }
  }]);

  return Announcements;
}(_react2.default.Component);

exports.default = Announcements;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _collapsible = __webpack_require__(80);

var _collapsible2 = _interopRequireDefault(_collapsible);

var _boss_images = __webpack_require__(210);

var _boss_images2 = _interopRequireDefault(_boss_images);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boss = function (_React$Component) {
  _inherits(Boss, _React$Component);

  function Boss() {
    _classCallCheck(this, Boss);

    return _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).apply(this, arguments));
  }

  _createClass(Boss, [{
    key: 'render',
    value: function render() {
      var boss = this.props.boss;
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('img', { className: 'bossImg', src: _boss_images2.default[boss.id] }),
          boss.description
        ),
        _react2.default.createElement(
          'td',
          null,
          boss.killedDate && _react2.default.createElement('img', { className: 'skullImg', src: '/images/heroic_icon.png' })
        ),
        _react2.default.createElement(
          'td',
          null,
          boss.killedDate
        )
      );
    }
  }]);

  return Boss;
}(_react2.default.Component);

exports.default = Boss;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGrp = function (_React$Component) {
  _inherits(ButtonGrp, _React$Component);

  function ButtonGrp() {
    _classCallCheck(this, ButtonGrp);

    return _possibleConstructorReturn(this, (ButtonGrp.__proto__ || Object.getPrototypeOf(ButtonGrp)).apply(this, arguments));
  }

  _createClass(ButtonGrp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.ButtonGroup,
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { bsStyle: 'success' },
          'Heroic'
        ),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { bsStyle: 'danger' },
          'Mythic'
        )
      );
    }
  }]);

  return ButtonGrp;
}(_react2.default.Component);

exports.default = ButtonGrp;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "contact" },
        "You can email us at ",
        _react2.default.createElement(
          "a",
          { href: "#" },
          "foo@foo.foo"
        ),
        " or call us at ",
        _react2.default.createElement(
          "a",
          { href: "#" },
          "fake phone number"
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeCarousel = function (_React$Component) {
  _inherits(HomeCarousel, _React$Component);

  function HomeCarousel(props) {
    _classCallCheck(this, HomeCarousel);

    var _this = _possibleConstructorReturn(this, (HomeCarousel.__proto__ || Object.getPrototypeOf(HomeCarousel)).call(this, props));

    _this.state = { list: [] };
    return _this;
  }

  _createClass(HomeCarousel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      $.get('/news', function (response) {
        var $page = $(response);

        var articleTiles = $page.find('.ArticleTile').slice(0, 3);

        var articles = [articleTiles[0], articleTiles[1], articleTiles[2]].map(function (articleTile) {
          var $tile = $(articleTile);
          var imageUrl = $tile.find('.Tile-bg').attr('style').match(/"(.*)"/)[1];
          var title = $tile.find('.ArticleTile-title').text();
          var subtitle = $tile.find('.ArticleTile-subtitle').text();
          var href = "https://worldofwarcraft.com" + $tile.find('.ArticleTile-link').attr('href');
          return {
            imageUrl: imageUrl,
            title: title,
            subtitle: subtitle,
            href: href
          };
        });

        _this2.setState({ list: articles });
      });
    }
  }, {
    key: 'renderArticle',
    value: function renderArticle(article) {
      return _react2.default.createElement(
        _reactBootstrap.Carousel.Item,
        null,
        _react2.default.createElement(
          'a',
          { href: article.href, target: '_blank' },
          _react2.default.createElement('img', { className: 'carousel-img', width: 615, height: 300, alt: article.subtitle, src: article.imageUrl }),
          _react2.default.createElement(
            _reactBootstrap.Carousel.Caption,
            null,
            _react2.default.createElement(
              'h3',
              null,
              article.title
            ),
            _react2.default.createElement(
              'p',
              null,
              article.subtitle
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var prevIcon = _react2.default.createElement('img', { className: 'glyphicon-chevron-left', src: '/images/featured-prev.png' });
      var nextIcon = _react2.default.createElement('img', { className: 'glyphicon-chevron-right', src: '/images/featured-next.png' });

      return _react2.default.createElement(
        _reactBootstrap.Carousel,
        { prevIcon: prevIcon, nextIcon: nextIcon },
        this.state.list.map(this.renderArticle)
      );
    }
  }]);

  return HomeCarousel;
}(_react2.default.Component);

exports.default = HomeCarousel;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _collapsible = __webpack_require__(80);

var _collapsible2 = _interopRequireDefault(_collapsible);

var _buttonGrp = __webpack_require__(204);

var _buttonGrp2 = _interopRequireDefault(_buttonGrp);

var _raid = __webpack_require__(208);

var _raid2 = _interopRequireDefault(_raid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var guildAchievementsUrl = 'https://us.api.battle.net/wow/guild/kiljaeden/F%20O%20O%20L%20S%20A%20V%20A%20G%20E?fields=achievements%2Cchallenge&locale=en_US&apikey=' + ENV.api_key;

var allGuildAchievementsUrl = 'https://us.api.battle.net/wow/data/guild/achievements?locale=en_US&apikey=' + ENV.api_key;

var guildLeaderAchievementsUrl = 'https://us.api.battle.net/wow/character/kiljaeden/Srprise?fields=achievements&locale=en_US&apikey=' + ENV.api_key;

var allCharacterAchievementsUrl = 'https://us.api.battle.net/wow/data/character/achievements?locale=en_US&apikey=' + ENV.api_key;

var areas = ['Emerald Nightmare', 'Trial of Valor', 'Nighthold'];
var difficulty = 'Mythic';
var action = 'Defeat';

var achievements;
var mythicBossAchievementIds = [];
var heroicBossCriteriaIds = [];
var mythicBossKills = [];

var Progress = function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress(props) {
    _classCallCheck(this, Progress);

    var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

    _this.state = {
      raids: []
    };
    _this.onToggle = _this.onToggle.bind(_this);
    return _this;
  }

  _createClass(Progress, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchListData();
    }
  }, {
    key: 'fetchListData',
    value: function fetchListData() {
      var _this2 = this;

      $.getJSON(allGuildAchievementsUrl, function (allGuildAchievements) {
        var raids = allGuildAchievements.achievements[3].categories[11].achievements.slice(0, 3);
        for (var i = 0; i < raids.length; i++) {
          for (var j = 0; j < raids[i].criteria.length; j++) {
            heroicBossCriteriaIds.push(raids[i].criteria[j].id);
          }

          raids[i].in = i == raids.length - 1;
        }

        _this2.setState({ raids: raids });

        $.getJSON(guildLeaderAchievementsUrl, function (characterData) {
          var guildLeaderAchievements = characterData.achievements.achievementsCompleted;
          var guildLeaderAchievementsTimestamp = characterData.achievements.achievementsCompletedTimestamp;

          $.getJSON(allCharacterAchievementsUrl, function (allCharacterAchievements) {
            var mythicCandidates = allCharacterAchievements.achievements[4].categories[11].achievements;

            mythicCandidates.forEach(function (candidate) {
              if (candidate.description.startsWith(action)) {
                areas.forEach(function (location) {
                  if (candidate.description.includes(location + ' on ' + difficulty + ' difficulty.')) {
                    mythicBossAchievementIds.push({ name: candidate.title.slice(8, candidate.title.length), id: candidate.id, location: location });
                  }
                });
              }
            });

            for (var i = 0; i < mythicBossAchievementIds.length; i++) {
              if (guildLeaderAchievements.includes(mythicBossAchievementIds[i].id)) {
                var index = guildLeaderAchievements.indexOf(mythicBossAchievementIds[i].id);
                mythicBossKills.push({ id: guildLeaderAchievements[index], timestamp: guildLeaderAchievementsTimestamp[index], name: mythicBossAchievementIds[i].name, location: mythicBossAchievementIds[i].location });
              }
            }

            console.log(mythicBossKills);
            var raidCharacterAchievements = allCharacterAchievements.achievements;

            $.getJSON(guildAchievementsUrl, function (guildData) {
              var newRaids = _this2.state.raids;

              var guildAchievementIds = guildData.achievements.criteria;
              var guildAchivementTimestamps = guildData.achievements.criteriaTimestamp;
              var guildAchievements = [];
              for (var i = 0; i < guildAchievementIds.length; i++) {
                guildAchievements[i] = { id: guildAchievementIds[i], timestamp: guildAchivementTimestamps[i] };
              }
              console.log(heroicBossCriteriaIds);
              var raidEntry;
              guildAchievements.forEach(function (guildAchievement) {
                if (_this2.isAHeroicKill(guildAchievement.id)) {
                  raidEntry = newRaids;
                  for (var i = 0; i < raidEntry.length; i++) {
                    for (var j = 0; j < raidEntry[i].criteria.length; j++) {
                      if (raidEntry[i].criteria[j].id == guildAchievement.id) {
                        raidEntry[i].criteria[j].killedDate = _this2.timeConverter(guildAchievement.timestamp);
                      }
                    }
                  }
                }
              });
              console.log('raid entry', raidEntry);
              _this2.setState({ raids: raidEntry });
            });
          });
        });
      });
    }
  }, {
    key: 'isAHeroicKill',
    value: function isAHeroicKill(achievementId) {
      return heroicBossCriteriaIds.includes(achievementId);
    }
  }, {
    key: 'timeConverter',
    value: function timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year;
      return time;
    }
  }, {
    key: 'achievementComplete',
    value: function achievementComplete() {
      return true;
    }
  }, {
    key: 'onToggle',
    value: function onToggle(toggleRaid) {
      var newState = !toggleRaid.in;
      this.setState({
        raids: this.state.raids.map(function (raid) {
          raid.in = raid == toggleRaid ? newState : false;
          return raid;
        })
      });
    }
  }, {
    key: 'renderRaid',
    value: function renderRaid(raid) {
      var _this3 = this;

      return _react2.default.createElement(_raid2.default, { raid: raid, key: raid.title, onToggle: function onToggle() {
          return _this3.onToggle(raid);
        } });
    }
  }, {
    key: 'renderRaids',
    value: function renderRaids() {
      var _this4 = this;

      return this.state.raids.map(function (raid) {
        return _this4.renderRaid(raid);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Progression'
        ),
        _react2.default.createElement(_buttonGrp2.default, null),
        this.renderRaids()
      );
    }
  }]);

  return Progress;
}(_react2.default.Component);

exports.default = Progress;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _collapsible = __webpack_require__(80);

var _collapsible2 = _interopRequireDefault(_collapsible);

var _boss = __webpack_require__(203);

var _boss2 = _interopRequireDefault(_boss);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Raid = function (_React$Component) {
  _inherits(Raid, _React$Component);

  function Raid(props) {
    _classCallCheck(this, Raid);

    var _this = _possibleConstructorReturn(this, (Raid.__proto__ || Object.getPrototypeOf(Raid)).call(this, props));

    _this.raid = props.raid;
    return _this;
  }

  _createClass(Raid, [{
    key: 'renderBoss',
    value: function renderBoss(boss) {
      return _react2.default.createElement(_boss2.default, { boss: boss, key: boss.id });
    }
  }, {
    key: 'renderBosses',
    value: function renderBosses() {
      return this.raid.criteria.map(this.renderBoss);
    }
  }, {
    key: 'render',
    value: function render() {
      var raid = this.raid;
      console.log('raid', raid.title, raid.in);
      return _react2.default.createElement(
        _collapsible2.default,
        { title: raid.title, 'in': raid.in, key: raid.title, onToggle: this.props.onToggle },
        _react2.default.createElement(
          _reactBootstrap.Table,
          { striped: true, bordered: true, condensed: true, hover: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Boss'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Killed'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Date'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.renderBosses()
          )
        )
      );
    }
  }]);

  return Raid;
}(_react2.default.Component);

exports.default = Raid;
/*
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
<tr>
  <td><img className="bossImg" src="/images/ui-ej-boss-skorpyron.png" />Skorpyron</td>
  <td><img className="skullImg" src="/images/heroic_icon.png"></img></td>
  <td>1/1/2017</td>
</tr>
*/

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruitment = function (_React$Component) {
  _inherits(Recruitment, _React$Component);

  function Recruitment() {
    _classCallCheck(this, Recruitment);

    return _possibleConstructorReturn(this, (Recruitment.__proto__ || Object.getPrototypeOf(Recruitment)).apply(this, arguments));
  }

  _createClass(Recruitment, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "recruitment-list" },
        _react2.default.createElement(
          "h2",
          null,
          "Recruitment"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", null),
            "Class Name"
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", null),
            "Class Name"
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", null),
            "Class Name"
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", null),
            "Class Name"
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement("img", null),
            "Class Name"
          )
        )
      );
    }
  }]);

  return Recruitment;
}(_react2.default.Component);

exports.default = Recruitment;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  31495: '/images/ui-ej-boss-botanist.png',
  31492: '/images/ui-ej-boss-chronomatic-anomaly.png',
  31494: '/images/ui-ej-boss-grand-magistrix-elisande.png',
  31489: '/images/ui-ej-boss-guldan.png',
  31496: '/images/ui-ej-boss-krosus.png',
  31493: '/images/ui-ej-boss-skorpyron.png',
  31490: '/images/ui-ej-boss-spellblade-aluriel.png',
  31491: '/images/ui-ej-boss-star-augur-etraeus.png',
  31497: '/images/ui-ej-boss-tichondrius.png',
  31488: '/images/ui-ej-boss-trilliax.png',
  34816: '/images/ui-ej-boss-odyn.png',
  34818: '/images/ui-ej-boss-guarm.png',
  34817: '/images/ui-ej-boss-helya.png',
  31481: '/images/ui-ej-boss-nythendra.png',
  31482: '/images/ui-ej-boss-elerethe-renferal.png',
  31486: '/images/ui-ej-boss-ilgynoth-heart-of-corruption.png',
  31484: '/images/ui-ej-boss-ursoc.png',
  31487: '/images/ui-ej-boss-dragons-of-nightmare.png',
  31485: '/images/ui-ej-boss-cenarius.png',
  31483: '/images/ui-ej-boss-xavius.png'
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page = __webpack_require__(201);

var _page2 = _interopRequireDefault(_page);

var _home = __webpack_require__(199);

var _home2 = _interopRequireDefault(_home);

var _members = __webpack_require__(200);

var _members2 = _interopRequireDefault(_members);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderComponent(component) {
  _reactDom2.default.render(component, document.getElementById('app'));
}

(0, _page2.default)('/', function () {
  renderComponent(_react2.default.createElement(_home2.default, null));
});

(0, _page2.default)('/spa/members', function () {
  renderComponent(_react2.default.createElement(_members2.default, null));
});

(0, _page2.default)(window.ENV.route);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/kyle/projects/guild-website/node_modules/react-bootstrap/es/index.js'\n    at Error (native)");

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$PropTypes = _react2.default.PropTypes,
    bool = _React$PropTypes.bool,
    func = _React$PropTypes.func,
    string = _React$PropTypes.string;

var Collapsible = function (_React$Component) {
  _inherits(Collapsible, _React$Component);

  function Collapsible() {
    _classCallCheck(this, Collapsible);

    return _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).apply(this, arguments));
  }

  _createClass(Collapsible, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { block: true, onClick: this.props.onToggle },
          this.props.title
        ),
        _react2.default.createElement(
          _reactBootstrap.Collapse,
          { 'in': this.props.in },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactBootstrap.Well,
              null,
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return Collapsible;
}(_react2.default.Component);

Collapsible.propTypes = {
  title: string.isRequired,
  in: bool.isRequired,
  onToggle: func.isRequired
};

exports.default = Collapsible;

/***/ })

/******/ });