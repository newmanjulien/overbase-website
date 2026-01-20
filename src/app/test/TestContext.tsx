"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const STORAGE_KEYS = {
  EMAIL: "test_email",
  USE_CASE: "test_use_case",
  DATASOURCE1: "test_datasource1",
  DATASOURCE2: "test_datasource2",
  DATASOURCE3: "test_datasource3",
} as const;

interface TestContextType {
  email: string;
  setEmail: (email: string) => void;
  useCase: string;
  setUseCase: (useCase: string) => void;
  datasource1: string;
  setDatasource1: (ds: string) => void;
  datasource2: string;
  setDatasource2: (ds: string) => void;
  datasource3: string;
  setDatasource3: (ds: string) => void;
  isLoaded: boolean;
  clearTestData: () => void;
  submitTest: () => Promise<void>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [email, _setEmail] = useState("");
  const [useCase, _setUseCase] = useState("");
  const [datasource1, _setDatasource1] = useState("");
  const [datasource2, _setDatasource2] = useState("");
  const [datasource3, _setDatasource3] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Unified persistence helper
  const sync = (setter: (v: string) => void, key: string, val: string) => {
    setter(val);
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(val));
      } catch (e) {
        console.warn(`Failed to persist ${key}:`, e);
      }
    }
  };

  const setEmail = (v: string) => sync(_setEmail, STORAGE_KEYS.EMAIL, v);
  const setUseCase = (v: string) => sync(_setUseCase, STORAGE_KEYS.USE_CASE, v);
  const setDatasource1 = (v: string) =>
    sync(_setDatasource1, STORAGE_KEYS.DATASOURCE1, v);
  const setDatasource2 = (v: string) =>
    sync(_setDatasource2, STORAGE_KEYS.DATASOURCE2, v);
  const setDatasource3 = (v: string) =>
    sync(_setDatasource3, STORAGE_KEYS.DATASOURCE3, v);

  const clearTestData = useCallback(() => {
    _setEmail("");
    _setUseCase("");
    _setDatasource1("");
    _setDatasource2("");
    _setDatasource3("");
    if (typeof window !== "undefined") {
      Object.values(STORAGE_KEYS).forEach((key) => {
        try {
          window.sessionStorage.removeItem(key);
        } catch (e) {
          // ignore
        }
      });
    }
  }, []);

  const submitTest = async () => {
    const res = await fetch("/api/send-test-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        useCase,
        datasource1,
        datasource2,
        datasource3,
      }),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Something went wrong");
  };

  // Hydrate on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadSafe = (key: string, setter: (v: string) => void) => {
        try {
          const saved = window.sessionStorage.getItem(key);
          if (saved !== null) {
            setter(JSON.parse(saved));
          }
        } catch (e) {
          console.warn(`Failed to hydrate ${key}:`, e);
        }
      };

      loadSafe(STORAGE_KEYS.EMAIL, _setEmail);
      loadSafe(STORAGE_KEYS.USE_CASE, _setUseCase);
      loadSafe(STORAGE_KEYS.DATASOURCE1, _setDatasource1);
      loadSafe(STORAGE_KEYS.DATASOURCE2, _setDatasource2);
      loadSafe(STORAGE_KEYS.DATASOURCE3, _setDatasource3);
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <TestContext.Provider
      value={{
        email,
        setEmail,
        useCase,
        setUseCase,
        datasource1,
        setDatasource1,
        datasource2,
        setDatasource2,
        datasource3,
        setDatasource3,
        isLoaded,
        clearTestData,
        submitTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}
