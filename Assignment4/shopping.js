alert("JS is working")
//shopping cart calculator
//Array of shopping items
let cart= [
    {item: "Bread", price: 300},
    {item: "Milk", price:500},
    {item: "Eggs", price:200},
];
console.log("Items available in cart are "+ cart[0].item + " , " + cart[1].item + " , " + cart[2].item);

//check if i can afford item
function canBuy(price, budget){
     if(price <= budget && price > 0){
        return "You can buy it";
     }else if (price > budget){
        return "Too expensive";
     }else{
        return "Invalid price";
}
}
let budget =400;
//loop through cart
for (let i=0; i< cart.length; i++){
    let product = cart[i];
    console.log(product.item + " costs " + product.price  + " and " + canBuy(product.price, budget)
        );
    }
