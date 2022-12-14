/* Importamos la base de datos de firebase */
import { db } from "../firebase/Firebase"
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { edadValidator } from "../utils/validators";
import './formStyles.css'
import { useCartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'

/* Declaramos la funcion Formulario */
const Formulario = () => {

    /* Importamos las funciones necesarios desde el cartContext */
    const { cartList, totalPrice, cleanCart } = useCartContext()

    /* Declaramos la constante total y la igualamos a lo que devuelva la funcion totalPrice  */
    const total = totalPrice()

    /* Declaramos la constante items y la igualamos a lo que devuelva la funcion cartList  */
    const items = cartList

    /* Declaramos las funciones a utilizar de reack-hook-form y asignamos los valores por defecto que necesitamos*/
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            email: '@gmail.com',
            telephone: '+549'
        }
    })


    /* Funcion que guarda los datos de la compra y del cliente en la base de datos */
    const onSubmit = (data) => {
        const salesCollection = collection(db, "salesClient");
        addDoc(salesCollection, {
            data, total, items, date: serverTimestamp()
        })

            /* Funcion que agradece al cliente y muestra por alert el ID de su compra */
            .then((res) => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'gracias por su compra, su ID de pago es ' + res.id,
                    showConfirmButton: true,
                })

            })

        /* Funcion para actualizar el stock  */
        const update = items.map((prod) => {
            const updateStock = doc(db, "listProducts", prod.id)
            const stock = prod.stock - prod.quantity
            updateDoc(updateStock, { stock })

        })



    }

    /* Funcion para consultar al cliente si desea agregar el numero de telefono */
    const includeTel = watch('includeTel');


    return (

        /* Estructura HTML y JS que verifica si los datos ingresados se cumplen con los requisitos de seguridad */
        <div className="formPayment">
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="divForm">
                    <label>Nombre</label>
                    <input type="text" {...register('name', { required: true, maxLength: 15, minLength: 2 })} />
                    {errors.name?.type === 'required' && <p className="alerta">El campo es requerido</p>}
                    {errors.name?.type === 'maxLength' && <p className="alerta">El nombre de ser menor a 15 caracteres</p>}
                    {errors.name?.type === 'minLength' && <p className="alerta">El nombre de ser mayor a 2 caracteres</p>}
                </div>
                <div className="divForm">
                    <label>Apellido</label>
                    <input type="text" {...register('surname', { required: true, maxLength: 15, minLength: 2 })} />
                    {errors.surname?.type === 'required' && <p className="alerta">El campo es requerido</p>}
                    {errors.surname?.type === 'maxLength' && <p className="alerta">El nombre de ser menor a 15 caracteres</p>}
                    {errors.surname?.type === 'minLength' && <p className="alerta">El nombre de ser mayor a 2 caracteres</p>}
                </div>
                <div className="divForm">
                    <label>Email</label>
                    <input type="text" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                    {errors.email?.type === 'required' && <p className="alerta">El campo es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className="alerta">El formato del email es incorrecto</p>}
                </div>
                <div className="divForm">
                    <label>Direccion</label>
                    <input type="text" {...register('adress', { required: true, minLength: 5 })} />
                    {errors.adress?.type === 'required' && <p className="alerta">El campo es requerido</p>}
                    {errors.adress?.type === 'minLength' && <p className="alerta">La direccion debe contener al menos 5 caracteres</p>}
                </div>
                <div className="divForm">
                    <label>Edad</label>
                    <input required type="text" {...register('age', { required: true, validate: edadValidator })} />
                    {errors.age && <p className="alerta">La edad debe estar entre 18 y 65 a??os</p>}
                </div>
                <div className="divForm">
                    <label>Desea incluir el telefono ?</label>
                    <input className="checkbox" type="checkbox" {...register('includeTel')} />
                </div>
                <div className="divForm">
                    {includeTel && (
                        <div className="divForm telephone2">
                            <label>Telefono</label>
                            <input className="telephone" type="tel" {...register('telephone', { required: true, maxLength: 17, minLength: 9 })} />
                            {errors.telephone?.type === 'required' && <p className="alerta">El campo es requerido</p>}
                            {errors.telephone?.type === 'maxLength' && <p className="alerta">El telefono debe ser menor a 17 caracteres</p>}
                            {errors.telephone?.type === 'minLength' && <p className="alerta">El telefono debe ser mayor a 9 caracteres</p>}
                        </div>
                    )}
                </div>
                <input className="submit" type="submit" value="Continuar con el pago" />
            </form>
        </div>
    )

}

export default Formulario