import mysql2 from 'mysql2'
const mysql = mysql2
const dbConnect = () => {
  const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASS_SECRET,
    database: 'university'
  })

  connection.connect((err) => {
    if (err) {
      console.log('Error connecting to DB')
      console.log(err)
      return
    }
    console.log('Connected to DB')
  })
}

export default dbConnect
