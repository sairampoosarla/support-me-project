"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function TeamDistribution() {

    const data = [
    {
      name: "Delta",
      value: 55,
      color: "#84cc16",
    },
    {
      name: "Alpha",
      value: 34,
      color: "#3b82f6",
    },
    {
      name: "Canary",
      value: 11,
      color: "#f97316",
    },
  ];

    return (
        //we are using responsive container to make the child chart match the size of the parent container
        <ResponsiveContainer width="100%" height={150}>
            <PieChart>

                <Tooltip
                    labelClassName="font-bold"
                    wrapperClassName="[&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
                    />
                {/* Pie chart implementation goes here */}
                <Pie data={data} dataKey="value" nameKey="name">
                    {/*for each component we want in the pie chart we are adding a cell to define its color*/}
                    {/*i is important to add key prop to each cell to avoid react key warning, and i is the index of the current item in the array */}
                    {data.map((dataItem, i) => (
                        <Cell key={i} fill={dataItem.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}