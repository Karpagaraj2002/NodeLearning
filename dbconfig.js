const sql = require('mssql/msnodesqlv8');

const config = {
    server: "JAVIS\\SQLEXPRESS",
    database: "Node_db",
    options: {
        trustedConnection: true
    }
};

module.exports = {
    connect: () => sql.connect(config),
    sql,

}