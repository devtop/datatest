console.log("Loaded loadData.js");

// const jsonData= require('./data.json');
// console.log(jsonData);

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
