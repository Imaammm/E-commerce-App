import { 
  CheckCircle, 
  CreditCard, 
  Headphones, 
  RotateCcw, 
  ShieldCheck, 
  Star, 
  Truck, 
  Zap, 
  Package,
  ShoppingBag 
} from 'lucide-react';
import { Button } from './ui/button';

interface HomepageProps {
  onStartShopping: () => void;
  onLogin: () => void;
  currentUser: any;
}

export function Homepage({ onStartShopping, onLogin, currentUser }: HomepageProps) {
  
  const handleImageError = (e: any) => {
    e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000";
  };

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 md:px-8 lg:px-20 py-10 md:py-20">
        {/* PERBAIKAN: Menggunakan 'md:flex-row' agar di laptop kecil/tablet sudah jejer kiri-kanan */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
          
          {/* KIRI: Teks & Tombol */}
          <div className="flex-1 space-y-6 md:max-w-lg text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md text-[10px] font-bold text-slate-600 uppercase tracking-wider mx-auto md:mx-0">
              <Zap className="w-3 h-3 fill-current" />
              <span>Sinkronisasi Inventori Otomatis</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black tracking-tight">
              Belanja Mudah dengan <br/>
              <span className="text-black">Buyme</span>
            </h1>
            
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Platform e-commerce terpercaya dengan teknologi sinkronisasi inventori otomatis. 
              Stok selalu update, pengalaman belanja tanpa hambatan.
            </p>
            
            <div className="pt-2 flex justify-center md:justify-start">
              <Button 
                onClick={currentUser ? onStartShopping : onLogin}
                className="bg-black text-white h-12 px-8 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all shadow-lg"
              >
                {currentUser ? "Mulai Belanja" : "Login / Daftar"}
              </Button>
            </div>

            <div className="flex justify-center md:justify-start gap-8 md:gap-10 pt-6 mt-4 border-t border-slate-50 md:border-none">
              <div >
                <h4 className="font-bold text-xl md:text-2xl text-black">10K+</h4>
                <p className="text-[10px] md:text-[11px] font-medium text-slate-500 uppercase tracking-wide">Produk</p>
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl text-black">50K+</h4>
                <p className="text-[10px] md:text-[11px] font-medium text-slate-500 uppercase tracking-wide">Pelanggan</p>
              </div>
              <div>
                <h4 className="font-bold text-xl md:text-2xl text-black">99.9%</h4>
                <p className="text-[10px] md:text-[11px] font-medium text-slate-500 uppercase tracking-wide">Akurasi Stok</p>
              </div>
            </div>
          </div>

          {/* KANAN: Gambar */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            {/* Ukuran dibatasi max-w-md di mobile agar tidak raksasa */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 w-full max-w-md md:max-w-full aspect-[4/3] group border border-slate-100">
              
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Product Showcase" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                onError={handleImageError}
              />
              
              {/* Badge 1 */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm shadow-sm p-3 rounded-xl flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                      <ShieldCheck size={20} />
                  </div>
                  <div className="hidden sm:block">
                      <p className="font-bold text-sm text-slate-900">Transaksi Aman</p>
                      <p className="text-[10px] font-medium text-slate-500">100% terlindungi</p>
                  </div>
              </div>

               {/* Badge 2 */}
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm shadow-sm p-3 rounded-xl flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg text-green-600">
                      <CheckCircle size={20} />
                  </div>
                  <div className="hidden sm:block">
                      <p className="font-bold text-sm text-slate-900">Stok Real-time</p>
                      <p className="text-[10px] font-medium text-slate-500">Update otomatis</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-4 text-black">Mengapa Memilih Buyme?</h2>
            <p className="text-slate-500 text-base md:text-lg">
              Kami menghadirkan pengalaman belanja online terbaik dengan teknologi terdepan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-purple-600" />} 
              bg="bg-purple-100"
              title="Sinkronisasi Cepat" 
              desc="Stok produk diperbarui detik itu juga. Bye-bye drama cancel pesanan!"
            />
            <FeatureCard 
              icon={<CreditCard className="w-6 h-6 text-green-600" />} 
              bg="bg-green-100"
              title="Pembayaran Lengkap" 
              desc="Transfer, Kartu Kredit, QRIS, hingga PayLater. Semua bisa."
            />
            <FeatureCard 
              icon={<Truck className="w-6 h-6 text-blue-600" />} 
              bg="bg-blue-100"
              title="Kirim Se-Indonesia" 
              desc="Jangkauan pengiriman luas dengan tracking paket real-time yang akurat."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-indigo-600" />} 
              bg="bg-indigo-100"
              title="Keamanan Terjamin" 
              desc="Data Anda dienkripsi tingkat tinggi. Transaksi aman tanpa was-was."
            />
            <FeatureCard 
              icon={<RotateCcw className="w-6 h-6 text-orange-600" />} 
              bg="bg-orange-100"
              title="Garansi Retur" 
              desc="Barang tidak sesuai? Kembalikan saja. Proses mudah dan dana cepat cair."
            />
            <FeatureCard 
              icon={<Headphones className="w-6 h-6 text-red-600" />} 
              bg="bg-red-100"
              title="Support 24 Jam" 
              desc="Ada kendala? Tim CS kami siap membantu Anda kapanpun dibutuhkan."
            />
          </div>
        </div>
      </section>

      {/* 3. INVENTORY HIGHLIGHT */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 relative w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 aspect-[4/3]">
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                        alt="Warehouse Management"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg inline-flex items-center gap-2 mb-3">
                            <Package className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold uppercase tracking-wider">Smart System v2.0</span>
                        </div>
                        <p className="text-sm font-medium text-slate-200 leading-relaxed">Teknologi scan otomatis memastikan akurasi data hingga 99.9% tanpa error manual.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 space-y-6">
                <div className="inline-block">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-200">
                    Teknologi Terbaru
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Manajemen Stok <br/> Revolusioner
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Sistem kami bekerja 24 jam memperbarui stok produk setelah setiap transaksi. Memastikan Anda hanya membeli barang yang benar-benar tersedia.
                </p>
                
                <ul className="space-y-4">
                    {[
                        'Update stok otomatis detik itu juga',
                        'Pencegahan overselling (barang rebutan)',
                        'Monitoring gudang real-time',
                        'Notifikasi stok menipis'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="pt-4">
                    <Button onClick={onStartShopping} className="bg-black text-white h-12 px-8 rounded-full text-base font-bold hover:bg-gray-800 shadow-xl">
                        Lihat Produk
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">Apa Kata Pelanggan Kami</h2>
                <p className="text-slate-500 text-lg">Ribuan pelanggan telah merasakan kemudahan berbelanja di Buyme.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TestimonialCard 
                    name="Andi Setiawan"
                    role="Pelanggan Setia"
                    text="Sistem inventori yang canggih! Tidak pernah mengalami kehabisan stok mendadak. Pengalaman belanja jadi lebih aman dan menyenangkan."
                    rating={5}
                />
                <TestimonialCard 
                    name="Susi Melati"
                    role="Entrepreneur"
                    text="Metode pembayaran lengkap dan proses checkout yang mulus. CS juga sangat responsif membantu. Sangat recommended!"
                    rating={5}
                />
                <TestimonialCard 
                    name="Budi Pratama"
                    role="Tech Enthusiast"
                    text="Customer service responsif dan tracking pengiriman real-time. Barang selalu sampai tepat waktu dan sesuai ekspektasi."
                    rating={5}
                />
            </div>
        </div>
      </section>

      {/* 5. CTA BANNER (Hitam Pekat) */}
      <section 
        className="py-24 text-center px-4 relative overflow-hidden" 
        style={{ backgroundColor: '#000000', color: '#ffffff' }}
      >
        <div className="container mx-auto relative z-10 max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
                Siap untuk Pengalaman <br/> Belanja Berbeda?
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Bergabunglah dengan ribuan pelanggan yang telah merasakan kemudahan berbelanja dengan sistem yang jujur dan transparan.
            </p>
            
            <Button 
                onClick={onStartShopping}
                className="bg-white text-black hover:bg-slate-200 px-12 h-16 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform hover:scale-105 border-0"
            >
                <ShoppingBag className="mr-3 w-6 h-6" />
                Mulai Belanja
            </Button>

            <div className="mt-20 -mb-40 rounded-t-[3rem] overflow-hidden shadow-2xl border-t border-x border-white/10 mx-auto max-w-5xl bg-gray-900 opacity-90">
                <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" 
                    alt="Shopping Experience" 
                    className="w-full h-auto opacity-60 mix-blend-overlay"
                />
            </div>
        </div>
      </section>
    </div>
  );
}

// SUB COMPONENTS
function FeatureCard({ icon, title, desc, bg }: { icon: React.ReactNode, title: string, desc: string, bg: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group hover:-translate-y-1">
            <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function TestimonialCard({ name, role, text, rating }: { name: string, role: string, text: string, rating: number }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-slate-700 mb-8 text-lg font-medium leading-relaxed italic">"{text}"</p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-base">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-black text-sm">{name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{role}</p>
                </div>
            </div>
        </div>
    )
}