import { useState, useEffect, useMemo } from "react"
import { v4 as uuidv4 } from 'uuid'
import type { Activity } from "../types"

export const useActivity = () => {

    const initialActivities = () : Activity[] => {
        const localStorageActivities = localStorage.getItem('activities')
        return localStorageActivities ? JSON.parse(localStorageActivities) : []
    }

    const [activities, setActivities] = useState<Activity[]>(initialActivities)
    const [activeId, setActiveId] = useState<Activity['id']>('')

    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(activities))
    }, [activities])

    const saveActivity = (activity : Activity) => {
        if(activeId) {
            setActivities(activities.map( item => item.id === activeId ? activity : item ))
            setActiveId('')
        } else {
            setActivities([...activities, {...activity, id: uuidv4()}])
        }
    }

    const deleteActivity = (id: Activity['id']) => {
        setActivities(activities.filter(activity => activity.id !== id))
    }

    const restartApp = () => {
        setActivities([])
    }

    const netCalories = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + (activity.calories * (activity.quantity || 1)) : total - activity.calories, 0
    ), [activities])

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + (activity.calories * (activity.quantity || 1)) : total, 0
    ), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 2 ? total + activity.calories : total, 0
    ), [activities])

    const totalFat = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.fat || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const totalSugar = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.sugar || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const totalProtein = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.protein || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const totalCarbs = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.carbs || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const totalFiber = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.fiber || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const totalSodium = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? total + ((activity.sodium || 0) * (activity.quantity || 1)) : total, 0
    ), [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return {
        activities,
        activeId,
        setActiveId,
        saveActivity,
        deleteActivity,
        restartApp,
        netCalories,
        caloriesConsumed,
        caloriesBurned,
        totalFat,
        totalSugar,
        totalProtein,
        totalCarbs,
        totalFiber,
        totalSodium,
        isEmptyActivities
    }
}
