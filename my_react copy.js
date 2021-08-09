var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Car(props) {
    return React.createElement(
        "div",
        { className: "card" },
        React.createElement(
            "div",
            { className: "card-img" },
            React.createElement("img", {
                src: props.car.img,
                alt: props.car.name })
        ),
        React.createElement(
            "h3",
            null,
            props.car.name
        ),
        React.createElement(
            "p",
            null,
            props.car.price,
            " $"
        )
    );
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            cars: [{ name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' }, { name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' }, { name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' }, { name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: "renderCars",
        value: function renderCars() {
            return this.state.cars.map(function (car) {
                return React.createElement(Car, { car: car, key: car.name + Math.random() });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "app" },
                React.createElement(
                    "div",
                    { className: "list" },
                    this.renderCars()
                )
            );
        }
    }]);

    return App;
}(React.Component);

// const app = (
//     <div className="app">
// <div className="list">
//     cars.forEach(element => {
//     <Car car={{ name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' }} />    
//     });

// </div>
//     </div>
// )


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));