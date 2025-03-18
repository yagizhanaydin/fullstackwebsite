const pool = new Pool({
    host: 'localhost',
    user: 'postgres', // Burada 'postgres' PostgreSQL'in varsayılan kullanıcı adıdır.
    password: '12345', 
    database: 'postresql', 
    max: 20, 
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000, 
});
