import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface HeaderProps {
  cartItemsCount: number;
  wishlistCount: number;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onLoginClick: () => void;
  currentUser?: { name: string } | null;
  onLogoClick: () => void;
}

export function Header({ 
  cartItemsCount, 
  wishlistCount, 
  onSearchChange, 
  onCartClick, 
  onWishlistClick, 
  onLoginClick,
  currentUser,
  onLogoClick 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchQuery);
  };

  return (
    <header className="bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Top bar with logo and mobile menu */}
        <div className="flex items-center justify-between gap-[427px] py-3.5">
          {/* Logo */}
          <button 
            onClick={onLogoClick}
            className="text-xl font-bold text-[#030213] hover:text-[#030213]/80 transition-colors"
          >
            Buyme
          </button>

          {/* Desktop search bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex relative w-[448px]">
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
          <div className="hidden md:flex items-center gap-[52px]">
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

            <button
              onClick={onLoginClick}
              className="relative h-[36px] w-[36px] flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
            >
              <User className="h-4 w-4" />
            </button>
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
              <Button
                variant="ghost"
                onClick={onWishlistClick}
                className="justify-start"
              >
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
                {wishlistCount > 0 && (
                  <Badge className="ml-auto">{wishlistCount}</Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                onClick={onCartClick}
                className="justify-start"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
                {cartItemsCount > 0 && (
                  <Badge className="ml-auto">{cartItemsCount}</Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                onClick={onLoginClick}
                className="justify-start"
              >
                <User className="h-4 w-4 mr-2" />
                {currentUser ? currentUser.name : 'Login'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}