class Transport {
    constructor (type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}, Price: ${this.getPrice()}`;
}
getPrice() {
    return `${this.price}`;
}
}
//const transport = new Transport("type", "price", "brandy");

class Car extends Transport {
    constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
}
}
Car.prototype.getDoorsCount = function getDoorsCount() {
    return `${this.doors}`;
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
    }
}

Bike.prototype.getMaxSpeed = function getMaxSpeed() {
    return `${this.maxSpeed}`;
}
const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];
// for(let index of data){
//     const allTransport = new Transport(index.type,index.price,index.brand);
//     allTransport.image = index.image;
//     createListOfTransport(allTransport); 
// };

for(let index of data){
    if(index.type === "car"){
        const car = new Car(index.type, index.price, index.brand, index.doors);
        car.image = index.image;
        createListOfTransport(car);
    }
    else if(index.type === "bike") {
        const bike = new Bike (index.type, index.price, index.brand, index.maxSpeed);
        bike.image = index.image;
        createListOfTransport(bike);
    };
}
function createListOfTransport(transport){
    const transportInfoContainer = document.createElement('div');
    
    if (transport instanceof Car){
        transportInfoContainer.innerHTML = `
        <h2>${transport.brand}</h2>
        <p>${transport.getInfo()}</p>
        <p>Doors ${transport.getDoorsCount()}</p>
        <img src=${transport.image} alt=${transport.brand} width="500" height="300">
        `;
    }
    if (transport instanceof Bike){
        transportInfoContainer.innerHTML = `
        <h2>${transport.brand}</h2>
        <p>${transport.getInfo()}</p>
        <p>Maxspeed ${transport.getMaxSpeed()}</p>
        <img src=${transport.image} alt=${transport.brand} width="500" height="300">
        `;
    };
    transportInfoContainer.style.marginLeft = "7%" ;
    document.body.appendChild(transportInfoContainer);
}
