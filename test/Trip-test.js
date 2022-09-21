import { expect } from 'chai';
import Trip from '../src/Trip';



describe('Trip', () => {
  let tripRepo;
  let tripData;

    beforeEach(() => { 
        tripData = [
        {
        id: 1,
        userID: 44,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: []
        },
       {
        id: 2,
        userID: 35,
        destinationID: 25,
        travelers: 5,
        date: "2022/10/04",
        duration: 18,
        status: "approved",
        suggestedActivities: []
       },
        {
            id: 3,
            userID: 3,
            destinationID: 22,
            travelers: 4,
            date: "2022/05/22",
            duration: 17,
            status: "approved",
            suggestedActivities: []
        },
        {
            id: 4,
            userID: 43,
            destinationID: 14,
            travelers: 2,
            date: "2022/02/25",
            duration: 10,
            status: "approved",
            suggestedActivities: []
        },
        {
            id: 5,
            userID: 42,
            destinationID: 29,
            travelers: 3,
            date: "2022/04/30",
            duration: 18,
            status: "approved",
            suggestedActivities: []
        },
        {
            id: 6,
            userID: 29,
            destinationID: 35,
            travelers: 3,
            date: "2022/06/29",
            duration: 9,
            status: "approved",
            suggestedActivities: []
        },
        {
            id: 7,
            userID: 37,
            destinationID: 17,
            travelers: 5,
            date: "2022/5/28",
            duration: 20,
            status: "approved",
            suggestedActivities: []
        }
        ];
        tripRepo = new Trip(tripData)       
    });

    it('should be a function', function () {
        expect(Trip).to.be.a('function');
    });
    
    it('should be an instance of Trip', () => {
        expect(tripRepo).to.be.an.instanceOf(Trip);
    });
    
    it('should have a trip id', () => {
        expect(tripRepo.tripData[0].id).to.equal(1);
    });

    it('should have a user id', () => {
        expect(tripRepo.tripData[0].userID).to.equal(44);
    });

    it('should have a destination id', () => {
        expect(tripRepo.tripData[0].destinationID).to.equal(49);
    });

    it('should have a date', () => {
        expect(tripRepo.tripData[0].date).to.equal("2022/09/16");
    });

    it('should have ammount of travelers', () => {
        expect(tripRepo.tripData[0].travelers).to.equal(1);
    });

    it('should have a status of approved or not approved', () => {
        expect(tripRepo.tripData[0].status).to.equal('approved');
    });











})