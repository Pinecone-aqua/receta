import {
  CircularProgress,
  CircularProgressLabel,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import axios from "axios";
import Layout from "../components/Layout";
import { CocktailType } from "../util/Types";
import RecipeColGraphic from "../components/recipe/functions/RecipeColGraphic";

interface RecipePropType {
  recipes: CocktailType[];
}

export default function Login({ recipes }: RecipePropType): JSX.Element {
  return (
    <Layout>
      <>
        <StatGroup>
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
        <CircularProgress value={40} color="green.400">
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        <RecipeColGraphic recipes={recipes} />;
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const recipes = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/recipes/all`)
    .then((res) => res.data);

  return {
    props: {
      recipes,
    },
  };
}
