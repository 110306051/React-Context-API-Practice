import { createContext } from 'react'

export const ShoppingCartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    updateItem: (id, amount) => {},
})
