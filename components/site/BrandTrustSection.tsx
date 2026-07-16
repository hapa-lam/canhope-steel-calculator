export function BrandTrustSection() {
  const trustPoints = [
    "Steel Experience Since 1993",
    "30,000+ m² Factory & Warehouse Facilities",
    "Approx. 30,000 Tons Inventory",
    "Project & Mixed-Container Support",
  ];

  return (
    <section className="mx-auto max-w-[1500px] px-4 pb-8 sm:px-6" aria-labelledby="brand-trust-title">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <h2 id="brand-trust-title" className="text-2xl font-bold text-slate-950">Built by Steel Industry Professionals</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">This calculator is developed by CANHOPE STEEL, a steel and fire protection materials supplier supporting contractors, distributors and project buyers.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">
          {trustPoints.map((point) => <li key={point} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{point}</li>)}
        </ul>
        <p className="mt-5 text-sm font-semibold text-[#0e5f9f]"><a href="https://canhopesteel.com/" target="_blank" rel="noopener noreferrer">Visit CANHOPE STEEL</a><span className="px-2 text-slate-300">|</span><a href="https://canhopesteel.com/products/" target="_blank" rel="noopener noreferrer">Explore Products</a></p>
      </div>
    </section>
  );
}
