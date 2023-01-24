// Get the details of an airport
// - Create an Airport class
// - Have a getInfoFromIATA() method on the Airport class which returns an airport details given its iata code
// - Have a getInfoFromICAO() method on the Airport class which returns an airport details given its icao code
// - Use Promises for async calls.
// - Use the following API : https://rapidapi.com/Active-api/api/airport-info

// Example :

// Airport.getInfoFromIATA("HYD")
// Airport.getInfoFromICAO("HYD")

// Returns
/*
{
    "id": 3081,
    "iata": "HYD",
    "icao": "VOHS",
    "name": "Rajiv Gandhi International Airport",
    "location": "Hyderabad, Telangana, India",
    "street_number": "",
    "street": "",
    "city": "Hyderabad",
    "county": "Ranga Reddy",
    "state": "Telangana",
    "country_iso": "IN",
    "country": "India",
    "postal_code": "500409",
    "phone": "+91 40 6654 6370",
    "latitude": 17.240263,
    "longitude": 78.42938,
    "uct": 330,
    "website": "http://www.hyderabad.aero/"
}
*/

class Airport {
    getInfoFromIATA = (iata_code) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4f6c947cfbmsh40b7bbd9eb0c8fap1bd2c1jsn09b9773153a8',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };
        
        fetch(`https://airport-info.p.rapidapi.com/airport?iata=${iata_code}`, options)
            .then(response => response.json())
            .then(response => console.log(`IATA: ${response.iata}`))
            .catch(err => console.error(err));

    } 

    getInfoFromICAO = (icao_code) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4f6c947cfbmsh40b7bbd9eb0c8fap1bd2c1jsn09b9773153a8',
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
            }
        };
        
        fetch(`https://airport-info.p.rapidapi.com/airport?icao=${icao_code}`, options)
            .then(response => response.json())
            .then(response => console.log(`ICAO: ${response.icao}`))
            .catch(err => console.error(err));
    }
}


new Airport().getInfoFromIATA('BBI')
// new Airport().getInfoFromICAO('BBI')