const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
      if (response.status === 200){
        return response.json().then((data) => {
            const country = data.find((country)=>country.alpha2Code === countryCode);
              return country;
        })    
      } else {
        throw new Error ('Unable to fetch the puzzle')
      }
  }).then((data) => {
      return data.name
  })
  
  }
  
  //_________
  const getLocation = () => {
    return fetch ('https://ipinfo.io/json?token=95a88df5d15090').then((response) => {
      if (response.status === 200){
          return response.json();
      } else {
          throw new Error('Unable to fetch data')
      }
    });
    }
  
   
  

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
  console.log(country);
})



getLocation().then((location) => {
  console.log(`City: ${location.city}, Region: ${location.region}, Country: ${location.country}`);
}).catch((err) => {
    console.log(err);
});
