import Image from "next/image";
// import advShoppy from "@/app/public/shoppy15ADV.png";
import advShoppy from "@/app/public/payzonapi112.png";

export default function ShoppyBanner() {
  return (
    <div className="w-full bg-white py-2 md:py-3">
      {/* Fixed width centered container */}
      <div className="w-full px-0 flex justify-center items-center">
        {/* 730px width, 90px height banner - centered */}
        <div className="relative w-[1002px] h-[90px] overflow-hidden">
          <img
            src={advShoppy.src}
            alt="Payzon API - IT Solutions & Fintech"
            className="w-full h-full object-contain"
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