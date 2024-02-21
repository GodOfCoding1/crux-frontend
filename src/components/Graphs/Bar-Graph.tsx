import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = {
  '7d': [
    {
      name: 'Instagram',
      visits: 2400,
    },
    {
      name: 'Google',
      visits: 1398,
    },
    {
      name: 'Facebook',
      visits: 9800,
    },
    {
      name: 'Youtube',
      visits: 3908,
    },
  ],
  '14d': [
    {
      name: 'Instagram',
      visits: 1202,
    },
    {
      name: 'Google',
      visits: 2312,
    },
    {
      name: 'Facebook',
      visits: 9800,
    },
    {
      name: 'Youtube',
      visits: 3222,
    },
  ],
  '30d': [
    {
      name: 'Instagram',
      visits: 56445,
    },
    {
      name: 'Google',
      visits: 21321,
    },
    {
      name: 'Facebook',
      visits: 12312,
    },
    {
      name: 'Youtube',
      visits: 12333,
    },
  ],
};

const BarGraph = ({
  color,
  selected,
}: {
  color: string;
  selected: '7d' | '14d' | '30d';
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
            value: `Visiters`,
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
        <Bar
          dataKey="visits"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarGraph;
