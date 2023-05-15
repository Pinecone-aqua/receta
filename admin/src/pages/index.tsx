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
import Layout from "../components/Layout";

export default function Login(): JSX.Element {
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
      </>
    </Layout>
  );
}
