import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize('TodoCollection', 'root', '1234', {
    dialect: 'mysql',
    models: [path.join(__dirname, '../model')],
});

export default sequelize;