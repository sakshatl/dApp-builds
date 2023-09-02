import { useContract, useContractRead } from "@thirdweb-dev/react";

export const useCampaigns = () => {
  const contractAddress: string = "0x3C4De7Be9662FAc5f1482c8341BDD7DdD47DA33a";
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "getCampaigns");

  return { data, isLoading, isError };
}