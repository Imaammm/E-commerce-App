import { useState } from 'react';
import { CreditCard, Lock, MapPin, User, Smartphone, QrCode, Wallet, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CartItem } from './ShoppingCart';
import { formatIDR } from '../utils/currency';

interface CheckoutProps {
  cartItems: CartItem[];
  onPlaceOrder: (orderData: OrderData) => void;
  onBackToCart: () => void;
  currentUser?: { name: string; email: string } | null;
}

export interface OrderData {
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: {
    type: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    cardholderName?: string;
    ewallet?: string;
    bank?: string;
  };
  items: CartItem[];
  totals: {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
  };
}

export function Checkout({ cartItems, onPlaceOrder, onBackToCart, currentUser }: CheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    // Shipping Address
    fullName: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Indonesia',
    
    // Payment Details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: currentUser?.name || '',
    ewallet: '',
    bank: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 750000 ? 0 : 149000; // Free shipping over 750k IDR
  const tax = subtotal * 0.11; // 11% PPN (VAT) for Indonesia
  const total = subtotal + shipping + tax;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Shipping validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    // Payment validation based on method
    if (paymentMethod === 'credit_card') {
      if (!formData.cardNumber.replace(/\s/g, '').trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      if (!formData.cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required';
      
      // Card number validation (basic)
      const cardNumber = formData.cardNumber.replace(/\s/g, '');
      if (cardNumber && cardNumber.length < 13) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }
    }

    if (paymentMethod === 'ewallet' && !formData.ewallet) {
      newErrors.ewallet = 'Please select an e-wallet';
    }

    if (paymentMethod === 'bank_transfer' && !formData.bank) {
      newErrors.bank = 'Please select a bank';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const groups = numbers.match(/.{1,4}/g) || [];
    return groups.join(' ').substr(0, 19); // Limit to 4 groups of 4 digits
  };

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value);
    handleInputChange('cardNumber', formatted);
  };

  const handleExpiryChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    let formatted = numbers;
    if (numbers.length >= 2) {
      formatted = numbers.substr(0, 2) + '/' + numbers.substr(2, 2);
    }
    handleInputChange('expiryDate', formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderData: OrderData = {
        shippingAddress: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
        },
        paymentMethod: {
          type: paymentMethod,
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
          cardholderName: formData.cardholderName,
          ewallet: formData.ewallet,
          bank: formData.bank,
        },
        items: cartItems,
        totals: { subtotal, shipping, tax, total },
      };

      onPlaceOrder(orderData);
    } catch (error) {
      setErrors({ submit: 'Payment failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        {/* Back to Cart */}
        <button 
          onClick={onBackToCart}
          className="flex items-center gap-2 text-neutral-950 hover:text-neutral-700 mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Address */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <h2 className="font-bold text-base text-neutral-950">Shipping Address</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm text-neutral-950 mb-1.5">Full Name *</label>
                      <input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                      />
                      {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm text-neutral-950 mb-1.5">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-neutral-950 mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                    />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm text-neutral-950 mb-1.5">Street Address *</label>
                    <input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                    />
                    {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm text-neutral-950 mb-1.5">City *</label>
                      <input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                      />
                      {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm text-neutral-950 mb-1.5">State *</label>
                      <input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                      />
                      {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-sm text-neutral-950 mb-1.5">ZIP Code *</label>
                      <input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                      />
                      {errors.zipCode && <p className="text-sm text-red-600 mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="border border-black/10 rounded-lg">
                <div className="p-6 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <h2 className="font-bold text-base text-neutral-950">Metode Pembayaran</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    {/* COD */}
                    <label className={`flex items-start gap-3 p-4 border ${paymentMethod === 'cod' ? 'border-[#030213] bg-white' : 'border-black/10 bg-white'} rounded-lg cursor-pointer transition-all hover:border-[#030213]/50`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#030213] mt-0.5"
                      />
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                        📦
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-neutral-950">Cash on Delivery (COD)</div>
                        <div className="text-xs text-[#717182] mt-0.5">Bayar saat barang diterima</div>
                      </div>
                    </label>

                    {/* QRIS */}
                    <label className={`flex items-start gap-3 p-4 border ${paymentMethod === 'qris' ? 'border-[#030213] bg-white' : 'border-black/10 bg-white'} rounded-lg cursor-pointer transition-all hover:border-[#030213]/50`}>
                      <input
                        type="radio"
                        name="payment"
                        value="qris"
                        checked={paymentMethod === 'qris'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#030213] mt-0.5"
                      />
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <QrCode className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-neutral-950">QRIS</div>
                        <div className="text-xs text-[#717182] mt-0.5">Scan QR code untuk pembayaran</div>
                      </div>
                    </label>

                    {/* Credit Cards */}
                    <label className={`flex items-start gap-3 p-4 border ${paymentMethod === 'credit_card' ? 'border-[#030213] bg-white' : 'border-black/10 bg-white'} rounded-lg cursor-pointer transition-all hover:border-[#030213]/50`}>
                      <input
                        type="radio"
                        name="payment"
                        value="credit_card"
                        checked={paymentMethod === 'credit_card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#030213] mt-0.5"
                      />
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-neutral-950">Kartu Kredit</div>
                        <div className="text-xs text-[#717182] mt-0.5">BRI, BNI, Mandiri, VISA, Mastercard</div>
                      </div>
                    </label>

                    {/* E-Wallets */}
                    <label className={`flex items-start gap-3 p-4 border ${paymentMethod === 'ewallet' ? 'border-[#030213] bg-white' : 'border-black/10 bg-white'} rounded-lg cursor-pointer transition-all hover:border-[#030213]/50`}>
                      <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={paymentMethod === 'ewallet'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#030213] mt-0.5"
                      />
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-neutral-950">E-Wallet</div>
                        <div className="text-xs text-[#717182] mt-0.5">Dana, GoPay, OVO</div>
                      </div>
                    </label>

                    {/* Bank Transfer */}
                    <label className={`flex items-start gap-3 p-4 border ${paymentMethod === 'bank_transfer' ? 'border-[#030213] bg-white' : 'border-black/10 bg-white'} rounded-lg cursor-pointer transition-all hover:border-[#030213]/50`}>
                      <input
                        type="radio"
                        name="payment"
                        value="bank_transfer"
                        checked={paymentMethod === 'bank_transfer'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#030213] mt-0.5"
                      />
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                        🏦
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-neutral-950">Transfer Bank</div>
                        <div className="text-xs text-[#717182] mt-0.5">BCA, BRI, BNI, Mandiri</div>
                      </div>
                    </label>
                  </div>

                  {/* Credit Card Details */}
                  {paymentMethod === 'credit_card' && (
                    <div className="space-y-4 border-t border-black/10 pt-4 mt-4">
                      <div>
                        <label htmlFor="cardholderName" className="block text-sm text-neutral-950 mb-1.5">Nama Pemegang Kartu *</label>
                        <input
                          id="cardholderName"
                          value={formData.cardholderName}
                          onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                          className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                        />
                        {errors.cardholderName && <p className="text-sm text-red-600 mt-1">{errors.cardholderName}</p>}
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm text-neutral-950 mb-1.5">Nomor Kartu *</label>
                        <input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleCardNumberChange(e.target.value)}
                          className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                        />
                        {errors.cardNumber && <p className="text-sm text-red-600 mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm text-neutral-950 mb-1.5">Tanggal Kedaluwarsa *</label>
                          <input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleExpiryChange(e.target.value)}
                            className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                          />
                          {errors.expiryDate && <p className="text-sm text-red-600 mt-1">{errors.expiryDate}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm text-neutral-950 mb-1.5">CVV *</label>
                          <input
                            id="cvv"
                            placeholder="123"
                            maxLength={4}
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                            className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20 placeholder:text-[#717182]"
                          />
                          {errors.cvv && <p className="text-sm text-red-600 mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* E-Wallet Selection */}
                  {paymentMethod === 'ewallet' && (
                    <div className="space-y-3 border-t border-black/10 pt-4 mt-4">
                      <label className="block text-sm text-neutral-950 mb-2">Pilih E-Wallet *</label>
                      
                      <label className={`flex items-center gap-3 p-4 border ${formData.ewallet === 'dana' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="ewallet"
                          value="dana"
                          checked={formData.ewallet === 'dana'}
                          onChange={(e) => handleInputChange('ewallet', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#1C8CFF] rounded flex items-center justify-center text-white font-bold text-sm">
                          D
                        </div>
                        <span className="text-sm text-neutral-950">Dana</span>
                      </label>

                      <label className={`flex items-center gap-3 p-4 border ${formData.ewallet === 'gopay' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="ewallet"
                          value="gopay"
                          checked={formData.ewallet === 'gopay'}
                          onChange={(e) => handleInputChange('ewallet', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#00AA13] rounded flex items-center justify-center text-white font-bold text-sm">
                          G
                        </div>
                        <span className="text-sm text-neutral-950">GoPay</span>
                      </label>

                      <label className={`flex items-center gap-3 p-4 border ${formData.ewallet === 'ovo' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="ewallet"
                          value="ovo"
                          checked={formData.ewallet === 'ovo'}
                          onChange={(e) => handleInputChange('ewallet', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#4D2D8F] rounded flex items-center justify-center text-white font-bold text-sm">
                          O
                        </div>
                        <span className="text-sm text-neutral-950">OVO</span>
                      </label>
                      
                      {errors.ewallet && <p className="text-sm text-red-600 mt-1">{errors.ewallet}</p>}
                    </div>
                  )}

                  {/* Bank Transfer Selection */}
                  {paymentMethod === 'bank_transfer' && (
                    <div className="space-y-3 border-t border-black/10 pt-4 mt-4">
                      <label className="block text-sm text-neutral-950 mb-2">Pilih Bank *</label>
                      
                      <label className={`flex items-center gap-3 p-4 border ${formData.bank === 'bca' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="bank"
                          value="bca"
                          checked={formData.bank === 'bca'}
                          onChange={(e) => handleInputChange('bank', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#003D79] rounded flex items-center justify-center text-white font-bold text-xs">
                          BCA
                        </div>
                        <span className="text-sm text-neutral-950">Bank Central Asia (BCA)</span>
                      </label>

                      <label className={`flex items-center gap-3 p-4 border ${formData.bank === 'bri' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="bank"
                          value="bri"
                          checked={formData.bank === 'bri'}
                          onChange={(e) => handleInputChange('bank', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#003D79] rounded flex items-center justify-center text-white font-bold text-xs">
                          BRI
                        </div>
                        <span className="text-sm text-neutral-950">Bank Rakyat Indonesia (BRI)</span>
                      </label>

                      <label className={`flex items-center gap-3 p-4 border ${formData.bank === 'bni' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="bank"
                          value="bni"
                          checked={formData.bank === 'bni'}
                          onChange={(e) => handleInputChange('bank', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#F37021] rounded flex items-center justify-center text-white font-bold text-xs">
                          BNI
                        </div>
                        <span className="text-sm text-neutral-950">Bank Nasional Indonesia (BNI)</span>
                      </label>

                      <label className={`flex items-center gap-3 p-4 border ${formData.bank === 'mandiri' ? 'border-[#030213] bg-[#f3f3f5]' : 'border-black/10'} rounded-lg cursor-pointer transition-colors`}>
                        <input
                          type="radio"
                          name="bank"
                          value="mandiri"
                          checked={formData.bank === 'mandiri'}
                          onChange={(e) => handleInputChange('bank', e.target.value)}
                          className="w-4 h-4 text-[#030213]"
                        />
                        <div className="w-8 h-8 bg-[#FFAA00] rounded flex items-center justify-center text-white font-bold text-xs">
                          M
                        </div>
                        <span className="text-sm text-neutral-950">Bank Mandiri</span>
                      </label>
                      
                      {errors.bank && <p className="text-sm text-red-600 mt-1">{errors.bank}</p>}
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="flex items-start gap-2 mt-4 p-3 bg-[#f3f3f5] rounded-lg">
                    <Lock className="h-4 w-4 text-[#717182] mt-0.5" />
                    <p className="text-xs text-[#717182]">
                      Informasi pembayaran Anda dienkripsi dan aman.
                    </p>
                  </div>
                </div>
              </div>

              {errors.submit && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-black/10 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-base text-neutral-950 mb-6">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-neutral-950 truncate">{item.product.name}</p>
                      <p className="text-xs text-[#717182]">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-neutral-950">
                      {formatIDR(item.product.price)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-black/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Subtotal</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(subtotal)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">Ongkos Kirim</span>
                  <span className="text-neutral-950 font-medium">
                    {formatIDR(shipping)}
                    {shipping === 0 && <span className="text-green-600 text-xs ml-1">GRATIS</span>}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-[#717182]">PPN (11%)</span>
                  <span className="text-neutral-950 font-medium">{formatIDR(tax)}</span>
                </div>
                
                <div className="border-t border-black/10 pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-base text-neutral-950">Total</span>
                    <span className="font-bold text-xl text-neutral-950">{formatIDR(total)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-[#030213] text-white px-4 py-3 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isLoading ? 'Memproses Pembayaran...' : 
                 paymentMethod === 'cod' ? `Bayar ${formatIDR(total)}` :
                 `Bayar ${formatIDR(total)}`}
              </button>

              <p className="text-xs text-[#717182] text-center mt-4">
                Dengan melakukan pemesanan, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}