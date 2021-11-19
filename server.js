var http = require('http');                 // Import internal module http
var qs  = require('querystring');            // Import internal module queryParser
var pug = require('pug');                    // Import ekternal pug engine template
var url = require('url');                   // Import internal module url
var mysql = require('mysql');               // Import external module mysql 
var NodeSession = require('node-session');  // Import external module node-
const { SIGPWR, RSA_NO_PADDING } = require('constants');

// Membuat Session (objek dari NodeSession)
var session = new NodeSession({
    // Opsi-opsi konfigurasi default node-session
    secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'
});

//Alamat directory template pug
var listPug = '../template/list.pug'; 
var addFormPug = '../template/addForm.pug';
var editFormPug = '../template/editForm.pug';
var loginFormPug = '../template/loginForm.pug';

// variable yang menampung metode .createConnection
var db = mysql.createConnection({
    host        : 'localhost',
    user        : 'munir',
    password    : '1234',
    database    : 'nodedb'
});

// Memanggil metode coonec()
// connection.connect(function(error){
//     if (error) throw error;
//     console.log("Terkoneksi dengan database")
//     connection.end();
// });

// Membuat server-Htpp
var server = http.createServer(function(req, res) {
    // Mengaktifkan Session dan mendefinisikan properti session pada objek request
    session.startSession(req,res, function(){
        
        if (req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            var template2 = pug.renderFile(loginFormPug);
            res.end(template2);
            // db.query('select*from buku', function(error, result) {
            //     if (error) throw error;
            //     var template = pug.renderFile(listPug,{books:result});
            //     res.end(template);
            // });        
        }else if(req.url === '/login' && req.method === 'POST'){
            var body = '';
            req.on('data',function(data){
                body += data;
            });

            req.on ('end', function(){
                var form = qs.parse(body);
                var params = [
                    form['user_id'],
                    form['password']
                ];
                // Query ngecek jumlah data yang ditemukan berdasarkan username-password post login
                var sql = 'select count(*) as cnt from users where user_nama = ? and user_password = md5(?)';
                db.query(sql, params, function(error, result) {
                    if (error) throw error;
                    // Menampung hasil query dalam bentuk array ke var n
                    var n = result[0]['cnt'];
                    console.log(result);
                    console.log('Nilai n:'+ n);
                    // Login berhasil
                    if ( n > 0 ) {
                        // Mendaftarkan username login ke dalam var "user_id"
                        req.session.put('user_id', params[0]);
                        // Redirect ke halaman utama
                        res.writeHead(302, {'Location': '/main'});
                        res.end(); 
                    }else {
                        // Login gagal 
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        // Redirect ke hal login dengan menyertakan pesan "msg"
                        var template = pug.renderFile(loginFormPug, {msg: 'User ID atau Password salah!'});
                        res.end(template);
                    }
                })
            });
        }else if(req.url === '/logout'){
            // Memeriksa var session yang disimpan ke dalam var "user_id"
            if(req.session.has('user_id'));{
                // Menghapus var session "user_id"
                req.session.forget('user_id');
            }
            // Redirect ke form login
            res.writeHead(302, {'Location': '/'});
            res.end();
        }else if (req.url === '/main'){
            
            // Cek apa ada session      
            if (!req.session.has('user_id')) {
                // Jika tidak ada
                res.writeHead(302, {'Location': '/'});
                res.end();
            }
            var user_id = req.session.get('user_id');      
            var sql = 'select*from buku';

            db.query(sql, function(error, result) {
                if (error) throw error;
                var template = pug.renderFile(listPug, {books: result,user_id: user_id});
                res.end(template);
            });
          
        }else if (req.url === '/add'){
            switch (req.method){
                   case 'GET':
                    var template = pug.renderFile(addFormPug);
                    res.end(template);
                break;
                case 'POST':
                    var body = '';
    
                    req.on('data',function(data) {
                        body += data;
                    });
                    req.on('end',function(){
                        var form = qs.parse(body);
                        var newRow = [
                            form['buku_id'],
                            form['judul_buku'],
                            form['penulis_buku'],
                            form['penerbit_buku']
                        ];
                        var sql = 'insert into buku values(?,?,?,?)';
    
                        db.query(sql,newRow, function(error, result) {
                            if(error) throw error;
                            res.writeHead(302, {'Location': '/main'});
                            res.end();
                        });        
                    });
                break;
            }// End Switch
        }else if (url.parse(req.url).pathname === '/edit') {
            switch (req.method) {
                case 'GET':
                    var id = qs.parse(url.parse(req.url).query).id;
                    var sql = 'select * from buku where kode = ?';
    
                    db.query(sql,[id], function( err, result) {
                        if (err) throw err;
                        var template = pug.renderFile(editFormPug, {book: result[0]});
                        res.end(template);
                    });
                break;
                case 'POST':
                    var body = '';
    
                    req.on('data',function(data){
                        body += data;
                    });
                    req.on('end', function(){
                        var form = qs.parse(body);
                        var updateRow = [
                            form['judul_buku'],
                            form['penulis_buku'],
                            form['penerbit_buku'],
                            form['buku_id']
                        ];
                        var sql = 'update buku set judul=?,penulis=?,penerbit=? where kode=?';
    
                        db.query(sql, updateRow, function(error, result) {
                            if (error) throw error;
                            res.writeHead(302, {'Location': '/main'});
                            res.end();
                        });                    
                    });
                break;
            }// End switch
        }else if (url.parse(req.url).pathname === '/hapus') {
            var id = qs.parse(url.parse(req.url).query).id;
            var sql = 'delete from buku where kode = ?'; 
    
            db.query(sql, [id], function(error, result) {
                if (error) throw error;
                res.writeHead(302, {'Location': '/main'});
                res.end();
            });
        }    
    })
     
});
server.listen(5000);
console.log("Server aktif di http://localhost:5000");

// Mengirim perintah sql
// var query = 'show databases'
// connection.query(query, function(err, result){
//     if (err){
//         console.log("Koneksi ke server mysql gagal");
//         throw error;
//     }
//     console.log("Koneksi ke server Mysql berhasil\n");
//     console.log("Hasil Query :");
//     console.log(result);
// });
// connection.end();