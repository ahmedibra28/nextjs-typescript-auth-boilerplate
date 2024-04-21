import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/providers/providers";
import Navigation from "@/components/navigation";
import meta from "@/lib/meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta({
  title: "Full-Stack Developer In Somalia | Ahmed Ibrahim",
  description: `I'm a Full Stack Developer with 5+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web and mobile functionalities that improve data retrieval and workflow efficiencies.`,
  openGraphImage: "https://github.com/ahmedibra28.png",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
