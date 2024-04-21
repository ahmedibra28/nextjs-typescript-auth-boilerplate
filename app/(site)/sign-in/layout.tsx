import meta from "@/lib/meta";

export const metadata = meta({
  title: "Sign In",
  description: `Sign in to your account`,
  openGraphImage: "https://github.com/ahmedibra28.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
