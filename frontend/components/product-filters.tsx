"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { useState } from "react"
import { categories, brands, features } from "../lib/products"
import type { FilterState } from "../types/product"

interface ProductFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: false,
    condition: false,
    ratings: false,
    manufacturer: false,
  })
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked ? [...filters.categories, category] : filters.categories.filter((c) => c !== category)

    onFiltersChange({ ...filters, categories: newCategories })
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked ? [...filters.brands, brand] : filters.brands.filter((b) => b !== brand)

    onFiltersChange({ ...filters, brands: newBrands })
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked ? [...filters.features, feature] : filters.features.filter((f) => f !== feature)

    onFiltersChange({ ...filters, features: newFeatures })
  }

  const handlePriceRangeChange = (values: number[]) => {
    onFiltersChange({ ...filters, priceRange: [values[0], values[1]] })
  }

  const FilterSection = ({
    title,
    sectionKey,
    children,
  }: {
    title: string
    sectionKey: keyof typeof expandedSections
    children: React.ReactNode
  }) => (
    <div className="border-b pb-4 mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left font-medium mb-3"
      >
        {title}
        {expandedSections[sectionKey] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {expandedSections[sectionKey] && children}
    </div>
  )

  const FilterContent = () => (
    <>
      <FilterSection title="Category" sectionKey="category">
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
          <Button variant="link" className="text-blue-500 p-0 h-auto text-sm">
            See all
          </Button>
        </div>
      </FilterSection>

      <FilterSection title="Brands" sectionKey="brands">
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={filters.brands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <Label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
          <Button variant="link" className="text-blue-500 p-0 h-auto text-sm">
            See all
          </Button>
        </div>
      </FilterSection>

      <FilterSection title="Features" sectionKey="features">
        <div className="space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={feature}
                checked={filters.features.includes(feature)}
                onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
              />
              <Label htmlFor={feature} className="text-sm cursor-pointer">
                {feature}
              </Label>
            </div>
          ))}
          <Button variant="link" className="text-blue-500 p-0 h-auto text-sm">
            See all
          </Button>
        </div>
      </FilterSection>

      <FilterSection title="Price range" sectionKey="price">
        <div className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={2000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Min"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceRangeChange([Number.parseInt(e.target.value) || 0, filters.priceRange[1]])}
              className="w-20 text-sm"
            />
            <span className="text-sm text-gray-500">-</span>
            <Input
              placeholder="Max"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange([filters.priceRange[0], Number.parseInt(e.target.value) || 2000])}
              className="w-20 text-sm"
            />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">Apply</Button>
        </div>
      </FilterSection>

      <FilterSection title="Condition" sectionKey="condition">
        <RadioGroup
          value={filters.condition}
          onValueChange={(value) => onFiltersChange({ ...filters, condition: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="any" id="any" />
            <Label htmlFor="any" className="text-sm">
              Any
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="refurbished" id="refurbished" />
            <Label htmlFor="refurbished" className="text-sm">
              Refurbished
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="brand-new" id="brand-new" />
            <Label htmlFor="brand-new" className="text-sm">
              Brand new
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="old-items" id="old-items" />
            <Label htmlFor="old-items" className="text-sm">
              Old items
            </Label>
          </div>
        </RadioGroup>
      </FilterSection>

      <FilterSection title="Ratings" sectionKey="ratings">
        <div className="space-y-2">
          {[5, 4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.ratings.includes(rating)}
                onCheckedChange={(checked) => {
                  const newRatings = checked
                    ? [...filters.ratings, rating]
                    : filters.ratings.filter((r) => r !== rating)
                  onFiltersChange({ ...filters, ratings: newRatings })
                }}
              />
              <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>
    </>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Desktop Filters */}
      <Card className="hidden lg:block p-4 h-fit">
        <FilterContent />
      </Card>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-full max-w-sm ml-auto overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsMobileFilterOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="p-4">
              <FilterContent />
            </div>
            <div className="p-4 border-t">
              <Button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-blue-500 hover:bg-blue-600">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
