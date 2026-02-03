import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Activity } from "../types"
import { categories } from "../data/categories"
import { products } from "../data/products"

type FormularioActividadesProps = {
    saveActivity: (activity: Activity) => void
    activeId: Activity['id']
    activities: Activity[]
}

const initialState : Activity = {
    id: '',
    category: 1,
    name: '',
    calories: 0,
    fat: 0,
    sugar: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
    sodium: 0,
    quantity: 1
}

export default function FormularioActividades({saveActivity, activeId, activities} : FormularioActividadesProps) {

    const [activity, setActivity] = useState<Activity>(activeId ? 
        activities.find( stateActivity => stateActivity.id === activeId)! : 
        initialState
    )

    const [baseNutrients, setBaseNutrients] = useState({
        calories: activity.calories / (activity.quantity || 1),
        fat: activity.fat / (activity.quantity || 1),
        sugar: activity.sugar / (activity.quantity || 1),
        protein: activity.protein / (activity.quantity || 1),
        carbs: activity.carbs / (activity.quantity || 1),
        fiber: activity.fiber / (activity.quantity || 1),
        sodium: activity.sodium / (activity.quantity || 1),
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id
        const value = e.target.value
        const isNumberField = ['category', 'calories', 'fat', 'sugar', 'quantity', 'protein', 'carbs', 'fiber', 'sodium'].includes(id)

        if (id === 'quantity' && activity.category === 1) {
            const newQuantity = +value
            
            if (newQuantity <= 0) {
                setActivity({ ...activity, quantity: newQuantity })
                return
            }

            setActivity({
                ...activity,
                quantity: newQuantity,
                calories: Math.round(baseNutrients.calories * newQuantity),
                fat: Number((baseNutrients.fat * newQuantity).toFixed(2)),
                sugar: Number((baseNutrients.sugar * newQuantity).toFixed(2)),
                protein: Number((baseNutrients.protein * newQuantity).toFixed(2)),
                carbs: Number((baseNutrients.carbs * newQuantity).toFixed(2)),
                fiber: Number((baseNutrients.fiber * newQuantity).toFixed(2)),
                sodium: Math.round(baseNutrients.sodium * newQuantity),
            })
            return
        }

        const newValue = isNumberField ? +value : value

        if (['calories', 'fat', 'sugar', 'protein', 'carbs', 'fiber', 'sodium'].includes(id) && activity.category === 1) {
            const qty = activity.quantity || 1
            setBaseNutrients({
                ...baseNutrients,
                [id]: +value / qty
            })
        }

        setActivity({
            ...activity,
            [id]: newValue
        })
    }

    const handleProductSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === 'manual') {
            const resetActivity = {
                ...initialState,
                category: activity.category,
                id: activity.id
            }
            setActivity(resetActivity)
            setBaseNutrients({
                calories: 0, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0
            })
            return
        }

        const selectedProd = products.find(p => p.name === e.target.value)
        if(selectedProd) {
            setActivity({
                ...activity,
                name: selectedProd.name,
                calories: selectedProd.calories,
                fat: selectedProd.fat,
                sugar: selectedProd.sugar,
                protein: selectedProd.protein,
                carbs: selectedProd.carbs,
                fiber: selectedProd.fiber,
                sodium: selectedProd.sodium
            })
            setBaseNutrients({
                calories: selectedProd.calories,
                fat: selectedProd.fat,
                sugar: selectedProd.sugar,
                protein: selectedProd.protein,
                carbs: selectedProd.carbs,
                fiber: selectedProd.fiber,
                sodium: selectedProd.sodium
            })
        }
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        saveActivity(activity)
        setActivity({
            ...initialState
        })
        setBaseNutrients({
            calories: 0, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0
        })
    }

    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="product-hint" className="font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lime-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {activity.category === 1 ? 'Selecciona un Alimento del catálogo:' : 'Selecciona un Ejercicio de la lista:'}
                </label>
                <select 
                    id="product-hint"
                    className="border border-slate-300 p-2 rounded-lg bg-lime-50"
                    onChange={handleProductSelect}
                    value=""
                >
                    <option value="" disabled>-- Haz clic para desplegar opciones --</option>
                    {products
                        .filter(p => p.category === activity.category)
                        .map(p => (
                            <option key={p.name} value={p.name}>{p.name}</option>
                        ))
                    }
                    <option disabled>──────────</option>
                    <option value="manual" className="font-bold text-lime-700">➕ Otros / Entrada Manual</option>
                </select>
                <p className="text-xs text-slate-500 italic">Al elegir "Otros", podrás escribir los datos manualmente debajo.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    {activity.category === 1 ? 'Nombre del Alimento:' : 'Nombre del Ejercicio / Actividad:'}
                </label>
                <input 
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder={activity.category === 1 ? 'Ej. Manzana, Arroz... ' : 'Ej. Correr, Yoga...'}
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className={`grid grid-cols-1 ${activity.category === 1 ? 'md:grid-cols-2' : ''} gap-5`}>
                {activity.category === 1 && (
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="quantity" className="font-bold">Cantidad / Unidades:</label>
                        <input 
                            id="quantity"
                            type="number"
                            className="border border-slate-300 p-2 rounded-lg bg-lime-50 font-bold"
                            placeholder="1, 2, 3..."
                            value={activity.quantity}
                            onChange={handleChange}
                            min="1"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">
                        {activity.category === 1 ? 'Calorías (base):' : 'Calorías Quemadas:'}
                    </label>
                    <input 
                        id="calories"
                        type="number"
                        className="border border-slate-300 p-2 rounded-lg"
                        placeholder={activity.category === 1 ? 'Ej. 100, 250' : 'Ej. 300, 500'}
                        value={activity.calories}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {activity.category === 1 && (
                <div className="space-y-5 border-t border-slate-100 pt-5 mt-5">
                    <p className="text-sm font-bold text-slate-500 uppercase">Perfil Nutricional Detallado:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="fat" className="font-bold text-sm">Grasas (g):</label>
                            <input 
                                id="fat"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Grasas"
                                value={activity.fat}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="sugar" className="font-bold text-sm">Azúcares (g):</label>
                            <input 
                                id="sugar"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Azúcares"
                                value={activity.sugar}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="protein" className="font-bold text-sm">Proteínas (g):</label>
                            <input 
                                id="protein"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Proteínas"
                                value={activity.protein}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="carbs" className="font-bold text-sm">Carbohidratos (g):</label>
                            <input 
                                id="carbs"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Carbohidratos"
                                value={activity.carbs}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="fiber" className="font-bold text-sm">Fibra (g):</label>
                            <input 
                                id="fiber"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Fibra"
                                value={activity.fiber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="sodium" className="font-bold text-sm">Sodio (mg):</label>
                            <input 
                                id="sodium"
                                type="number"
                                className="border border-slate-300 p-2 rounded-lg"
                                placeholder="Sodio"
                                value={activity.sodium}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            )}

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}
