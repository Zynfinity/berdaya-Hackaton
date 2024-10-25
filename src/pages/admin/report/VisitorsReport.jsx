import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Visitors Chart",
    },
  },
};
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Motor",
      data: [20, 30, 40, 50, 60, 70],
      backgroundColor: "green",
    },
    {
      label: 'Mobil',
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: 'blue'
    },
    {
      label: 'Bus',
      data: [10, 18, 20, 50, 30, 10],
      backgroundColor: 'purple'
    },

  ],


};


const VisitorsReport = () => {
  return (
    <Box>
      <HStack mt="16" justifyContent="space-between" alignItems="start">
        <VStack alignItems="start" w="100%">
          <Text fontSize="2xl" letterSpacing="2px" fontWeight="semibold">LAPORAN PENGUNJUNG</Text>
          <Box width="70%" justifySelf="center" alignSelf="center">
            <Bar options={option} data={data} />
          </Box>
        </VStack>
      </HStack>
    </Box>
  )
}

export default VisitorsReport;