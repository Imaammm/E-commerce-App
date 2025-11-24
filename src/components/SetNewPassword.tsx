import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

interface SetNewPasswordProps {
  email: string;
  token: string;
  onPasswordReset: (newPassword: string) => Promise<boolean>;
  onBackToLogin: () => void;
}

export function SetNewPassword({ email, token, onPasswordReset, onBackToLogin }: SetNewPasswordProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password validation
  const hasMinLength = newPassword.length >= 8;
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  
  const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber;
  const passwordsMatch = newPassword === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid) {
      toast.error('Password does not meet requirements');
      return;
    }

    if (!passwordsMatch) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to reset password
      const success = await onPasswordReset(newPassword);
      
      if (success) {
        toast.success('Password reset successfully!');
        onBackToLogin();
      } else {
        toast.error('Failed to reset password. Please try again.');
      }
      
    } catch (err) {
      toast.error('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg p-8">
        {/* Header with Lock Icon */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <Lock className="w-6 h-6 text-neutral-950" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-950">Set New Password</h1>
        </div>

        {/* Subtitle */}
        <p className="text-[#717182] mb-8">
          Creating a new password for {email}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div className="space-y-2">
            <label htmlFor="new-password" className="block text-sm font-medium text-neutral-950">
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[48px] px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#717182] hover:text-neutral-950"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-neutral-950">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[48px] px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#717182] hover:text-neutral-950"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-[#ececf0] rounded-lg p-4">
            <h4 className="text-sm font-bold text-neutral-950 mb-3">Password Requirements</h4>
            <ul className="space-y-2 text-sm text-[#717182]">
              <li className={hasMinLength ? 'text-green-600' : ''}>
                • At least 8 characters
              </li>
              <li className={hasUpperCase ? 'text-green-600' : ''}>
                • One uppercase letter
              </li>
              <li className={hasLowerCase ? 'text-green-600' : ''}>
                • One lowercase letter
              </li>
              <li className={hasNumber ? 'text-green-600' : ''}>
                • One number
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !isPasswordValid || !passwordsMatch}
            className="w-full bg-[#030213] text-white rounded-lg h-[48px] text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#717182]">
            Remember your password?{' '}
            <button
              onClick={onBackToLogin}
              className="text-neutral-950 underline hover:no-underline font-medium"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}