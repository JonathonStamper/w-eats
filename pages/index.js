import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <> 
   <main className="relative overflow-hidden">

    


    <section className="flex justify-center flex-col gap-5 items-center h-screen bg-[#0D131A] text-white z-20 relative">

      <div className="lg:w-[600px] lg:h-[600px] z-10 absolute left-[0%] top-[-150px] blur-2xl bg-[#0C12AB] rounded-full opacity-[12%]"></div>
      <div className="lg:w-[30px] lg:h-[30px] z-10 absolute left-[350px] top-[px] blur-2xl bg-[#ffffff] rounded-full opacity-[100%]"></div>

    <div className="lg:w-[600px] lg:h-[600px] z-10 absolute right-[-170px] top-[-175px] blur-2xl bg-[#00C3DD] rounded-full opacity-[12%]"></div>
    <div className="lg:w-[600px] lg:h-[600px] z-10 absolute left-  bottom-[-400px] blur-2xl bg-[#0CAB5E] rounded-full opacity-[12%]"></div>


      <div className="text-7xl font-extrabold flex animateGradient font-baloo">
        <div className="animateGradient bg-clip-text font-baloo transition-all  bg-gradient-to-br from-[#4BA949] to-[#1E431D]  text-transparent inline-block">W</div>
        <div className="font-baloo text-[#ffffff]">-</div>
        <div className="animateGradient transition-all text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] inline-block to-[#a4a4a4] hover:to-[#929292]">Eats</div>
      </div>   

      <div className="text-base font-medium text-center font lg:w-[400px]">
      Discover, rate, and share new and different restaurants among friends.  
      </div>  
      <button>
      <Link href={`/discover`}  className="mt-7 z-10 hover:text-[#] hover:bg-[#1d5248] text-white bg-[#013229] flex justify-center items-center  px-8 py-3 font-medium rounded-lg">
        Explore  
      </Link>   </button>        
    </section>      
   </main>
   </>
  );
}
