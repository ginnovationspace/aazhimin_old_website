import React from 'react';
import { NavItem } from '@/components/Utils/Constants';

interface DropdownMenuProps {
  items: NavItem[];
  splitItems: (items: NavItem[], itemsPerColumn: number) => NavItem[][];
  toggleNestedDropdown: (parentLabel: string, label: string) => void;
  nestedDropdownOpen: { [key: string]: string | null };
  parentLabel: string;
  ITEMS_PER_COLUMN: number;
  NESTED_ITEMS_PER_COLUMN: number; // Add a prop for nested columns
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  splitItems,
  toggleNestedDropdown,
  nestedDropdownOpen,
  parentLabel,
  ITEMS_PER_COLUMN,
  NESTED_ITEMS_PER_COLUMN, // Use this for nested dropdowns
}) => {
  return (
    <div className="w-full h-1/2 flex transition duration-300 ease-in-out">
      {splitItems(items, ITEMS_PER_COLUMN).map((column, index) => (
        <div key={index} className="px-5 pt-10">
          {column.map((dropdownItem: NavItem) => (
            <div key={dropdownItem.label} className="flex justify-between relative">
              <a
                href={dropdownItem.dropdownItems ? '#' : dropdownItem.path || dropdownItem.href || '#'}
                className="text-black font-semibold hover:text-blue-600 block px-10 py-5 rounded-md text-sm"
                onClick={() => dropdownItem.dropdownItems && toggleNestedDropdown(parentLabel, dropdownItem.label)}
              >
                {dropdownItem.label}
              </a>
              {dropdownItem.dropdownItems && nestedDropdownOpen[parentLabel] === dropdownItem.label && (
                <div className="pl-4 mt-4 flex">
                  {splitItems(dropdownItem.dropdownItems, NESTED_ITEMS_PER_COLUMN).map((nestedColumn, nestedIndex) => (
                    <div key={nestedIndex} className="flex flex-col px-5">
                      {nestedColumn.map((nestedItem: NavItem) => (
                        <a
                          key={nestedItem.label}
                          href={nestedItem.path || nestedItem.href || '#'}
                          className="text-white hover:text-gray-400 block px-4 py-2 text-sm"
                        >
                          {nestedItem.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
