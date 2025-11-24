import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface FAQProps {
  onBackToShopping: () => void;
}

export function FAQ({ onBackToShopping }: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  // Mock FAQ data
  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also view your order status in your account under "Order History". The tracking information typically updates within 24 hours of shipping.',
      category: 'Orders & Tracking',
      tags: ['tracking', 'shipping', 'orders']
    },
    {
      id: '2',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. To start a return, go to your Order History and select "Return Item". Some restrictions apply to electronics and personalized items.',
      category: 'Returns & Refunds',
      tags: ['returns', 'refunds', 'policy']
    },
    {
      id: '3',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-7 business days. Express shipping (2-3 business days) and overnight shipping are also available at checkout. Free shipping is available on orders over Rp 750,000.',
      category: 'Shipping & Delivery',
      tags: ['shipping', 'delivery', 'timeline']
    },
    {
      id: '4',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by location. Customs fees and import duties may apply and are the responsibility of the customer.',
      category: 'Shipping & Delivery',
      tags: ['international', 'shipping', 'global']
    },
    {
      id: '5',
      question: 'How do I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 24 hours of placement. After this time, orders are processed for shipping. Contact customer service immediately if you need to make changes.',
      category: 'Orders & Tracking',
      tags: ['cancel', 'modify', 'orders']
    },
    {
      id: '6',
      question: 'What payment methods do you accept?',
      answer: 'We accept COD (Cash on Delivery), QRIS, Credit Cards (VISA, Mastercard), E-Wallets (Dana, GoPay, OVO), and Bank Transfer (BCA, BRI, BNI, Mandiri).',
      category: 'Payment & Security',
      tags: ['payment', 'credit card', 'ewallet']
    },
    {
      id: '7',
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We are PCI DSS compliant and never store your full credit card details on our servers.',
      category: 'Payment & Security',
      tags: ['security', 'payment', 'encryption']
    },
    {
      id: '8',
      question: 'How do I create an account?',
      answer: 'Click "Login" in the top right corner, then select "Register". You\'ll need to provide your name, email address, and create a password. We\'ll send you an OTP for verification.',
      category: 'Account & Login',
      tags: ['account', 'registration', 'signup']
    },
    {
      id: '9',
      question: 'I forgot my password. How do I reset it?',
      answer: 'On the login page, click "Forgot Password?" and enter your email address. We\'ll send you a link to reset your password. The link expires after 24 hours for security.',
      category: 'Account & Login',
      tags: ['password', 'reset', 'account']
    },
    {
      id: '10',
      question: 'What if an item is out of stock?',
      answer: 'When an item is out of stock, you can add it to your wishlist to be notified when it\'s available again. We typically restock popular items within 2-4 weeks.',
      category: 'Stock & Availability',
      tags: ['stock', 'availability', 'restock']
    },
    {
      id: '11',
      question: 'Do you offer price matching?',
      answer: 'We offer price matching on identical items from major competitors. The item must be in stock at both stores and the competitor\'s price must be verifiable. Contact customer service with details.',
      category: 'Pricing & Discounts',
      tags: ['price match', 'pricing', 'discount']
    },
    {
      id: '12',
      question: 'How do I contact customer service?',
      answer: 'You can reach our customer service team via email at support@buyme.com, phone at +62 800-BUYME-24, or live chat available 24/7 on our website. Average response time is under 2 hours.',
      category: 'Customer Support',
      tags: ['contact', 'support', 'help']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: faqData.length },
    { id: 'orders', name: 'Orders & Tracking', count: faqData.filter(item => item.category === 'Orders & Tracking').length },
    { id: 'shipping', name: 'Shipping & Delivery', count: faqData.filter(item => item.category === 'Shipping & Delivery').length },
    { id: 'returns', name: 'Returns & Refunds', count: faqData.filter(item => item.category === 'Returns & Refunds').length },
    { id: 'payment', name: 'Payment & Security', count: faqData.filter(item => item.category === 'Payment & Security').length },
    { id: 'account', name: 'Account & Login', count: faqData.filter(item => item.category === 'Account & Login').length },
    { id: 'inventory', name: 'Stock & Availability', count: faqData.filter(item => item.category === 'Stock & Availability').length },
    { id: 'pricing', name: 'Pricing & Discounts', count: faqData.filter(item => item.category === 'Pricing & Discounts').length },
    { id: 'support', name: 'Customer Support', count: faqData.filter(item => item.category === 'Customer Support').length }
  ];

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase().replace(/\s+&\s+/g, '').replace(/\s+/g, '') === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2 text-neutral-950">Frequently Asked Questions</h1>
              <p className="text-sm text-[#717182]">
                Find quick answers to common questions about shopping with Buyme
              </p>
            </div>
            <button
              onClick={onBackToShopping}
              className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Back to Shopping
            </button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#717182]" />
            <input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f3f3f5] border-0 rounded-lg h-[40px] pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border border-black/10 rounded-lg p-6">
              <h3 className="font-bold text-base text-neutral-950 mb-4">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      selectedCategory === category.id 
                        ? 'bg-[#030213] text-white' 
                        : 'bg-white text-neutral-950 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{category.name}</span>
                    <span className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-xs ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="border border-black/10 rounded-lg p-6">
              <div className="text-center">
                <HelpCircle className="h-8 w-8 mx-auto text-[#717182] mb-3" />
                <h3 className="font-bold text-sm text-neutral-950 mb-2">Still need help?</h3>
                <p className="text-xs text-[#717182] mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <button className="w-full bg-[#030213] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {searchQuery && (
              <div className="mb-6 p-4 bg-[#f3f3f5] rounded-lg">
                <p className="text-sm text-neutral-950">
                  Showing {filteredFAQs.length} results for "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    Clear search
                  </button>
                </p>
              </div>
            )}

            {filteredFAQs.length === 0 ? (
              <div className="border border-black/10 rounded-lg p-12 text-center">
                <HelpCircle className="h-12 w-12 mx-auto text-[#717182] mb-4" />
                <h3 className="font-bold mb-2 text-neutral-950">No results found</h3>
                <p className="text-sm text-[#717182] mb-4">
                  We couldn't find any FAQs matching your search. Try different keywords or browse categories.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="border border-black/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h3 className="font-medium text-sm text-neutral-950 mb-2">{faq.question}</h3>
                          <span className="inline-block bg-gray-100 text-[#717182] text-xs px-2 py-1 rounded">
                            {faq.category}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-[#717182] transition-transform flex-shrink-0 ${
                            openFAQ === faq.id ? 'transform rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-black/10">
                          <p className="text-sm text-[#717182] leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          <div className="pt-3 border-t border-black/10">
                            <p className="text-xs text-[#717182]">
                              Was this helpful?{' '}
                              <button className="text-blue-600 hover:underline ml-2">Yes</button>
                              <button className="text-blue-600 hover:underline ml-2">No</button>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Support Options */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="border border-black/10 rounded-lg p-6 text-center">
            <h3 className="font-bold text-sm text-neutral-950 mb-2">Live Chat Support</h3>
            <p className="text-xs text-[#717182] mb-4">
              Get instant help from our support team
            </p>
            <button className="w-full bg-[#030213] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#030213]/90 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="border border-black/10 rounded-lg p-6 text-center">
            <h3 className="font-bold text-sm text-neutral-950 mb-2">Email Support</h3>
            <p className="text-xs text-[#717182] mb-4">
              Send us a detailed message
            </p>
            <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Send Email
            </button>
          </div>

          <div className="border border-black/10 rounded-lg p-6 text-center">
            <h3 className="font-bold text-sm text-neutral-950 mb-2">Phone Support</h3>
            <p className="text-xs text-[#717182] mb-4">
              Call us at +62 800-BUYME-24
            </p>
            <button className="w-full bg-white border border-black/10 text-neutral-950 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
