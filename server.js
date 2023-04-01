
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:LYUw6K2jgVwoXBuC@cluster0.0n8qgpd.mongodb.net/cp17310?retryWrites=true&w=majority';

const XeHoiModel = require('./XehoiModel');

app.get('/', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    res.redirect('./all_car');

})

app.get('/all_car', async (req, res) => {

    let xehois = await XeHoiModel.find({});

    console.log(xehois);

    res.send(xehois);

})

app.get('/update_car/:ten', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let tenXe = req.params.ten;
    console.log(tenXe);

    let tenXeMoi = tenXe + ' Phien ban moi';

    await XeHoiModel.updateOne({ten: tenXe}, {ten: tenXeMoi});

    let xehois = await XeHoiModel.find({});

    res.send(xehois);

})

app.get('/xoa/:id', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let id = req.params.id;
    console.log(id);

    await XeHoiModel.deleteOne({_id: id});

    res.redirect('../all_car')

})

app.get('/add_xe', async (req, res) => {

    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let newCar = {
        ten: 'Car 1-4-2023',
        nam: 2023,
        giaban: 615.5
    };

    try {
        let kq = await XeHoiModel.insertMany(newCar);

        console.log(kq);
    
        // let xehois = await XeHoiModel.find();
    
        // res.send(xehois);

        res.redirect('./all_car');

    } catch(err2) {
        console.log('Err2: ' + err2);
        res.send('Err2: ' + err2);
    }
    

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

