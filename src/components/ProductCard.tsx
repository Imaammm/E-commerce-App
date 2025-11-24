import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatIDR } from '../utils/currency';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
}

interface ProductCardProps {
  product: Product;
  isInWishlist: boolean;
  onWishlistToggle: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ 
  product, 
  isInWishlist, 
  onWishlistToggle, 
  onAddToCart, 
  onProductClick 
}: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-square">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onClick={() => onProductClick(product)}
          />
          
          {/* Discount badge */}
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{discountPercentage}%
            </Badge>
          )}

          {/* Stock status */}
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onWishlistToggle(product.id);
            }}
          >
            <Heart 
              className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
        </div>

        {/* Product info */}
        <div className="p-4">
          <div onClick={() => onProductClick(product)}>
            <h3 className="font-medium mb-1 line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <span className="text-xs text-muted-foreground">★</span>
                <span className="text-xs text-muted-foreground ml-1">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="font-semibold">{formatIDR(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatIDR(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Add to cart button */}
          <Button
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (product.inStock) {
                onAddToCart(product);
              }
            }}
            disabled={!product.inStock}
            className="w-full"
            variant={product.inStock ? "default" : "secondary"}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}