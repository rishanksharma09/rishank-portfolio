type Props = {
  year: string;
  title: string;
  company: string;
  description: string;
};

type PropsArray = {
  data: Props[];
};

export default function Experience({ data }: PropsArray) {
  return (
    <section className="relative w-full bg-[#05070c] py-20 pt-28 overflow-hidden mt-30 " id="experience">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.15),transparent_45%)]" />

      {/* heading */}
      <div className="relative z-10 text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          My <span className="text-blue-500">Learning Journey</span>
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          From fundamentals to building real-world interfaces.
        </p>
      </div>

      {/* timeline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* vertical glowing line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] 
          bg-gradient-to-b from-transparent via-blue-500/40 to-transparent
          shadow-[0_0_30px_rgba(59,130,246,0.4)]" />

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative mb-24 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* card */}
              <div
                className={`w-full md:w-[45%] relative rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-[0_0_40px_rgba(59,130,246,0.15)]
                  transition-transform duration-300 hover:-translate-y-2`}
              >
                <span className="text-xs tracking-widest text-white/40">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-blue-400">
                  {item.title}
                </h3>

                <p className="text-sm text-white/50">
                  {item.company}
                </p>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl 
                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
              </div>

              {/* timeline node */}
              <span className="absolute left-1/2 top-8 -translate-x-1/2 flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-blue-500/20 blur-md animate-pulse" />
                <span className="relative w-3.5 h-3.5 rounded-full bg-white border-4 border-[#05070c]" />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
