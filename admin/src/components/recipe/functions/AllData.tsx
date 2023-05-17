import {
  CategoryType,
  CocktailType,
  CollectionType,
  NewsType,
  ToolsType,
  UsersType,
} from "@/src/util/Types";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface AllDataPropType {
  recipes: CocktailType[];
  categoriesData: CategoryType[];
  collectionsData: CollectionType[];
  toolsData: ToolsType[];
  usersData: UsersType[];
  newsData: NewsType[];
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AllData({
  recipes,
  categoriesData,
  collectionsData,
  toolsData,
  usersData,
  newsData,
}: AllDataPropType) {
  const [chartData, setChartData] = useState<any>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const counted = {
    recipes: recipes.length,
    categories: categoriesData.length,
    collections: collectionsData.length,
    tools: toolsData.length,
    users: usersData.length,
    newsData: newsData.length,
  };

  useEffect(() => {
    const colNames = Object.keys(counted);
    const colNumbers = Object.values(counted);

    setChartData({
      labels: colNames,
      datasets: [
        {
          label: "receta datas",
          data: colNumbers,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [counted]);
  console.log(chartData);

  return (
    <div className="w-1/2 flex flex-col items-center">
      <div className="mb-[30px]">All datas </div>
      <Bar data={chartData} />
    </div>
  );
}
