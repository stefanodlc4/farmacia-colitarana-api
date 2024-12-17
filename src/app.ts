import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/proveedores', proveedorRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.log('Error al conectar con la base de datos',error);
    }
}