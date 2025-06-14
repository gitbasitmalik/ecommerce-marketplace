"use client"

import type React from "react"

import { User, Bell, Heart, ShoppingCart, ChevronDown, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useCart } from "../hooks/use-cart"
import { useState } from "react"

export function Header() {
  const { getTotalItems } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-blue-500 font-semibold text-lg hidden sm:block">Brand</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <div className="relative">
                <select className="appearance-none bg-white border border-r-0 border-gray-300 px-4 py-2 pr-8 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All category</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Home & Garden</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-l-0 border-r-0 focus:ring-0 focus:border-gray-300"
              />
              <Button type="submit" className="rounded-l-none bg-blue-500 hover:bg-blue-600">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Header Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Search Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex flex-col items-center text-xs text-gray-600">
                <User className="w-5 h-5 mb-1" />
                <span>Profile</span>
              </div>
              <div className="flex flex-col items-center text-xs text-gray-600">
                <Bell className="w-5 h-5 mb-1" />
                <span>Message</span>
              </div>
              <div className="flex flex-col items-center text-xs text-gray-600">
                <Heart className="w-5 h-5 mb-1" />
                <span>Orders</span>
              </div>
            </div>

            {/* Cart - Always Visible */}
            <Link href="/cart" className="flex flex-col items-center text-xs text-gray-600 relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 mb-1" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {getTotalItems()}
                  </Badge>
                )}
              </div>
              <span className="hidden sm:block">My cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearch} className="md:hidden mt-3">
          <div className="flex">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none bg-blue-500 hover:bg-blue-600">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-3">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Menu className="w-4 h-4" />
                <span className="text-sm">All category</span>
              </div>
              <Link href="/products?featured=hot" className="text-sm text-red-500 hover:text-red-600">
                Hot offers
              </Link>
              <Link href="/products?category=gifts" className="text-sm hover:text-blue-500">
                Gift boxes
              </Link>
              <Link href="/projects" className="text-sm hover:text-blue-500">
                Projects
              </Link>
              <span className="text-sm hover:text-blue-500 cursor-pointer">Menu item</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                <span className="text-sm">Help</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>English, USD</span>
              <span>Ship to 🇺🇸</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-2">
            <div className="flex items-center justify-between text-sm">
              <Link href="/products?featured=hot" className="text-red-500">
                Hot offers
              </Link>
              <Link href="/products?category=gifts" className="text-gray-600">
                Gift boxes
              </Link>
              <Link href="/projects" className="text-gray-600">
                Projects
              </Link>
              <span className="text-gray-600">Help</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 py-2">
                <User className="w-5 h-5 text-gray-600" />
                <span>Profile</span>
              </div>
              <div className="flex items-center space-x-3 py-2">
                <Bell className="w-5 h-5 text-gray-600" />
                <span>Messages</span>
              </div>
              <div className="flex items-center space-x-3 py-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <span>Orders</span>
              </div>
              <hr />
              <div className="text-sm text-gray-600">
                <div>English, USD</div>
                <div>Ship to 🇺🇸</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
