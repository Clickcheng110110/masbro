import { createContext, useContext } from "react";
import { useConfigContext } from "./ConfigContext";
import { Factory__factory, RouterV2__factory } from "@/contracts/interface";

export type IContractContext = Partial<ReturnType<typeof useContracts>>;
export const ContractsContext = createContext<IContractContext>({});

export const useContracts = () => {
  const { config, signerOrProvider } = useConfigContext();

  if (!config || !signerOrProvider) return {};
  const factoryContract = Factory__factory.connect(
    config.factory,
    signerOrProvider
  );

  const routerV2Contract = RouterV2__factory.connect(
    config.routerV2,
    signerOrProvider
  );

  return {
    factoryContract,
    routerV2Contract,
  };
};

export const ContractsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contracts = useContracts();
  return (
    <ContractsContext.Provider value={contracts}>
      {children}
    </ContractsContext.Provider>
  );
};

export const useContractsContext = () => {
  const values = useContext(ContractsContext);
  return values;
};
