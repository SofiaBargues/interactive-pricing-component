export default function PricePeriod({
  price,
  period,
}: {
  price: number;
  period: string;
}) {
  return (
    <div className=" text-[#8187a2]">
      <span className="text-4xl font-bold text-[#293557]">
        ${parseFloat(price.toString()).toFixed(2)}
      </span>
      / {period}
    </div>
  );
}
