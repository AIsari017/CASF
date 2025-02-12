export const FeatureCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div
    className="flex-1 min-w-[200px] md:min-w-[250px] max-w-[350px] p-8 md:p-10 
               border border-[rgba(135,168,142,0.2)] transition-all 
               duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#d7d7d7] 
               shadow-[0_4px_16px_rgba(44,62,80,0.08)] opacity-80
               hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,62,80,0.12)]
               hover:border-[#87A88E]"
  >
    <h2 className="text-[#2c3e50] mb-4 font-sans text-xl">{title}</h2>
    <p className="text-[#4a6163] text-base leading-relaxed mb-0">{content}</p>
  </div>
);

export default FeatureCard;