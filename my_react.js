var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import { Formik } from 'formik';

function Car(props) {
    var classes = ['card'];

    if (props.car.marked) {
        classes.push('marked');
    }

    return React.createElement(
        'div',
        { className: classes.join(" "), onClick: props.onMark },
        React.createElement(
            'div',
            { className: 'card-img' },
            React.createElement('img', {
                src: props.car.img,
                alt: props.car.name })
        ),
        React.createElement(
            'h3',
            null,
            props.car.name
        ),
        React.createElement(
            'p',
            null,
            props.car.price,
            ' $'
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
            cars: [{ marked: false, name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' }, { marked: false, name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' }, { marked: false, name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' }, { marked: false, name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }],
            visible: true,
            appTitle: "cars application"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'handleMarked',
        value: function handleMarked(name) {
            var cars = this.state.cars.concat();
            car = cars.find(function (c) {
                return c.name === name;
            });
            car.marked = !car.marked;
            this.setState({ cars: cars });
        }
    }, {
        key: 'toggleHandler',
        value: function toggleHandler() {
            this.setState({ visible: !this.state.visible });
        }
    }, {
        key: 'renderCars',
        value: function renderCars() {
            var _this2 = this;

            if (!this.state.visible) {
                return null;
            }
            return this.state.cars.map(function (car) {
                return React.createElement(Car, {
                    car: car,
                    key: car.name + Math.random(),
                    onMark: _this2.handleMarked.bind(_this2, car.name)
                });
            });
        }
    }, {
        key: 'titleChangeHandler',
        value: function titleChangeHandler(title) {
            if (title.trim() == "") {
                return;
            }
            this.setState({
                appTitle: title
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = {
                marginRight: "10px"
            };
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(
                    'h1',
                    null,
                    this.state.appTitle
                ),
                React.createElement(
                    'button',
                    {
                        onClick: function onClick() {
                            return _this3.toggleHandler();
                        },
                        style: style },
                    'toggle'
                ),
                React.createElement('input', { type: 'text',
                    placeholder: 'change title',
                    onChange: function onChange(event) {
                        return _this3.titleChangeHandler(event.target.value);
                    },
                    value: this.state.appTitle }),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'list' },
                    this.renderCars()
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));