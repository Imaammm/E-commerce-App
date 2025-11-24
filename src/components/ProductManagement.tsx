import { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Edit, 
  Eye, 
  RefreshCw,
  Plus,
  ChevronDown,
  X,
  Camera
} from 'lucide-react';
import { toast } from 'sonner';
import { Product } from './ProductCard';
import { formatIDR } from '../utils/currency';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Switch } from './ui/switch';

interface ProductManagementProps {
  products: Product[];
  onUpdateProduct: (productId: string, updates: Partial<Product>) => void;
}

export function ProductManagement({ products, onUpdateProduct }: ProductManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua Kategori');
  const [statusFilter, setStatusFilter] = useState('Semua Status');
  
  // Modal states
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Form states
  const [editForm, setEditForm] = useState({
    name: '',
    category: '',
    price: '',
    originalPrice: '',
    stockCount: '',
    inStock: true
  });

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'Semua Kategori' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'Semua Status' || 
                         (statusFilter === 'Tersedia' && product.stockCount > 0) ||
                         (statusFilter === 'Habis' && product.stockCount === 0);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate stock statistics
  const totalProducts = products.length;
  const lowStockCount = products.filter(p => p.stockCount > 0 && p.stockCount < 5).length;
  const outOfStockCount = products.filter(p => p.stockCount === 0).length;

  const handleSyncStock = () => {
    setIsSyncModalOpen(true);
  };

  const handleStartSync = () => {
    setIsSyncModalOpen(false);
    toast.success('Stok berhasil disinkronkan!');
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setEditForm({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || product.price.toString(),
      stockCount: product.stockCount.toString(),
      inStock: product.inStock
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (selectedProduct) {
      onUpdateProduct(selectedProduct.id, {
        name: editForm.name,
        category: editForm.category,
        price: Number(editForm.price),
        originalPrice: Number(editForm.originalPrice),
        stockCount: Number(editForm.stockCount),
        inStock: editForm.inStock
      });
      toast.success('Produk berhasil diperbarui!');
      setIsEditModalOpen(false);
    }
  };

  const handleAddProduct = () => {
    setEditForm({
      name: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      price: '1499000',
      originalPrice: '1199000',
      stockCount: '15',
      inStock: true
    });
    setIsAddModalOpen(true);
  };

  const handleSaveNewProduct = () => {
    toast.success('Produk berhasil ditambahkan!');
    setIsAddModalOpen(false);
  };

  const getStockBadge = (stockCount: number) => {
    if (stockCount === 0) {
      return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Habis</span>;
    }
    return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Tersedia</span>;
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-5 h-5 text-neutral-950" />
          <h2 className="font-bold text-neutral-950">Product Management</h2>
        </div>
        <p className="text-sm text-[#717182]">Kelola produk dan sinkronisasi stok inventory</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 mb-6">
        <button
          onClick={handleSyncStock}
          className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50"
        >
          <RefreshCw className="w-4 h-4" />
          Sync Stock
        </button>
        <button 
          onClick={handleAddProduct}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
        >
          <Plus className="w-4 h-4" />
          Tambah Produk
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Produk */}
        <div className="bg-[#e8f5e9] rounded-lg p-4 border border-[#4caf50]">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-green-700" />
            <span className="text-sm text-green-700">Total Produk</span>
          </div>
          <div className="text-2xl font-bold text-green-700">{totalProducts}</div>
        </div>

        {/* Stok Rendah */}
        <div className="bg-[#fff3e0] rounded-lg p-4 border border-[#ff9800]">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-orange-700" />
            <span className="text-sm text-orange-700">Stok Rendah</span>
          </div>
          <div className="text-2xl font-bold text-orange-700">{lowStockCount}</div>
        </div>

        {/* Stok Habis */}
        <div className="bg-[#ffebee] rounded-lg p-4 border border-[#f44336]">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-red-700" />
            <span className="text-sm text-red-700">Stok Habis</span>
          </div>
          <div className="text-2xl font-bold text-red-700">{outOfStockCount}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-black/10 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full h-10 px-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 appearance-none"
            >
              <option>Semua Kategori</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Wearables</option>
              <option>Travel</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182] pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full h-10 px-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 appearance-none"
            >
              <option>Semua Status</option>
              <option>Tersedia</option>
              <option>Habis</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182] pointer-events-none" />
          </div>

          {/* Advanced Filter */}
          <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter Lanjut
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f8f8f8] border-b border-black/10">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Produk</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Kategori</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Harga</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Stok</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Status</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-[#717182]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className={index !== filteredProducts.length - 1 ? 'border-b border-black/10' : ''}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-neutral-950">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-[#717182]">{product.category}</span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-neutral-950">{formatIDR(product.price)}</div>
                    {product.originalPrice && (
                      <div className="text-xs text-[#717182] line-through">{formatIDR(product.originalPrice)}</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${product.stockCount === 0 ? 'text-red-500' : 'text-neutral-950'}`}>
                    {product.stockCount}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {getStockBadge(product.stockCount)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleEditProduct(product)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded"
                    >
                      <Edit className="w-4 h-4 text-[#717182]" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
                      <Eye className="w-4 h-4 text-[#717182]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sync Stock Modal */}
      {isSyncModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsSyncModalOpen(false)}
              className="absolute top-4 right-4 text-[#717182] hover:text-neutral-950"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-neutral-950 mb-2">Sinkronisasi Stok</h2>
            <p className="text-sm text-[#717182] mb-6">Sinkronkan data stok dengan sistem inventory offline</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-blue-900 mb-3">Proses Sinkronisasi:</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Mengambil data stok dari sistem offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Memperbarui ketersediaan produk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Mengupdate status in-stock/out-of-stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Validasi konsistensi data</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsSyncModalOpen(false)}
                className="px-6 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleStartSync}
                className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
              >
                Mulai Sinkronisasi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-4 right-4 text-[#717182] hover:text-neutral-950"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-neutral-950 mb-2">Edit Produk</h2>
            <p className="text-sm text-[#717182] mb-6">Perbarui informasi produk dan stok</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Nama Produk */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Nama Produk</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Kategori */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Kategori</label>
                <select
                  value={editForm.category}
                  onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full h-10 px-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 appearance-none"
                >
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Wearables</option>
                  <option>Travel</option>
                </select>
              </div>

              {/* Harga Normal */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Harga Normal (Rp)</label>
                <input
                  type="number"
                  value={editForm.originalPrice}
                  onChange={(e) => setEditForm(prev => ({ ...prev, originalPrice: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Harga Jual */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Harga Jual (Rp)</label>
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => setEditForm(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Jumlah Stok */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Jumlah Stok</label>
                <input
                  type="number"
                  value={editForm.stockCount}
                  onChange={(e) => setEditForm(prev => ({ ...prev, stockCount: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Status Produk */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Status Produk</label>
                <div className="flex items-center gap-2 h-10">
                  <Switch
                    checked={editForm.inStock}
                    onCheckedChange={(checked: boolean) => setEditForm(prev => ({ ...prev, inStock: checked }))}
                  />
                  <span className="text-sm text-neutral-950">Aktif</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-6 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 text-[#717182] hover:text-neutral-950"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-neutral-950 mb-2">Tambah Produk</h2>
            <p className="text-sm text-[#717182] mb-6">Masukkan informasi produk dan stok</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Nama Produk */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Nama Produk</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Kategori */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Kategori</label>
                <select
                  value={editForm.category}
                  onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full h-10 px-3 pr-10 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 appearance-none"
                >
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Wearables</option>
                  <option>Travel</option>
                </select>
              </div>

              {/* Harga Normal */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Harga Normal (Rp)</label>
                <input
                  type="number"
                  value={editForm.originalPrice}
                  onChange={(e) => setEditForm(prev => ({ ...prev, originalPrice: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Harga Jual */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Harga Jual (Rp)</label>
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => setEditForm(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Jumlah Stok */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Jumlah Stok</label>
                <input
                  type="number"
                  value={editForm.stockCount}
                  onChange={(e) => setEditForm(prev => ({ ...prev, stockCount: e.target.value }))}
                  className="w-full h-10 px-3 bg-[#f3f3f5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>

              {/* Status Produk */}
              <div>
                <label className="text-sm text-neutral-950 mb-2 block">Status Produk</label>
                <div className="flex items-center gap-2 h-10">
                  <Switch
                    checked={editForm.inStock}
                    onCheckedChange={(checked: boolean) => setEditForm(prev => ({ ...prev, inStock: checked }))}
                  />
                  <span className="text-sm text-neutral-950">Aktif</span>
                </div>
              </div>
            </div>

            {/* Pilih Gambar */}
            <div className="mb-6">
              <label className="text-sm text-neutral-950 mb-2 block">Pilih Gambar</label>
              <div className="w-32 h-32 bg-[#f3f3f5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#ececf0] transition-colors">
                <Camera className="w-8 h-8 text-[#717182]" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-6 py-2 text-sm text-neutral-950 border border-black/10 rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSaveNewProduct}
                className="px-6 py-2 text-sm text-white bg-[#030213] rounded-lg hover:bg-[#030213]/90"
              >
                Tambah Produk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
