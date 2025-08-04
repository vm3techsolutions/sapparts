import Image from "next/image";


export default function MachineImage() {
  return (
    <div className="w-full bg-white flex justify-center items-center sm:px-4 ">
      <div className="">
        <Image
          src="/assets/products//MechanicalFaceSealBanner.png" 
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover sm:w-[215vh] sm:h-[80vh]"
        />
      </div>
    </div>
  );
}
