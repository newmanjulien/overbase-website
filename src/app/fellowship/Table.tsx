"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface Fellow {
  id: string;
  name: string;
  school: string;
  degree: string;
  href: string;
}

const FELLOWS: Fellow[] = [
  {
    id: "amogh",
    name: "Amogh Agrawal",
    degree: "B. Tech in Computer Science",
    school: "IIT Bombay",
    href: "https://drive.google.com/file/d/1l0UfWDvwuPef0XfVLn0E_c0oSLgI8gli/view",
  },
  {
    id: "sagar",
    name: "Sagar Venkatesh",
    degree: "B. Tech in Computer Science",
    school: "IIT Bombay",
    href: "https://drive.google.com/file/d/1A2VWhMN4xMm6w4SRmbkAJpL1jO75yPe4/view",
  },
  {
    id: "shivein",
    name: "Shivein Pise",
    degree: "B. Tech in Computer Science",
    school: "IIIT Pune",
    href: "https://drive.google.com/file/d/1ERmA9hVKAMw7GEdTeThmZeqY2TzwQEUm/view",
  },
  {
    id: "sarthak",
    name: "Sarthak Somani",
    degree: "B.S. in Economics",
    school: "IIT Bombay",
    href: "https://drive.google.com/file/d/1gKpz631mY7DxO4GHqQUS5n95csFlpKE5/view",
  },
  {
    id: "shreeya",
    name: "Shreeya Choudhary",
    degree: "B. Tech in Mathematics",
    school: "IIT Bombay",
    href: "https://drive.google.com/file/d/1fXiL2xbo64KaLypuZjG93LkvBmFskYks/view",
  },
];

const PAGE_SIZE = 4;

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(FELLOWS.length / PAGE_SIZE)),
    [],
  );
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleFellows = FELLOWS.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <section
      id="fellowship-table"
      className="px-6 md:px-12 lg:px-24 pt-16 pb-20 max-w-6xl mx-auto"
    >
      <div className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-4">
        List of fellows
      </div>
      <div className="border-t border-gray-100"></div>

      <div className="divide-y divide-gray-100 text-[13px] md:text-[14px]">
        {visibleFellows.map((fellow) => (
          <div
            key={fellow.id}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,0.7fr)] gap-3 md:gap-6 py-5 md:py-6 items-center"
          >
            <div className="text-gray-900 font-medium">{fellow.name}</div>

            <div className="text-gray-500">{fellow.school ?? ""}</div>

            <div className="text-gray-500">{fellow.degree}</div>

            <div className="md:text-right">
              <Link
                href={fellow.href}
                className="text-gray-500 hover:text-gray-700 text-[12px] md:text-[13px]"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pt-10 text-[12px] text-gray-500">
        <button
          type="button"
          className={`px-2 py-1 rounded border ${
            currentPage === 1
              ? "border-gray-100 text-gray-300 cursor-not-allowed"
              : "border-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              className={`px-2.5 py-1 rounded border ${
                isActive
                  ? "border-gray-300 text-gray-900"
                  : "border-gray-100 text-gray-500 hover:text-gray-700"
              }`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
        <button
          type="button"
          className={`px-2 py-1 rounded border ${
            currentPage === totalPages
              ? "border-gray-100 text-gray-300 cursor-not-allowed"
              : "border-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((page) => Math.min(totalPages, page + 1))
          }
        >
          Next
        </button>
      </div>
    </section>
  );
}
