import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-8 text-sm text-muted sm:px-8">
      <span>
        © {profile.year} {profile.name}
      </span>
      <span className="font-mono text-xs">Built with Next.js · Tailwind · Motion</span>
    </footer>
  );
}
