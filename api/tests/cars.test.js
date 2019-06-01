const mongoose = require('mongoose');
const Car = require('../models/car');

const mockCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    milage: 1000,
    user_id: 'some-user-id'
}

describe('cars.controller', () => {
    let connection;

    beforeAll(async () => {
        connection = await mongoose.connect('mongodb://localhost/admin-panel-web-test', { useNewUrlParser: true });
    });

    afterAll(async () => {
        await connection.close();
        done();
    });

    it('Should insert a car', async () => {
        await new Car(mockCar).save();
        const insertedCar = await Car.findOne(mockCar);
        expect(insertedCar.make).toEqual(mockCar.make);
    });

    it('Should update a car', async () => {
        await Car.findOneAndUpdate(mockCar, { make: 'Tesla' }, {useFindAndModify: false});
        mockCar.make = 'Tesla';
        const updatedCar = await Car.findOne(mockCar);
        expect(updatedCar.make).toEqual(mockCar.make);
    });

    it('Should delete a car', async () => {
        await Car.findOneAndRemove({ model: mockCar.model })
        const deletedCar = await Car.findOne(mockCar);
        expect(deletedCar).toEqual(null);
    });
});