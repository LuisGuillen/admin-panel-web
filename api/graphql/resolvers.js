const User = require('../models/user');
const Car = require('../models/car');
const Part = require('../models/part');

module.exports = {
    users: async () => await User.find(),
    cars: async () => await Car.find(),
    parts: async () => await Part.find(),

    createUser: async ({ input }) => {
        const user = new User(input);
        await user.save();
        return user;
    },
    createCar: async ({ input }) => {
        const car = new Car(input);
        await car.save();
        return car;
    },
    createPart: async ({ input }) => {
        const part = new Part(input);
        await part.save();
        return part;
    },
}