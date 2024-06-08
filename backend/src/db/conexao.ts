import conexao from 'knex';

export const knex = conexao({
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '123456',
            database: 'app_photos'   
        }
});