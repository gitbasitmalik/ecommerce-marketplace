"use client"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { ArrowLeft, Shield, MessageCircle, Truck } from "lucide-react"
import { useCart } from "../hooks/use-cart"

interface CartPageProps {
  onNavigate: (path: string) => void
}

export function CartPage({ onNavigate }: CartPageProps) {
  const {
    items,
    savedItems,
    updateQuantity,
    removeItem,
    saveForLater,
    moveToCart,
    getSubtotal,
    getDiscount,
    getTax,
    getTotalPrice,
  } = useCart()

  if (items.length === 0 && savedItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-xl lg:text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some products to get started</p>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => onNavigate("/products")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h1 className="text-xl lg:text-2xl font-bold">My cart ({items.length})</h1>
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto"
              onClick={() => onNavigate("/products")}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to shop
            </Button>
          </div>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <Card key={item.product.id} className="p-4">
                <div className="flex gap-3 lg:gap-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-xs text-gray-500 text-center px-1">{item.product.name.substring(0, 8)}...</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1 line-clamp-2">{item.product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Size: medium, Color: blue, Material: Plastic</p>
                    <p className="text-sm text-gray-600 mb-3">Seller: Artel Market</p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 p-0 h-auto justify-start"
                      >
                        Remove
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => saveForLater(item.product.id)}
                        className="text-blue-500 p-0 h-auto justify-start"
                      >
                        Save for later
                      </Button>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold mb-2">${(item.product.price * item.quantity).toFixed(2)}</div>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product.id, Number.parseInt(e.target.value))}
                      className="border rounded px-2 py-1 text-sm w-full"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Qty: {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Shield className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-medium">Secure payment</div>
                <div>Have you ever finally just</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-medium">Customer support</div>
                <div>Have you ever finally just</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-medium">Free delivery</div>
                <div>Have you ever finally just</div>
              </div>
            </div>
          </div>

          {/* Saved for Later */}
          {savedItems.length > 0 && (
            <div>
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Saved for later</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {savedItems.map((product) => (
                  <Card key={product.id} className="p-3 lg:p-4 text-center">
                    <div className="w-full h-24 lg:h-32 bg-gray-100 rounded flex items-center justify-center mb-3">
                      <div className="text-xs text-gray-500 text-center px-2">{product.name.substring(0, 12)}...</div>
                    </div>
                    <div className="text-sm lg:text-lg font-bold mb-1">${product.price.toFixed(2)}</div>
                    <div className="text-xs lg:text-sm text-gray-600 mb-3 line-clamp-2">{product.name}</div>
                    <Button
                      size="sm"
                      onClick={() => moveToCart(product.id)}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-xs lg:text-sm"
                    >
                      Move to cart
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <Card className="p-4 lg:p-6 lg:sticky lg:top-4">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <span>Have a coupon?</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Add coupon" className="flex-1" />
                <Button variant="outline" className="w-full sm:w-auto">
                  Apply
                </Button>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${getSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount:</span>
                <span>-${getDiscount().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Tax:</span>
                <span>+${getTax().toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 mb-4" size="lg">
              Checkout
            </Button>

            <div className="flex justify-center gap-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">Visa</span>
              <span className="px-2 py-1 bg-gray-100 rounded">MC</span>
              <span className="px-2 py-1 bg-gray-100 rounded">PayPal</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Apple Pay</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
