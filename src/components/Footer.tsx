import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'sonner';

// Menambahkan interface props agar Footer bisa menerima fungsi onAdminClick
interface FooterProps {
  onAdminClick?: () => void;
}

export function Footer({ onAdminClick }: FooterProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Pantau status login secara real-time
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Jika user ada, isLoggedIn = true. Jika tidak, false.
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Berhasil Logout");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      toast.error("Gagal Logout");
    }
  };

  return (
    <footer className="bg-[#f3f4f6] pt-16 pb-8 border-t mt-auto">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#030213]">Buyme</h3>
            <p className="text-[#717182] text-sm leading-relaxed max-w-xs">
              Platform e-commerce terpercaya dengan manajemen inventori otomatis.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#030213]">Layanan</h3>
            <ul className="space-y-3 text-sm text-[#717182]">
              <li><button className="hover:text-black">Bantuan</button></li>
              <li><button className="hover:text-black">Cara Pembelian</button></li>
              <li><button className="hover:text-black">Pengembalian Barang</button></li>
            </ul>
          </div>

          {/* BAGIAN AKUN - TOMBOL LOGOUT ADA DI SINI */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#030213]">Akun</h3>
            <ul className="space-y-3 text-sm text-[#717182]">
              <li><button className="hover:text-black">Profil Saya</button></li>
              <li><button className="hover:text-black">Pesanan</button></li>
              <li>
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout} 
                    className="text-red-600 font-bold hover:text-red-800 transition-colors"
                  >
                    Logout
                  </button>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">Login untuk akses</span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#030213]">Info</h3>
            <ul className="space-y-3 text-sm text-[#717182]">
              <li><button className="hover:text-black">Tentang Kami</button></li>
              <li><button className="hover:text-black">Karir</button></li>
              <li><button className="hover:text-black">Kebijakan Privasi</button></li>
              {/* TOMBOL LOGIN ADMIN KEMBALI */}
              <li>
                <button 
                  onClick={onAdminClick} 
                  className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Login Admin
                </button>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-xs text-gray-500">
          © 2025 Buyme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}