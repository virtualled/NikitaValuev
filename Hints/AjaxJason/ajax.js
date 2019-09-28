const smartphone = {
    brand: 'samsun',
    screen: 5,5,
    ram:4,
    sensor: ['accel', 'e-compas', 'gyroscope'],
    camers: {
        back: [32, 5, 8],
        front: 16
    }
};

const jsonSmart = JSON.stringify(smartphone); // переводит все в строку
JSON.parse(jsonSmart); // преобразует в обеъект


{
    "cars": [
    {
        "brand": "bmw",
        "model": "m5",
        "price": "51000"
    },
    {
        "brand": "volvo",
        "model": "v90",
        "price": "6100"
    }
]
}

const select,
        output;
    const request = new XMLHttpRequest();
    request.open('GET', './cars.json', true, login, password);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request