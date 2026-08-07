import React from 'react';
import Image from 'next/image';
import { MenuIcon, CloseIcon } from '@/public/Assets/images/images';

interface MobileMenuToggleProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ menuOpen, toggleMenu, menuButtonRef }) => {
  return (
    <div className="flex lg:hidden float-end mt-2">
      <button onClick={toggleMenu} ref={menuButtonRef}>
        <Image src={menuOpen ? CloseIcon : MenuIcon} alt="menu" className='   w-6 h-6 right-5 ' />
      </button>
    </div>
  );
};

export default MobileMenuToggle;
