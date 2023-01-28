import express from "express";

const app = express();

app.get('/', (req,res) => {
    res.json({m: "Hola lola"})
})

app.listen(5000,() => console.log("Estoy corriendo"))