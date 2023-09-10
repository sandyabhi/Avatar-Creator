import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-br from-violet-900 to-blue-700 fixed top-0 h-fit inset-x-0 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link className="flex gap-2 items-center" href="/">
          <p className="hover:text-sky-300 hover:underline">Avatar-Creator</p>
        </Link>
        <Link className="flex gap-2 items-center" href="/About">
          <p className="hover:text-sky-300 hover:underline">About</p>
        </Link>
      </div>
    </div>
    // <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
    //   <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
    //     {/* logo */}
    //     <Link href="/" className="flex gap-2 items-center">
    //       {/* <Image className="mx-auto" alt="logo" height={48} width={48} /> */}
    //       <p className="hidden text-zinc-700 text-sm font-medium md:block">
    //         ReEdit
    //       </p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Navbar;
