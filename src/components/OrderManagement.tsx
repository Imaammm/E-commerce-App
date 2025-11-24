import { useState } from 'react';
import { ShoppingCart, Eye, AlertCircle } from 'lucide-react';
import { Order } from './OrderHistory';
import { formatIDR } from '../utils/currency';

interface OrderManagementProps {
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrderManagement({ orders, onUpdateOrderStatus }: OrderManagementProps) {
  const [statusFilter, setStatusFilter] = useState<string>('Semua Status');

  const getStatusBadge = (status: Order['status'] | string) => {
    switch (status) {
      case 'processing':
        return <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
          Siap Diproses
        </span>;
      case 'shipped':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          Dikirim
        </span>;
      case 'delivered':
        return <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          Selesai
        </span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">{status}</span>;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ShoppingCart className="w-5 h-5 text-neutral-950" />
          <h2 className="font-bold text-neutral-950">Order Management</h2>
        </div>
        <p className="text-sm text-[#717182]">Kelola pesanan dan status pengiriman</p>
      </div>

      {/* Auto Processing Info Card */}
      <div className="bg-white rounded-lg border border-black/10 p-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <ShoppingCart className="w-5 h-5 text-neutral-950" />
          <h3 className="font-bold text-neutral-950">Konfirmasi Pembayaran & Pembaruan Stok</h3>
        </div>
        <p className="text-sm text-[#717182] mb-4">
          Sistem otomatis mengubah status pesanan setelah konfirmasi pembayaran berhasil
        </p>

        {/* Blue Alert Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-blue-900">Proses Otomatis Aktif</h4>
          </div>
          <div className="space-y-1 text-sm text-blue-700">
            <p>✅ Pembayaran dikonfirmasi otomatis</p>
            <p>✅ Stok produk diperbarui secara real-time</p>
            <p>✅ Status pesanan berubah ke "Siap Diproses" tanpa intervensi admin</p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-lg border border-black/10 p-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm text-neutral-950">Filter Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
          >
            <option>Semua Status</option>
            <option>Siap Diproses</option>
            <option>Dikirim</option>
            <option>Selesai</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f8f8f8] border-b border-black/10">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">ID Pesanan</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Tanggal</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Total</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Tracking</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className={index !== orders.length - 1 ? 'border-b border-black/10' : ''}>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-950">{order.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-[#717182]">
                    {new Date(order.date).toLocaleDateString('id-ID', { 
                      day: 'numeric',
                      month: 'short', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-950 font-medium">{formatIDR(order.total)}</span>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(order.status)}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-[#717182]">{order.trackingNumber || '-'}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
                    <Eye className="w-4 h-4 text-[#717182]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
