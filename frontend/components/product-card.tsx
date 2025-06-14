"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import Link from "next/link"
import type { Product } from "../types/product"
import { useCart } from "../hooks/use-cart"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  if (viewMode === "list") {
    return (
      <Card className="p-3 lg:p-4 hover:shadow-md transition-shadow">
        <Link href={`/products/${product.id}`}>
          <div className="flex gap-3 lg:gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 lg:w-[120px] lg:h-[120px] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-xs text-center px-1">{product.name.substring(0, 15)}...</div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-1 right-1 h-6 w-6 lg:h-8 lg:w-8 p-0 hover:bg-white/80"
                onClick={(e) => e.preventDefault()}
              >
                <Heart className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm lg:text-lg mb-1 lg:mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 lg:w-4 lg:h-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs lg:text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <span className="text-xs lg:text-sm text-gray-500">• {product.orders} orders</span>
                {product.freeShipping && (
                  <Badge variant="secondary" className="text-xs text-green-600">
                    Free Shipping
                  </Badge>
                )}
              </div>

              <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-3 line-clamp-2 hidden lg:block">
                {product.description}
              </p>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg lg:text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm lg:text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <Button onClick={handleAddToCart} size="sm" className="bg-blue-500 hover:bg-blue-600 w-full lg:w-auto">
                  View details
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    )
  }

  return (
    <Card className="p-3 lg:p-4 hover:shadow-md transition-shadow group">
      <Link href={`/products/${product.id}`}>
        <div className="relative mb-3">
          <div className="w-full h-32 sm:h-40 lg:h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-xs text-center px-2">{product.name.substring(0, 25)}...</div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-6 w-6 lg:h-8 lg:w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/80"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-3 w-3 lg:h-4 lg:w-4" />
          </Button>
          {product.discount && <Badge className="absolute top-2 left-2 bg-red-500 text-xs">-{product.discount}%</Badge>}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
          </div>

          <h3 className="font-medium text-xs lg:text-sm line-clamp-2 min-h-[2rem] lg:min-h-[2.5rem]">{product.name}</h3>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm lg:text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <div className="text-xs lg:text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
              )}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            size="sm"
            className="w-full bg-blue-500 hover:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity text-xs lg:text-sm"
          >
            Add to Cart
          </Button>
        </div>
      </Link>
    </Card>
  )
}
