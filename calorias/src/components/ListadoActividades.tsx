import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"

type ListadoActividadesProps = {
    activities: Activity[]
    setActiveId: (id: Activity['id']) => void
    deleteActivity: (id: Activity['id']) => void
}

export default function ListadoActividades({activities, setActiveId, deleteActivity} : ListadoActividadesProps) {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '')
    , [])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Historial de Actividad
            </h2>

            {isEmptyActivities ? 
                <p className="text-center my-5 text-gray-400">No hay actividades aún...</p> : 
                
                activities.map( activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                                {categoryName(+activity.category)}
                            </p>
                            <p className="text-2xl font-bold pt-5">
                                <span className="mr-2">
                                    {activity.name.replace(/\s\(\d+\w+\)|\s\(1 unidad\)/g, '')}
                                </span>
                                {activity.category === 1 && (
                                    <span className="text-lime-600 text-sm font-black">x{activity.quantity || 1}</span>
                                )}
                            </p>
                            <p className="font-black text-4xl text-lime-500">
                                {activity.calories} {''}
                                <span>Calorías</span>
                            </p>

                            {activity.category === 1 && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 mt-4 text-slate-500 font-bold uppercase text-[10px] italic">
                                    <p>Grasas: <span className="text-yellow-600">{activity.fat || 0} g</span></p>
                                    <p>Azúcares: <span className="text-purple-600">{activity.sugar || 0} g</span></p>
                                    <p>Proteína: <span className="text-red-600">{activity.protein || 0} g</span></p>
                                    <p>Carbos: <span className="text-blue-600">{activity.carbs || 0} g</span></p>
                                    <p>Fibra: <span className="text-emerald-600">{activity.fiber || 0} g</span></p>
                                    <p>Sodio: <span className="text-pink-600">{activity.sodium || 0} mg</span></p>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => setActiveId(activity.id)}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-800"
                                />
                            </button>

                            <button
                                onClick={() => deleteActivity(activity.id)}
                            >
                                <XCircleIcon
                                    className="h-8 w-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
