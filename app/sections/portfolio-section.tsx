import PortfolioGrid from "@/app/component/portfolio-grid";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-screen h-max bg-[#f2f2f2] p-8 pb-20 lg:px-100 scroll-mt-[10vh]"
    >
      <div className="mt-9 text-black">
        <h1 className="border-b pb-4 text-left text-2xl font-black uppercase">
          Portfolio
        </h1>
        {/*<p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 lg:text-base">
          Selected work across e-commerce, ERP, analytics, and internal tools —
          from product UI through production systems.
        </p>*/}
        <PortfolioGrid />
      </div>
    </section>
  );
}
