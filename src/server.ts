import app from "./app";

const PORT: number = 3000;

const main = async () => {
    await startServer();
    app.listen(PORT,()=>{console.log(`La app esta escuchando en el puerto ${PORT}`)})
}

app.listen(PORT, ()=>{console.log(`La app esta escuchando en el puerto ${PORT}`)});