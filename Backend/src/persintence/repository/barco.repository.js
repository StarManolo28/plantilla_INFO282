import { Barco } from "../models/Barco.js"

{/* Devuelve todos los barcos */}
export async function getBarcos_(){
    try {
        const barcos = await Barco.findAll({
          atributes: ["id", "name", "model", "image"],
        });
        return barcos
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

{/* Crea un nuevo barco */}
export async function createBarco_(barco){
    const { id, name, model, image } = barco;
    try{ 
        let newBarco = await Barco.create(
            {
            name,
            model,
            image,
            },
            {
            fields: ["name", "model", "image"],
            }
        );
      return newBarco
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

{/* Obtener un barco por ID */}
export async function getBarco_(id){
    try {
        const barco = await Barco.findOne({
          where: {
            id,
          },
        });
        return barco
      } catch (error) {
        throw new Error("Sucedio un error......")
      }
}

{/* Cambiar la información de un barco */}
export async function updateBarco_(barco){
    const {name, model, image } = barco 
    try {
        const barco = await Barco.findByPk(id);
        barco.name = name;
        barco.model = model;
        barco.image = image;
        await barco.save();
        return "Barco Modificado"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

{/* Elimina el barco por ID,
### SI DESPUES AGREGAMOS PARTES DE BARCO QUE ESTÉN
    VINCULADAS A UNA ID HAY QUE AGREGAR QUE SE ELIMINE
    TAMBIÉN ###
*/}
export async function deleteBarco_(id){
    try {
        await Barco.destroy({
            where: {
            id,
        },
        });
        return "Se elimino el barco  correctamente.. "
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}