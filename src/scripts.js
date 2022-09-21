//    ~Imports~
import './css/styles.css';
import './images/turing-logo.png';
import { fetchAll } from './apiCalls';
import { fetchSingleTraveler } from './apiCalls';


//     ~Query Selectors~
const pastTrips = document.querySelector('#pastTrips')
const todaysDate = document.querySelector('#dateDisplay')
const nameDisplay = document.querySelector('#nameDisplay')
//      ~Global Variables~
console.log('this should be one single traveler',fetchSingleTraveler(50))
let allTravelers;
let allDestinations;
let allTrips;
let singleTraveler;


//  ~Helper Functions~
function date() {
    const date = new Date();
    const zero = 0
    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    if (today < 10) {
        return `${currentYear}/${currentMonth}/${zero}${today}`
    } if (currentMonth < 10) {
        return `${currentYear}/${zero}${currentMonth}/${today}`
    }
    else {
        return `${currentYear}/${currentMonth}/${today}`
    }
}


//  ~Promises~
const getFetch = () => {
    fetchAll()
    .then((data) =>{
     allTravelers = data[0]
     allTrips = data[1]
     allDestinations = data[2]
     console.log('firstcheck',allTravelers)
     console.log('second check',allTrips)
     console.log('third check',allDestinations)
    })
}
getFetch()

const getFetchSingleTaveler = (id) => {
    fetchSingleTraveler(id)
    .then((data) => {
    singleTraveler = data
    console.log('forSingleTrav', data )
    })
}
getFetchSingleTaveler(49)

//   ~Dom Manipulation~
//Set to on load 
function timeDisplay() {
 return   todaysDate.innerText = `Today's Date Is: ${date()}`
}
function displayUsername() {
    nameDisplay.innerText = ``
}




