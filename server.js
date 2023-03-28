
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:password@cluster0.0n8qgpd.mongodb.net/cp17310?retryWrites=true&w=majority';

const XeHoiModel = require('./XehoiModel');

app.get('/', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let xehois = await XeHoiModel.find();

    console.log(xehois);

    res.send(xehois);

})

app.get('/add_xe', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let newCar = {
        ten: 'Car 4',
        nam: 2018,
        giaban: 515.5
    };

    let kq = await XeHoiModel.insertMany([newCar]);

    //XeHoiModel.updateOne();
    //XeHoiModel.updateMany();
    //XeHoiModel.deleteOne();
    //XeHoiModel.deleteMany();

    console.log(kq);

    let xehois = await XeHoiModel.find();

    res.send(xehois);

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

