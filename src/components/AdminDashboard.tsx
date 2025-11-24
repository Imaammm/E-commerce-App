import { useState } from 'react';
import { 
  LayoutDashboard,
  Package, 
  ShoppingCart, 
  Settings,
  TrendingUp,
  DollarSign,
  Clock,
  AlertTriangle,
  Search,
  Heart,
  User
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { OrderManagement } from './OrderManagement';
import { ProductManagement } from './ProductManagement';
import { AdminSettings } from './AdminSettings';
import { formatIDR } from '../utils/currency';
import { Order } from './OrderHistory';
import { Product } from './ProductCard';

interface AdminDashboardProps {
  orders: Order[];
  products: Product[];
  onUpdateOrderStatus: (orderId: string, status: Order['status']) => void;
  onUpdateProduct: (productId: string, updates: Partial<Product>) => void;
  onLogout: () => void;
}

export function AdminDashboard({ 
  orders, 
  products, 
  onUpdateOrderStatus, 
  onUpdateProduct, 
  onLogout 
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Generate mock sales data for charts
  const dailySalesData = [
    { day: 'Sen', value: 12 },
    { day: 'Sel', value: 19 },
    { day: 'Rab', value: 15 },
    { day: 'Kam', value: 23 },
    { day: 'Jum', value: 30 },
    { day: 'Sab', value: 35 },
    { day: 'Min', value: 32 }
  ];

  const weeklySalesData = [
    { week: 'Week 1', value: 380 },
    { week: 'Week 2', value: 360 },
    { week: 'Week 3', value: 400 },
    { week: 'Week 4', value: 420 }
  ];

  // Calculate statistics
  const totalRevenue = 2661780;
  const totalOrders = 2;
  const processingOrders = 1;
  const lowStockProducts = 1;

  // Recent orders for activity section
  const recentOrders = orders.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <div className="bg-white border-b border-black/10">
        <div className="container mx-auto px-4 lg:px-20">
          {/* Top Bar with Logo and Icons */}
          <div className="flex items-center justify-between py-4 border-b border-black/10">
            <h2 className="font-bold text-neutral-950">Buyme</h2>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-[300px] h-9 pl-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              </div>

              {/* Icons */}
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded">
                <Heart className="w-5 h-5 text-neutral-950" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded">
                <ShoppingCart className="w-5 h-5 text-neutral-950" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded">
                <User className="w-5 h-5 text-neutral-950" />
              </button>
            </div>
          </div>

          {/* Title and Logout */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-xl font-bold text-neutral-950">Dashboard Admin Buyme</h1>
              <p className="text-sm text-[#717182]">Kelola toko online Anda</p>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-black/10">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-[#030213] text-neutral-950 font-medium'
                  : 'border-transparent text-[#717182] hover:text-neutral-950'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors ${
                activeTab === 'products'
                  ? 'border-[#030213] text-neutral-950 font-medium'
                  : 'border-transparent text-[#717182] hover:text-neutral-950'
              }`}
            >
              <Package className="w-4 h-4" />
              Product Management
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors ${
                activeTab === 'orders'
                  ? 'border-[#030213] text-neutral-950 font-medium'
                  : 'border-transparent text-[#717182] hover:text-neutral-950'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              Order Management
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors ${
                activeTab === 'settings'
                  ? 'border-[#030213] text-neutral-950 font-medium'
                  : 'border-transparent text-[#717182] hover:text-neutral-950'
              }`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-20 py-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Total Revenue */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#717182]">Total Revenue</span>
                  <DollarSign className="w-5 h-5 text-[#717182]" />
                </div>
                <div className="text-2xl font-bold text-neutral-950 mb-2">
                  {formatIDR(totalRevenue)}
                </div>
                <div className="flex items-center text-xs">
                  <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                  <span className="text-green-600 mr-1">22.5%</span>
                  <span className="text-[#717182]">dari kemarin</span>
                </div>
              </div>

              {/* Total Orders */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#717182]">Total Orders</span>
                  <ShoppingCart className="w-5 h-5 text-[#717182]" />
                </div>
                <div className="text-2xl font-bold text-neutral-950 mb-2">
                  {totalOrders}
                </div>
                <div className="flex items-center text-xs">
                  <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                  <span className="text-green-600 mr-1">24.0%</span>
                  <span className="text-[#717182]">dari kemarin</span>
                </div>
              </div>

              {/* Processing Orders */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#717182]">Processing Orders</span>
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  {processingOrders}
                </div>
                <p className="text-xs text-[#717182]">
                  Memerlukan perhatian
                </p>
              </div>

              {/* Low Stock Products */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#717182]">Low Stock Products</span>
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-red-500 mb-2">
                  {lowStockProducts}
                </div>
                <p className="text-xs text-[#717182]">
                  Stok dibawah 5 unit
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Daily Sales Chart */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="mb-6">
                  <h3 className="font-bold text-neutral-950 mb-1">Penjualan Harian</h3>
                  <p className="text-sm text-[#717182]">Revenue 7 hari terakhir</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ececf0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Bar dataKey="value" fill="#030213" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Orders Trend */}
              <div className="bg-white rounded-lg p-6 border border-black/10">
                <div className="mb-6">
                  <h3 className="font-bold text-neutral-950 mb-1">Trend Pesanan Mingguan</h3>
                  <p className="text-sm text-[#717182]">Jumlah pesanan per minggu</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={weeklySalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ececf0" />
                    <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#030213" 
                      strokeWidth={2}
                      dot={{ fill: "#030213", strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg p-6 border border-black/10">
              <div className="mb-6">
                <h3 className="font-bold text-neutral-950 mb-1">Aktivitas Terbaru</h3>
                <p className="text-sm text-[#717182]">Pesanan dan update produk terbaru</p>
              </div>
              <div className="space-y-3">
                {recentOrders.slice(0, 2).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-[#f8f8f8] rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-5 h-5 text-[#717182]" />
                      <div>
                        <p className="text-sm font-medium text-neutral-950">Pesanan</p>
                        <p className="text-xs text-[#717182]">#{order.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-neutral-950">{formatIDR(order.total)}</p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'processing' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {order.status === 'delivered' ? 'Dikirim' : 
                         order.status === 'processing' ? 'Diproses' : order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <ProductManagement
            products={products}
            onUpdateProduct={onUpdateProduct}
          />
        )}

        {activeTab === 'orders' && (
          <OrderManagement
            orders={orders}
            onUpdateOrderStatus={onUpdateOrderStatus}
          />
        )}

        {activeTab === 'settings' && (
          <AdminSettings />
        )}
      </div>
    </div>
  );
}
