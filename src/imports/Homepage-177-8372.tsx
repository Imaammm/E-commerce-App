import svgPaths from "./svg-0bam3v7gxi";
import imgImageWithFallback from "figma:asset/ea093121bec4c2d269a28544de13b30beb88ccb8.png";
import imgImageWithFallback1 from "figma:asset/27a5994665c1c39761c3554b7a15fa652805322f.png";
import imgImageWithFallback2 from "figma:asset/d0c5e676229475d31289ad277a2eea809eca2fc2.png";

function Icon() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_177_8515)" id="Icon">
          <path d={svgPaths.p2dd25100} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_177_8515">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#eceef2] h-[22px] left-0 rounded-[8px] top-px w-[211.875px]" data-name="Badge">
      <div className="h-[22px] overflow-clip relative rounded-[inherit] w-[211.875px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[33px] not-italic text-[#030213] text-[12px] text-nowrap top-[2px] whitespace-pre">Sinkronisasi Inventori Otomatis</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start left-[222.45px] top-[-3px] w-[199.281px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[75px] not-italic relative shrink-0 text-[#030213] text-[60px] text-nowrap whitespace-pre">Mudah</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start left-0 top-[72px] w-[194.484px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[75px] not-italic relative shrink-0 text-[#030213] text-[60px] text-nowrap whitespace-pre">Buyme</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[150px] left-0 top-[39px] w-[728px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[75px] left-0 not-italic text-[60px] text-neutral-950 text-nowrap top-[-6px] whitespace-pre">Belanja</p>
      <Text />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[75px] left-[421.73px] not-italic text-[60px] text-neutral-950 text-nowrap top-[-6px] whitespace-pre">dengan</p>
      <Text1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[84px] left-0 top-[205px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#717182] text-[20px] top-[-3px] w-[451px]">Platform e-commerce terpercaya dengan teknologi sinkronisasi inventori otomatis. Stok selalu update, pengalaman belanja tanpa hambatan.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[289px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-neutral-950 h-[40px] relative rounded-[8px] shrink-0 w-[138.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[25px] py-px relative w-[138.938px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Login / Daftar</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#030213] text-[24px] text-center">10K+</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px] text-center">Produk</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 top-[32px] w-[226.656px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#030213] text-[24px] text-center">50K+</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px] text-center">Pelanggan</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[250.66px] top-[32px] w-[226.672px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#030213] text-[24px] text-center">99.9%</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px] text-center">Akurasi Stok</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[501.33px] top-[32px] w-[226.672px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[477px] items-start left-0 top-0 w-[728px]" data-name="Container">
      <Container />
      <Container1 />
      <Container11 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[728px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.2)] h-[400px] left-0 to-[rgba(0,0,0,0)] top-0 w-[728px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[400px] left-0 overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[728px]" data-name="Container">
      <ImageWithFallback />
      <Container13 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-green-100 relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Stok Real-time</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Update otomatis</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div className="h-[48px] relative shrink-0 w-[165.922px]" data-name="Homepage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[165.922px]">
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col h-[90px] items-start left-[-24px] pb-px pl-[17px] pr-px pt-[17px] rounded-[14px] top-[334px] w-[199.922px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Homepage />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-blue-100 relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Transaksi Aman</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px]">100% terlindungi</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Homepage1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[172.859px]" data-name="Homepage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[172.859px]">
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col h-[90px] items-start left-[545.14px] pb-px pl-[17px] pr-px pt-[17px] rounded-[14px] top-[-24px] w-[206.859px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Homepage1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[400px] left-[776px] top-[38.5px] w-[728px]" data-name="Container">
      <Container14 />
      <Card />
      <Card1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[477px] relative shrink-0 w-[1504px]" data-name="Container">
      <Container12 />
      <Container23 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[637px] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[637px] items-center pb-0 pt-[80px] px-[79px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1504px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-[752.34px] not-italic text-[36px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Mengapa Memilih Buyme?</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[12px] py-0 relative w-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#717182] text-[20px] text-center w-[774px]">Kami menghadirkan pengalaman belanja online terbaik dengan teknologi terdepan</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p34f07580} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage2() {
  return (
    <div className="absolute bg-[rgba(3,2,19,0.1)] content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon3 />
    </div>
  );
}

function Homepage3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">Sinkronisasi Inventori Otomatis</p>
    </div>
  );
}

function Homepage4() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.2px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[403px]">Stok produk diperbarui secara real-time setelah setiap pembelian. Tidak ada lagi kehabisan stok mendadak atau overselling.</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shrink-0" data-name="CardContent">
      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p30f65280} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 13.3333H29.3333" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage5() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon4 />
    </div>
  );
}

