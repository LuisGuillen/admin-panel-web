const mongoose = require('mongoose');
const Part = require('../models/part');

const mockPart = {
    name: 'V8 motor',
    description: 'V8 motor 5.0L for mustang',
    status: 1,
    car_id: 'some-car-id-'
}

describe('parts.controller', () => {
    let connection;

    beforeAll(async () => {
        connection = await mongoose.connect('mongodb://localhost/admin-panel-web-test', { useNewUrlParser: true });
    });

    afterAll(async () => {
        await connection.close();
        done();
    });

    it('Should insert a part', async () => {
        await new Part(mockPart).save();
        const insertedPart = await Part.findOne(mockPart);
        expect(insertedPart.name).toEqual(mockPart.name);
    });

    it('Should update a part', async () => {
        await Part.findOneAndUpdate(mockPart, { name: 'Tesla' }, {useFindAndModify: false});
        mockPart.name = 'Tesla';
        const updatedPart = await Part.findOne(mockPart);
        expect(updatedPart.name).toEqual(mockPart.name);
    });

    it('Should delete a part', async () => {
        await Part.findOneAndRemove({ name: mockPart.name })
        const deletedPart = await Part.findOne(mockPart);
        expect(deletedPart).toEqual(null);
    });
});