"use client";
import Image from "next/image";
import * as m from "@/paraglide/messages.js"
import { Link,usePathname } from "@/lib/i18n";
import { availableLanguageTags } from "@/paraglide/runtime";


export default function Home() {
  const pathname = usePathname();
  return (
    <main>
      {availableLanguageTags.map((lang) => {
        return (
          <div key={lang}>
            <Link href={pathname} locale={lang}>
              {lang}
            </Link>
          </div>
        );


      })}
      <h1>
        {m.welcome()}
      </h1>
    </main>
  );
}
