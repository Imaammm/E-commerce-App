import svgPaths from "./svg-mnyjyo554l";
import imgImageWithFallback from "figma:asset/7b4211fdec043a5a7e67938b19e0006a1e341bca.png";
import imgImageWithFallback1 from "figma:asset/dfc4281761774cb9683fc22b7b6342d82c1d03b7.png";
import imgImageWithFallback2 from "figma:asset/f88fa269199517a2dfc42ad5787a9c68000c3e6b.png";
import imgImageWithFallback3 from "figma:asset/414b0c373ebc955555582b6ce0550eec1e936ea7.png";
import imgImageWithFallback4 from "figma:asset/95c9d94a52a2598cd3aa75bb833b59db77615b04.png";
import imgImageWithFallback5 from "figma:asset/06120181439164e1c1a7c5c6ff4db8db29c7c940.png";

function Button() {
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

function Icon() {
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

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[412px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[36px] relative shrink-0 w-[448px]" data-name="Form">
      <Input />
      <Button1 />
    </div>
  );
}

function Icon1() {
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

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[104px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
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

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8580)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pec8cb00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8580">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[140px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[427px] grow items-center justify-center min-h-px min-w-px px-0 py-[14px] relative shrink-0" data-name="Container">
      <Button />
      <Form />
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[65px] items-start justify-center left-0 pb-px pt-0 px-[79px] top-0 w-[1920px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Frame() {
  return <div className="shrink-0 size-[100px]" />;
}

function CardTitle() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[25px] w-[48.953px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Filters</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Categories</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[14px] relative shrink-0 w-[67.859px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[67.859px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Electronics</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <Label />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[65.969px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[65.969px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Wearables</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton1 />
      <Label1 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[48.25px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[48.25px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Fashion</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <Label2 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[14px] relative shrink-0 w-[37.172px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[37.172px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Travel</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton3 />
      <Label3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function ProductFilters() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[124px] items-start relative shrink-0 w-full" data-name="ProductFilters">
      <Heading2 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Price Range</p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#030213] h-[16px] left-0 rounded-[3.35544e+07px] top-0 w-[206px]" data-name="Text" />;
}

function Slider() {
  return (
    <div className="absolute bg-white left-0 rounded-[3.35544e+07px] size-[16px] top-0" data-name="Slider">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Slider1() {
  return (
    <div className="absolute bg-white left-[190px] rounded-[3.35544e+07px] size-[16px] top-0" data-name="Slider">
      <div aria-hidden="true" className="absolute border border-[#030213] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.span">
      <Text />
      <Slider />
      <Slider1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[28px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 0</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[47.516px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 30 jt</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveSpan />
      <Container7 />
    </div>
  );
}

function ProductFilters1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[88px] items-start relative shrink-0 w-full" data-name="ProductFilters">
      <Heading3 />
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Availability</p>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[14px] relative shrink-0 w-[80.563px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[80.563px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">In stock only</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton4 />
      <Label4 />
    </div>
  );
}

function ProductFilters2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="ProductFilters">
      <Heading4 />
      <Container9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Minimum Rating</p>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[33.313px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-center relative w-[33.313px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          4+ ★
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton5 />
      <Label5 />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[14px] relative shrink-0 w-[33.016px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-center relative w-[33.016px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          3+ ★
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton6 />
      <Label6 />
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[33.016px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-center relative w-[33.016px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          2+ ★
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton7 />
      <Label7 />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[14px] relative shrink-0 w-[30.875px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-center relative w-[30.875px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[14px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          1+ ★
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton8 />
      <Label8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function ProductFilters3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[124px] items-start relative shrink-0 w-full" data-name="ProductFilters">
      <Heading5 />
      <Container14 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[484px] items-start left-px px-[24px] py-0 top-[99px] w-[254px]" data-name="CardContent">
      <ProductFilters />
      <ProductFilters1 />
      <ProductFilters2 />
      <ProductFilters3 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[584px] relative rounded-[14px] shrink-0 w-[256px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[584px] relative w-[256px]">
        <CardTitle />
        <CardContent />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-neutral-950 text-nowrap top-[-3px] whitespace-pre">All Products</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] top-[-2px] w-[122px]">6 products found</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[68px] relative shrink-0 w-[163.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start relative w-[163.828px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6H14" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 10H14" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 2V14" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#030213] h-[32px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 3.33333H2.00667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 8H2.00667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 12.6667H2.00667" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 3.33333H14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H14" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12.6667H14" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[34px] relative rounded-[10px] shrink-0 w-[74px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[34px] items-start p-px relative w-[74px]">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#d4183d] h-[22px] left-[8px] rounded-[8px] top-[8px] w-[46.25px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.25px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">-20%</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cb59c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function ProductCard() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback />
      <Badge />
      <Button7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Wireless Bluetooth Headphones</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[51px]">4.5 (128)</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[59.5px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[98px]">
        <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[10px] translate-y-[-50%]">
          <p className="leading-[24px] whitespace-pre">Rp 1.199.000</p>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-[79.344px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Arial:Regular',sans-serif] leading-[20px] line-through not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 1.499.000</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[52px] w-[252px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[73.02px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8546)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35e3f800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8546">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon7 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[105.02px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container20 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard />
        <ProductCard1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#d4183d] h-[22px] left-[8px] rounded-[8px] top-[8px] w-[44.422px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[44.422px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">-13%</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cb59c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback1 />
      <Badge1 />
      <Button9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Premium Smartphone 128GB</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[52px]">4.8 (342)</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[59.5px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[100.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[100.766px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Rp 10.499.000</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[86.891px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Arial:Regular',sans-serif] leading-[20px] line-through not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 11.999.000</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[52px] w-[252px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[73.02px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8546)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35e3f800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8546">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon9 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[105.02px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container23 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard2 />
        <ProductCard3 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#d4183d] h-[22px] left-[8px] rounded-[8px] top-[8px] w-[44.422px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[44.422px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">-13%</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cb59c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback2 />
      <Badge2 />
      <Button11 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Gaming Laptop Pro</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[48px]">4.7 (89)</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[53.031px]" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[100.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[100.813px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Rp 19.499.000</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[86.891px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Arial:Regular',sans-serif] leading-[20px] line-through not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 22.499.000</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[52px] w-[252px]" data-name="Container">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[73.02px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8541)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b9f8ad0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8541">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon11 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[105.02px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container26 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard4 />
        <ProductCard5 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent3 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cb59c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function ProductCard6() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback3 />
      <Button13 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Smart Fitness Watch</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[54px]">4.3 (156)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[59.5px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-0 top-[52px] w-[93.984px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Rp 3.749.000</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container27 />
      <Text17 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[73.02px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8541)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2b9f8ad0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8541">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon13 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[105.02px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function ProductCard7() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container28 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard6 />
        <ProductCard7 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="[grid-area:1_/_4] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent4 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#d4183d] h-[22px] left-[8px] rounded-[8px] top-[8px] w-[46.25px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[46.25px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">-25%</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe03c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function ProductCard8() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback4 />
      <Badge3 />
      <Button15 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Athletic Running Shoes</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[53px]">4.4 (203)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[59.5px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[91.844px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Rp 1.349.000</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[79.344px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Arial:Regular',sans-serif] leading-[20px] line-through not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Rp 1.799.000</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[52px] w-[252px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[73.02px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8575)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d189e0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8575">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon15 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[105.02px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function ProductCard9() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container31 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard8 />
        <ProductCard9 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="[grid-area:2_/_1] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent5 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#eceef2] h-[22px] left-[190.33px] rounded-[8px] top-[8px] w-[85.672px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[85.672px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px] text-nowrap whitespace-pre">Out of Stock</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe03c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-[240px] rounded-[8px] size-[36px] top-[8px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function ProductCard10() {
  return (
    <div className="h-[284px] overflow-clip relative shrink-0 w-full" data-name="ProductCard">
      <ImageWithFallback5 />
      <Badge4 />
      <Button17 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[252px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Travel Backpack 35L</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[10px]">
        <p className="font-['Arial:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ★
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#717182] text-[12px] top-[-1px] w-[51px]">4.6 (94)</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[28px] w-[53.031px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[24px] left-0 top-[52px] w-[81.25px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Rp 899.000</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container32 />
      <Text24 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[70.52px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_177_8551)" id="Icon">
          <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d189e0} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_177_8551">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#eceef2] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon17 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[102.52px] not-italic text-[#030213] text-[14px] text-nowrap top-[6px] whitespace-pre">Out of Stock</p>
    </div>
  );
}

function ProductCard11() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="ProductCard">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[156px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Container33 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[284px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[284px]">
        <ProductCard10 />
        <ProductCard11 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:2_/_2] bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[956px] relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[1048px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[1048px] items-start relative w-full">
        <Container17 />
        <Container34 />
      </div>
    </div>
  );
}

function ProductCatalog() {
  return (
    <div className="content-stretch flex gap-[32px] h-[1048px] items-start justify-center relative shrink-0 w-[1504px]" data-name="ProductCatalog">
      <Card />
      <Container35 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Buyme</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] top-[-2px] w-[330px]">Platform e-commerce terpercaya dengan manajemen inventori otomatis.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading11 />
      <Paragraph1 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Layanan Pelanggan</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[25.609px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">FAQ</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button19 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[88.109px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Hubungi Kami</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button20 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[87.375px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Pengembalian</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button21 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[97.641px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Info Pengiriman</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button22 />
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

function Container37() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <List />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Akun</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.969px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Pesanan Saya</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button23 />
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[47.797px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Wishlist</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button24 />
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[34.359px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Login</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button25 />
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

function Container38() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading13 />
      <List1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Perusahaan</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[83.781px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Tentang Kami</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button26 />
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[28.375px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Karir</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button27 />
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[102.5px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Kebijakan Privasi</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button28 />
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[92.078px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Syarat Layanan</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button29 />
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[78.844px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#030213] text-[14px] text-nowrap whitespace-pre">Login Admin</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button30 />
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

function Container39() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading14 />
      <List2 />
    </div>
  );
}

function Container40() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[172px] relative shrink-0 w-[1504px]" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex h-[53px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-[1504px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[14px] text-center">© 2024 Buyme. Semua hak dilindungi. | Sinkronisasi inventori otomatis dengan teknologi modern.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#ececf0] h-[321px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[321px] items-center pb-0 pt-[32px] px-[79px] relative w-full">
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[88px] items-center relative shrink-0 w-full" data-name="App">
      <Header />
      <Frame />
      <ProductCatalog />
      <Footer />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center relative size-full" data-name="Landing Page">
      <App />
    </div>
  );
}