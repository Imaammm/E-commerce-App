import { Heart, ShoppingCart, Trash2, ArrowLeft, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from './ProductCard';
import { formatIDR } from '../utils/currency';

interface WishlistProps {
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onBackToShopping: () => void;
}

export function Wishlist({ 
  wishlistItems, 
  onRemoveFromWishlist, 
  onAddToCart, 
  onProductClick,
  onBackToShopping 
}: WishlistProps) {
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 lg:px-20 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-md mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto text-[#717182] mb-6" />
              <h2 className="text-2xl font-bold mb-3 text-neutral-950">Your wishlist is empty</h2>
              <p className="text-[#717182] mb-8 text-base">
                Save items you like to your wishlist. Review them anytime and easily move them to your cart.
              </p>
              <button 
                onClick={onBackToShopping}
                className="bg-[#030213] text-white px-6 py-2.5 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-neutral-950">My Wishlist</h1>
              <p className="text-[#717182] text-sm mt-1">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button 
              onClick={onBackToShopping}
              className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="space-y-6 mb-8">
          {wishlistItems.map((product) => {
            const discountPercentage = product.originalPrice 
              ? Math.round((1 - product.price / product.originalPrice) * 100)
              : 0;

            return (
              <div key={product.id} className="border border-black/10 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-full md:w-32 h-32 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        onClick={() => onProductClick(product)}
                      />
                      {discountPercentage > 0 && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                          -{discountPercentage}%
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div 
                      className="cursor-pointer hover:text-primary transition-colors mb-2"
                      onClick={() => onProductClick(product)}
                    >
                      <h3 className="text-lg font-bold text-neutral-950 mb-1">{product.name}</h3>
                      <p className="text-sm text-[#717182] mb-2">{product.category}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-[#717182]">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-neutral-950">{formatIDR(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-[#717182] line-through">
                          {formatIDR(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    {product.inStock && (
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                          <span>✓ In Stock</span>
                        </div>
                        <span className="text-sm text-[#717182]">
                          {product.stockCount} available
                        </span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                        className="flex-1 bg-[#030213] text-white px-4 py-2.5 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="bg-white border border-black/10 text-neutral-950 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-black/10 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-base text-neutral-950 mb-4">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                wishlistItems.forEach(item => {
                  if (item.inStock) {
                    onAddToCart(item);
                  }
                });
              }}
              disabled={!wishlistItems.some(item => item.inStock)}
              className="flex-1 bg-white border border-black/10 text-neutral-950 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add All Available to Cart
            </button>
            
            <button
              onClick={() => {
                wishlistItems.forEach(item => onRemoveFromWishlist(item.id));
              }}
              className="flex-1 bg-white border border-black/10 text-neutral-950 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Clear Wishlist
            </button>
          </div>
        </div>

        {/* Wishlist Tips */}
        <div className="bg-[#f3f3f5] rounded-lg p-6">
          <h3 className="font-bold text-base text-neutral-950 mb-3">💡 Wishlist Tips</h3>
          <ul className="text-sm text-[#717182] space-y-2">
            <li>• Items in your wishlist are saved across all your devices</li>
            <li>• We'll notify you when wishlist items go on sale</li>
            <li>• Share your wishlist with friends and family</li>
            <li>• Items may have limited stock - add to cart when ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
}