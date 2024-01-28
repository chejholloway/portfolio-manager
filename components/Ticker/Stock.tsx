import Image from 'next/image';

interface StockProps {
  proName: string;
  title?: string;
  description?: string;
  price: string;
  color: string;
  change: string;
  icon: string;
}

const Stock: React.FC<StockProps> = ({
  proName,
  title,
  description,
  price,
  color,
  change,
  icon,
}) => {
  return (
    <div className="flex px-2">
      <Image
        className="stock-icon rounded-full"
        priority
        src={icon}
        alt={proName}
        height={24}
        width={24}
      />
      <div className="stock">
        <span className="px-2 font-bold">{description}</span>
        <span className="px-2 font-medium">{price}</span>
        <span className="font-light" style={{ color }}>{change}</span>
      </div>
    </div>
  );
};

export default Stock;
