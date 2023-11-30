const productsArray = [
    {
        id: "1",
        Img:"https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_1280.jpg",
        title: "Coffee",
        price: 129
    },
    {
        id: "2",
        Img:"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
        title: "Sunglasses",
        price: 999
    },
    {
        id: "3",
        Img:"https://cdn.pixabay.com/photo/2014/11/03/10/44/camera-514992_1280.jpg",
        title: "Camera",
        price: 3999
    },
    {
        id: "4",
        Img:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg",
        title: "mobile",
        price: 35999
    },
    {
        id: "5",
        Img:"https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
        title: "t-shirt",
        price: 399
    },
    {
        id: "6",
        Img:"https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_1280.jpg",
        title: "Jeans",
        price: 699
    },
    {
        id: "7",
        Img:"https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg",
        title: "Table",
        price: 2999
    },
    {
        id: "8",
        Img:"https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
        title: "Chair",
        price: 999
    },
    {
        id: "9",
        Img:"https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_1280.jpg",
        title: "Motorcycle",
        price: 122999
    },
    {
        id: "10",
        Img:"https://cdn.pixabay.com/photo/2014/08/11/08/56/roller-skates-415389_1280.jpg",
        title: "Roller-skate",
        price: 3599
    },
    {
        id: "11",
        Img:"https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg",
        title: "Shoes",
        price: 2999
    },
    {
        id: "12",
        Img:"https://cdn.pixabay.com/photo/2015/04/03/06/50/slippers-704705_1280.jpg",
        title: "Slippers",
        price: 799
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };