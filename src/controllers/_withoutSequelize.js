const config = require('../configs/database/mySql');
const mysql = require('mysql');
const pool = mysql.createPool(config);
const { fail } = require('assert');
//var qs  = require('querystring');       
pool.on('error',(err)=>{
    console.console(err);
});

module.exports = {
    getAll(req,res){
        pool.getConnection(function(err, connection){
            if (err) throw err
            connection.query('select*from buku',function(error, result){
                if (error) throw error
                res.status(400).json({
                    success: true,
                    message: 'Berhasil Mengambil data',
                    data: result
                });
            });
            connection.release();
        })
    },
    getByID(req,res){
        const id = req.params.id;
        var sql = 'select*from buku where kode =  ?'
        pool.getConnection(function(err, connection){
            if(err) throw err
            connection.query(sql,[id],function(error, result) {
                if (error) throw error;
                if (result.length > 0) {
                    res.status(200).json({
                        message: 'Berhasil mengambil data by ID',
                        data: result
                    });
                }else{
                    res.status(200).json({
                        message: 'Data tidak ditemukan',
                        data: result
                    });
                }
                
                
            });
            connection.release();
        })
    },
    doSave(req,res){
        let data = {
            kode : req.body.kode,
            judul : req.body.judul,
            penulis : req.body.penulis,
            penerbit : req.body.penerbit
        }
        
        var sql = 'insert into buku set ?'
        pool.getConnection(function(err,connection) {
            if(err) throw err
            connection.query(sql,data,function(error,result) {
                if (error) throw error
                res.status(200).json({
                    success: true,
                    message: 'Data Berhasil disimpan'
                });
            });
            connection.release();
        })
    },
    doUpdate(req,res){
        let data = {            
            judul : req.body.judul,
            penulis : req.body.penulis,
            penerbit : req.body.penerbit
        }
        let id = req.body.kode;
        var sql = 'update buku set ? where kode = ?'
        pool.getConnection(function(err, connection){
            if (err) throw err
            connection.query(sql,[data,id] ,function(error, result){
                if (error) throw error
                res.status(200).json({
                    status : true,
                    message: 'Berhasil update data'
                });
            });
            connection.release();
        })
    },
    doDelete(req,res){
        let id = req.params.id
        var sql = 'delete from buku where kode = ?'

        pool.getConnection(function(err,connection){
            if (err) throw err
            connection.query(sql,[id],function(error,result){
                if (error) throw error
                res.status(200).json({
                    status: true,
                    message: 'Data Terhapus'
                });
            });
            connection.release();
        })
    }
}; 