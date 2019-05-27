const mongoose = require('mongoose');
const User = require('../models/user');

const mockUser = {
    first_name: 'John',
    last_name: 'Connor',
    age: 34,
    type: 1
}

describe('users.controller', () => {
    let connection;

    beforeAll(async () => {
        connection = await mongoose.connect('mongodb://localhost/admin-panel-web-test', { useNewUrlParser: true });
    });

    afterAll(async () => {
        await connection.close();
        done();
    });

    it('Should insert a user', async () => {
        await new User(mockUser).save();
        const insertedUser = await User.findOne(mockUser);
        expect(insertedUser.first_name).toEqual(mockUser.first_name);
    });

    it('Should update a user', async () => {
        await User.findOneAndUpdate(mockUser, { first_name: 'Sarah' }, {useFindAndModify: false});
        mockUser.first_name = 'Sarah';
        const updatedUser = await User.findOne(mockUser);
        expect(updatedUser.first_name).toEqual(mockUser.first_name);
    });

    it('Should delete a user', async () => {
        await User.findOneAndRemove({ last_name: mockUser.last_name })
        const deletedUser = await User.findOne(mockUser);
        expect(deletedUser).toEqual(null);
    });
});