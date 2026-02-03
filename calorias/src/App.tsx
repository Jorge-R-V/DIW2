import { useEffect } from "react"
import FormularioActividades from "./components/FormularioActividades"
import ListadoActividades from "./components/ListadoActividades"
import RegistroCalorias from "./components/RegistroCalorias"
import { useActivity } from "./hooks/useActivity"

function App() {

  const {
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
  } = useActivity()

  useEffect(() => {
    if(activeId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [activeId])

  return (
    <>
      <header className="bg-lime-600 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-lime-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
              </svg>
            </div>
            <h1 className="text-xl font-black text-white uppercase tracking-tighter">
              Nutri<span className="text-lime-200">Track</span>
            </h1>
          </div>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <FormularioActividades 
            saveActivity={saveActivity}
            activeId={activeId}
            activities={activities}
            key={activeId}
          />
        </div>
      </section>

      <section className="bg-gray-800 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <RegistroCalorias 
            caloriesConsumed={caloriesConsumed}
            caloriesBurned={caloriesBurned}
            netCalories={netCalories}
            totalFat={totalFat}
            totalSugar={totalSugar}
            totalProtein={totalProtein}
            totalCarbs={totalCarbs}
            totalFiber={totalFiber}
            totalSodium={totalSodium}
          />

          <div className="mt-8 flex justify-center">
            <button
              className="bg-gray-900 hover:bg-black p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm border border-gray-700 disabled:opacity-50"
              disabled={isEmptyActivities}
              onClick={restartApp}
            >
              Reiniciar Aplicación
            </button>
          </div>
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
         <ListadoActividades 
            activities={activities}
            setActiveId={setActiveId}
            deleteActivity={deleteActivity}
         />
      </section>
    </>
  )
}

export default App
