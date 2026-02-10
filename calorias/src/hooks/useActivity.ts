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

    const netCalories = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + activity.calories : total - activity.calories, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const caloriesConsumed = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + activity.calories : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const caloriesBurned = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 2 ? total + activity.calories : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalFat = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.fat || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalSugar = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.sugar || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalProtein = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.protein || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalCarbs = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.carbs || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalFiber = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.fiber || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

    const totalSodium = useMemo(() => {
        const total = activities.reduce((total, activity) => 
            activity.category === 1 ? total + (activity.sodium || 0) : total, 0
        )
        return Number(total.toFixed(2))
    }, [activities])

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
