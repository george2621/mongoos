const mongoose = require('mongoose');
const User = require('./user.js');


mongoose.connect('mongodb://localhost/testdb');

async function run() {
    try {
        // const user = await User.where('age').gt(12).lt(30).where('name').equals('George').populate('bestFriend').limit(1);
        // const user = await User.deleteOne({ _id: '61f7f5b1ec1e63aadebfe09c' })
        const user = await User.findOne({ name: 'Roy' })
        // const user = await User.findById('61f7fd74f8a379192fcad1c5')
        // const user = await User.create(
        //     {
        //         name: 'Roy',
        //         age: 26,
        //         email: "george95.2621@gmail.com",
        //         hobbies: ['Weight Lifting', 'Swimming'],
        //         address: { street: 'Fazanstraat', city: 'Enschede' }
        //     })
        // user[0].bestFriend = '61f7f51bf1c8531c35c55d2d';
        // await user[0].save()
        console.log(user);
        // user.sayHi();
        console.log(user.namedEmail);
    } catch (e) {
        console.log(e.message);
    }

}

run()