function Homepage6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">Metode Pembayaran Lengkap</p>
    </div>
  );
}

function Homepage7() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.36px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[413px]">Dukungan pembayaran Indonesia: COD, QRIS, Kartu Kredit (BRI/BNI/Mandiri), dan E-Wallet (Dana/GoPay/OVO).</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[236px] relative shrink-0 w-[480px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[236px] relative w-[480px]">
        <Homepage5 />
        <Homepage6 />
        <Homepage7 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col items-start relative rounded-[14px] shrink-0" data-name="Card">
      <CardContent1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2ac7a780} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 24H12" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p33566d00} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8359880} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p292c5c00} id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage8() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon5 />
    </div>
  );
}

function Homepage9() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">{`Pengiriman Cepat & Aman`}</p>
    </div>
  );
}

function Homepage10() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.08px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[385px]">Pengiriman ke seluruh Indonesia dengan tracking real-time. Garansi barang sampai dengan aman.</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[236px] relative shrink-0 w-[480px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[236px] relative w-[480px]">
        <Homepage8 />
        <Homepage9 />
        <Homepage10 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col items-start relative rounded-[14px] shrink-0" data-name="Card">
      <CardContent2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pae2ff80} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage11() {
  return (
    <div className="absolute bg-purple-100 content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon6 />
    </div>
  );
}

function Homepage12() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">Keamanan Terjamin</p>
    </div>
  );
}

function Homepage13() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.23px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[377px]">Data pribadi dan transaksi dilindungi dengan enkripsi tingkat bank. Berbelanja dengan tenang dan aman.</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[14px] shrink-0" data-name="CardContent">
      <Homepage11 />
      <Homepage12 />
      <Homepage13 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p8271400} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 4V10.6667H10.6667" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage14() {
  return (
    <div className="absolute bg-[#ffedd4] content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon7 />
    </div>
  );
}

function Homepage15() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">Kebijakan Return Mudah</p>
    </div>
  );
}

function Homepage16() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.31px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[401px]">Tidak puas? Kembalikan dalam 7 hari. Proses return yang mudah dan refund cepat untuk kepuasan pelanggan.</p>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative rounded-[14px] shrink-0" data-name="CardContent">
      <Homepage14 />
      <Homepage15 />
      <Homepage16 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 8V16L21.3333 18.6667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1dee4500} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage17() {
  return (
    <div className="absolute bg-[#ffe2e2] content-stretch flex items-center justify-center left-[208px] rounded-[16px] size-[64px] top-[32px]" data-name="Homepage">
      <Icon8 />
    </div>
  );
}

function Homepage18() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[120px] w-[416px]" data-name="Homepage">
      <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-neutral-950">Customer Service 24/7</p>
    </div>
  );
}

