import { useState } from 'react';
import { Mail, Phone, X, ArrowRight, User } from 'lucide-react';
import { OTPVerification } from './OTPVerification'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: any) => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [viewState, setViewState] = useState<'FORM' | 'OTP'>('FORM');
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  
  // State untuk Tab (Masuk vs Daftar)
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  // --- LOGIC HANDLE SUBMIT ---
  const handleEmailSubmit = async () => {
    if (!email || !password) return toast.error("Isi email dan password");
    
    try {
      let userCredential;
      if (activeTab === 'login') {
        // Mode Masuk
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Berhasil Masuk!");
      } else {
        // Mode Daftar
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Akun Berhasil Dibuat!");
      }
      
      if (onLoginSuccess) onLoginSuccess(userCredential.user);
      onClose();
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        toast.error("Email sudah terdaftar. Silakan Masuk.");
        setActiveTab('login'); 
      } else if (e.code === 'auth/wrong-password') {
        toast.error("Password salah.");
      } else if (e.code === 'auth/user-not-found') {
        toast.error("Akun tidak ditemukan. Silakan Daftar.");
      } else {
        toast.error("Gagal: " + e.message);
      }
    }
  };

  // --- RENDER OTP VIEW ---
  if (viewState === 'OTP') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-xl w-full max-w-md relative overflow-hidden">
           <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full"><X size={20}/></button>
           <OTPVerification 
             phoneNumber={phoneNumber}
             onVerifySuccess={(user) => {
               if (onLoginSuccess) onLoginSuccess(user);
               onClose();
             }}
             onBackToAuth={() => setViewState('FORM')}
           />
        </div>
      </div>
    );
  }

  // --- RENDER FORM LOGIN/REGISTER ---
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X /></button>
        
        <h2 className="text-2xl font-bold text-center mb-2">Selamat Datang</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          {activeTab === 'login' ? 'Masuk untuk mulai berbelanja' : 'Daftar akun baru dalam hitungan detik'}
        </p>

        {/* --- TABS MASUK / DAFTAR --- */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
          <button 
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === 'login' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Masuk
          </button>
          <button 
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === 'register' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Daftar
          </button>
        </div>

        {loginMethod === 'email' ? (
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input 
                className="w-full border p-3 pl-10 rounded-lg outline-none focus:border-black transition" 
                placeholder="Email Anda" 
                type="email"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3.5 text-gray-400 w-5 h-5">🔒</div> 
              <input 
                className="w-full border p-3 pl-10 rounded-lg outline-none focus:border-black transition" 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            
            <button 
              onClick={handleEmailSubmit}
              className="w-full bg-black text-white p-3 rounded-lg font-bold hover:bg-gray-900 transition mt-2"
            >
              {activeTab === 'login' ? 'Masuk Sekarang' : 'Daftar Akun'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              {activeTab === 'login' ? 'Masuk' : 'Daftar'} dengan nomor HP aktif
            </p>
            <div className="flex items-center border rounded-lg px-3 bg-white hover:border-black transition">
              <Phone className="w-5 h-5 text-gray-400 mr-2"/>
              <input 
                className="w-full p-3 outline-none" 
                placeholder="+62 812 3456 7890" 
                value={phoneNumber} 
                onChange={e => setPhoneNumber(e.target.value)} 
              />
            </div>
            <button 
              onClick={() => {
                if(phoneNumber.length < 10) { toast.error("Nomor HP tidak valid (Min 10 digit)"); return; }
                setViewState('OTP');
              }}
              className="w-full bg-black text-white p-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-900"
            >
              {activeTab === 'login' ? 'Lanjutkan Masuk' : 'Lanjutkan Daftar'} <ArrowRight className="w-4" />
            </button>
          </div>
        )}

        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-xs text-gray-400 mb-3">Atau masuk menggunakan</p>
          <button 
            onClick={() => setLoginMethod(loginMethod === 'email' ? 'phone' : 'email')}
            className="text-sm text-blue-600 font-medium hover:underline flex items-center justify-center gap-2 w-full transition"
          >
            {loginMethod === 'email' ? (
                <> <Phone className="w-4 h-4"/> Gunakan Nomor HP </>
            ) : (
                <> <Mail className="w-4 h-4"/> Gunakan Email </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}