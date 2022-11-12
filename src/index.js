const express = require("express");
const morgan = require("morgan");
const Menu = require("./models/Menu");
require('dotenv').config()
const db = require("./database");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

//DEFAULT
app.get("/", (req, res) => {
  res.end("Funciona!");
});

//RUTAS
//LISTAR ITEMS
app.get("/menu", async (req, res) => {
  try {
    const menuList = await Menu.find();
    // res.send(menuList);
    res.status(200).json({
      status: "Listado de items",
      data: menuList,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: error.message,
    });
  }
});

//TRAER UN ITEM
app.get("/menu/:id", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    // res.send(menu);

    menu
      ? ((statusCode = 200), (statusMesssage = "SI"))
      : ((statusCode = 400), (statusMesssage = "NO"));

    res.status(statusCode).json({
      status: statusMesssage,
      data: menu,
    });

    // res.status(200).json({
    //   status: "Item encontrado",
    //   data: menu,
    // });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: error.message,
    });
  }
});

//AGREGAR ITEM
app.post("/menu", async (req, res) => {
  try {
    const menu = Menu(req.body);
    const menuSave = await menu.save();
    //res.send(menuSave);
    res.status(200).json({
      status: "Se grabo el item",
      data: menuSave,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: error.message,
    });
  }
});

//EDITAR ITEM
app.post("/menu/:id", async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    //res.send(menu);
    res.status(200).json({
      status: menu ? "Se actualizo el valor" : "No existe el ID",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: error,
    });
  }
});

//BORRAR ITEM
app.delete("/menu/:id", async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    //res.send(menu);
    res.status(200).json({
      status: menu ? "Se elimino el registro" : "No existe el ID",
      data: menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: error,
    });
  }
});

app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