function Homepage19() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[164px] w-[416px]" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[208.13px] not-italic text-[#717182] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[386px]">Tim customer service siap membantu Anda kapan saja. Respon cepat untuk semua pertanyaan dan keluhan.</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="[grid-area:2_/_3] bg-white relative rounded-[14px] shrink-0" data-name="CardContent">
      <Homepage17 />
      <Homepage18 />
      <Homepage19 />
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[260px_minmax(0px,_1fr)] h-[528px] relative shrink-0 w-[1504px]" data-name="Container">
      <CardContent />
      <Card2 />
      <Card3 />
      <CardContent3 />
      <CardContent4 />
      <CardContent5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center justify-center px-[16px] py-[40px] relative w-full">
          <Container25 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[728px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3fdeed00} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 11V6" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pb5a6200} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.75 2.13501L8.25 4.71001" id="Vector_4" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#eceef2] h-[22px] relative rounded-[8px] shrink-0 w-[148.391px]" data-name="Badge">
      <div className="h-[22px] overflow-clip relative rounded-[inherit] w-[148.391px]">
        <Icon9 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-[33px] not-italic text-[#030213] text-[12px] text-nowrap top-[2px] whitespace-pre">Teknologi Terdepan</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-neutral-950 text-nowrap top-[-3px] whitespace-pre">Manajemen Inventori yang Revolusioner</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#717182] text-[18px] top-[-0.5px] w-[728px]">Sistem kami secara otomatis memperbarui stok produk setelah setiap transaksi, memastikan informasi yang akurat dan mengurangi beban kerja admin hingga 90%.</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8461)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8461">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-green-100 relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[300.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[300.375px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Update stok real-time setelah pembayaran</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Text2 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8461)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8461">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-green-100 relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[232.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[232.531px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Pencegahan overselling otomatis</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Text3 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8461)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8461">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-green-100 relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[327.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[327.391px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Dashboard admin dengan monitoring lengkap</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Text4 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8461)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8461">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-green-100 relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[226.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[226.297px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Notifikasi stok menipis otomatis</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Text5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[144px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[144.19px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-[172.188px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Lihat Produk Kami</p>
      <Icon14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[728px]" data-name="Container">
      <Badge1 />
      <Heading4 />
      <Paragraph2 />
      <Container36 />
      <Button1 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <Container27 />
      <Container37 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center px-[529px] py-0 relative w-full">
          <p className="font-['Arial:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] text-center text-neutral-950 text-nowrap whitespace-pre">Apa Kata Pelanggan Kami</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[20px] text-center">Ribuan pelanggan telah merasakan pengalaman belanja yang luar biasa</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph3 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3376b800} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage20() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Homepage">
      {[...Array(5).keys()].map((_, i) => (
        <Icon15 key={i} />
      ))}
    </div>
  );
}

function Homepage21() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-2px] w-[403px]">{`"Sistem inventori yang canggih! Tidak pernah mengalami kehabisan stok mendadak. Pengalaman belanja jadi lebih smooth dan menyenangkan."`}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[19.453px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#030213] text-[16px] text-nowrap top-[-2px] whitespace-pre">AS</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[rgba(3,2,19,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[48px]">
        <Text6 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Andi Setiawan</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Pelanggan Setia</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[44px] relative shrink-0 w-[103.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[103.609px]">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Homepage22() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Homepage">
      <Container39 />
      <Container42 />
    </div>
  );
}

function CardContent6() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="CardContent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Homepage20 />
          <Homepage21 />
          <Homepage22 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p4d81680} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage23() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Homepage">
      {[...Array(5).keys()].map((_, i) => (
        <Icon16 key={i} />
      ))}
    </div>
  );
}

function Homepage24() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-2px] w-[404px]">{`"Metode pembayaran lengkap dan proses checkout yang cepat. QRIS dan e-wallet memudahkan transaksi. Sangat recommended!"`}</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[23.5px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#030213] text-[16px] text-nowrap top-[-2px] whitespace-pre">SM</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[rgba(3,2,19,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text7 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Sari Melati</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Entrepreneur</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[44px] relative shrink-0 w-[80.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[80.391px]">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Homepage25() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Homepage">
      <Container43 />
      <Container46 />
    </div>
  );
}

function CardContent7() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="CardContent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Homepage23 />
          <Homepage24 />
          <Homepage25 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p203f1380} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Homepage26() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Homepage">
      {[...Array(5).keys()].map((_, i) => (
        <Icon17 key={i} />
      ))}
    </div>
  );
}

