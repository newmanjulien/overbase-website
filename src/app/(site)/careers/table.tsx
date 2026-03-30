import Link from "next/link";

interface Opening {
  id: string;
  name: string;
  school: string;
  degree: string;
  href: string;
}

const OPENING: Opening[] = [
  {
    id: "israel",
    name: "Data Scientist 1 - Tel Aviv",
    degree: "Dapar 90",
    school: "₪300,000 per year",
    href: "https://drive.google.com/file/d/1kKJznxg52URF44hNzlsu0YXxRFwYMIyo/view",
  },
  {
    id: "delhi",
    name: "Data Scientist 1 - Delhi",
    degree: "JEE 1–100 rankers",
    school: "₹24 LPA",
    href: "https://drive.google.com/file/d/1r5VA47s88AcbrOfl6j1taoqCmJ4Bs1TQ/view",
  },
  {
    id: "mumbai",
    name: "Data Scientist 1 - Mumbai",
    degree: "JEE 1–100 rankers",
    school: "₹24 LPA",
    href: "https://drive.google.com/file/d/1FKm3lnOQ2fTwzpn6CubMZsERTOOI4O67/view",
  },
  {
    id: "istanbul",
    name: "Data Scientist 1 - Istanbul",
    degree: "YKS 1–100 rankers",
    school: "₺120,000 per month",
    href: "https://drive.google.com/file/d/1WYcnH8qkRbmXEPTVtJlbB7O4aBaIa9Px/view",
  },
];

export default function CareersTable() {
  return (
    <section
      id="careers-table"
      className="px-6 md:px-[5.5rem] pt-20 md:pt-[7.5rem] pb-[8.25rem] max-w-7xl mx-auto"
    >
      <div className="text-sm text-gray-400 mb-4 px-3">Open Roles</div>
      <div className="border-t border-gray-100 mx-3"></div>

      <div className="mt-2 space-y-1 md:space-y-2 text-sm">
        {OPENING.map((opening) => (
          <Link
            key={opening.id}
            href={opening.href}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,0.7fr)] gap-2 md:gap-6 px-3 md:px-6 py-3 md:py-6 -mx-1 md:-mx-3 items-center rounded-2xl transition-colors hover:bg-gray-50"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-gray-900 font-medium">{opening.name}</div>
            <div className="text-gray-500">{opening.school}</div>
            <div className="text-gray-500">{opening.degree}</div>
            <div className="md:text-right text-gray-500">Learn more</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
