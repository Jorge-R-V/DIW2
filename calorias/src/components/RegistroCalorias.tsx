type RegistroCaloriasProps = {
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
    totalFat: number
    totalSugar: number
    totalProtein: number
    totalCarbs: number
    totalFiber: number
    totalSodium: number
}

export default function RegistroCalorias({
    caloriesConsumed, 
    caloriesBurned, 
    netCalories, 
    totalFat, 
    totalSugar,
    totalProtein,
    totalCarbs,
    totalFiber,
    totalSodium
} : RegistroCaloriasProps) {
    
    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-black text-white text-center tracking-tight">
                Dashboard Nutricional
            </h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 bg-gray-900/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700 shadow-2xl">
                <div className="text-white font-bold grid grid-cols-1 gap-1 text-center">
                    <span className="font-black text-6xl text-lime-400">{caloriesConsumed}</span>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Consumidas</span>
                </div>
                <div className="text-white font-bold grid grid-cols-1 gap-1 text-center border-x border-gray-700 px-10">
                    <span className="font-black text-6xl text-orange-400">{caloriesBurned}</span>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Quemadas</span>
                </div>
                <div className="text-white font-bold grid grid-cols-1 gap-1 text-center">
                    <span className="font-black text-6xl text-sky-400">{netCalories}</span>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Balance</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-yellow-500/50 transition-colors">
                    <span className="block font-black text-3xl text-yellow-400">{totalFat} g</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Grasas</span>
                </div>
                
                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-purple-500/50 transition-colors">
                    <span className="block font-black text-3xl text-purple-400">{totalSugar} g</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Azúcares</span>
                </div>

                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-red-500/50 transition-colors">
                    <span className="block font-black text-3xl text-red-400">{totalProtein} g</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Proteína</span>
                </div>

                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-blue-500/50 transition-colors">
                    <span className="block font-black text-3xl text-blue-400">{totalCarbs} g</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Carbos</span>
                </div>

                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-emerald-500/50 transition-colors">
                    <span className="block font-black text-3xl text-emerald-400">{totalFiber} g</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Fibra</span>
                </div>

                <div className="bg-gray-900/40 p-4 rounded-2xl border border-gray-800 text-center hover:border-pink-500/50 transition-colors">
                    <span className="block font-black text-3xl text-pink-400">{totalSodium} mg</span>
                    <span className="text-[10px] uppercase font-bold text-slate-500">Sodio</span>
                </div>
            </div>
        </div>
    )
}
