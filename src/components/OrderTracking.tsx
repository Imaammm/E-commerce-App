import { useState, useEffect } from 'react';
import { 
  ArrowLeft, Package, Clock, Truck, CheckCircle, MapPin, 
  Phone, Mail, Copy
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Order } from './OrderHistory';
import { toast } from 'sonner';
import { formatIDR } from '../utils/currency';

interface OrderTrackingProps {
  order: Order;
  onBackToOrders: () => void;
  onCancelOrderClick?: (order: Order) => void;
}

interface TrackingEvent {
  id: string;
  status: string;
  description: string;
  location: string;
  timestamp: Date;
  isCompleted: boolean;
}

export function OrderTracking({ order, onBackToOrders, onCancelOrderClick }: OrderTrackingProps) {
  const [trackingEvents, setTrackingEvents] = useState<TrackingEvent[]>([]);
  const [estimatedDelivery, setEstimatedDelivery] = useState<Date>();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('id-ID', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Mock tracking events based on order status
  useEffect(() => {
    const baseEvents: TrackingEvent[] = [
      {
        id: '1',
        status: 'Order Placed',
        description: 'Your order has been successfully placed and is being prepared',
        location: 'Buyme Warehouse',
        timestamp: order.date,
        isCompleted: true
      }
    ];

    if (order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered') {
      baseEvents.push({
        id: '2',
        status: 'Processing',
        description: 'Your order is being prepared and packaged',
        location: 'Buyme Fulfillment Center',
        timestamp: new Date(order.date.getTime() + 2 * 60 * 60 * 1000),
        isCompleted: true
      });
    }

    if (order.status === 'shipped' || order.status === 'delivered') {
      baseEvents.push({
        id: '3',
        status: 'Shipped',
        description: 'Your order has been shipped and is on its way',
        location: 'Distribution Center',
        timestamp: new Date(order.date.getTime() + 24 * 60 * 60 * 1000),
        isCompleted: true
      });
    }

    // Add pending events
    if (order.status !== 'delivered') {
      if (order.status === 'processing') {
        baseEvents.push({
          id: 'pending-transit',
          status: 'In Transit',
          description: 'Package will be on its way to your delivery address',
          location: 'Regional Sorting Facility',
          timestamp: new Date(order.date.getTime() + 2 * 24 * 60 * 60 * 1000),
          isCompleted: false
        });
      }

      baseEvents.push({
        id: 'pending-delivery',
        status: 'Delivered',
        description: 'Package will be delivered to your address',
        location: order.shippingAddress.city,
        timestamp: new Date(order.date.getTime() + 5 * 24 * 60 * 60 * 1000),
        isCompleted: false
      });
    }

    if (order.status === 'delivered') {
      baseEvents.push({
        id: '5',
        status: 'Delivered',
        description: 'Package has been successfully delivered',
        location: order.shippingAddress.city,
        timestamp: new Date(order.date.getTime() + 5 * 24 * 60 * 60 * 1000),
        isCompleted: true
      });
    }

    setTrackingEvents(baseEvents);

    // Set estimated delivery
    if (order.status !== 'delivered') {
      setEstimatedDelivery(new Date(order.date.getTime() + 5 * 24 * 60 * 60 * 1000));
    }
  }, [order]);

  const copyTrackingNumber = () => {
    if (order.trackingNumber) {
      navigator.clipboard.writeText(order.trackingNumber);
      toast.success('Tracking number copied to clipboard');
    }
  };

  const getProgressPercentage = () => {
    const completedEvents = trackingEvents.filter(event => event.isCompleted).length;
    const totalEvents = trackingEvents.length;
    return (completedEvents / totalEvents) * 100;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        {/* Back Button */}
        <button
          onClick={onBackToOrders}
          className="flex items-center gap-2 text-neutral-950 hover:text-neutral-700 mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Orders
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Header */}
            <div className="border border-black/10 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-neutral-950 mb-1">
                    Order #<span>{order.id}</span>
                  </h2>
                  <p className="text-xs text-[#717182]">Placed on {formatDate(order.date)}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-1">
                    {order.status === 'processing' && 'Processing'}
                    {order.status === 'shipped' && 'Shipped'}
                    {order.status === 'delivered' && 'Delivered'}
                    {order.status === 'cancelled' && 'Cancelled'}
                  </span>
                  <p className="text-sm text-[#717182]">
                    Total: <span className="font-bold text-neutral-950">{formatIDR(order.total)}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Progress */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10 flex items-center justify-between">
                <h3 className="font-bold text-base text-neutral-950">Delivery Progress</h3>
                <button className="text-xs text-neutral-950 hover:underline flex items-center gap-1">
                  🔄 Refresh
                </button>
              </div>
              <div className="p-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#030213] transition-all duration-500"
                      style={{ width: `${getProgressPercentage()}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-[#717182]">Order Placed</span>
                    {estimatedDelivery && order.status !== 'delivered' && (
                      <span className="text-xs text-[#717182]">Est. Delivery: {formatDate(estimatedDelivery)}</span>
                    )}
                    {order.status === 'delivered' && (
                      <span className="text-xs text-[#717182]">Delivered</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking History */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <h3 className="font-bold text-base text-neutral-950">Tracking History</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {trackingEvents.map((event, index) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          event.isCompleted 
                            ? 'bg-blue-100 border-2 border-blue-500' 
                            : 'bg-gray-100 border-2 border-gray-300'
                        }`}>
                          {event.isCompleted ? (
                            event.status === 'Delivered' ? (
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                            ) : event.status === 'Shipped' || event.status === 'In Transit' ? (
                              <Truck className="h-5 w-5 text-blue-600" />
                            ) : (
                              <Package className="h-5 w-5 text-blue-600" />
                            )
                          ) : (
                            <Clock className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        {index < trackingEvents.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${
                            event.isCompleted ? 'bg-blue-500' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                      
                      <div className="flex-1 pb-2">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-sm font-medium ${
                            event.isCompleted ? 'text-neutral-950' : 'text-[#717182]'
                          }`}>
                            {event.status}
                          </h4>
                          <span className="text-xs text-[#717182]">
                            {event.isCompleted ? formatDateTime(event.timestamp) : 'Pending'}
                          </span>
                        </div>
                        <p className="text-xs text-[#717182] mb-1">
                          {event.description}
                        </p>
                        <p className="text-xs text-[#717182] flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <h3 className="font-bold text-base text-neutral-950">Order Items</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-neutral-950 mb-1">{item.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#717182]">Qty: {item.quantity}</span>
                          <span className="font-bold text-sm text-neutral-950">
                            {formatIDR(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tracking Number */}
            {order.trackingNumber && (
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Tracking Number</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 p-3 bg-[#f3f3f5] rounded-lg mb-3">
                    <code className="flex-1 font-mono text-xs text-neutral-950">{order.trackingNumber}</code>
                    <button
                      onClick={copyTrackingNumber}
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    🔗 Track on Carrier Site
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Address */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <h3 className="font-bold text-base text-neutral-950">Delivery Address</h3>
              </div>
              <div className="p-6">
                <div className="space-y-1">
                  <p className="text-xs text-[#717182]">📍</p>
                  <p className="font-medium text-sm text-neutral-950">{order.shippingAddress.fullName}</p>
                  <p className="text-xs text-[#717182]">{order.shippingAddress.address}</p>
                  <p className="text-xs text-[#717182]">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Estimated Delivery */}
            {estimatedDelivery && order.status !== 'delivered' && (
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Estimated Delivery</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-2xl font-bold text-neutral-950 mb-1">
                    {formatDate(estimatedDelivery)}
                  </p>
                  <p className="text-xs text-[#717182]">Expected delivery date</p>
                </div>
              </div>
            )}

            {/* Need Help */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <h3 className="font-bold text-base text-neutral-950">Need Help?</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Support
                </button>
                
                <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Support
                </button>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-700">
                    ℹ️ For urgent delivery issues, contact support immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Actions */}
            <div className="border border-black/10 rounded-lg">
              <div className="p-6 border-b border-black/10">
                <h3 className="font-bold text-base text-neutral-950">Order Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Reorder Items
                </button>
                
                {order.status === 'processing' && onCancelOrderClick && (
                  <button 
                    onClick={() => onCancelOrderClick(order)}
                    className="w-full bg-white border border-black/10 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
