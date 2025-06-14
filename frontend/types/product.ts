export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  orders: number
  category: string
  brand: string
  features: string[]
  description: string
  inStock: boolean
  freeShipping: boolean
  discount?: number
}

export interface CartItem {
  product: Product
  quantity: number
  selectedVariant?: {
    size?: string
    color?: string
    material?: string
  }
}

export interface FilterState {
  categories: string[]
  brands: string[]
  features: string[]
  priceRange: [number, number]
  condition: string
  ratings: number[]
  manufacturer: string[]
}
