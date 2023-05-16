import { CocktailType } from "@/src/util/Types";
import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale, Title } from "chart.js";

interface GraphicPropType {
  recipes: CocktailType[];
}

export default function RecipeColGraphic({ recipes }: GraphicPropType) {
  const [chartData, setChartData] = useState<any>(null);

  Chart.register(ArcElement, CategoryScale, LinearScale, Title);

  const countedByCol: Record<string, number> = recipes.reduce(
    (count: any, recipe) => {
      const { collection_id } = recipe;
      if (count[collection_id]) {
        count[collection_id]++;
      } else {
        count[collection_id] = 1;
      }
      return count;
    },
    {}
  );

  useEffect(() => {
    const colNames = Object.keys(countedByCol);
    const colNumbers = Object.values(countedByCol);

    const data = {
      labels: colNames,
      datasets: [
        {
          label: "My First Dataset",
          data: colNumbers,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
          ],
        },
      ],
    };

    setChartData(data);
  }, [countedByCol]);

  return <div>{chartData && <PolarArea data={chartData} />}</div>;
}
