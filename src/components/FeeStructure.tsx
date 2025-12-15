import { Users, Wifi, Building2, Info } from "lucide-react";

const feeData = [
  { students: 1, online: 10000, offline: 13000 },
  { students: 2, online: 9000, offline: 12000 },
  { students: 3, online: 8000, offline: 11000 },
  { students: 4, online: 7000, offline: 10000 },
  { students: 5, online: 6000, offline: 9000 },
];

const FeeStructure = () => {
  return (
    <section
      id="fees"
      className="py-28 bg-[#faf9f6] text-[#1f3a5f]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-[#fef3c7] text-[#b45309] font-medium">
            Affordable Pricing
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Fee{" "}
            <span className="text-[#f59e0b]">Structure</span>
          </h2>

          <p className="text-[#4b6b88]">
            Group discounts available – more students, more savings.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-gray-200 bg-[#f1f5f9]">
            <div className="py-4 flex items-center justify-center gap-2">
              <Users size={16} className="text-[#f59e0b]" />
              No. of Students
            </div>
            <div className="py-4 flex items-center justify-center gap-2">
              <Wifi size={16} className="text-[#f59e0b]" />
              Online Fees
            </div>
            <div className="py-4 flex items-center justify-center gap-2">
              <Building2 size={16} className="text-[#f59e0b]" />
              Offline Fees
            </div>
          </div>

          {/* Rows */}
          {feeData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-center border-b border-gray-100 last:border-none"
            >
              <div className="py-4 font-medium">
                {row.students}
              </div>
              <div className="py-4 font-semibold text-[#1f3a5f]">
                ₹{row.online.toLocaleString()}
              </div>
              <div className="py-4 font-semibold text-[#1f3a5f]">
                ₹{row.offline.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#4b6b88]">
          <Info size={14} className="text-[#f59e0b]" />
          Fees are per student. Form a group with friends to avail better rates.
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
