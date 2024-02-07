'use client'

import Search from "./Search";
import CountryList from "./CountryList";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
        <Search />
        <CountryList />
      </section>
    </main>
  );
}