function Homepage27() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Homepage">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-2px] w-[410px]">{`"Customer service responsif dan tracking pengiriman real-time. Barang selalu sampai tepat waktu dan sesuai ekspektasi."`}</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[19.016px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#030213] text-[16px] text-nowrap top-[-2px] whitespace-pre">BP</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[rgba(3,2,19,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[48px]">
        <Text8 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Budi Pratama</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Tech Enthusiast</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[44px] relative shrink-0 w-[97.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[97.5px]">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Homepage28() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-full" data-name="Homepage">
      <Container47 />
      <Container50 />
    </div>
  );
}

function CardContent8() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="CardContent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Homepage26 />
          <Homepage27 />
          <Homepage28 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[236px] relative shrink-0 w-full" data-name="Container">
      <CardContent6 />
      <CardContent7 />
      <CardContent8 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[rgba(236,236,240,0.3)] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center px-[20px] py-[40px] relative w-full">
          <Container38 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[1504px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-[752.8px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">Siap untuk Pengalaman Belanja yang Berbeda?</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[56px] opacity-90 relative shrink-0 w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[336.17px] not-italic text-[20px] text-center text-white top-[-3px] translate-x-[-50%] w-[664px]">Bergabunglah dengan ribuan pelanggan yang telah merasakan kemudahan berbelanja dengan sistem inventori otomatis terdepan.</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p658a180} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.06868 4.02262H13.9314" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p49e1f00} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[212.23px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#eceef2] h-[40px] relative rounded-[8px] shrink-0 w-[244.234px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[244.234px]">
        <Icon18 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#030213] text-[14px] text-nowrap top-[8px] whitespace-pre">Mulai Belanja Sekarang</p>
        <Icon19 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[40px] items-start justify-center pl-0 pr-[0.016px] py-0 relative shrink-0 w-[1504px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[504.406px] opacity-90 relative rounded-[16px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container53() {
  return (
    <div className="box-border content-stretch flex flex-col h-[537.406px] items-start pb-0 pt-[33px] px-[304px] relative shrink-0 w-[1504px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <ImageWithFallback2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#030213] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[35px] items-center px-[79px] py-[80px] relative w-full">
          <Heading6 />
          <Paragraph4 />
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Homepage29() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full" data-name="Homepage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Buyme</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[-2px] w-[330px]">Platform e-commerce terpercaya dengan manajemen inventori otomatis.</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Paragraph5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Layanan Pelanggan</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[25.609px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">FAQ</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[88.109px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Hubungi Kami</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[87.375px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Pengembalian</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[97.641px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Info Pengiriman</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container55() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Akun</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.969px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Pesanan Saya</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[47.797px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Wishlist</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[34.359px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Login</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button9 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <List1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Perusahaan</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[83.781px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Tentang Kami</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button10 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[28.375px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Karir</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[102.5px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Kebijakan Privasi</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button12 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[92.078px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Syarat Layanan</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button13 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[78.844px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Login Admin</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button14 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <List2 />
    </div>
  );
}

function Container58() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[172px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="box-border content-stretch flex items-start pb-[32px] pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px] text-center">© 2024 Buyme. Semua hak dilindungi. | Sinkronisasi inventori otomatis dengan teknologi modern.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#ececf0] relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-[79px] relative w-full">
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] h-[3992.41px] items-center pb-0 pt-[65px] px-0 relative shrink-0 w-full" data-name="App">
      <Homepage29 />
      <Footer />
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-[62.266px]" data-name="Button">
      <p className="font-['Arial:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#030213] text-[20px] text-nowrap whitespace-pre">Buyme</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[448px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[448px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Search products...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[412px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[36px] relative shrink-0 w-[448px]" data-name="Form">
      <Input />
      <Button16 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[104px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p24c5d900} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8435)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8cb00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8435">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon23 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[36px] relative shrink-0 w-[140px]" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function Container61() {
  return (
    <div className="box-border content-stretch flex gap-[427px] items-center justify-center px-0 py-[14px] relative shrink-0 w-full" data-name="Container">
      <Button15 />
      <Form />
      <Container60 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[65px] items-start left-0 pb-px pt-0 px-[79px] top-0 w-[1920px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container61 />
    </div>
  );
}

export default function Homepage30() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center relative size-full" data-name="Homepage">
      <App />
      <Header />
    </div>
  );
}