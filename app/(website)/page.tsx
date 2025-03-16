import HeroSection from "@/components/ui/hero-section";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full ">
      <div className="h-80 w-full mx-auto max-w-screen-xl">
        <HeroSection
        />        
      </div>
      <div className="mx-auto max-w-screen-xl w-full  px-4 lg:px-0 pt-0 md:pt-36">
      <h1 className="text-lg font-bold">Latest Posts</h1>
          <p className="font-medium text-gray-600">See the latest posts here</p>

      </div>
     </div>
    </div>
  );
}
