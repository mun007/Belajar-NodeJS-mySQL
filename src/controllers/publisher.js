const model = require('../model/index')
const controller = {}
const Op = require('sequelize')

controller.getAll = async function(req,res) {
    try {
        let publisher = await model.publisher.findAll()
        if (publisher.length > 0) {
            res.status(200).json({
                message: 'Berhasil mengambil data',
                data: publisher
            })
        }else{
            res.status(200).json({
                message: 'Data belum ada',
                data: publisher
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.doSave = async function (res,req){
    try {
        let publisher = await model.publisher.create({
            Name: req.body.nama,
            Adress: req.body.alamat,
            phone: req.body.telp,
            Url: req.body.url
        })
       if(publisher.length > 0){
           res.status(200).json({
               message: 'Data telah tersimpan'
           })
       }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
controller.doUpdate = async function (res,req){
    try {
        
    } catch (error) {
        
    }
}

module.exports = controller;