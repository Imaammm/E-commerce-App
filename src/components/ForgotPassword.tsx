import { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

interface ForgotPasswordProps {
  onBackToLogin: () => void;
  onResetLinkSent: (email: string, token: string) => void;
}

export function ForgotPassword({ onBackToLogin, onResetLinkSent }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call to send reset email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate a mock reset token
      const resetToken = `reset_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      setIsLinkSent(true);
      onResetLinkSent(email, resetToken);
      
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Success state - Check Your Email
  if (isLinkSent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-neutral-950 mb-4">
            Check Your Email
          </h1>

          {/* Description */}
          <p className="text-center text-[#717182] mb-6">
            We've sent a password reset link to <strong className="text-neutral-950">{email}</strong>
            <br />
            Please check your email and follow the instructions to reset your password.
          </p>

          {/* Info Box */}
          <div className="bg-[#f3f3f5] rounded-lg p-4 mb-6 flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#717182] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#717182]">
              The reset link will expire in 24 hours for security reasons.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={onBackToLogin}
              className="w-full bg-[#030213] text-white rounded-lg h-[44px] text-sm hover:bg-[#030213]/90 transition-colors"
            >
              Back to Login
            </button>

            <button
              onClick={() => {
                setIsLinkSent(false);
                setEmail('');
              }}
              className="w-full bg-white border border-black/10 text-neutral-950 rounded-lg h-[44px] text-sm hover:bg-gray-50 transition-colors"
            >
              Try Different Email
            </button>
          </div>

          {/* Help Box */}
          <div className="bg-[#ececf0] rounded-lg p-4">
            <h4 className="text-sm font-bold text-neutral-950 mb-3">
              Didn't receive the email?
            </h4>
            <ul className="text-xs text-[#717182] space-y-2">
              <li>• Check your spam/junk folder</li>
              <li>• Make sure the email address is correct</li>
              <li>• Try adding support@buyme.com to your contacts</li>
              <li>• Contact our support team if issues persist</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Initial form state
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={onBackToLogin}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-bold text-neutral-950">Reset Your Password</h1>
          </div>

          <p className="text-sm text-[#717182] mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="reset-email" className="block text-sm text-neutral-950">
                Email
              </label>
              <input
                id="reset-email"
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182] ${
                  error ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {error && (
                <p className="text-sm text-red-600 mt-1">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="w-full bg-[#030213] text-white rounded-lg h-[44px] text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 bg-[#f3f3f5] rounded-lg p-4">
            <h4 className="text-sm font-bold text-neutral-950 mb-3">Security Notice</h4>
            <ul className="text-xs text-[#717182] space-y-2">
              <li>• Reset links are valid for 24 hours only</li>
              <li>• Only the most recent reset link will work</li>
              <li>• If you don't have access to this email, contact support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
