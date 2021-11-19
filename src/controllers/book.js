const model = require('../model/index');
const controller = {};
const { Op } = require('sequelize');

controller.getAll = async function(req,res) {
    try {
        let buku = await model.book.findAll()       
            if(buku.length > 0) {
                res.status(200).json({
                    message: 'Berhasil mengambil data',
                    data: buku
                })
            }else{
                res.status(200).json({
                    message: 'Tidak ada data',
                    data: []
                })
            }   
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getById = async function(req,res){
    try {
        let buku = await model.book.findAll({
            where: {
                ISBN: req.params.id
            }
        })
        if (buku.length > 0) {
            res.status(200).json({
                message: "Berhasil mengambil 1 data",
                data: buku
            })
        }else{
            res.status(200).json({
                message: "Data tidak ditemukan",
                data:[]
            })
        }        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
controller.doSave = async function(req,res){
    try {
        let buku = await model.book.create({
            ISBN: req.body.isbn,
            Title: req.body.title,
            Author: req.body.author,
            Publisher: req.body.publisher,
            Year: req.body.year,
            Price: req.body.price,
            Category: req.body.category,
            Stock: req.body.stock
        })
        res.status(201).json({
            message: "Data telah tersimpan",
            data: buku
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
controller.doUpdate = async function(req,res){
   try {
       let buku = await model.book.update({
        Title: req.body.title,
        Author: req.body.author,
        Publisher: req.body.publisher,
        Year: req.body.year,
        Price: req.body.price,
        Category: req.body.category,
        Stock: req.body.stock
       },{
           where: {
               ISBN: req.params.id
           }
       })
       res.status(200).json({
           message: "Data telah ter-update"           
       })
   } catch (error) {
       res.status(404).json({
           message: error.message
       })
   } 
}
controller.doDelete = async function(req,res){
    try {
        let buku = await model.book.destroy({
            where: {
                ISBN: req.params.id
            }
        })
        res.status(200).json({
            message: "Data telah terhapus"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
controller.getSearch = async function(req,res){
    const search = req.query.keyword;
    try {
        let buku = await model.book.findAll({
            where: {
                [Op.or]: [{
                    Title: {
                        [Op.like]: '%'+search+'%'
                    }
                },{
                   Author: {
                       [Op.like]: '%'+search+'%'
                   }
                }]
            }
        })
        if (buku.length > 0){
            res.status(200).json({
                message: "Berhasil menemukan data",
                data: buku
            })
        }else{
            res.status(200).json({
                message: "Data tidak ditemukan"
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;