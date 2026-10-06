import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import type { Locale } from "@/lib/i18n";

export default function HomePage({
  locale,
}: {
  locale: Locale;
}): React.JSX.Element {
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <Projects locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
