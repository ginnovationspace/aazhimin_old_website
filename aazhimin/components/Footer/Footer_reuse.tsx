'use client';

import React, { useState } from 'react';

interface FooterColumn {
  title: string;
  items: { label: string; href?: string }[];
}

interface FooterProps {
  columns: FooterColumn[];
  address: string;
  email: string;
  phone: string;
  socialLinks: { label: string; href: string }[];
  copyright: string;
}

const Footer_reuse: React.FC<FooterProps> = ({
  columns,
  address,
  email,
  phone,
  socialLinks,
  copyright,
}) => {
  const [expandedColumns, setExpandedColumns] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedColumns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <footer className="bg-[#fff] text-[#0f0629] lg:px-20 md:px-20 px-5 py-8 justify-between w-full">
      <div className="container lg:flex md:flex justify-between md:text-left gap-10 flex-wrap">
        {columns.map((column, index) => {
          const isExpanded = expandedColumns[index];
          const visibleItems = isExpanded ? column.items : column.items.slice(0, 6);
          const hasMore = column.items.length > 6;

          return (
            <div key={index} className="space-y-4 py-2 min-w-[180px]">
              <h4 className="font-bold text-xl">{column.title}</h4>
              {visibleItems.map((item, idx) => (
                <div key={idx}>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#3034ff] block text-sm">
                      {item.label}
                    </a>
                  ) : (
                    <span className="block text-sm">{item.label}</span>
                  )}
                </div>
              ))}

              {hasMore && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 text-sm hover:underline mt-2"
                >
                  {isExpanded ? 'View Less' : 'View More'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center space-y-4 text-sm">
        <div>{address}</div>
        <div>
          Email:{' '}
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>{' '}
          | Phone:{' '}
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>
        <div className="space-x-4">
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.href} className="hover:underline">
              {socialLink.label}
            </a>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-4">{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer_reuse;
