import { useState } from 'react';
import { Plus, Edit, Trash2, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export function FAQManagement() {
  // Mock FAQ data - in real app, this would come from backend
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: '1',
      question: 'Berapa lama waktu pengiriman?',
      answer: 'Waktu pengiriman biasanya 2-5 hari kerja untuk wilayah Jabodetabek dan 3-7 hari kerja untuk luar kota.',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      question: 'Bagaimana cara melakukan pengembalian produk?',
      answer: 'Anda dapat melakukan pengembalian produk dalam 7 hari setelah pembelian dengan kondisi produk masih dalam keadaan baik dan kemasan asli.',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: '3',
      question: 'Apakah tersedia pembayaran cicilan?',
      answer: 'Ya, kami menyediakan pembayaran cicilan melalui berbagai platform seperti Kredivo, Akulaku, dan kartu kredit.',
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05')
    },
    {
      id: '4',
      question: 'Bagaimana cara melacak pesanan?',
      answer: 'Anda dapat melacak pesanan melalui halaman "Riwayat Pesanan" di akun Anda atau menggunakan nomor tracking yang dikirim via email.',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-15')
    }
  ]);

  const handleDeleteFaq = (id: string) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
    toast.success('FAQ berhasil dihapus');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-neutral-950" />
              <h3 className="font-bold text-neutral-950">Manajemen FAQ</h3>
            </div>
            <p className="text-sm text-[#717182]">Kelola pertanyaan dan jawaban yang sering ditanyakan pelanggan</p>
          </div>
          
          {/* Add New FAQ Button */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90">
            <Plus className="w-4 h-4" />
            Tambah FAQ Baru
          </button>
        </div>
      </div>

      {/* FAQ Table */}
      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f8f8f8] border-b border-black/10">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">#</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Pertanyaan</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Jawaban</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Terakhir Diubah</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faqs.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-[#717182] text-sm">
                  Belum ada FAQ. Tambahkan FAQ pertama Anda!
                </td>
              </tr>
            ) : (
              faqs.map((faq, index) => (
                <tr key={faq.id} className={index !== faqs.length - 1 ? 'border-b border-black/10' : ''}>
                  <td className="px-6 py-4">
                    <span className="text-sm text-neutral-950">{index + 1}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <p className="text-sm text-neutral-950 line-clamp-2">{faq.question}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <p className="text-sm text-[#717182] line-clamp-2">{faq.answer}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#717182]">
                      {faq.updatedAt.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Edit Button */}
                      <button className="flex items-center gap-1 px-3 py-1.5 text-xs border border-black/10 rounded hover:bg-gray-50">
                        <Edit className="w-3 h-3" />
                        Edit
                      </button>
                      
                      {/* Delete Button */}
                      <button 
                        onClick={() => handleDeleteFaq(faq.id)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-600 border border-red-200 rounded hover:bg-red-50"
                      >
                        <Trash2 className="w-3 h-3" />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
