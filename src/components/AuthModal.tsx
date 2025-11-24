import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<boolean>;
  onRegister: (name: string, email: string, password: string) => Promise<boolean>;
  onForgotPassword: () => void;
  onOTPRequired: (email: string, isLogin: boolean) => void;
}

export function AuthModal({ isOpen, onClose, onLogin, onRegister, onForgotPassword, onOTPRequired }: AuthModalProps) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Trigger OTP verification for login
      onOTPRequired(loginForm.email, true);
      onClose();
      setLoginForm({ email: '', password: '' });
    } catch (err) {
      setError('Login gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (registerForm.password !== registerForm.confirmPassword) {
      setError('Password tidak sama');
      setIsLoading(false);
      return;
    }

    if (registerForm.password.length < 6) {
      setError('Password minimal 6 karakter');
      setIsLoading(false);
      return;
    }

    try {
      // Store registration data temporarily and trigger OTP
      onOTPRequired(registerForm.email, false);
      onClose();
      setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError('Registrasi gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    onForgotPassword();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[448px] p-6 bg-white rounded-[10px] border border-black/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
        
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-center text-lg text-neutral-950">
            Selamat Datang di Buyme
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-[#717182]">
            Masuk ke akun Anda atau buat akun baru untuk mulai berbelanja
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-[#ececf0] rounded-[14px] p-[3px] h-[36px]">
            <TabsTrigger 
              value="login" 
              className="rounded-[14px] data-[state=active]:bg-white data-[state=active]:text-neutral-950 text-sm h-[29px]"
            >
              Masuk
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="rounded-[14px] data-[state=active]:bg-white data-[state=active]:text-neutral-950 text-sm h-[29px]"
            >
              Daftar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-sm text-neutral-950">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-sm text-neutral-950">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Masukkan Password Anda"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#030213] text-white rounded-lg h-[44px] text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Mengirim OTP...' : 'Lanjutkan dengan OTP'}
              </button>

              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="w-full text-center text-[#030213] text-sm py-2 hover:underline"
              >
                Lupa Password?
              </button>
            </form>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name" className="text-sm text-neutral-950">Nama Lengkap</Label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-email" className="text-sm text-neutral-950">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password" className="text-sm text-neutral-950">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="Buat password (min. 6 karakter)"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-sm text-neutral-950">Konfirmasi Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Konfirmasi password Anda"
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  required
                  className="bg-[#f3f3f5] border-0 rounded-lg h-[40px] text-sm placeholder:text-[#717182]"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#030213] text-white rounded-lg h-[44px] text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Mengirim OTP...' : 'Daftar dengan OTP'}
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}