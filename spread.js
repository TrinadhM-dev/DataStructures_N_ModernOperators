
const arr = ['Trinadh','Aditya','Sai','Swaroop'];
//traditional way/ES6
const badArr = ['Prem Sai','Ajay','Mark',arr[0],arr[1],arr[2],arr[3]];
console.log(badArr);
const newArr = ['Prem Sai','Ajay','Mark',...arr];
console.log(newArr,"Spread")



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad',['Trinadh','Jaagadish','Anusha']],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    orderDelivery: function({starterIndex=1,mainIndex=0,time='20:00',address}){
      console.log(`Order Delivered !😇 soon ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} at ${address} by ${time}`);
    },
    //Ordering pasta function for checking spread operatior if we have multiple parameters (Real-world Example)
    orderPasta:function(ing1,ing2,ing3){
        console.log(`Pasta has 3 ingredients ${ing1} ,${ing2} and ${ing3}`);
    }
  };

  //two use cases for using spread operator
    //1.shallow copy
   const spr = [...restaurant.mainMenu];
   console.log(spr,"shallowcopy");
  //2. joining two arrays;
   const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
   console.log(menu,"join");

   //Iterables are strings,arrays,maps,sets NOT OBJECTS
   const str = 'Trinadh';
   const temp = [...str,' ','M'];
   console.log(temp);
console.log(...temp);

//prompting ingredients from user input
 const ingredients = [prompt(`Enter the ingredient 1 as of your choice`),
prompt(`Ingredient 2`),prompt(`Ingredient 3`)];
restaurant.orderPasta(...ingredients);

//objects since ES2018 Spread operators also works on objects even though spread operator are not iterables.
const newResturant = {FoundedIn:'1998',...restaurant,founder:'Trinadh Machanavazzala'};
console.log(newResturant);
  //shallowcopy;
  const restaurantCopy = {...restaurant};
   restaurantCopy.name = `Risturantoo Roma`;
   console.log(restaurantCopy.name,"new");
   console.log(restaurant.name,"prev");