'use client';
import React, { useState, useEffect, useRef } from 'react';
import { NavItem, navItems } from '@/components/Utils/Constants';
import MobileMenuToggle from './MobileMenuToggle';
import DesktopNavItems from './DesktopNavItems';
import MobileNavItems from './MobileNavItems';

const ITEMS_PER_COLUMN = 8;
const NESTED_ITEMS_PER_COLUMN = 4;

const chunkArray = (array: NavItem[], chunkSize: number): NavItem[][] => {
  const result: NavItem[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const NavItems: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState<{ [key: string]: string | null }>({});
  const menuRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const menuButtonRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
    setNestedDropdownOpen({});
  };

  const handleMouseEnter = (label: string) => {
    if (!menuOpen) {
      setDropdownOpen(label);
    }
  };

  const handleMouseLeave = () => {
    if (!menuOpen) {
      setDropdownOpen(null);
    }
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((prevState) => (prevState === label ? null : label));
  };

  const toggleNestedDropdown = (parentLabel: string, label: string) => {
    setNestedDropdownOpen((prevState) => ({
      ...prevState,
      [parentLabel]: prevState[parentLabel] === label ? null : label,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
        setMobileDropdownOpen(null);
        setMenuOpen(false);
        setNestedDropdownOpen({});
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const splitItems = (items: NavItem[], itemsPerColumn: number) => chunkArray(items, itemsPerColumn);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <MobileMenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} menuButtonRef={menuButtonRef} />

      {/* Desktop Navigation Items */}
      <DesktopNavItems
        navItems={navItems}
        dropdownOpen={dropdownOpen}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        // toggleNestedDropdown={toggleNestedDropdown}
        // splitItems={splitItems}
        // nestedDropdownOpen={nestedDropdownOpen}
        menuRef={menuRef}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute inset-0 mt-20 flex justify-center items-start px-10 bg-white h-screen bg-opacity-80 backdrop-blur-xl z-50">
          <MobileNavItems
            navItems={navItems}
            toggleMobileDropdown={toggleMobileDropdown}
            mobileDropdownOpen={mobileDropdownOpen}
            // toggleNestedDropdown={toggleNestedDropdown}
            // nestedDropdownOpen={nestedDropdownOpen}
            // splitItems={splitItems}
          />
        </div>
      )}
    </>
  );
};

export default NavItems;
