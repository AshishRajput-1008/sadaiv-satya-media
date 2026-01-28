import Image from "next/image";
import advShoppy from "@/app/public/payzonapi112.png";
import advShoppy2 from "@/app/public/greenshoppy.png";

export default function ShoppyBanner() {
  return (
    <div className="w-full bg-white py-2 md:py-3">
      {/* Full width container with two equal halves */}
      <div className="w-full flex justify-center items-center gap-2 md:gap-4 px-0">
        {/* First banner - 50% width */}
        <div className="relative w-1/2 h-[90px] md:h-[175px] overflow-hidden">
          <img
            src={advShoppy.src}
            alt="Payzon API - IT Solutions & Fintech"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>

        {/* Second banner - 50% width */}
        <div className="relative w-1/2 h-[90px] md:h-[175px] overflow-hidden">
          <img
            src={advShoppy2.src}
            alt="Shoppy Advertisement"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      </div>
      
      {/* Advertisement Label - centered with padding */}
      <div className="text-center mt-1 px-3 md:px-4">
        <span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-wider">
          विज्ञापन
        </span>
      </div>
    </div>
  );
}