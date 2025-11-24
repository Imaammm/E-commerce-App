import { useState } from 'react';
import { Package, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatIDR } from '../utils/currency';

export interface Order {
  id: string;
  date: Date;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: Array<{
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }>;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  trackingNumber?: string;
  cancellationReason?: string;
  cancellationDetails?: string;
}

interface OrderHistoryProps {
  orders: Order[];
  onBackToShopping: () => void;
  onOrderClick: (order: Order) => void;
  onCancelOrderClick?: (order: Order) => void;
}

export function OrderHistory({ orders, onBackToShopping, onOrderClick, onCancelOrderClick }: OrderHistoryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredOrders = orders.filter(order => {
    if (selectedFilter === 'all') return true;
    return order.status === selectedFilter;
  });

  const statusCounts = {
    all: orders.length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 lg:px-20 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Package className="h-16 w-16 mx-auto text-[#717182] mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-neutral-950">No orders yet</h2>
            <p className="text-[#717182] mb-6">
              You haven't placed any orders yet. Start shopping to see your order history here.
            </p>
            <button
              onClick={onBackToShopping}
              className="bg-[#030213] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-neutral-950">Order History</h1>
          <button
            onClick={onBackToShopping}
            className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
        
        {/* Status Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedFilter === 'all' 
                ? 'bg-[#030213] text-white' 
                : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
            }`}
          >
            All Orders
            <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
              selectedFilter === 'all' ? 'bg-white/20' : 'bg-gray-100'
            }`}>
              {statusCounts.all}
            </span>
          </button>

          <button
            onClick={() => setSelectedFilter('processing')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedFilter === 'processing' 
                ? 'bg-[#030213] text-white' 
                : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Processing
            {statusCounts.processing > 0 && (
              <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
                selectedFilter === 'processing' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {statusCounts.processing}
              </span>
            )}
          </button>

          <button
            onClick={() => setSelectedFilter('shipped')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedFilter === 'shipped' 
                ? 'bg-[#030213] text-white' 
                : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Shipped
            {statusCounts.shipped > 0 && (
              <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
                selectedFilter === 'shipped' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {statusCounts.shipped}
              </span>
            )}
          </button>

          <button
            onClick={() => setSelectedFilter('delivered')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedFilter === 'delivered' 
                ? 'bg-[#030213] text-white' 
                : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Delivered
            {statusCounts.delivered > 0 && (
              <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
                selectedFilter === 'delivered' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {statusCounts.delivered}
              </span>
            )}
          </button>

          <button
            onClick={() => setSelectedFilter('cancelled')}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedFilter === 'cancelled' 
                ? 'bg-[#030213] text-white' 
                : 'bg-white border border-black/10 text-neutral-950 hover:bg-gray-50'
            }`}
          >
            Cancelled
            {statusCounts.cancelled > 0 && (
              <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
                selectedFilter === 'cancelled' ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {statusCounts.cancelled}
              </span>
            )}
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="border border-black/10 rounded-lg p-6">
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm text-neutral-950">
                    Order #<span className="font-bold">{order.id}</span>
                  </h3>
                  <p className="text-xs text-[#717182]">Placed on {formatDate(order.date)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOrderClick(order)}
                    className="bg-white border border-black/10 text-neutral-950 px-3 py-1.5 rounded-lg text-xs hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    Processing
                  </button>
                  <button
                    onClick={() => onOrderClick(order)}
                    className="bg-white border border-black/10 text-neutral-950 px-3 py-1.5 rounded-lg text-xs hover:bg-gray-50 transition-colors flex items-center gap-1"
                  >
                    <Eye className="h-3 w-3" />
                    Track
                  </button>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback
                  src={order.items[0].image}
                  alt={order.items[0].name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-950">{order.items[0].name}</p>
                  <p className="text-xs text-[#717182]">
                    Qty: {order.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-black/10 pt-4 mb-4">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-[#717182] mb-1">Ship to</p>
                    <p className="text-xs text-neutral-950">{order.shippingAddress.fullName}</p>
                    <p className="text-xs text-[#717182]">
                      {order.shippingAddress.city}
                    </p>
                  </div>
                  
                  {order.trackingNumber && (
                    <div>
                      <p className="text-xs text-[#717182] mb-1">Tracking</p>
                      <p className="text-xs text-neutral-950">{order.trackingNumber}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#717182]">Total</span>
                  <span className="text-base font-bold text-neutral-950">{formatIDR(order.total)}</span>
                </div>
              </div>

              {/* Order Actions */}
              <div className="flex gap-2">
                {order.status === 'shipped' && (
                  <button className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors">
                    Track Package
                  </button>
                )}
                <button className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors">
                  Reorder
                </button>
                {order.status === 'processing' && onCancelOrderClick && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onCancelOrderClick(order);
                    }}
                    className="bg-white border border-black/10 text-red-600 px-4 py-2 rounded-lg text-xs hover:bg-gray-50 transition-colors"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && selectedFilter !== 'all' && (
          <div className="text-center py-12">
            <Package className="h-12 w-12 mx-auto text-[#717182] mb-4" />
            <h3 className="font-bold mb-2 text-neutral-950">No {selectedFilter} orders</h3>
            <p className="text-[#717182] text-sm">
              You don't have any orders with {selectedFilter} status.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
