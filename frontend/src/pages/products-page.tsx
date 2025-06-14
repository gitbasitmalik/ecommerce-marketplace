"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "../components/product-card";
import { ProductFilters } from "../components/product-filters";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Grid, List } from "lucide-react";
import type { FilterState, Product } from "../types/product";
import axios from "axios";

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    features: [],
    priceRange: [0, 2000],
    condition: "any",
    ratings: [],
    manufacturer: [],
  });

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const activeFilters = [
    ...filters.categories,
    ...filters.brands,
    ...filters.features,
    ...(filters.condition !== "any" ? [filters.condition] : []),
    ...filters.ratings.map((r) => `${r} star`),
  ];

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      features: [],
      priceRange: [0, 2000],
      condition: "any",
      ratings: [],
      manufacturer: [],
    });
  };

  const removeFilter = (filterToRemove: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== filterToRemove),
      brands: prev.brands.filter((b) => b !== filterToRemove),
      features: prev.features.filter((f) => f !== filterToRemove),
      condition: filterToRemove === prev.condition ? "any" : prev.condition,
      ratings: prev.ratings.filter((r) => `${r} star` !== filterToRemove),
    }));
  };

  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.some((category) =>
          product.category.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    // Apply features filter
    if (filters.features.length > 0) {
      filtered = filtered.filter((product) =>
        filters.features.some((feature) =>
          product.features.some((pf) =>
            pf.toLowerCase().includes(feature.toLowerCase())
          )
        )
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply ratings filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((product) =>
        filters.ratings.some((rating) => Math.floor(product.rating) >= rating)
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <div className="container mx-auto px-4 pb-8">
      {/* Breadcrumb */}
      <div className="py-4">
        <nav className="text-sm text-gray-600 overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <button
              onClick={() => onNavigate("/")}
              className="hover:text-blue-500"
            >
              Home
            </button>
            <span>›</span>
            <button
              onClick={() => onNavigate("/products")}
              className="hover:text-blue-500"
            >
              Clothings
            </button>
            <span>›</span>
            <button
              onClick={() => onNavigate("/products")}
              className="hover:text-blue-500"
            >
              Men's wear
            </button>
            <span>›</span>
            <span>Summer clothing</span>
          </div>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64">
          <ProductFilters filters={filters} onFiltersChange={setFilters} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-lg font-semibold">
                {filteredProducts.length.toLocaleString()} items in Mobile
                accessory
              </h1>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="verified" className="rounded" />
                <label htmlFor="verified" className="text-sm">
                  Verified only
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none flex-1 sm:flex-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none flex-1 sm:flex-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-gray-300 text-xs"
                  onClick={() => removeFilter(filter)}
                >
                  {filter} ×
                </Badge>
              ))}
              <Button
                variant="link"
                size="sm"
                onClick={clearAllFilters}
                className="text-blue-500 p-0 h-auto text-xs"
              >
                Clear all filter
              </Button>
            </div>
          )}

          {/* Products Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="sm">
              ‹
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button size="sm">2</Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              ›
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
