import { CheckCircle, Package, Truck, CreditCard, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { OrderData } from './Checkout';
import { formatIDR } from '../utils/currency';

interface OrderConfirmationProps {
  orderData: OrderData;
  orderId: string;
  onContinueShopping: () => void;
  onViewOrderHistory: () => void;
}

export function OrderConfirmation({ 
  orderData, 
  orderId, 
  onContinueShopping, 
  onViewOrderHistory 
}: OrderConfirmationProps) {
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5); // 5 days from now

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-neutral-950">Order Confirmed!</h1>
            <p className="text-[#717182] text-sm">
              Thank you for your purchase. Your order has been successfully placed and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <div className="border border-black/10 rounded-lg mb-6">
            <div className="p-6 border-b border-black/10">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                <h2 className="font-bold text-base text-neutral-950">Order Details</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#717182] mb-1">Order Number</p>
                  <p className="font-bold text-sm text-neutral-950">{orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182] mb-1">Order Date</p>
                  <p className="font-bold text-sm text-neutral-950">{formatDate(new Date())}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182] mb-1">Total Amount</p>
                  <p className="font-bold text-sm text-neutral-950">{formatIDR(orderData.totals.total)}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182] mb-1">Payment Method</p>
                  <p className="font-bold text-sm text-neutral-950">
                    {orderData.paymentMethod.type === 'cod' ? 'Cash on Delivery' :
                     orderData.paymentMethod.type === 'qris' ? 'QRIS' :
                     orderData.paymentMethod.type === 'ewallet' ? `E-Wallet (${orderData.paymentMethod.ewallet?.toUpperCase()})` :
                     orderData.paymentMethod.type === 'bank_transfer' ? `Transfer Bank (${orderData.paymentMethod.bank?.toUpperCase()})` :
                     `**** **** **** ${orderData.paymentMethod.cardNumber?.slice(-4) || ''}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Status */}
          <div className="border border-black/10 rounded-lg mb-6">
            <div className="p-6 border-b border-black/10">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <h2 className="font-bold text-base text-neutral-950">Order Status & Delivery</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-neutral-950">Order Confirmed</p>
                    <p className="text-xs text-[#717182]">Your order has been received and is being processed</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Completed</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-neutral-950">Processing</p>
                    <p className="text-xs text-[#717182]">We're preparing your items for shipment</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">In Progress</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-neutral-950">Shipped</p>
                    <p className="text-xs text-[#717182]">Your order is on its way</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Pending</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-neutral-950">Delivered</p>
                    <p className="text-xs text-[#717182]">
                      Estimated delivery: {formatDate(estimatedDelivery)}
                    </p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border border-black/10 rounded-lg mb-6">
            <div className="p-6 border-b border-black/10">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <h2 className="font-bold text-base text-neutral-950">Shipping Address</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                <p className="font-medium text-sm text-neutral-950">{orderData.shippingAddress.fullName}</p>
                <p className="text-sm text-[#717182]">{orderData.shippingAddress.address}</p>
                <p className="text-sm text-[#717182]">
                  {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
                </p>
                <p className="text-sm text-[#717182]">{orderData.shippingAddress.country}</p>
                <p className="text-sm text-[#717182]">{orderData.shippingAddress.phone}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="border border-black/10 rounded-lg mb-6">
            <div className="p-6 border-b border-black/10">
              <h2 className="font-bold text-base text-neutral-950">Order Items</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-neutral-950 mb-1">{item.product.name}</h3>
                      <p className="text-xs text-[#717182] mb-2">{item.product.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#717182]">Qty: {item.quantity}</span>
                        <span className="font-bold text-sm text-neutral-950">
                          {formatIDR(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="border border-black/10 rounded-lg mb-8">
            <div className="p-6 border-b border-black/10">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <h2 className="font-bold text-base text-neutral-950">Payment Summary</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Subtotal</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(orderData.totals.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Shipping</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(orderData.totals.shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">PPN (11%)</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(orderData.totals.tax)}</span>
                </div>
                <div className="border-t border-black/10 pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-base text-neutral-950">Total Paid</span>
                    <span className="font-bold text-xl text-neutral-950">{formatIDR(orderData.totals.total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onViewOrderHistory}
              className="bg-white border border-black/10 text-neutral-950 px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              View Order History
            </button>
            <button
              onClick={onContinueShopping}
              className="bg-[#030213] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-[#f3f3f5] rounded-lg">
            <h3 className="font-bold text-sm text-neutral-950 mb-3">What's Next?</h3>
            <ul className="text-xs text-[#717182] space-y-2">
              <li>• You'll receive a confirmation email shortly with tracking information</li>
              <li>• Your order will be processed within 1-2 business days</li>
              <li>• We'll send you updates as your order ships and arrives</li>
              <li>• If you have any questions, contact our support team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
