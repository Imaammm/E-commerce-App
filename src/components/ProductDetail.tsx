import { useState } from 'react';
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, Shield, RotateCcw, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from './ProductCard';
import { formatIDR } from '../utils/currency';

interface ProductDetailProps {
  product: Product;
  isInWishlist: boolean;
  onWishlistToggle: (productId: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBackClick: () => void;
}

export function ProductDetail({ 
  product, 
  isInWishlist, 
  onWishlistToggle, 
  onAddToCart, 
  onBackClick 
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Default');

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const variants = ['Default', 'Premium', 'Deluxe'];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product.inStock && quantity <= product.stockCount) {
      onAddToCart(product, quantity);
    }
  };

  const canAddToCart = product.inStock && quantity <= product.stockCount;

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="container mx-auto px-4 lg:px-20 py-6">
        {/* Back button */}
        <button 
          onClick={onBackClick} 
          className="flex items-center gap-2 text-neutral-950 hover:text-neutral-700 mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>

        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-lg p-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-black">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-[#FF3B5C] text-white px-3 py-1 rounded text-xs font-medium">
                  {discountPercentage}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl font-bold text-neutral-950 mb-2">{product.name}</h1>
              <div className="text-sm text-[#717182] mb-3">{product.category}</div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-950">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-neutral-950">{formatIDR(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-base text-[#717182] line-through">
                    {formatIDR(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              {product.inStock && (
                <div className="inline-flex items-center gap-2 bg-[#e8f5e9] border border-[#4caf50] rounded px-2 py-1 mb-6">
                  <span className="text-xs text-[#2e7d32]">✓ In Stock</span>
                  <span className="text-xs text-[#717182]">{product.stockCount} items available</span>
                </div>
              )}
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-sm font-bold text-neutral-950 mb-3">Variant</h3>
              <div className="flex gap-2">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedVariant === variant
                        ? 'bg-[#030213] text-white'
                        : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            {product.inStock && (
              <div>
                <h3 className="text-sm font-bold text-neutral-950 mb-3">Quantity</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center border border-black/10 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="h-10 w-10 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-2 text-sm font-medium min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stockCount}
                      className="h-10 w-10 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className="flex-1 bg-[#030213] text-white h-12 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              
              <button
                onClick={() => onWishlistToggle(product.id)}
                className="w-12 h-12 border border-black/10 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Heart 
                  className={`h-5 w-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-neutral-950'}`} 
                />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-[#717182]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">Free Shipping</p>
                  <p className="text-xs text-[#717182]">On orders over Rp 750,000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-5 w-5 text-[#717182]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">30-Day Returns</p>
                  <p className="text-xs text-[#717182]">Easy returns policy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#717182]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">Warranty</p>
                  <p className="text-xs text-[#717182]">1-year manufacturer warranty</p>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-neutral-950 mb-3">Product Description</h3>
              <p className="text-sm text-[#717182] leading-relaxed">
                This high-quality wireless bluetooth headphones offers exceptional performance and reliability. 
                Designed with the latest technology and premium materials, it delivers outstanding value for your investment. 
                Perfect for both personal and professional use, this product combines functionality with style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
