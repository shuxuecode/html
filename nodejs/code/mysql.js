var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT * from x_user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    console.log('The solution is: ', results[0]);
    console.log('The solution is: ', results[0].id);
    console.log('The solution is: ', results[0].username);
});

// connection.end();

// 插入数据

var  addSql = 'INSERT INTO x_user(id,username,password,create_time,update_time) VALUES(?,?,?,now(),now())';
var  addSqlParams = [11, '测试', '123456'];

connection.query(addSql, addSqlParams, function(err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log('INSERT ID:',result);    
});

connection.end();


