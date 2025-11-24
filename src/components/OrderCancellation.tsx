import { useState } from 'react';
import { ArrowLeft, Clock, Phone, Mail } from 'lucide-react';
import { Order } from './OrderHistory';
import { formatIDR } from '../utils/currency';

interface OrderCancellationProps {
  order: Order;
  onBackToOrders: () => void;
  onCancelOrder: (orderId: string, reason: string, details?: string) => void;
}

export function OrderCancellation({ order, onBackToOrders, onCancelOrder }: OrderCancellationProps) {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [isConfirming, setIsConfirming] = useState(false);

  const canCancel = order.status === 'processing' && isWithin24Hours(order.date);
  
  function isWithin24Hours(orderDate: Date): boolean {
    const now = new Date();
    const timeDiff = now.getTime() - orderDate.getTime();
    const hoursDiff = timeDiff / (1000 * 3600);
    return hoursDiff <= 24;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const cancellationReasons = [
    { id: 'changed-mind', label: 'Berubah pikiran', description: 'Tidak jadi ingin membeli produk ini' },
    { id: 'found-better-price', label: 'Menemukan harga lebih murah', description: 'Menemukan produk serupa dengan harga lebih murah di tempat lain' },
    { id: 'wrong-product', label: 'Salah pilih produk', description: 'Tidak sengaja memesan produk yang salah' },
    { id: 'payment-issue', label: 'Masalah pembayaran', description: 'Mengalami kendali dalam proses pembayaran' },
    { id: 'delivery-time', label: 'Waktu pengiriman terlalu lama', description: 'Estimasi pengiriman tidak sesuai kebutuhan' },
    { id: 'technical-issue', label: 'Masalah teknis', description: 'Mengalami kendala teknis saat melakukan pemesanan' },
    { id: 'other', label: 'Alasan lainnya', description: 'Alasan lain yang tidak tersedia dalam pilihan' }
  ];

  const handleCancelOrder = () => {
    if (!selectedReason) return;
    
    setIsConfirming(true);
    setTimeout(() => {
      onCancelOrder(order.id, selectedReason, '');
      setIsConfirming(false);
      onBackToOrders();
    }, 1500);
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
          Kembali ke Pesanan
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-xl font-bold mb-2 text-neutral-950">
              Pembatalan Pesanan #ORD-{order.id}
            </h1>
            <p className="text-sm text-[#717182]">
              Isi formulir di bawah ini untuk melanjutkan pembatalan pesanan
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cancellation Reasons */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Alasan Pembatalan</h3>
                  <p className="text-xs text-[#717182] mt-1">
                    Pilih alasan pembatalan untuk membantu kami meningkatkan layanan
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {cancellationReasons.map((reason) => (
                      <label 
                        key={reason.id}
                        className={`flex items-start gap-3 p-4 border ${
                          selectedReason === reason.id 
                            ? 'border-[#030213] bg-[#f3f3f5]' 
                            : 'border-black/10 bg-white'
                        } rounded-lg cursor-pointer transition-colors hover:border-[#030213]/50`}
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={reason.id}
                          checked={selectedReason === reason.id}
                          onChange={(e) => setSelectedReason(e.target.value)}
                          className="w-4 h-4 text-[#030213] mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-neutral-950">{reason.label}</div>
                          <div className="text-xs text-[#717182] mt-0.5">{reason.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Kebijakan Pembatalan</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-sm text-[#717182]">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#030213] rounded-full mt-2 flex-shrink-0"></div>
                      <p>Refund akan diproses dalam <strong className="text-neutral-950">3-7 hari kerja</strong> untuk pembayaran non-COD</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#030213] rounded-full mt-2 flex-shrink-0"></div>
                      <p>Pembatalan COD tidak dikenakan biaya apapun</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#030213] rounded-full mt-2 flex-shrink-0"></div>
                      <p>Email konfirmasi akan dikirim setelah pembatalan berhasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Section */}
              {canCancel && (
                <div className="border border-black/10 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-neutral-950 mb-1">
                        Siap untuk membatalkan pesanan?
                      </h4>
                      <p className="text-xs text-[#717182]">
                        Pastikan alasan pembatalan sudah dipilih
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={onBackToOrders}
                        className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        Batal
                      </button>
                      <button 
                        onClick={handleCancelOrder}
                        disabled={!selectedReason || isConfirming}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isConfirming ? 'Memproses...' : 'Batalkan Pesanan'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Detail Pesanan</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-[#717182] mb-1 block">Nomor Pesanan</label>
                    <p className="text-sm font-medium text-neutral-950">ORD-{order.id}</p>
                  </div>
                  
                  <div>
                    <label className="text-xs text-[#717182] mb-1 block">Tanggal Pesanan</label>
                    <p className="text-sm font-medium text-neutral-950">
                      Sel, 7 Apr 2025, 01:43
                    </p>
                  </div>

                  <div>
                    <label className="text-xs text-[#717182] mb-1 block">Status Saat Ini</label>
                    <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
                      Diproses
                    </span>
                  </div>

                  <div className="border-t border-black/10 pt-4">
                    <label className="text-xs text-[#717182] mb-2 block">Items ({order.items.length})</label>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-start text-xs">
                          <span className="flex-1 text-neutral-950">{item.name}</span>
                          <span className="text-[#717182] ml-2">x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#717182]">Total Pesanan</span>
                      <span className="font-bold text-base text-neutral-950">{formatIDR(order.total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <h3 className="font-bold text-base text-neutral-950">Butuh Bantuan?</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#717182]">
                    Tim customer service kami siap membantu Anda 24/7
                  </p>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
                      <Phone className="w-4 h-4" />
                      Telepon: 0800-1234-5678
                    </button>
                    
                    <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
                      <Mail className="w-4 h-4" />
                      Email: support@buyme.com
                    </button>
                    
                    <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      💬 Live Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
