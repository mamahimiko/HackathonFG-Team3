import Image from "next/image";
import logo from "@/public/logotype_GemuEngine_horizontal_white.png";

const Footer = () => {
  return (
    <footer className=" bg-bg-dark px-8 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div>
          <Image src={logo} alt="Logo" className="w-30" />
        </div>
        <div>
          <ul className="flex flex-col md:flex-row md:gap-5 menu text-text-secondary cursor-pointer">
            <li className="hover:text-text-secondary/80 ">Engine</li>
            <li className="hover:text-text-secondary/80">Learn</li>
            <li className="hover:text-text-secondary/80">Community</li>
            <li className="hover:text-text-secondary/80">Contact</li>
          </ul>
        </div>
      </div>
      <div className="py-6 md:py-9">
        <hr className="text-bg-surface"></hr>
      </div>
      <div className="flex justify-between text-text-secondary  flex-col md:flex-row">
        <p>&copy; 2026 GEMU. Build something extraordinary.</p>
        <div className="flex gap-4">
          <p>Privacy policy</p>
          <p>Terms of use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
