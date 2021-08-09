function Car(props) {
    return React.createElement(
        "div",
        { "class": "card" },
        React.createElement("div", { "class": "card-img" }),
        React.createElement(
            "h3",
            null,
            pops.car.name
        ),
        React.createElement(
            "p",
            null,
            pops.car.price,
            " $"
        )
    );
}

ReactDOM.render(React.createElement(Car, { car: { name: 'BMW M2 Coupe', price: 20000 } }), document.getElementById("root"));