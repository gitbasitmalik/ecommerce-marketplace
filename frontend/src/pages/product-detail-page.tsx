"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Star, Heart, Check } from "lucide-react"
import { products } from "../lib/products"
import { useCart } from "../hooks/use-cart"

interface ProductDetailPageProps {
  productId: string
  onNavigate: (path: string) => void
}

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === productId)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => onNavigate("/products")}>Back to Products</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 6)

  return (
    <div className="container mx-auto px-4 pb-8">
      {/* Breadcrumb */}
      <div className="py-4">
        <nav className="text-sm text-gray-600 overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <button onClick={() => onNavigate("/")} className="hover:text-blue-500">
              Home
            </button>
            <span>›</span>
            <button onClick={() => onNavigate("/products")} className="hover:text-blue-500">
              Clothings
            </button>
            <span>›</span>
            <button onClick={() => onNavigate("/products")} className="hover:text-blue-500">
              Men's wear
            </button>
            <span>›</span>
            <span>Summer clothing</span>
          </div>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-base lg:text-lg font-medium">{product.name}</div>
                <div className="text-sm mt-2">Product Image</div>
              </div>
            </div>
            <Badge className="absolute top-4 left-4 bg-green-500">
              <Check className="w-3 h-3 mr-1" />
              In stock
            </Badge>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {[...Array(6)].map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-md overflow-hidden border-2 bg-gray-100 flex items-center justify-center ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <div className="text-xs text-gray-500">{index + 1}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 lg:space-y-6">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">• {product.reviews} reviews</span>
              <span className="text-sm text-gray-500">• {product.orders} sold</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4">
              <span className="text-2xl lg:text-3xl font-bold text-red-500">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">${product.originalPrice?.toFixed(2)}</span>
              <span className="text-lg text-gray-500">$78.00</span>
            </div>
            <div className="text-sm text-gray-600">
              <div>50-100 pcs • 100-200 pcs • 200+ pcs</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={handleAddToCart} className="w-full bg-blue-500 hover:bg-blue-600" size="lg">
              Send inquiry
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Seller's profile
            </Button>
            <Button variant="ghost" className="w-full text-blue-500" size="lg">
              <Heart className="w-4 h-4 mr-2" />
              Save for later
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 text-xs lg:text-sm">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="seller">About seller</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card className="p-4 lg:p-6">
            <p className="text-gray-700 mb-4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Duis aute irure dolor in reprehenderit</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card className="p-4 lg:p-6">
            <p>Customer reviews will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card className="p-4 lg:p-6">
            <p>Shipping information will be displayed here.</p>
          </Card>
        </TabsContent>

        <TabsContent value="seller">
          <Card className="p-4 lg:p-6">
            <p>Seller information will be displayed here.</p>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div>
        <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Related products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {relatedProducts.map((relatedProduct) => (
            <Card
              key={relatedProduct.id}
              className="p-3 lg:p-4 text-center cursor-pointer"
              onClick={() => onNavigate(`/products/${relatedProduct.id}`)}
            >
              <div className="w-full h-16 lg:h-24 bg-gray-100 rounded mb-2 lg:mb-3 flex items-center justify-center">
                <div className="text-xs text-gray-500 text-center px-1">{relatedProduct.name.substring(0, 10)}...</div>
              </div>
              <div className="text-xs lg:text-sm font-medium mb-1">
                ${relatedProduct.price.toFixed(2)}-${(relatedProduct.price + 40).toFixed(2)}
              </div>
              <div className="text-xs text-gray-600 line-clamp-2">{relatedProduct.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
