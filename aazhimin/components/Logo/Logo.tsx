import Image from 'next/image';
import { logo_image } from '@/public/Assets/images/images';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="/" aria-label="Aazhimin Home">
        <Image
          src={logo_image}
          alt="Aazhimin Logo"
          width={180}
          height={40}
          priority
          className=" object-contain"
        />
      </a>
    </div>
  );
};

export default Logo;
