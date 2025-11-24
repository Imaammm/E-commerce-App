import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ShoppingCart as CartIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from './ProductCard';
import { formatIDR } from '../utils/currency';

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt: Date;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onBackToShopping: () => void;
}

export function ShoppingCart({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout,
  onBackToShopping 
}: ShoppingCartProps) {
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 750000 ? 0 : 149000; // Free shipping over 750k IDR, otherwise 149k IDR
  const tax = subtotal * 0.11; // 11% PPN (VAT) for Indonesia
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (productId: string, change: number) => {
    const item = cartItems.find(item => item.product.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0 && newQuantity <= item.product.stockCount) {
        onUpdateQuantity(productId, newQuantity);
      }
    }
  };

  const handleProceedToCheckout = async () => {
    setIsLoading(true);
    // Simulate loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    onProceedToCheckout();
    setIsLoading(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 lg:px-20 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-md mx-auto text-center">
              <ShoppingBag className="h-16 w-16 mx-auto text-[#717182] mb-6" />
              <h2 className="text-2xl font-bold mb-3 text-neutral-950">Your cart is empty</h2>
              <p className="text-[#717182] mb-8 text-base">
                Looks like you haven't added any items to your cart yet.
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
        {/* Back Button */}
        <button 
          onClick={onBackToShopping}
          className="flex items-center gap-2 text-neutral-950 hover:text-neutral-700 mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <CartIcon className="h-5 w-5" />
                  <h2 className="font-bold text-base text-neutral-950">
                    Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </h2>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base text-neutral-950 mb-1">{item.product.name}</h3>
                      <p className="text-sm text-[#717182] mb-3">{item.product.category}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-base text-neutral-950">{formatIDR(item.product.price)}</span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-[#717182] line-through">
                            {formatIDR(item.product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Subtotal */}
                      <div className="text-sm text-[#717182] mb-3">
                        Subtotal: {formatIDR(item.product.price * item.quantity)}
                      </div>

                      {/* Quantity Controls and Remove Button */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-black/10 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item.product.id, -1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-4 py-1 font-medium text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.product.id, 1)}
                            disabled={item.quantity >= item.product.stockCount}
                            className="h-8 w-8 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1 text-sm"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Stock Warning */}
                      {item.quantity > item.product.stockCount && (
                        <p className="text-sm text-red-600 mt-2">
                          Only {item.product.stockCount} available
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-black/10 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-base text-neutral-950 mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Subtotal</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(subtotal)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Shipping</span>
                  <span className="text-neutral-950 font-medium flex items-center gap-2">
                    {formatIDR(shipping)}
                    {shipping === 0 && (
                      <span className="text-green-600 text-xs">FREE</span>
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">PPN (11%)</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(tax)}</span>
                </div>

                <div className="border-t border-black/10 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-base text-neutral-950">Total</span>
                    <span className="font-bold text-xl text-neutral-950">{formatIDR(total)}</span>
                  </div>
                </div>

                <button
                  onClick={handleProceedToCheckout}
                  disabled={isLoading || cartItems.some(item => item.quantity > item.product.stockCount)}
                  className="w-full bg-[#030213] text-white px-4 py-3 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>

                <p className="text-xs text-[#717182] text-center">
                  Secure checkout powered by industry-leading encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}