"use client"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

interface HomePageProps {
  onNavigate: (path: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Hidden on mobile, shown as horizontal scroll on tablet */}
        <aside className="w-full lg:w-64 order-2 lg:order-1">
          <div className="bg-white rounded-lg p-4">
            {/* Mobile: Horizontal scroll */}
            <div className="lg:hidden">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[
                  { name: "Automobiles", href: "/products?category=automobiles" },
                  { name: "Clothing", href: "/products?category=clothing" },
                  { name: "Electronics", href: "/products?category=electronics" },
                  { name: "Home", href: "/products?category=home" },
                  { name: "Sports", href: "/products?category=sports" },
                ].map((category) => (
                  <button key={category.name} onClick={() => onNavigate(category.href)}>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {category.name}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: Vertical list */}
            <ul className="hidden lg:block space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("/products?category=automobiles")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Automobiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=clothing")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Clothes and wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=home")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Home interiors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=electronics")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Computer and tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=tools")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Tools, equipments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=sports")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Sports and outdoor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=pets")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Animal and pets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/products?category=machinery")}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Machinery tools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("/products")} className="text-gray-700 hover:text-blue-500">
                  More category
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 order-1 lg:order-2">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 bg-gradient-to-r from-teal-400 to-teal-300 rounded-lg p-6 lg:p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">Latest trending</h2>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Electronic items</h3>
                <Button
                  variant="outline"
                  className="bg-white text-teal-600 hover:bg-gray-50"
                  onClick={() => onNavigate("/products?category=electronics")}
                >
                  Learn more
                </Button>
              </div>
              <div className="absolute right-4 top-4 w-32 lg:w-48 h-24 lg:h-32 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="text-white text-xs lg:text-sm">Electronics Image</div>
              </div>
            </div>

            <div className="w-full lg:w-64 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">Hi, user</div>
                <div className="text-sm text-gray-600 mb-3">let's get started</div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 mb-2">Join now</Button>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Card>

              <Card className="p-4 bg-orange-500 text-white">
                <div className="text-sm mb-1">Get US $10 off</div>
                <div className="text-xs">with a new supplier</div>
              </Card>

              <Card className="p-4 bg-teal-500 text-white">
                <div className="text-sm mb-1">Send quotes with</div>
                <div className="text-xs">supplier preferences</div>
              </Card>
            </div>
          </div>

          {/* Deals and Offers */}
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
              <h3 className="text-xl font-semibold">Deals and offers</h3>
              <div className="flex space-x-2">
                <Badge variant="secondary">04</Badge>
                <Badge variant="secondary">13</Badge>
                <Badge variant="secondary">34</Badge>
                <Badge variant="secondary">56</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Smart watches", discount: "-25%", category: "smart-watches" },
                { name: "Laptops", discount: "-15%", category: "laptops" },
                { name: "GoPro cameras", discount: "-40%", category: "cameras" },
                { name: "Headphones", discount: "-25%", category: "headphones" },
                { name: "Canon cameras", discount: "-25%", category: "cameras" },
              ].map((item, index) => (
                <button key={index} onClick={() => onNavigate(`/products?category=${item.category}`)}>
                  <Card className="p-3 lg:p-4 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-xs text-gray-500 text-center px-1">{item.name}</div>
                    </div>
                    <div className="text-xs lg:text-sm font-medium">{item.name}</div>
                    <div className="text-red-500 text-xs lg:text-sm">{item.discount}</div>
                  </Card>
                </button>
              ))}
            </div>
          </section>

          {/* View All Products Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
              onClick={() => onNavigate("/products")}
            >
              View All Products
            </Button>
          </div>

          {/* Newsletter */}
          <Card className="p-6 lg:p-8 text-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Subscribe on our newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get daily news on upcoming offers from many suppliers all over the world
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 border rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="sm:rounded-l-none bg-blue-500 hover:bg-blue-600">Subscribe</Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
