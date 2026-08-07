import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/components/Utils/Constants';
import { ChevronDownIcon } from '@/public/Assets/images/images';

interface MobileNavItemsProps {
  navItems: NavItem[];
  toggleMobileDropdown: (label: string) => void;
  mobileDropdownOpen: string | null;
}

const MobileNavItems: React.FC<MobileNavItemsProps> = ({
  navItems,
  toggleMobileDropdown,
  mobileDropdownOpen,
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="lg:hidden fixed inset-x-0 transition duration-100 ease-in-out transform origin-top-right overflow-y-auto">
      <div className="px-5 py-5 space-y-2">
        {navItems.map((item: NavItem) => {
          const hasDropdown = item.dropdownItems || item.sections;
          const isOpen = mobileDropdownOpen === item.label;

          return (
            <div key={item.label} className="relative">
              <div
                className="px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 flex items-center justify-between cursor-pointer"
                onClick={() => hasDropdown && toggleMobileDropdown(item.label)}
              >
                <span>{item.label}</span>
                {hasDropdown && (
                  <Image
                    src={ChevronDownIcon}
                    alt="dropdown"
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180 opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Items for simple dropdowns */}
              {item.dropdownItems && isOpen && (
                <div className="pl-4 w-full space-y-2">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link key={dropdownItem.label} href={dropdownItem.path || dropdownItem.href || '#'}>
                      <p className="block py-2 text-sm text-gray-700 hover:text-gray-500">
                        {dropdownItem.label}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {/* Sections for dropdown with multiple sections (e.g., Services) */}
              {item.sections && isOpen && (
                <div className="pl-4 w-full space-y-4">
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <div
                        className="flex items-center justify-between cursor-pointer px-2"
                        onClick={() => toggleSection(section.title)}
                      >
                        <h3 className="text-md hover:font-semibold focus:font-semibold">{section.title}</h3>
                        <Image
                          src={ChevronDownIcon}
                          alt="dropdown"
                          width={16}
                          height={16}
                          className={`transition-transform duration-300 ${
                            openSections[section.title] ? 'rotate-180 opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>

                      {openSections[section.title] && (
                        <div className="pl-2 space-y-2 mt-2">
                          {section.items.map((subItem) => (
                            <Link key={subItem.label} href={subItem.path || '#'}>
                              <p className="block py-2 text-sm text-gray-700 hover:text-gray-500">
                                {subItem.label}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavItems;
