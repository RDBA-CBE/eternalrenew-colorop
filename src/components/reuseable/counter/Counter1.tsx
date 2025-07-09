import CountUp from "components/reuseable/CountUp";

// ====================================================
interface CounterProps {
  title: string;
  number: number;
  unit?: string; // ✅ no default value here
  titleColor?: string;
  image?: any;
}

// ====================================================

export default function Counter1({ title, number, unit = '', titleColor, image = '' }: CounterProps) {
  return (
    <div className="col-md-4">
      <img src={image} className="mb-2" alt="" />
      <h3 className={`counter counter-lg ${titleColor}`}>
        <CountUp end={number} suffix={` ${unit}`} />
      </h3>
      <p className="text-white">{title}</p>
    </div>
  );
}

