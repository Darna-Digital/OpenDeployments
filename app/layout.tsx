import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "OpenDeployments - Open Source Deployment Guides",
    template: "%s | OpenDeployments",
  },
  description:
    "Open source collection of deployment guides for Next.js, React, and modern web frameworks to AWS Lambda, Vercel, and cloud platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opendeployments.com",
    title: "OpenDeployments - Open Source Deployment Guides",
    description:
      "Open source collection of deployment guides for modern web frameworks.",
    siteName: "OpenDeployments",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenDeployments - Open Source Deployment Guides",
    description:
      "Open source collection of deployment guides for modern web frameworks.",
  },
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
    projectLink="https://github.com/darna-digital/open-deployments"
  />
);
const footer = (
  <div className="flex flex-col gap-4 text-sm content-container">
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
  </div>
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
      <body className={inter.className}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Darna-Digital/OpenDeployments"
          footer={footer}
        >
          <div className="min-h-screen">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
