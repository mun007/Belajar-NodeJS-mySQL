const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const bookRoutes = require('./src/routes/route-book');
const publisherRoutes = require('./src/routes/route-publisher');
app.use('/books', bookRoutes);
app.use('/publisher',publisherRoutes);

app.use((res, req, next)=>{
    const error = new Error('Halaman Tidak Ditemukan');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

// app.get('/product/:id', (req,res)=>{
//     res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
// })
// app.get('/main',(req,res)=>{
//     res.send('Maindata');
// })

// app.get('/add',(req,res)=>{
//     res.send('FormTaambahData');
// })
// app.post('/add',(req,res)=>{
//     res.send('TaambahData');E
// })
// app.get('/edit',(req,res)=>{
//     res.send('FormEditData');
// })
// app.put('/edit',(req,res)=>{
//     res.send('UpdateData');
// })
// app.delete('/hapus',(req,res)=>{
//     res.send('HapusData');
// })
// app.get('*',(req,res)=>{    
//     res.send('<h2> Halaman tidak ditemukan</h2>');    
// })
app.listen(port,()=>{
    console.log(`Server berjalan pada http://localhost: ${port}`);
})