import { User, Bell, Heart, ShoppingCart, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-blue-500 font-semibold text-lg">Brand</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <div className="relative">
                  <select className="appearance-none bg-white border border-r-0 border-gray-300 px-4 py-2 pr-8 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All category</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <Input
                  placeholder="Search"
                  className="flex-1 rounded-none border-l-0 border-r-0 focus:ring-0 focus:border-gray-300"
                />
                <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">Search</Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <User className="w-5 h-5 text-gray-600" />
              <Bell className="w-5 h-5 text-gray-600" />
              <Heart className="w-5 h-5 text-gray-600" />
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Menu className="w-4 h-4" />
                <span className="text-sm">All category</span>
              </div>
              <span className="text-sm text-red-500">Hot offers</span>
              <span className="text-sm">Gift boxes</span>
              <span className="text-sm">Projects</span>
              <span className="text-sm">Menu item</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm">Help</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>English, USD</span>
              <span>Ship to 🇺🇸</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 space-y-2">
            <div className="bg-white rounded-lg p-4">
              <ul className="space-y-3 text-sm">
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Automobiles</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Clothes and wear</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home interiors</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Computer and tech</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Tools, equipments</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Sports and outdoor</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Animal and pets</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Machinery tools</li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">More category</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="flex gap-6 mb-8">
              <div className="flex-1 bg-gradient-to-r from-teal-400 to-teal-300 rounded-lg p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Latest trending</h2>
                  <h3 className="text-2xl font-bold text-white mb-4">Electronic items</h3>
                  <Button variant="outline" className="bg-white text-teal-600 hover:bg-gray-50">
                    Learn more
                  </Button>
                </div>
                <div className="absolute right-0 top-0 w-64 h-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Electronics"
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-64 space-y-4">
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Deals and offers</h3>
                <div className="flex space-x-2">
                  <Badge variant="secondary">04</Badge>
                  <Badge variant="secondary">13</Badge>
                  <Badge variant="secondary">34</Badge>
                  <Badge variant="secondary">56</Badge>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Smart watches"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Smart watches</div>
                  <div className="text-red-500 text-sm">-25%</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Laptops"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Laptops</div>
                  <div className="text-red-500 text-sm">-15%</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="GoPro cameras"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">GoPro cameras</div>
                  <div className="text-red-500 text-sm">-40%</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Headphones"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Headphones</div>
                  <div className="text-red-500 text-sm">-25%</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Canon cameras"
                    width={80}
                    height={80}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Canon cameras</div>
                  <div className="text-red-500 text-sm">-25%</div>
                </Card>
              </div>
            </section>

            {/* Category Sections */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Home and outdoor</h4>
                <Button variant="outline" size="sm" className="mb-4">
                  Source now
                </Button>
                <Image
                  src="/placeholder.svg?height=120&width=200"
                  alt="Home and outdoor"
                  width={200}
                  height={120}
                  className="w-full rounded"
                />
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Soft chairs"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Soft chairs</div>
                  <div className="text-xs text-gray-500">From USD 19</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sofa & chair"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Sofa & chair</div>
                  <div className="text-xs text-gray-500">From USD 19</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Kitchen dishes"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Kitchen dishes</div>
                  <div className="text-xs text-gray-500">From USD 19</div>
                </Card>
                <Card className="p-4 text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Smart watches"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Smart watches</div>
                  <div className="text-xs text-gray-500">From USD 19</div>
                </Card>
              </div>
            </div>

            {/* Consumer Electronics Section */}
            <Card className="p-6 mb-8">
              <h4 className="font-semibold mb-4">Consumer electronics and gadgets</h4>
              <Button variant="outline" size="sm" className="mb-4">
                Source now
              </Button>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Smart watches"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Smart watches</div>
                  <div className="text-xs text-gray-500">From USD 19</div>
                </div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Cameras"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Cameras</div>
                  <div className="text-xs text-gray-500">From USD 89</div>
                </div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Headphones"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Headphones</div>
                  <div className="text-xs text-gray-500">From USD 10</div>
                </div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Smart watches"
                    width={60}
                    height={60}
                    className="mx-auto mb-2"
                  />
                  <div className="text-sm font-medium">Smart watches</div>
                  <div className="text-xs text-gray-500">From USD 90</div>
                </div>
              </div>
            </Card>

            {/* Quote Request Section */}
            <Card className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-8 mb-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">An easy way to send requests to all suppliers</h3>
                  <p className="text-blue-100 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-gray-900">
                  <h4 className="font-semibold mb-4">Send quote to suppliers</h4>
                  <Input placeholder="What item you need?" className="mb-4" />
                  <textarea
                    placeholder="Type more details"
                    className="w-full p-3 border rounded-md mb-4 resize-none"
                    rows={3}
                  />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Input placeholder="Quantity" />
                    <select className="border rounded-md px-3 py-2">
                      <option>Pcs</option>
                    </select>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Send inquiry</Button>
                </div>
              </div>
            </Card>

            {/* Recommended Items */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Recommended items</h3>
              <div className="grid grid-cols-5 gap-4">
                {[
                  {
                    name: "T-shirts with multiple colors, for men",
                    price: "$10.30",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Jeans shorts for men blue color",
                    price: "$10.30",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Brown winter coat medium size",
                    price: "$12.50",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Jeans bag for travel for men",
                    price: "$34.00",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  { name: "Leather wallet", price: "$99.00", image: "/placeholder.svg?height=120&width=120" },
                  {
                    name: "Canon camera black, 100x zoom",
                    price: "$9.99",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Headset for gaming with mic",
                    price: "$8.99",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Smart watch silver color modern",
                    price: "$10.30",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Blue wallet for men, leather material",
                    price: "$10.30",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                  {
                    name: "Jeans bag for travel for men",
                    price: "$80.95",
                    image: "/placeholder.svg?height=120&width=120",
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="w-full mb-3 rounded"
                    />
                    <div className="text-lg font-semibold text-gray-900 mb-1">{item.price}</div>
                    <div className="text-sm text-gray-600 line-clamp-2">{item.name}</div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Extra Services */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Our extra services</h3>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Source from Industry Hubs"
                    width={120}
                    height={80}
                    className="mx-auto mb-4 rounded"
                  />
                  <h4 className="font-semibold mb-2">Source from Industry Hubs</h4>
                </Card>
                <Card className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Customize Your Products"
                    width={120}
                    height={80}
                    className="mx-auto mb-4 rounded"
                  />
                  <h4 className="font-semibold mb-2">Customize Your Products</h4>
                </Card>
                <Card className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Fast, reliable shipping by ocean or air"
                    width={120}
                    height={80}
                    className="mx-auto mb-4 rounded"
                  />
                  <h4 className="font-semibold mb-2">Fast, reliable shipping by ocean or air</h4>
                </Card>
                <Card className="p-6 text-center">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Product monitoring and inspection"
                    width={120}
                    height={80}
                    className="mx-auto mb-4 rounded"
                  />
                  <h4 className="font-semibold mb-2">Product monitoring and inspection</h4>
                </Card>
              </div>
            </section>

            {/* Suppliers by Region */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Suppliers by region</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇦🇪</span>
                  <div>
                    <div className="font-medium">Arabic Emirates</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇦🇺</span>
                  <div>
                    <div className="font-medium">Australia</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <div className="font-medium">United States</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇷🇺</span>
                  <div>
                    <div className="font-medium">Russia</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇹</span>
                  <div>
                    <div className="font-medium">Italy</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇫🇷</span>
                  <div>
                    <div className="font-medium">France</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇦🇪</span>
                  <div>
                    <div className="font-medium">Arabic Emirates</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇨🇳</span>
                  <div>
                    <div className="font-medium">China</div>
                    <div className="text-sm text-gray-500">shopname.ae</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Newsletter */}
            <Card className="p-8 text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Subscribe on our newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get daily news on upcoming offers from many suppliers all over the world
              </p>
              <div className="flex max-w-md mx-auto">
                <Input placeholder="Email" className="rounded-r-none" />
                <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">Subscribe</Button>
              </div>
            </Card>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-blue-500 font-semibold text-lg">Brand</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Best information about the company gies here but now lorem ipsum is
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
                  <Image src="/placeholder.svg?height=40&width=120" alt="App Store" width={120} height={40} />
                  <Image src="/placeholder.svg?height=40&width=120" alt="Google Play" width={120} height={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-4 flex justify-between items-center text-sm text-gray-600">
            <span>© 2023 Ecommerce.</span>
            <div className="flex items-center space-x-2">
              <span>🇺🇸 English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
