"use client"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

export default function WorkLocationTrends() {

    return <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="office" fill="#ec4899" stackId="a"/>
            <Bar dataKey="wfh" fill="#6b7280" stackId="a" radius={[4 ,4, 0, 0]}/>
            </BarChart>;
            </ResponsiveContainer>
    };