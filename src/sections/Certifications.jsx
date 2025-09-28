/* eslint-disable react/no-unknown-property */
import React from "react";

const CERTS = [
  { id: "atlassian", title: "Atlassian Agile Project Management Professional Certificate", org: "Atlassian", year: 2025, badge: "assets/logos/atlassian.webp", link: "https://www.linkedin.com/learning/certificates/6f8ced8a673141353d01eff0322be1b7549353dc9d73a9c2ad9e97528069b004?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B6lFhSG%2FPRU6uWPuBaFGV0Q%3D%3D" },
  { id: "google",    title: "Google Project Management Certificate", org: "Coursera",  year: 2023, badge: "assets/logos/google.webp",    link: "https://www.credly.com/badges/1a78d4b0-f0cd-4538-864f-be274ae61724/linked_in_profile" },
  { id: "cb",        title: "Project Management Specialization",     org: "Coursera",  year: 2023, badge: "assets/logos/cb.webp",        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/VBL6DYKGF7MV" },
  { id: "stanford",  title: "Machine Learning Specialization",       org: "Coursera",  year: 2024, badge: "assets/logos/stanford.webp",  link: "https://www.coursera.org/account/accomplishments/specialization/HV562VPJZLQB" },
];

/* ---------- UI bits ---------- */

function Segmented({ value, onChange }) {
  const isDesc = value === "desc";
  return (
    <div role="group" aria-label="Sort by year"
         className="inline-flex w-full items-center rounded-xl bg-neutral-800/60 p-0.5 shadow-inner">
      <button
        type="button"
        onClick={() => onChange("desc")}
        className={`flex-1 rounded-lg px-3 py-1.5 text-sm transition-colors
          ${isDesc ? "bg-neutral-700 text-white" : "text-neutral-300 hover:bg-neutral-700/50"}`}
        aria-pressed={isDesc}
      >
        Newest
      </button>
      <button
        type="button"
        onClick={() => onChange("asc")}
        className={`flex-1 rounded-lg px-3 py-1.5 text-sm transition-colors
          ${!isDesc ? "bg-neutral-700 text-white" : "text-neutral-300 hover:bg-neutral-700/50"}`}
        aria-pressed={!isDesc}
      >
        Oldest
      </button>
    </div>
  );
}

function Row({ title, org, year, badge, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block w-full">
      {/* lg+ : Finder row with 3 columns */}
      <div className="hidden lg:grid grid-cols-[minmax(12rem,1fr)_14rem_6rem] items-center gap-4 px-4 py-2 hover:bg-neutral-800/70 transition-colors will-change-[background-color]">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={badge}
            alt=""
            className="h-8 w-8 rounded object-contain bg-neutral-800/60 transform-gpu"
            loading="eager"
            decoding="async"
          />
          <span className="truncate font-medium text-neutral-100">{title}</span>
        </div>
        <span className="truncate text-sm text-neutral-400">{org}</span>
        <span className="justify-self-end text-xs text-neutral-400">{year}</span>
      </div>

      {/* md only : 2 columns + year pill */}
      <div className="hidden md:flex lg:hidden items-center justify-between px-4 py-2 hover:bg-neutral-800/70 transition-colors will-change-[background-color]">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={badge}
            alt=""
            className="h-8 w-8 rounded object-contain bg-neutral-800/60 transform-gpu"
            loading="eager"
            decoding="async"
          />
          <div className="flex flex-col min-w-0">
            <span className="truncate font-medium text-neutral-100">{title}</span>
            <span className="text-xs text-neutral-400">{org}</span>
          </div>
        </div>
        <span className="ml-4 shrink-0 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-neutral-300">
          {year}
        </span>
      </div>

      {/* sm : stacked card */}
      <div className="md:hidden flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 bg-neutral-900/80 hover:bg-neutral-800/70 transition-colors will-change-[background-color]">
        <img
          src={badge}
          alt=""
          className="h-10 w-10 rounded object-contain bg-neutral-800/60 transform-gpu"
          loading="eager"
          decoding="async"
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-neutral-100">{title}</div>
          <div className="text-xs text-neutral-400">{org}</div>
        </div>
        <span className="ml-auto rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-neutral-300">
          {year}
        </span>
      </div>
    </a>
  );
}

/* ---------- Section ---------- */

export default function Certifications() {
  const [sortOrder, setSortOrder] = React.useState("desc"); // "desc" | "asc"

  const sortedCerts = React.useMemo(() => {
    const arr = [...CERTS];
    arr.sort((a, b) => (sortOrder === "desc" ? b.year - a.year : a.year - b.year));
    return arr;
  }, [sortOrder]);

  const Arrow = ({ dir }) => (
    <svg width="10" height="10" viewBox="0 0 24 24" className={`inline ml-1 ${dir === "desc" ? "" : "rotate-180"}`}>
      <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
    </svg>
  );

  return (
    <section id="certifications" className="relative c-space" style={{ paddingTop: "100px" }}>
      <h2 className="text-heading">Licenses & Certifications</h2>

      {/* WRAPPER moves BOTH the mobile filter and the window down on mobile */}
      <div className="mt-8 md:mt-12 lg:mt-16">
        {/* Mobile-only compact select */}
        <div className="md:hidden mb-6">
          <label className="sr-only" htmlFor="sort-mobile">Sort by year</label>
          <select
            id="sort-mobile"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-200"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>

        <div className="mx-auto max-w-6xl w-full">
          {/* mac window */}
          <div className="rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-200 shadow-lg h-[480px] md:h-[560px] lg:h-[640px] flex flex-col">
            {/* titlebar */}
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-neutral-400">Licenses & Certifications</span>
              <div className="w-12" />
            </div>

            <div className="flex flex-1">
              {/* Sidebar: segmented control (md+) */}
              <aside className="hidden md:flex w-52 shrink-0 flex-col border-r border-neutral-800 bg-neutral-950/70 p-3 text-sm gap-2 rounded-bl-2xl md:rounded-tl-none">
                <p className="mt-1 text-[11px] font-semibold text-neutral-400">Sort by Year</p>
                <Segmented value={sortOrder} onChange={setSortOrder} />
              </aside>

              {/* Main list */}
              <main className="flex-1 overflow-y-auto">
                {/* Desktop headers with clickable Year toggle */}
                <div className="hidden lg:grid grid-cols-[minmax(12rem,1fr)_14rem_6rem] items-center gap-4 border-b border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs text-neutral-400">
                  <span>Name</span>
                  <span>Issuer</span>
                  <button
                    type="button"
                    onClick={() => setSortOrder((s) => (s === "desc" ? "asc" : "desc"))}
                    className="justify-self-end inline-flex items-center hover:text-neutral-200"
                    title={`Sort by year (${sortOrder === "desc" ? "newest → oldest" : "oldest → newest"})`}
                  >
                    Year <Arrow dir={sortOrder} />
                  </button>
                </div>

                {/* Rows */}
                <div className="divide-y divide-neutral-800 p-2 md:p-0">
                  {sortedCerts.map((c) => <Row key={c.id} {...c} />)}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
