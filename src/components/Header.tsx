import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

import { AuthModal } from './AuthModal';
import { auth } from '../firebase'; 
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { toast } from 'sonner';

interface HeaderProps {
  cartItemsCount: number;
  wishlistCount: number;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onLogoClick: () => void;
}

export function Header({ 
  cartItemsCount, 
  wishlistCount, 
  onSearchChange, 
  onCartClick, 
  onWishlistClick, 
  onLogoClick 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // --- 1. PASANG PEMANTAU LOGIN ---
  useEffect(() => {
    if (!auth) return; 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // --- 2. FUNGSI LOGOUT ---
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Berhasil Logout");
      onLogoClick(); // Opsional: Kembali ke home saat logout
    } catch (error) {
      toast.error("Gagal Logout");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchQuery);
  };

  return (
    <>
      <header className="bg-white border-b border-black/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex items-center justify-between gap-4 lg:gap-[427px] py-3.5">
            {/* Logo: Klik ini membawa ke Landing Page */}
            <button 
              onClick={onLogoClick}
              className="text-xl font-bold text-[#030213] hover:text-[#030213]/80 transition-colors whitespace-nowrap"
            >
              Buyme
            </button>

            {/* Desktop search bar */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative w-full max-w-[448px]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[36px] px-3 text-sm placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-[36px] w-[36px] flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-[52px]">
              <button
                onClick={onWishlistClick}
                className="relative h-[36px] w-[36px] flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
              >
                <Heart className="h-4 w-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={onCartClick}
                className="relative h-[36px] w-[36px] flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* USER PROFILE / LOGIN */}
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="text-right hidden lg:block">
                    <p className="text-xs text-gray-500">Hi,</p>
                    <p className="text-sm font-bold max-w-[80px] truncate">
                      {user.email?.split('@')[0] || user.phoneNumber || 'User'}
                    </p>
                  </div>
                  <div className="group relative">
                    <button className="h-[36px] w-[36px] bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border hover:border-black">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="User" className="w-full h-full object-cover"/>
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </button>
                    {/* Dropdown Logout */}
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border hidden group-hover:block p-1 z-50">
                        <button 
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded flex items-center gap-2"
                        >
                            <LogOut size={14}/> Logout
                        </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="relative h-[36px] w-[36px] flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
                >
                  <User className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile search bar */}
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[36px] px-3 text-sm placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-[36px] w-[36px] flex items-center justify-center rounded-lg"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <Button variant="ghost" onClick={onWishlistClick} className="justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                  {wishlistCount > 0 && <Badge className="ml-auto">{wishlistCount}</Badge>}
                </Button>

                <Button variant="ghost" onClick={onCartClick} className="justify-start">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {cartItemsCount > 0 && <Badge className="ml-auto">{cartItemsCount}</Badge>}
                </Button>

                {user ? (
                   <Button variant="ghost" onClick={handleLogout} className="justify-start text-red-600">
                     <LogOut className="h-4 w-4 mr-2" />
                     Logout ({user.email?.split('@')[0] || 'User'})
                   </Button>
                ) : (
                   <Button variant="ghost" onClick={() => setIsAuthModalOpen(true)} className="justify-start">
                     <User className="h-4 w-4 mr-2" />
                     Login / Register
                   </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MODAL AUTH */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLoginSuccess={() => {
            onLogoClick(); // Redirect ke home
            setIsAuthModalOpen(false); // Tutup modal
        }}
      />
    </>
  );
}