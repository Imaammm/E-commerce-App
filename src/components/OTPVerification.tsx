import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Shield, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { auth } from '../firebase'; 
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';

interface OTPVerificationProps {
  phoneNumber: string;
  onVerifySuccess: (user: any) => void;
  onBackToAuth: () => void;
}

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

// Menggunakan 'export function' standar untuk menghindari error tipe data
export function OTPVerification({ phoneNumber, onVerifySuccess, onBackToAuth }: OTPVerificationProps) {
  // --- STATE ---
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [status, setStatus] = useState('MEMUAT...'); 
  const [errorMsg, setErrorMsg] = useState(''); 
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  
  const recaptchaMounted = useRef(false);

  // --- EFFECT: SETUP RECAPTCHA ---
  useEffect(() => {
    if (recaptchaMounted.current) return;
    recaptchaMounted.current = true;

    const initFirebase = async () => {
      setStatus('MENYIAPKAN...');
      try {
        if (window.recaptchaVerifier) {
          try { window.recaptchaVerifier.clear(); } catch(e) {}
        }
        
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': () => console.log("Recaptcha OK")
        });

        // Langsung kirim OTP setelah setup selesai
        await sendOTP();
      } catch (err: any) {
        console.error(err);
        setStatus('ERROR SETUP');
        setErrorMsg(err.message || 'Gagal inisialisasi');
      }
    };

    initFirebase();
  }, []);

  // --- FUNGSI: KIRIM OTP ---
  const sendOTP = async () => {
    setStatus('MENGIRIM OTP...');
    setErrorMsg('');
    try {
      if (!window.recaptchaVerifier) throw new Error("Recaptcha belum siap");
      
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setStatus('OTP TERKIRIM');
      toast.success('Kode OTP Terkirim!');
    } catch (err: any) {
      console.error(err);
      setStatus('GAGAL KIRIM');
      setErrorMsg(err.message || 'Gagal mengirim SMS');
    }
  };

  // --- FUNGSI: VERIFIKASI ---
  const handleVerify = async () => {
    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      toast.warning("Kode harus 6 digit!");
      return;
    }
    if (!confirmationResult) {
      toast.error("Tunggu sampai OTP terkirim dulu.");
      return;
    }

    setStatus('MEMVERIFIKASI...');
    try {
      const result = await confirmationResult.confirm(otpCode);
      setStatus('SUKSES!');
      toast.success('Login Berhasil');
      onVerifySuccess(result.user);
    } catch (err: any) {
      console.error(err);
      setStatus('GAGAL VERIFIKASI');
      setErrorMsg('Kode Salah');
      toast.error('Kode OTP Salah!');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) document.getElementById('otp-${index + 1}')?.focus();
  };

  // --- RETURN JSX ---
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white w-full h-full min-h-[400px]">
      <div id="recaptcha-container"></div>

      <button onClick={onBackToAuth} className="self-start mb-4 p-2 hover:bg-gray-100 rounded">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <Shield className="w-16 h-16 text-black mb-4" />
      
      <h2 className="text-2xl font-bold mb-2">Verifikasi OTP</h2>
      <p className="text-gray-500 mb-6 text-center">Dikirim ke: <b>{phoneNumber}</b></p>

      {/* Debug Status Box */}
      <div className="bg-gray-100 p-2 rounded text-xs w-full mb-6 text-center border">
        <p className="font-bold text-blue-600">STATUS: {status}</p>
        {errorMsg && <p className="text-red-600 mt-1 font-bold">{errorMsg}</p>}
      </div>

      <div className="flex gap-2 mb-8 justify-center">
        {otp.map((d, i) => (
          <input
            key={i}
            id={'otp-${i}'}
            value={d}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            className="w-10 h-12 border-2 border-gray-300 rounded text-center text-xl focus:border-black outline-none"
            maxLength={1}
          />
        ))}
      </div>

      <button 
        onClick={handleVerify}
        className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition mb-4"
      >
        Verifikasi Sekarang
      </button>

      <button onClick={sendOTP} className="text-sm underline flex items-center gap-2 justify-center w-full">
        <RefreshCw className="w-3 h-3" /> Kirim Ulang Kode
      </button>
    </div>
  );
}