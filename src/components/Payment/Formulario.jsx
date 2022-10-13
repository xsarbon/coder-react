import { db } from "../firebase/firebase"
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { edadValidator } from "../utils/validators";
import './formStyles.css'
import { useCartContext } from "../../context/CartContext"


const Formulario = () => {
    const { cartList, totalPrice, cleanCart } = useCartContext()
    const total = totalPrice()
    const items = cartList

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            email: '@gmail.com',
            telephone: '+549'
        }
    })

    const onSubmit = (data) => {
        const salesCollection = collection(db, "salesClient");
        addDoc(salesCollection, {
            data, total, items, date: serverTimestamp()
            //error solucionado
        })
            .then((res) => {
                console.log("gracias por su compra, su ID de pago es ", res.id, "       datos guardados correctamente");
                cleanCart();
            })

        const update = items.map((prod) => {
            const updateStock = doc(db, "listProducts", prod.id)
            const stock = prod.stock - prod.quantity
            updateDoc(updateStock, { stock })

            alert("se realizo la compra. El nuevo stock es " + stock)
        })



    }


    const includeTel = watch('includeTel');
    return (
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
                    {errors.age && <p className="alerta">La edad debe estar entre 18 y 65 años</p>}
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