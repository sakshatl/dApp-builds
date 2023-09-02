import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./components/common/Sidebar/Sidebar";
import CampaignList from './components/common/CampaignList/CampaignList';
import "./App.css";

function App() {

  return (
    <Box h={'100vh'} className="app" id="app">
      <Flex h={'100%'} gap={16}>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            All Campaigns (3)
          </Text>
          <Box mt={4}>
            <CampaignList />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
