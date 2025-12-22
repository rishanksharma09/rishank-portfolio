type props= {
    year: string;
    title: string;
    company: string;
    description: string;
}
type propsArray={
    data:props[]
}


export default function Experience({ data }: propsArray) {
  return (
    <div className="relative max-w-4xl mx-auto py-20">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-neutral-800" />

      {data.map((item, index) => (
        <div
          key={index}
          className={`relative mb-20 flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Card */}
          <div className="w-[45%] bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <span className="text-sm text-neutral-400">{item.year}</span>
            <h3 className="text-xl font-semibold text-blue-400 mt-1">{item.title}</h3>
            <p className="text-sm text-neutral-400">{item.company}</p>
            <p className="mt-3 text-neutral-300">{item.description}</p>
          </div>

          {/* Dot */}
          <span className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-white rounded-full border-4 border-neutral-900" />
        </div>
      ))}
    </div>
  );
}
