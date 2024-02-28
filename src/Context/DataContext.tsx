"use client";
import { hasSubscription } from "@/helpers/doPayment";
import { GetUserData } from "@/helpers/getUserData";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface DataContextValue {
  testData: string;
}

interface DataContextProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextValue | null>(null);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const { data: session } = useSession();
const [testData, setTestData] = useState<string>("");
  useEffect(() => {
    console.log("DATA CONTEXT RENDERED");
    setTestData("Hello ")
    // GetUserData().then(result => {
    //   console.log(result);
    // })
    // .catch(error => {
    //   console.error('Error fetching data:', error);
    // });
  }, []);

 

  const value = { testData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
