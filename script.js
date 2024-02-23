'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
  }
};

restaurant.orderDelivery({
  time:'22:30',
  address:'Detroit Metro Wayne County',
  mainIndex: 2,
  starterIndex: 2
})

console.log(restaurant.orderDelivery({address:'515 E 7th St Apt 702-3,Maryville Missouri'}))

//traditional way
let arr = [1,2,3];
console.log(arr[0],arr[1],arr[2],"checkerrrrr");
const [x,y,z] = arr;

//destructing...
let [main,,secondary] = restaurant.categories;
console.log(main,secondary,"before swapping");


//swapping variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary ,"swapped");

//swapping with destructing

[main,secondary] = [secondary,main];
console.log(main,secondary,"destructing");
const [starterIn , mainIn] = restaurant.order(0,2);
console.log(starterIn, mainIn);

//accessing the nested arrays with destructuring...
let [,,,,g] = restaurant.starterMenu;
console.log(g);


let defArray = ["Javascript" , "Java"]
let [a,b,c] = defArray;
console.log(a,b,c); //c returns undefined

//setting up default values by the time of declaring the variable.
let [d=1,e=1,f=1] = defArray;
console.log(d,e,f); 

//object destructuring
const {name,openingHours,categories} = restaurant;
console.log(name,"name");
console.log(openingHours,"OH");
console.log(categories,"cat");


//mutating variables while destructuring 
let aIn = 23,bIn = 7;
const obj = {aIn:2,bIn:3,cIn:4};
({aIn,bIn} = obj);
console.log(aIn,bIn);

//nested objects
const {fri} = openingHours;
console.log(fri);

//retrieving the open/close ones
const{fri:{open,close}} = openingHours;
console.log(open,close);
