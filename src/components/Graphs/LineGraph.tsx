import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = {
  '7d': [
    {
      name: '10',
      price: 2400,
    },
    {
      name: '20',
      price: 1398,
    },
    {
      name: '30',
      price: 9800,
    },
    {
      name: '40',
      price: 3908,
    },
  ],
  '14d': [
    {
      name: '10',
      price: 1200,
    },
    {
      name: '20',
      price: 500,
    },
    {
      name: '30',
      price: 1233,
    },
    {
      name: '40',
      price: 2000,
    },
  ],
  '30d': [
    {
      name: '10',
      price: 7893,
    },
    {
      name: '20',
      price: 1323,
    },
    {
      name: '30',
      price: 4322,
    },
    {
      name: '40',
      price: 2344,
    },
  ],
};

const LineGraph = ({
  color,
  selected,
}: {
  color: string;
  selected: '7d' | '14d' | '30d';
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data[selected]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tick={{ fill: color, fontSize: 12 }} dataKey="name" />
        <YAxis
          label={{
            value: `Price ($)`,
            style: { textAnchor: 'middle' },
            angle: -90,
            position: 'left',
            offset: 0,
            fontSize: 14,
            fill: color,
          }}
          tick={{ fill: color, fontSize: 12 }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineGraph;
