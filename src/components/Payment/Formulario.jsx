import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";


const Formulario = () => {

    const { registe, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre y Apellido</label>
                    <input type="text" name="" />
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="text" name="" />
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text" name="" />
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" name="" />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Formulario