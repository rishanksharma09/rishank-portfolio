/* Social Icon Wrapper */
export default function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur
        transition
        hover:bg-blue-500/15
        hover:border-blue-500/30
      "
    >
      {/* glow */}
      <span className="absolute inset-0 rounded-full 
        bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_65%)]
        opacity-0 group-hover:opacity-100 blur-md transition" />

      {/* icon */}
      <span className="relative text-white/70 group-hover:text-white transition">
        {children}
      </span>
    </a>
  );
}