import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductCatalog } from './components/ProductCatalog';
import { AuthModal } from './components/AuthModal';
import { Homepage } from './components/Homepage'; 
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard'; // Pastikan sudah diimport
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

// Import Types
import { Product } from './components/ProductCard'; 
import { FilterState } from './components/ProductFilters';

// DATA DUMMY PRODUK
const DUMMY_PRODUCTS: Product[] = [
  { id: '1', name: "Wireless Headphones", price: 1199000, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", category: "Electronics", inStock: true, reviews: 120, stockCount: 15 },
  { id: '2', name: "Premium Smartphone", price: 10499000, rating: 4.8, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=500&q=80", category: "Electronics", inStock: true, reviews: 85, stockCount: 8 },
  { id: '3', name: "Gaming Laptop Pro", price: 19499000, rating: 4.7, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", category: "Electronics", inStock: false, reviews: 200, stockCount: 0 },
  { id: '4', name: "Smart Fitness Watch", price: 3749000, rating: 4.3, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", category: "Wearables", inStock: true, reviews: 45, stockCount: 12 },
  { id: '5', name: "Travel Backpack", price: 850000, rating: 4.6, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", category: "Travel", inStock: true, reviews: 15, stockCount: 20 },
  { id: '6', name: "Running Shoes", price: 1450000, rating: 4.4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", category: "Fashion", inStock: true, reviews: 89, stockCount: 25 },
];

export default function App() {
  // Tambahkan 'admin-dashboard' ke tipe state
  const [currentView, setCurrentView] = useState<'welcome' | 'catalog' | 'admin-login' | 'admin-dashboard'>('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    categories: [], priceRange: [0, 20000000], inStockOnly: false, minRating: 0
  });
  
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [adminUser, setAdminUser] = useState<any>(null); // State khusus admin
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // --- LOGIKA REDIRECT OTOMATIS (USER) ---
  useEffect(() => {
    if (!auth) return;
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Hanya redirect jika TIDAK sedang dalam mode admin
      if (!adminUser) {
        if (user) {
          setCurrentUser(user);
          if (currentView === 'welcome' || currentView === 'admin-login') {
              setCurrentView('catalog'); 
          }
        } else {
          setCurrentUser(null);
          // Jangan redirect paksa jika user sedang di halaman admin login
          if (currentView !== 'admin-login') {
              setCurrentView('welcome'); 
          }
        }
      }
    });
    
    return () => unsubscribe();
  }, [currentView, adminUser]);

  // Handlers
  const handleWishlistToggle = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === productId);
      if (exists) return prev.filter(p => p.id !== productId);
      const product = DUMMY_PRODUCTS.find(p => p.id === productId);
      return product ? [...prev, product] : prev;
    });
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    toast.success("Produk masuk keranjang!");
  };

  // --- RENDER CONTENT ---
  const renderContent = () => {
    // Prioritas 1: Jika sudah login sebagai Admin, tampilkan Dashboard
    if (adminUser || currentView === 'admin-dashboard') {
        return (
            <AdminDashboard 
                orders={[]} // Kirim data kosong dulu atau dummy
                products={DUMMY_PRODUCTS}
                onUpdateOrderStatus={() => {}}
                onUpdateProduct={() => {}}
                onLogout={() => {
                    setAdminUser(null);
                    setCurrentView('welcome');
                    toast.success("Admin Logout Berhasil");
                }}
            />
        );
    }

    switch (currentView) {
      case 'catalog':
        return (
          <ProductCatalog 
            products={DUMMY_PRODUCTS}
            filters={filters}
            onFiltersChange={setFilters}
            searchQuery={searchQuery}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            onProductClick={(p) => console.log("Clicked", p)}
            wishlistItems={wishlist}
          />
        );
      case 'admin-login':
        return (
          <AdminLogin 
            onLoginSuccess={(user) => {
                console.log("Admin Login Berhasil:", user);
                setAdminUser(user); // Simpan state admin
                setCurrentView('admin-dashboard'); // Pindah ke dashboard
                toast.success("Selamat Datang Admin");
            }} 
            onBackToStore={() => setCurrentView('welcome')}
          />
        );
      case 'welcome':
      default:
        return (
          <Homepage 
            onStartShopping={() => setCurrentView('catalog')} 
            onLogin={() => setIsAuthModalOpen(true)}
            currentUser={currentUser}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#030213]">
      <Toaster position="top-center" richColors />
      
      {/* Sembunyikan Header jika di halaman Admin */}
      {currentView !== 'admin-login' && !adminUser && (
        <Header
            cartItemsCount={cart.length}
            wishlistCount={wishlist.length}
            onSearchChange={(q) => { setSearchQuery(q); setCurrentView('catalog'); }}
            onCartClick={() => console.log("Cart")}
            onWishlistClick={() => console.log("Wishlist")}
            onLogoClick={() => setCurrentView('welcome')} 
        />
      )}

      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Sembunyikan Footer jika di halaman Admin */}
      {currentView !== 'admin-login' && !adminUser && (
        <Footer onAdminClick={() => setCurrentView('admin-login')} />
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}