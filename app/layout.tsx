import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenDeployments",
};

const navbar = (
  <Navbar
    logo={
      <>
        <div className="lg:hidden">
          <img
            src="/logo/square-dark-foreground.svg"
            alt="Horizontal dark foreground"
            className="w-[3rem] dark:hidden"
          />

          <img
            src="/logo/square-light-foreground.svg"
            alt="Horizontal dark foreground"
            className="w-[3rem] hidden dark:block"
          />
        </div>

        <div className="hidden lg:block">
          <img
            src="/logo/horizontal-dark-foreground.svg"
            alt="Horizontal dark foreground"
            className="w-[12rem] dark:hidden"
          />

          <img
            src="/logo/horizontal-light-foreground.svg"
            alt="Horizontal dark foreground"
            className="w-[12rem] hidden dark:block"
          />
        </div>
      </>
    }
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer className="flex flex-col gap-4 text-sm">
    <div>MIT {new Date().getFullYear()} © OpenDeployments.</div>

    <div>
      Made with ❤️ by{" "}
      <a
        href="https://darnadigital.com"
        target="_blank"
        className="hover:underline"
      >
        Darna Digital
      </a>
    </div>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
