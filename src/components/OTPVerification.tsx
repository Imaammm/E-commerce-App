import { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface OTPVerificationProps {
  email: string;
  isLogin: boolean;
  onVerifySuccess: () => void;
  onBackToAuth: () => void;
}

export function OTPVerification({ email, isLogin, onVerifySuccess, onBackToAuth }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(294); // 4:54 as shown in design
  const [isResending, setIsResending] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split('').concat(Array(6 - pasteData.length).fill(''));
    setOtp(newOtp.slice(0, 6));
    
    // Focus last filled input
    const lastFilledIndex = Math.min(pasteData.length, 5);
    const lastInput = document.getElementById(`otp-${lastFilledIndex}`);
    lastInput?.focus();
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast.error('Masukkan kode OTP 6 digit');
      return;
    }

    // Simulate OTP verification
    if (otpCode === '123456') {
      toast.success('Verifikasi berhasil!');
      onVerifySuccess();
    } else {
      toast.error('Kode OTP salah. Coba lagi.');
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    
    // Simulate sending OTP
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setTimeLeft(294);
    setOtp(['', '', '', '', '', '']);
    setIsResending(false);
    toast.success('Kode OTP baru telah dikirim');
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg p-8">
        {/* Back Button */}
        <button
          onClick={onBackToAuth}
          className="mb-8 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Shield Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#ececf0] rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-neutral-950" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-neutral-950 mb-4">
          Verifikasi OTP
        </h1>

        {/* Description */}
        <p className="text-center text-[#717182] mb-4">
          Masukkan kode 6 digit yang telah dikirim ke
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-4 h-4 text-[#717182]" />
          <span className="text-sm text-neutral-950">{email}</span>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-14 h-14 text-center text-xl font-medium bg-[#ececf0] border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#030213]/30"
              maxLength={1}
              inputMode="numeric"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-sm text-[#717182] mb-6">
          Kode akan kedaluwarsa dalam{' '}
          <span className="text-red-600 font-medium">{formatTime(timeLeft)}</span>
        </p>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={!isOtpComplete}
          className={`w-full rounded-lg h-[48px] text-sm transition-colors mb-4 ${
            isOtpComplete
              ? 'bg-[#030213] text-white hover:bg-[#030213]/90'
              : 'bg-[#717182] text-white cursor-not-allowed'
          }`}
        >
          Verifikasi
        </button>

        {/* Resend Link */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#717182]">
            Tidak menerima kode?{' '}
            <button
              onClick={handleResendOTP}
              disabled={isResending}
              className="text-neutral-950 underline hover:no-underline font-medium disabled:opacity-50"
            >
              {isResending ? 'Mengirim...' : 'Kirim ulang'}
            </button>
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-700 text-center">
            <strong>Info</strong> Kode OTP dikirim melalui SMS/Email. Periksa pesan masuk Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
