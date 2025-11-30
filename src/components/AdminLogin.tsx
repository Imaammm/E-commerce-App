import { useState } from 'react';
import { Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface AdminLoginProps {
  onLoginSuccess: (adminUser: { id: string; name: string; email: string }) => void;
  onBackToStore: () => void;
}

export function AdminLogin({ onLoginSuccess, onBackToStore }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Admin credentials
    if (email === 'admin@buyme.com' && password === 'admin123') {
      const adminUser = {
        id: 'admin',
        name: 'Admin Buyme',
        email: 'admin@buyme.com'
      };
      
      toast.success('Login admin berhasil!');
      onLoginSuccess(adminUser);
    } else {
      toast.error('Email atau password admin salah');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Arrow */}
        <button 
          onClick={onBackToStore}
          className="mb-8 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="bg-white rounded-lg p-8">
          {/* Shield Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#ececf0] rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-neutral-950" strokeWidth={2} />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-neutral-950 mb-2">
            Admin Login
          </h1>
          <p className="text-sm text-center text-[#717182] mb-8">
            Masuk ke panel admin Buyme
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Admin */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-neutral-950">
                Email Admin
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@buyme.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm text-neutral-950">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan password admin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] hover:text-neutral-950"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#030213] text-white rounded-lg h-[44px] text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Masuk...' : 'Masuk Admin'}
            </button>
          </form>

          {/* Admin Info */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-700">
              <strong>Info Admin:</strong><br />
              Hubungi administrator untuk mendapatkan akses login admin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
