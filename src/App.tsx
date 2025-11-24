import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetail } from './components/ProductDetail';
import { ShoppingCart, CartItem } from './components/ShoppingCart';
import { Checkout, OrderData } from './components/Checkout';
import { OrderConfirmation } from './components/OrderConfirmation';
import { OrderHistory, Order } from './components/OrderHistory';
import { OrderTracking } from './components/OrderTracking';
import { OrderCancellation } from './components/OrderCancellation';
import { Wishlist } from './components/Wishlist';
import { FAQ } from './components/FAQ';
import { AuthModal } from './components/AuthModal';
import { OTPVerification } from './components/OTPVerification';
import { ForgotPassword } from './components/ForgotPassword';
import { SetNewPassword } from './components/SetNewPassword';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminPanel } from './components/AdminPanel';
import { UserSettings } from './components/UserSettings';
import { ManageAddresses } from './components/ManageAddresses';
import { Product } from './components/ProductCard';
import { FilterState } from './components/ProductFilters';
export type Page = 'homepage' | 'catalog' | 'product' | 'cart' | 'checkout' | 'confirmation' | 'orders' | 'order-tracking' | 'order-cancellation' | 'wishlist' | 'faq' | 'forgot-password' | 'reset-password' | 'admin-login' | 'admin-dashboard' | 'admin' | 'otp-verification' | 'user-settings' | 'manage-addresses' | 'change-password' | 'notification-settings' | 'edit-profile';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function App() {
  // State management
  const [currentPage, setCurrentPage] = useState<Page>('homepage');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [lastOrderData, setLastOrderData] = useState<OrderData | null>(null);
  const [lastOrderId, setLastOrderId] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orderToCancel, setOrderToCancel] = useState<Order | null>(null);
  const [resetPasswordData, setResetPasswordData] = useState<{ email: string; token: string } | null>(null);
  const [otpData, setOtpData] = useState<{ email: string; isLogin: boolean; userData?: any } | null>(null);
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [registrationData, setRegistrationData] = useState<{ name: string; email: string; password: string } | null>(null);

  // Filter state - Updated for IDR prices
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 30000000], // 30 million IDR
    inStockOnly: false,
    minRating: 0
  });

  // Mock product data with the fetched images - Prices in Indonesian Rupiah (IDR)
  const products: Product[] = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 1199000,
      originalPrice: 1499000,
      image: 'https://images.unsplash.com/photo-1623788728910-23180a99871d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NTc3ODcxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      stockCount: 15
    },
    {
      id: '2',
      name: 'Premium Smartphone 128GB',
      price: 10499000,
      originalPrice: 11999000,
      image: 'https://images.unsplash.com/photo-1675953935267-e039f13ddd79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU3ODM3NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Electronics',
      rating: 4.8,
      reviews: 342,
      inStock: true,
      stockCount: 8
    },
    {
      id: '3',
      name: 'Gaming Laptop Pro',
      price: 19499000,
      originalPrice: 22499000,
      image: 'https://images.unsplash.com/photo-1613398773682-9e272a85f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3ODE3ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Electronics',
      rating: 4.7,
      reviews: 89,
      inStock: true,
      stockCount: 5
    },
    {
      id: '4',
      name: 'Smart Fitness Watch',
      price: 3749000,
      image: 'https://images.unsplash.com/photo-1716234479503-c460b87bdf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzU3ODY1OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Wearables',
      rating: 4.3,
      reviews: 156,
      inStock: true,
      stockCount: 12
    },
    {
      id: '5',
      name: 'Athletic Running Shoes',
      price: 1349000,
      originalPrice: 1799000,
      image: 'https://images.unsplash.com/photo-1678802910315-b1bf6ca9f6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NTc4MjczOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Fashion',
      rating: 4.4,
      reviews: 203,
      inStock: true,
      stockCount: 25
    },
    {
      id: '6',
      name: 'Travel Backpack 35L',
      price: 899000,
      image: 'https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwxfHx8fDE3NTc4NDU3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Travel',
      rating: 4.6,
      reviews: 94,
      inStock: false,
      stockCount: 0
    }
  ];

  // User storage - in real app this would be managed by backend
  const [users, setUsers] = useState<Array<{ id: string; name: string; email: string; password: string }>>([
    // Admin account only
    { id: 'admin', name: 'Admin Buyme', email: 'admin@buyme.com', password: 'admin123' }
  ]);

  // Initialize data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('buyme-cart');
    const savedWishlist = localStorage.getItem('buyme-wishlist');
    const savedUser = localStorage.getItem('buyme-user');
    const savedOrders = localStorage.getItem('buyme-orders');

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders).map((order: any) => ({
        ...order,
        date: new Date(order.date)
      })));
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('buyme-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('buyme-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('buyme-user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('buyme-user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('buyme-orders', JSON.stringify(orders));
  }, [orders]);

  // Authentication functions - These are now just for storing data before OTP
  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    // In real app, this would validate credentials with backend
    // For now, we just store the attempt and proceed to OTP
    return true;
  };

  const handleRegister = async (name: string, email: string, password: string): Promise<boolean> => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return false;
    }
    
    // Store registration data for use after OTP verification
    setRegistrationData({ name, email, password });
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAdminUser(null);
    toast.success('Berhasil logout');
  };

  // Password reset functions
  const handleForgotPassword = () => {
    setIsAuthModalOpen(false);
    setCurrentPage('forgot-password');
  };

  const handleResetLinkSent = (email: string, token: string) => {
    setResetPasswordData({ email, token });
    // In a real app, you'd navigate to the reset password page via email link
    // For demo purposes, we'll simulate the user clicking the email link
    setTimeout(() => {
      setCurrentPage('reset-password');
      toast.info('Simulasi klik link email - di aplikasi nyata, user akan klik link di email');
    }, 2000);
  };

  const handlePasswordReset = async (newPassword: string): Promise<boolean> => {
    if (!resetPasswordData) return false;
    
    // Find and update user password
    const userIndex = users.findIndex(u => u.email === resetPasswordData.email);
    if (userIndex >= 0) {
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers];
        updatedUsers[userIndex].password = newPassword;
        return updatedUsers;
      });
      toast.success('Password berhasil direset');
      return true;
    }
    return false;
  };

  // Order tracking functions
  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setCurrentPage('order-tracking');
  };

  // Order cancellation functions
  const handleCancelOrder = (orderId: string, reason: string, details?: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: 'cancelled', cancellationReason: reason, cancellationDetails: details } : order
      )
    );
    toast.success('Pesanan berhasil dibatalkan');
    setOrderToCancel(null);
    setCurrentPage('orders');
  };

  const handleRequestCancelOrder = (order: Order) => {
    setOrderToCancel(order);
    setCurrentPage('order-cancellation');
  };

  // OTP verification functions
  const handleOTPRequired = (email: string, isLogin: boolean) => {
    setOtpData({ email, isLogin });
    setCurrentPage('otp-verification');
  };

  const handleOTPVerificationSuccess = async () => {
    if (!otpData) return;

    if (otpData.isLogin) {
      // For login, find user by email and log them in
      const user = users.find(u => u.email === otpData.email);
      if (user) {
        setCurrentUser({ id: user.id, name: user.name, email: user.email });
        toast.success(`Selamat datang kembali, ${user.name}!`);
      } else {
        toast.error('Akun tidak ditemukan');
        setOtpData(null);
        setCurrentPage('catalog');
        setIsAuthModalOpen(true);
        return;
      }
    } else {
      // For registration, create new user with stored data
      if (registrationData) {
        const newUser = {
          id: Date.now().toString(),
          name: registrationData.name,
          email: registrationData.email,
          password: registrationData.password
        };
        
        setUsers(prevUsers => [...prevUsers, newUser]);
        setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
        setRegistrationData(null);
        toast.success(`Selamat datang di Buyme, ${newUser.name}!`);
      }
    }
    
    setOtpData(null);
    setCurrentPage('homepage');
  };

  // Admin functions
  const handleAdminLogin = (admin: User) => {
    setAdminUser(admin);
    setCurrentPage('admin-dashboard');
  };

  const handleUpdateProduct = (productId: string, updates: Partial<Product>) => {
    // Find and update product in the products array
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex >= 0) {
      Object.assign(products[productIndex], updates);
      toast.success('Produk berhasil diperbarui');
    }
  };

  // Cart functions
  const handleAddToCart = (product: Product, quantity = 1) => {
    if (!product.inStock || quantity > product.stockCount) {
      toast.error('Insufficient stock available');
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stockCount) {
          toast.error('Cannot add more items than available in stock');
          return prevItems;
        }
        
        toast.success(`Updated ${product.name} quantity in cart`);
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { product, quantity, addedAt: new Date() }];
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast.success('Item removed from cart');
  };

  // Wishlist functions
  const handleWishlistToggle = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setWishlistItems(prevItems => {
      const isInWishlist = prevItems.some(item => item.id === productId);
      
      if (isInWishlist) {
        toast.success('Removed from wishlist');
        return prevItems.filter(item => item.id !== productId);
      } else {
        toast.success('Added to wishlist');
        return [...prevItems, product];
      }
    });
  };

  // Order functions
  const handlePlaceOrder = (orderData: OrderData) => {
    const orderId = `ORD-${Date.now()}`;
    
    // Create new order
    const newOrder: Order = {
      id: orderId,
      date: new Date(),
      status: 'processing',
      total: orderData.totals.total,
      items: orderData.items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        quantity: item.quantity
      })),
      shippingAddress: orderData.shippingAddress,
      trackingNumber: `TRK${Date.now()}`
    };

    // Update stock levels (simulate automatic inventory sync)
    cartItems.forEach(item => {
      const productIndex = products.findIndex(p => p.id === item.product.id);
      if (productIndex >= 0) {
        products[productIndex].stockCount -= item.quantity;
        if (products[productIndex].stockCount <= 0) {
          products[productIndex].inStock = false;
        }
      }
    });

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setLastOrderData(orderData);
    setLastOrderId(orderId);
    setCartItems([]); // Clear cart
    setCurrentPage('confirmation');
    
    toast.success('Pesanan berhasil dibuat!');
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast.success(`Status pesanan ${orderId} diubah ke ${newStatus}`);
  };

  // Navigation functions
  const handleLogoClick = () => {
    setCurrentPage('homepage');
    setSearchQuery('');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('catalog');
  };

  const handleLoginClick = () => {
    if (currentUser) {
      setCurrentPage('orders');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'homepage':
        return (
          <Homepage
            onStartShopping={() => setCurrentPage('catalog')}
            onLogin={() => setIsAuthModalOpen(true)}
            currentUser={currentUser}
          />
        );
      
      case 'catalog':
        return (
          <ProductCatalog
            products={products}
            filters={filters}
            onFiltersChange={setFilters}
            searchQuery={searchQuery}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            wishlistItems={wishlistItems}
          />
        );
      
      case 'product':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            isInWishlist={wishlistItems.some(item => item.id === selectedProduct.id)}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            onBackClick={() => setCurrentPage('catalog')}
          />
        ) : null;
      
      case 'cart':
        return (
          <ShoppingCart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveFromCart}
            onProceedToCheckout={() => setCurrentPage('checkout')}
            onBackToShopping={() => setCurrentPage('catalog')}
          />
        );
      
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onPlaceOrder={handlePlaceOrder}
            onBackToCart={() => setCurrentPage('cart')}
            currentUser={currentUser}
          />
        );
      
      case 'confirmation':
        return lastOrderData && lastOrderId ? (
          <OrderConfirmation
            orderData={lastOrderData}
            orderId={lastOrderId}
            onContinueShopping={() => setCurrentPage('catalog')}
            onViewOrderHistory={() => setCurrentPage('orders')}
          />
        ) : null;
      
      case 'orders':
        return (
          <OrderHistory
            orders={orders}
            onBackToShopping={() => setCurrentPage('catalog')}
            onOrderClick={handleOrderClick}
            onCancelOrderClick={handleRequestCancelOrder}
          />
        );
      
      case 'order-tracking':
        return selectedOrder ? (
          <OrderTracking
            order={selectedOrder}
            onBackToOrders={() => setCurrentPage('orders')}
            onCancelOrderClick={handleRequestCancelOrder}
          />
        ) : null;
      
      case 'order-cancellation':
        return orderToCancel ? (
          <OrderCancellation
            order={orderToCancel}
            onBackToOrders={() => {
              setOrderToCancel(null);
              setCurrentPage('orders');
            }}
            onCancelOrder={handleCancelOrder}
          />
        ) : null;
      
      case 'otp-verification':
        return otpData ? (
          <OTPVerification
            email={otpData.email}
            isLogin={otpData.isLogin}
            onVerifySuccess={handleOTPVerificationSuccess}
            onBackToAuth={() => {
              setOtpData(null);
              setCurrentPage('catalog');
              setIsAuthModalOpen(true);
            }}
          />
        ) : null;
      
      case 'admin-login':
        return (
          <AdminLogin
            onLoginSuccess={handleAdminLogin}
            onBackToStore={() => setCurrentPage('homepage')}
          />
        );
      
      case 'admin-dashboard':
        return adminUser ? (
          <AdminDashboard
            orders={orders}
            products={products}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onUpdateProduct={handleUpdateProduct}
            onLogout={() => {
              setAdminUser(null);
              setCurrentPage('homepage');
            }}
          />
        ) : null;
      
      case 'user-settings':
        return currentUser ? (
          <UserSettings
            currentUser={currentUser}
            onNavigate={setCurrentPage}
            onBackToShopping={() => setCurrentPage('catalog')}
            onLogout={handleLogout}
          />
        ) : null;
      
      case 'manage-addresses':
        return (
          <ManageAddresses
            onBackToSettings={() => setCurrentPage('user-settings')}
          />
        );
      
      case 'wishlist':
        return (
          <Wishlist
            wishlistItems={wishlistItems}
            onRemoveFromWishlist={(productId) => handleWishlistToggle(productId)}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            onBackToShopping={() => setCurrentPage('catalog')}
          />
        );
      
      case 'faq':
        return (
          <FAQ
            onBackToShopping={() => setCurrentPage('catalog')}
          />
        );
      
      case 'forgot-password':
        return (
          <ForgotPassword
            onBackToLogin={() => {
              setCurrentPage('homepage');
              setIsAuthModalOpen(true);
            }}
            onResetLinkSent={handleResetLinkSent}
          />
        );
      
      case 'reset-password':
        return resetPasswordData ? (
          <SetNewPassword
            email={resetPasswordData.email}
            token={resetPasswordData.token}
            onPasswordReset={handlePasswordReset}
            onBackToLogin={() => {
              setCurrentPage('homepage');
              setResetPasswordData(null);
              setIsAuthModalOpen(true);
            }}
          />
        ) : null;
      
      case 'admin':
        return (
          <AdminPanel
            orders={orders}
            onUpdateOrderStatus={handleUpdateOrderStatus}
            onBackToShopping={() => setCurrentPage('catalog')}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onSearchChange={handleSearchChange}
        onCartClick={() => setCurrentPage('cart')}
        onWishlistClick={() => setCurrentPage('wishlist')}
        onLoginClick={handleLoginClick}
        currentUser={currentUser}
        onLogoClick={handleLogoClick}
      />
      
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-[#ececf0] mt-16">
        <div className="container mx-auto px-4 lg:px-20 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-base text-neutral-950">Buyme</h3>
              <p className="text-sm text-[#717182]">
                Platform e-commerce terpercaya dengan manajemen inventori otomatis.
              </p>
            </div>
            <div>
              <h4 className="font-normal text-base mb-4 text-neutral-950">Layanan Pelanggan</h4>
              <ul className="space-y-2 text-sm text-[#717182]">
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-foreground">FAQ</button></li>
                <li><button className="hover:text-foreground">Hubungi Kami</button></li>
                <li><button className="hover:text-foreground">Pengembalian</button></li>
                <li><button className="hover:text-foreground">Info Pengiriman</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-base mb-4 text-neutral-950">Akun</h4>
              <ul className="space-y-2 text-sm text-[#717182]">
                <li><button onClick={() => setCurrentPage('orders')} className="hover:text-foreground">Pesanan Saya</button></li>
                <li><button onClick={() => setCurrentPage('wishlist')} className="hover:text-foreground">Wishlist</button></li>
                {currentUser ? (
                  <>
                    <li><button onClick={() => setCurrentPage('user-settings')} className="hover:text-foreground">Pengaturan Akun</button></li>
                    <li><button onClick={handleLogout} className="hover:text-foreground">Logout</button></li>
                  </>
                ) : (
                  <li><button onClick={handleLoginClick} className="hover:text-foreground">Login</button></li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-base mb-4 text-neutral-950">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-[#717182]">
                <li><button className="hover:text-foreground">Tentang Kami</button></li>
                <li><button className="hover:text-foreground">Karir</button></li>
                <li><button className="hover:text-foreground">Kebijakan Privasi</button></li>
                <li><button className="hover:text-foreground">Syarat Layanan</button></li>
                {adminUser ? (
                  <li><button onClick={() => setCurrentPage('admin-dashboard')} className="hover:text-foreground text-[#030213]">Dashboard Admin</button></li>
                ) : (
                  <li><button onClick={() => setCurrentPage('admin-login')} className="hover:text-foreground text-[#030213]">Login Admin</button></li>
                )}
              </ul>
            </div>
          </div>
          <div className="border-t border-black/10 mt-8 pt-8 text-center text-sm text-[#717182]">
            © 2024 Buyme. Semua hak dilindungi. | Sinkronisasi inventori otomatis dengan teknologi modern.
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        onForgotPassword={handleForgotPassword}
        onOTPRequired={handleOTPRequired}
      />
    </div>
  );
}