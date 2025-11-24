import { Button } from './ui/button'; 
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
const MyImage = 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1080&q=80';
import { 
  ShoppingBag, 
  Heart, 
  Truck, 
  Shield, 
  RotateCcw, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  CreditCard,
  Clock
} from 'lucide-react';

interface HomepageProps {
  onStartShopping: () => void;
  onLogin: () => void;
  currentUser: { id: string; name: string; email: string } | null;
}

export function Homepage({ onStartShopping, onLogin, currentUser }: HomepageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#eceef2] rounded-lg px-4 py-1.5">
                  <Zap className="w-3 h-3 text-neutral-950" />
                  <span className="text-xs text-neutral-950">Sinkronisasi Inventori Otomatis</span>
                </div>
                
                <h1 className="text-[60px] leading-[75px] font-bold text-neutral-950">
                  Belanja <span className="text-[#030213]">Mudah</span> dengan{' '}
                  <span className="text-[#030213]">Buyme</span>
                </h1>
                
                <p className="text-[20px] leading-[28px] text-[#717182] max-w-md">
                  Platform e-commerce terpercaya dengan teknologi sinkronisasi inventori otomatis. 
                  Stok selalu update, pengalaman belanja tanpa hambatan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {!currentUser && (
                  <button 
                    onClick={onLogin}
                    className="bg-neutral-950 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-neutral-800 transition-colors"
                  >
                    Login / Daftar
                  </button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#030213]">10K+</div>
                  <div className="text-sm text-[#717182]">Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#030213]">50K+</div>
                  <div className="text-sm text-[#717182]">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#030213]">99.9%</div>
                  <div className="text-sm text-[#717182]">Akurasi Stok</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <ImageWithFallback
                  src={MyImage}
                  alt="Modern E-commerce Shopping"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm border border-black/10 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-base text-neutral-950">Stok Real-time</div>
                    <div className="text-sm text-[#717182]">Update otomatis</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm border border-black/10 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-base text-neutral-950">Transaksi Aman</div>
                    <div className="text-sm text-[#717182]">100% terlindungi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-neutral-950">
              Mengapa Memilih Buyme?
            </h2>
            <p className="text-xl text-[#717182] max-w-2xl mx-auto">
              Kami menghadirkan pengalaman belanja online terbaik dengan teknologi terdepan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[rgba(3,2,19,0.1)] flex items-center justify-center">
                <Zap className="w-8 h-8 text-[#030213]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Sinkronisasi Inventori Otomatis</h3>
              <p className="text-base text-[#717182]">
                Stok produk diperbarui secara real-time setelah setiap pembelian. 
                Tidak ada lagi kehabisan stok mendadak atau overselling.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Metode Pembayaran Lengkap</h3>
              <p className="text-base text-[#717182]">
                Dukungan pembayaran Indonesia: COD, QRIS, Kartu Kredit (BRI/BNI/Mandiri), 
                dan E-Wallet (Dana/GoPay/OVO).
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Pengiriman Cepat & Aman</h3>
              <p className="text-base text-[#717182]">
                Pengiriman ke seluruh Indonesia dengan tracking real-time. 
                Garansi barang sampai dengan aman.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Keamanan Terjamin</h3>
              <p className="text-base text-[#717182]">
                Data pribadi dan transaksi dilindungi dengan enkripsi tingkat bank. 
                Berbelanja dengan tenang dan aman.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#ffedd4] flex items-center justify-center">
                <RotateCcw className="w-8 h-8 text-[#F54900]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Kebijakan Return Mudah</h3>
              <p className="text-base text-[#717182]">
                Tidak puas? Kembalikan dalam 7 hari. Proses return yang mudah 
                dan refund cepat untuk kepuasan pelanggan.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 text-center relative border border-black/10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#ffe2e2] flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#E7000B]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-950">Customer Service 24/7</h3>
              <p className="text-base text-[#717182]">
                Tim customer service siap membantu Anda kapan saja. 
                Respon cepat untuk semua pertanyaan dan keluhan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758543102397-e14b5dfdd8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk3NzAyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Inventory Management Technology"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Package className="w-4 h-4 mr-2" />
                Teknologi Terdepan
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                Manajemen Inventori yang Revolusioner
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Sistem kami secara otomatis memperbarui stok produk setelah setiap transaksi, 
                memastikan informasi yang akurat dan mengurangi beban kerja admin hingga 90%.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Update stok real-time setelah pembayaran</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Pencegahan overselling otomatis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Dashboard admin dengan monitoring lengkap</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Notifikasi stok menipis otomatis</span>
                </div>
              </div>

              <Button onClick={onStartShopping} className="group">
                Lihat Produk Kami
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Ribuan pelanggan telah merasakan pengalaman belanja yang luar biasa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Sistem inventori yang canggih! Tidak pernah mengalami kehabisan stok mendadak. 
                  Pengalaman belanja jadi lebih smooth dan menyenangkan."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Andi Setiawan</div>
                    <div className="text-sm text-muted-foreground">Pelanggan Setia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Metode pembayaran lengkap dan proses checkout yang cepat. 
                  QRIS dan e-wallet memudahkan transaksi. Sangat recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sari Melati</div>
                    <div className="text-sm text-muted-foreground">Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Customer service responsif dan tracking pengiriman real-time. 
                  Barang selalu sampai tepat waktu dan sesuai ekspektasi."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">BP</span>
                  </div>
                  <div>
                    <div className="font-semibold">Budi Pratama</div>
                    <div className="text-sm text-muted-foreground">Tech Enthusiast</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap untuk Pengalaman Belanja yang Berbeda?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kemudahan berbelanja 
            dengan sistem inventori otomatis terdepan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onStartShopping}
              className="group"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Mulai Belanja Sekarang
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            {!currentUser && (
              <Button 
                size="lg" 
                variant="outline"
                onClick={onLogin}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Daftar Gratis
              </Button>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758520387706-791858e84944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNob3BwaW5nJTIwY3VzdG9tZXJzfGVufDF8fHx8MTc1OTc3MDIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy Shopping Customers"
              className="w-full max-w-4xl mx-auto rounded-2xl opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
}