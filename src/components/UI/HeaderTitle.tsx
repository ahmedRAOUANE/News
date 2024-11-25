"use client";

import { useSearchParams } from 'next/navigation';
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const HeaderTitle = () => {
    const searchParams = useSearchParams();
    const entries = Object.fromEntries(searchParams.entries());
    const filter = Object.keys(entries);
    const filterOption = Object.values(entries);

  return (
      <h1 className="px-3 text-xl flex justify-start items-center gap-1">
          <span>
              Top Headlines
          </span>

          <span className="text-3xl">
              <MdKeyboardArrowRight />
          </span>

          <span className='font-bold text-blue-500'>{filterOption}</span>
          <span>{filter}</span>
      </h1>
  )
}

export default HeaderTitle