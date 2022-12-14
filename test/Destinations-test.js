import { expect } from 'chai';
import Destinations from '../src/Destinations';



describe('Destinations', () => {
    let destinationRepo;
    let destinationData;

    beforeEach(() => {
     destinationData = [   {
            id: 1,
                destination: "Lima, Peru",
                    estimatedLodgingCostPerDay: 70,
                        estimatedFlightCostPerPerson: 400,
                            image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
                                alt: "overview of city buildings with a clear sky"
        },
        {
            id: 2,
                destination: "Stockholm, Sweden",
                    estimatedLodgingCostPerDay: 100,
                        estimatedFlightCostPerPerson: 780,
                            image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                                alt: "city with boats on the water during the day time"
        },
        {
            id: 3,
                destination: "Sydney, Austrailia",
                    estimatedLodgingCostPerDay: 130,
                        estimatedFlightCostPerPerson: 950,
                            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                                alt: "opera house and city buildings on the water with boats"
        },
        {
            id: 4,
                destination: "Cartagena, Colombia",
                    estimatedLodgingCostPerDay: 65,
                        estimatedFlightCostPerPerson: 350,
                            image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                                alt: "boats at a dock during the day time"
        },
        {
            id: 5,
                destination: "Madrid, Spain",
                    estimatedLodgingCostPerDay: 150,
                        estimatedFlightCostPerPerson: 650,
                            image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                                alt: "city with clear skys and a road in the day time"
        },
        {
            id: 6,
                destination: "Jakarta, Indonesia",
                    estimatedLodgingCostPerDay: 70,
                        estimatedFlightCostPerPerson: 890,
                            image: "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                                alt: "lit up city at night"
        }
    ];

        destinationRepo = new Destinations(destinationData)
    });

    it('should be a function', function () {
        expect(Destinations).to.be.a('function');
    });

    it('should be an instance of Destinations', function () {
        expect(destinationRepo).to.be.an.instanceOf(Destinations);
    });

    it('should have a destination id', () => {
        expect(destinationRepo.destinationsData[0].id).to.equal(1);
    });

    it('should have a destination', () => {
        expect(destinationRepo.destinationsData[0].destination).to.equal("Lima, Peru");
    });

    it('should have a estimatedLodgingCostPerDay ', () => {
        expect(destinationRepo.destinationsData[0].estimatedLodgingCostPerDay).to.equal(70);
    });

    it('should have a estimatedFlightCostPerPerson ', () => {
        expect(destinationRepo.destinationsData[0].estimatedFlightCostPerPerson).to.equal(400);
    });

    













    });