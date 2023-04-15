const axios = require("axios");
require('dotenv').config();
const  API  = process.env.API;
const APIKEY = process.env.APIKEY;
// const PORT = process.env.PORT;


  //=============Generates 10 random workouts by muscle group========================

// const options = {
//     method: 'GET',
//     url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
//     params: {muscle: 'biceps'},
//     headers: {
//       'X-RapidAPI-Key': API,
//       'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

    //=============Searches by excercise and shows info ========================

    const options = {
      method: 'GET',
      url: 'https://exerciseapi3.p.rapidapi.com/search/',
      params: {primaryMuscle: 'pectoralis major'}, //search params
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
      }
    };
    

    //===================Original Request===========================
    // axios.request(options).then(function (response) {
    //   console.log(response.data[5]);
    // }).catch(function (error) {
    //   console.error(error);
    // });
    
    //=============Requests an exercise for param muscle at random ========================

    axios.request(options).then(function (response) {
      
      if (response.data && response.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomExercise = response.data[randomIndex];
        console.log(randomExercise);
      } else {
        console.log("No valid exercises found.");
      }
    
  
    }).catch(function (error) {
      console.error(error);
    });
    
  //   export default axios.create({
  //     baseURL: PORT
  // });