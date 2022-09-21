import { expect } from 'chai';
import Traveler from '../src/Traveler';



describe('Trip', () => {
    let travelerData;
    let travelerRepo;


    beforeEach(() => {
       travelerData = [
        {
            id: 1,
                name: "Ham Leadbeater",
                    travelerType: "relaxer"
        },
        {
            id: 2,
                name: "Rachael Vaughten",
                    travelerType: "thrill-seeker"
        },
        {
            id: 3,
                name: "Sibby Dawidowitsch",
                    travelerType: "shopper"
        },
        {
            id: 4,
                name: "Leila Thebeaud",
                    travelerType: "photographer"
        },
        {
            id: 5,
                name: "Tiffy Grout",
                    travelerType: "thrill-seeker"
        },
        {
            id: 6,
                name: "Laverna Flawith",
                    travelerType: "shopper"
        },
        {
            id: 7,
                name: "Emmet Sandham",
                    travelerType: "relaxer"
        }
       ];
      
           travelerRepo = new Traveler(travelerData)
    });

    it('should be a function', function () {
        expect(Traveler).to.be.a('function');
    });

    it('should be an instance of Traveler', () => {
        expect(travelerRepo).to.be.an.instanceOf(Traveler);
    });

    it('should have a trip id', () => {
        expect(travelerRepo.travelerData[0].id).to.equal(1);
    });

    it('should have a name', () => {
        expect(travelerRepo.travelerData[0].name).to.equal("Ham Leadbeater");
    });

    it('should have a travelerType', () => {
        expect(travelerRepo.travelerData[0].travelerType).to.equal("relaxer");
    });


})