export default function PricePeriod({
  price,
  period,
  className = "",
}: {
  price: number;
  period: string;
  className?: string;
}) {
  return (
    <div className={className + " " + " text-[#8187a2]"}>
      <span className="text-4xl font-bold text-[#293557]">
        ${parseFloat(price.toString()).toFixed(2)}
      </span>
      / {period}
    </div>
  );
}
