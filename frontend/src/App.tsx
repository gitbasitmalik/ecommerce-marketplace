"use client"

import { useState } from "react"
import { Header } from "./components/header"
import { HomePage } from "./pages/home-page"
import { ProductsPage } from "./pages/products-page"
import { ProductDetailPage } from "./pages/product-detail-page"
import { CartPage } from "./pages/cart-page"
import "./App.css"

function App() {
  const [currentPath, setCurrentPath] = useState("/")
  const [productId, setProductId] = useState<string | null>(null)

  const navigate = (path: string) => {
    if (path.startsWith("/products/")) {
      const id = path.split("/products/")[1]
      setProductId(id)
      setCurrentPath("/product-detail")
    } else {
      setCurrentPath(path)
      setProductId(null)
    }
  }

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage onNavigate={navigate} />
      case "/products":
        return <ProductsPage onNavigate={navigate} />
      case "/product-detail":
        return productId ? (
          <ProductDetailPage productId={productId} onNavigate={navigate} />
        ) : (
          <HomePage onNavigate={navigate} />
        )
      case "/cart":
        return <CartPage onNavigate={navigate} />
      default:
        return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={navigate} />
      {renderPage()}

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-blue-500 font-semibold text-lg">Brand</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Best information about the company goes here but now lorem ipsum is
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Partnership</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About Us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For users</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
              </ul>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Get app</h5>
                <div className="space-y-2">
                  <div className="h-10 w-28 bg-gray-200 rounded flex items-center justify-center text-xs">
                    App Store
                  </div>
                  <div className="h-10 w-28 bg-gray-200 rounded flex items-center justify-center text-xs">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-4">
            <span>© 2023 Ecommerce.</span>
            <div className="flex items-center space-x-2">
              <span>🇺🇸 English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
