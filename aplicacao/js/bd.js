async function connect() {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require('mysql2/promise');
    const connection = mysql.createConnetion('mysql://root:1234@localhost:3306/(nome do banco)')

    global.connection = connection;
    return connection;
}

module.exports = {}