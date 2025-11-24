import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';
import { formatIDRCompact } from '../utils/currency';

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  minRating: number;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  availableCategories: string[];
  maxPrice: number;
}

export function ProductFilters({ 
  filters, 
  onFiltersChange, 
  availableCategories,
  maxPrice 
}: ProductFiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange);

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setLocalPriceRange([value[0], value[1]]);
  };

  const handlePriceRangeCommit = () => {
    onFiltersChange({ ...filters, priceRange: localPriceRange });
  };

  const handleStockFilterChange = (checked: boolean) => {
    onFiltersChange({ ...filters, inStockOnly: checked });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const clearAllFilters = () => {
    const defaultFilters: FilterState = {
      categories: [],
      priceRange: [0, maxPrice],
      inStockOnly: false,
      minRating: 0
    };
    setLocalPriceRange(defaultFilters.priceRange);
    onFiltersChange(defaultFilters);
  };

  const activeFiltersCount = 
    filters.categories.length + 
    (filters.inStockOnly ? 1 : 0) + 
    (filters.minRating > 0 ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice ? 1 : 0);

  return (
    <Card className="h-fit">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{activeFiltersCount}</Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="h-6 px-2"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {availableCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked: boolean) => 
                    handleCategoryChange(category, checked)
                  }
                />
                <label 
                  htmlFor={category} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="space-y-4">
            <Slider
              value={localPriceRange}
              onValueChange={handlePriceRangeChange}
              onValueCommit={handlePriceRangeCommit}
              max={maxPrice}
              min={0}
              step={100000}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{formatIDRCompact(localPriceRange[0])}</span>
              <span>{formatIDRCompact(localPriceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div>
          <h4 className="font-medium mb-3">Availability</h4>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.inStockOnly}
              onCheckedChange={handleStockFilterChange}
            />
            <label 
              htmlFor="in-stock" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              In stock only
            </label>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium mb-3">Minimum Rating</h4>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={filters.minRating === rating}
                  onCheckedChange={(checked: boolean) => 
                    handleRatingChange(checked ? rating : 0)
                  }
                />
                <label 
                  htmlFor={`rating-${rating}`} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex items-center"
                >
                  {rating}+ ★
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {filters.categories.length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Active Categories</h4>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="flex items-center gap-1"
                >
                  {category}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleCategoryChange(category, false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}