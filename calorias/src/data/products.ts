import type { Activity } from "../types"

export const products : Omit<Activity, 'id'>[] = [

    { category: 1, name: 'Manzana', calories: 95, fat: 0.3, sugar: 19, protein: 0.5, carbs: 25, fiber: 4.4, sodium: 2, quantity: 1 },
    { category: 1, name: 'Plátano', calories: 105, fat: 0.4, sugar: 14, protein: 1.3, carbs: 27, fiber: 3.1, sodium: 1, quantity: 1 },
    { category: 1, name: 'Huevo', calories: 78, fat: 5, sugar: 0.6, protein: 6.3, carbs: 0.6, fiber: 0, sodium: 62, quantity: 1 },
    { category: 1, name: 'Pechuga de Pollo', calories: 165, fat: 3.6, sugar: 0, protein: 31, carbs: 0, fiber: 0, sodium: 74, quantity: 1 },
    { category: 1, name: 'Arroz Blanco', calories: 130, fat: 0.3, sugar: 0.1, protein: 2.7, carbs: 28, fiber: 0.4, sodium: 1, quantity: 1 },
    { category: 1, name: 'Leche Entera', calories: 122, fat: 6, sugar: 9, protein: 6.8, carbs: 9.6, fiber: 0, sodium: 88, quantity: 1 },
    { category: 1, name: 'Aguacate', calories: 160, fat: 15, sugar: 0.7, protein: 2, carbs: 9, fiber: 7, sodium: 7, quantity: 1 },
    { category: 1, name: 'Chocolate Negro 1 onza', calories: 120, fat: 8, sugar: 6, protein: 1.5, carbs: 10, fiber: 2, sodium: 4, quantity: 1 },
    { category: 1, name: 'Yogurt Griego', calories: 115, fat: 6, sugar: 4.5, protein: 10, carbs: 5, fiber: 0, sodium: 45, quantity: 1 },
    { category: 1, name: 'Galleta de Avena', calories: 110, fat: 4, sugar: 5, protein: 2, carbs: 16, fiber: 1.5, sodium: 90, quantity: 1 },
    { category: 1, name: 'Avena (100g)', calories: 389, fat: 6.9, sugar: 0, protein: 16.9, carbs: 66, fiber: 10.6, sodium: 2, quantity: 1 },
    { category: 1, name: 'Almendras (28g)', calories: 164, fat: 14, sugar: 1.2, protein: 6, carbs: 6, fiber: 3.5, sodium: 1, quantity: 1 },
    { category: 1, name: 'Salmón (100g)', calories: 208, fat: 13, sugar: 0, protein: 20, carbs: 0, fiber: 0, sodium: 59, quantity: 1 },
    { category: 1, name: 'Brócoli (100g)', calories: 34, fat: 0.4, sugar: 1.7, protein: 2.8, carbs: 6.6, fiber: 2.6, sodium: 33, quantity: 1 },
    { category: 1, name: 'Pan Integral (2 rebanadas)', calories: 160, fat: 2, sugar: 3, protein: 7, carbs: 28, fiber: 4, sodium: 300, quantity: 1 },
    { category: 1, name: 'Pasta (100g)', calories: 131, fat: 1.1, sugar: 0.5, protein: 5, carbs: 25, fiber: 1.1, sodium: 1, quantity: 1 },
    { category: 1, name: 'Pescado Blanco', calories: 105, fat: 2, sugar: 0, protein: 20, carbs: 0, fiber: 0, sodium: 70, quantity: 1 },


    { category: 2, name: 'Correr', calories: 300, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Caminar', calories: 150, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Bicicleta', calories: 250, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Pesas', calories: 200, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Natación', calories: 350, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Yoga', calories: 120, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Fútbol', calories: 400, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Boxeo', calories: 450, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'HIIT', calories: 400, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Pilates', calories: 180, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Crossfit', calories: 500, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Tenis', calories: 300, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 },
    { category: 2, name: 'Senderismo', calories: 250, fat: 0, sugar: 0, protein: 0, carbs: 0, fiber: 0, sodium: 0, quantity: 1 }
]
