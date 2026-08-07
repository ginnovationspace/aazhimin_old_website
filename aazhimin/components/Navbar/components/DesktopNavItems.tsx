import React, { useRef, useState } from 'react';
import { NavItem } from '@/components/Utils/Constants';

interface DesktopNavItemsProps {
  navItems: NavItem[];
  dropdownOpen: string | null;
  handleMouseEnter: (label: string) => void;
  handleMouseLeave: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const DesktopNavItems: React.FC<DesktopNavItemsProps> = ({
  navItems,
  dropdownOpen,
  handleMouseEnter,
  handleMouseLeave,
  menuRef,
}) => {
  const [nestedHover, setNestedHover] = useState<string | null>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <ul className="hidden space-x-10 lg:flex items-center text-sm font-medium text-gray-800">
      {navItems.map((item: NavItem) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => {
            if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
            handleMouseEnter(item.label);
          }}
          onMouseLeave={() => {
            leaveTimeout.current = setTimeout(() => {
              handleMouseLeave();
              setNestedHover(null);
            }, 200);
          }}
        >
          <li className="list-none">
            <a
              href={item.path || '#'}
              className="px-4 py-2 rounded-md transition-all duration-200 hover:text-cyan-600"
            >
              {item.label}
            </a>
          </li>

          {/* Dropdown: Simple Items */}
          {item.dropdownItems && dropdownOpen === item.label && (
            <div
              className="fixed inset-0 mt-18 px-10 bg-white/80 backdrop-blur-lg h-screen z-50 flex justify-center items-start"
              ref={menuRef}
            >
              <div className="w-full max-w-5xl grid grid-cols-2 gap-6 pt-10">
                {item.dropdownItems.map((dropdownItem, idx) => (
                  <a
                    key={idx}
                    href={dropdownItem.path}
                    className="text-gray-800 hover:text-cyan-600 transition-all text-base font-medium"
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Dropdown: Sections with Sub-Items */}
          {item.sections && dropdownOpen === item.label && (
            <div
              className="fixed inset-0 mt-16 flex justify-center items-start px-10 bg-white/80 backdrop-blur-lg h-screen z-50"
              ref={menuRef}
            >
              <div className="w-full max-w-6xl flex border border-cyan-100 shadow-xl rounded-lg overflow-hidden bg-white">
                {/* Section Titles */}
                <div className="w-1/3 bg-cyan-50 p-4">
                  {item.sections.map((section, si) => (
                    <div
                      key={si}
                      className={`py-3 px-4 rounded-md transition-all cursor-pointer ${
                        nestedHover === section.title
                          ? 'bg-cyan-100 text-cyan-700 font-semibold'
                          : 'hover:bg-cyan-100 text-gray-700'
                      }`}
                      onMouseEnter={() => setNestedHover(section.title)}
                    >
                      {section.title}
                    </div>
                  ))}
                </div>

                {/* Sub Items */}
                <div className="w-2/3 p-6">
                  {nestedHover && (
                    <div className="grid grid-cols-2 gap-4">
                      {item.sections
                        .find((section) => section.title === nestedHover)
                        ?.items.map((subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href={subItem.path}
                            className="block py-2 text-gray-800 hover:text-cyan-600 transition-all text-base"
                          >
                            {subItem.label}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default DesktopNavItems;
