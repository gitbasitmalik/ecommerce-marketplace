import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product } from "../types/product"

interface CartStore {
  items: CartItem[]
  savedItems: Product[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  saveForLater: (productId: string) => void
  moveToCart: (productId: string) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getSubtotal: () => number
  getDiscount: () => number
  getTax: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      savedItems: [],

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
              ),
            }
          }
          return {
            items: [...state.items, { product, quantity }],
          }
        })
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      saveForLater: (productId: string) => {
        set((state) => {
          const item = state.items.find((item) => item.product.id === productId)
          if (!item) return state

          return {
            items: state.items.filter((item) => item.product.id !== productId),
            savedItems: [...state.savedItems, item.product],
          }
        })
      },

      moveToCart: (productId: string) => {
        set((state) => {
          const savedProduct = state.savedItems.find((product) => product.id === productId)
          if (!savedProduct) return state

          return {
            savedItems: state.savedItems.filter((product) => product.id !== productId),
            items: [...state.items, { product: savedProduct, quantity: 1 }],
          }
        })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },

      getDiscount: () => {
        return 60.0 // Fixed discount for demo
      },

      getTax: () => {
        return 14.0 // Fixed tax for demo
      },

      getTotalPrice: () => {
        const subtotal = get().getSubtotal()
        const discount = get().getDiscount()
        const tax = get().getTax()
        return subtotal - discount + tax
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
