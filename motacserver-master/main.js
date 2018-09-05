var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
var state = {
    pool: null
};
var PORT = 1440;
var HOST = 'localhost';
var USER = 'root';
var DB = 'e-attendance';
state.pool = mysql.createPool({
    connectionLimit: 100,
    user: USER,
//   host: '127.0.0.1', //ip
    host: HOST,
//   password: 'p455w0rd',
    password: '',
    database: DB,
    debug: true
});

var connection = state.pool;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//find Subjek
app.get('/subjek', function (req, res) {
    var sql = "SELECT * FROM subjek";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Pengajar
app.get('/pengajar', function (req, res) {
    var sql = "SELECT * FROM pengajar";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Bahagian
app.get('/bahagian', function (req, res) {
    var sql = "SELECT * FROM bahagian";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Jadual
app.get('/jadual', function (req, res) {
    var sql = "SELECT * FROM jadual";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Jawatan
app.get('/jawatan', function (req, res) {
    var sql = "SELECT * FROM jawatan";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Pelajar
app.get('/pelajar', function (req, res) {
    var sql = "SELECT * FROM pelajar";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Sesi
app.get('/sesi', function (req, res) {
    var sql = "SELECT * FROM sesi";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find Subpen
app.get('/subpen', function (req, res) {
    var sql = "SELECT * FROM subpen";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
//            console.log('rows: ', rows);
            res.json(rows);
        } else {
            throw err;
        }
    });
});

//find_user_by_id
app.get('/user_id', function (req, res) {
    var query = req.query;

    var sql = "SELECT * FROM sys_user WHERE usr_id = '" + query.id + "'";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
            res.json({code: '00', content: rows});
        } else {
            throw err;
        }
    });
});

//find_user_ilp
app.get('/user_id_ilp', function (req, res) {
    var query = req.query;

    var sql = "SELECT * FROM tbl_ilp WHERE usr_id = '" + query.id + "'";

    connection.query(sql, function (err, rows, field) {
        if (!err) {
            res.json({code: '00', content: rows});
        } else {
            throw err;
        }
    });
});

console.log("Magic Happens on port " + PORT);
app.listen(PORT);

