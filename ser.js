    const
  express = require('express'),
  mysql = require('mysql'),
  bcrypt = require('bcryptjs'),
  bp=require("body-parser"),
  port = 3000,
  app = express(),
  routBase = '/Compiaint',
  fs = require('fs')
app.use(bp.json())
 app.listen(port, () => console.log(`Server Up on ${port}`))
 const con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     database: 'data',
     password: '12345'
 });

 con.connect(function (err) {
     if (err) throw err;
     console.log("Connected!");
 });



 app.post(routBase, function (req, res, next) {
     const name = req.body.name;
     const phone = req.body.phone;
     const email = req.body.email;
     const case_number = req.body.case_number;
     const subject = req.body.subject;
     const admin_id = req.body.admin_id;
     const text = req.body.text;
     const pic = req.body.pic;
     console.log(pic)

     let imgpath = '';
     imgpath = './api/img' + name + '.png';
fs.writeFile(imgpath , pic , {encoding : 'base64'} , err=>{
    if(err) {
        res.sendStatus(404)
        console.log(err)
    }
})
     let sql = `INSERT INTO data.data (name,phone,email,case_number,subject,admin_id,text,pic) VALUES ('${name}', '${phone}', '${email}', '${case_number}', '${subject}', '${admin_id}, '${text}', '${imgpath}');`
     con.query(sql, (error, data) => {
         if (error) {
             console.log(error)
         } else {
             res.send(data)
         }
     })
 })