
const arr = [1,2,...[3,4]];

const [a,b,...others] = [1,2,4,5,6];
console.log(a,b,others);
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


const [pizza, risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);


console.log(3 || 'Trinadh' ,"Checker");

console.log(true || 0);
console.log(undefined || null);
console.log('' || 'Jonas');

// restaurant.numGuests is 0
const guests = restaurant.numGuests || 10;
console.log(guests);
//THe nullish  coalescing Operator it works in the form as it returns everything falsy value except null or undefined...

const guestsers = restaurant.numGuests ?? 10;
console.log(guestsers,"nullish");

/**
 * Logical operator 
 * 
 * 
 * 
 */

//for the example we have creating 2 objects

const res1 = {
  name:'Trinad',
  numGuests : 20,
}
const res2 = {
  name:'Tri',
  Owner:'Roger Izzah'
}
//if the first value i.e., res1.numGuests is truthy value it immediately returns the first value & second value will not be evaluated.


res2.numOfGuests = res1.numGuests || 10; 
console.log(res2); 