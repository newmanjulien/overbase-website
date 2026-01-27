"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type AccessMethod = "export" | "system";

const STORAGE_KEYS = {
  EMAIL: "test_email",
  PLATFORM: "test_platform",
  USE_CASE: "test_use_case",
  DATASOURCE1: "test_datasource1",
  DATASOURCE2: "test_datasource2",
  DATASOURCE1_ACCESS_METHOD: "test_datasource1_access_method",
  DATASOURCE2_ACCESS_METHOD: "test_datasource2_access_method",
} as const;

interface TestContextType {
  email: string;
  setEmail: (email: string) => void;
  platform: string;
  setPlatform: (platform: string) => void;
  useCase: string;
  setUseCase: (useCase: string) => void;
  datasource1: string;
  setDatasource1: (ds: string) => void;
  datasource1AccessMethod: AccessMethod;
  setDatasource1AccessMethod: (method: AccessMethod) => void;
  datasource2: string;
  setDatasource2: (ds: string) => void;
  datasource2AccessMethod: AccessMethod;
  setDatasource2AccessMethod: (method: AccessMethod) => void;
  isLoaded: boolean;
  clearTestData: () => void;
  submitTest: () => Promise<void>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [email, _setEmail] = useState("");
  const [platform, _setPlatform] = useState("");
  const [useCase, _setUseCase] = useState("");
  const [datasource1, _setDatasource1] = useState("");
  const [datasource1AccessMethod, _setDatasource1AccessMethod] =
    useState<AccessMethod>("export");
  const [datasource2, _setDatasource2] = useState("");
  const [datasource2AccessMethod, _setDatasource2AccessMethod] =
    useState<AccessMethod>("export");
  const [isLoaded, setIsLoaded] = useState(false);

  // Unified persistence helper
  const sync = <T extends string>(
    setter: (v: T) => void,
    key: string,
    val: T,
  ) => {
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
  const setPlatform = (v: string) =>
    sync(_setPlatform, STORAGE_KEYS.PLATFORM, v);
  const setUseCase = (v: string) => sync(_setUseCase, STORAGE_KEYS.USE_CASE, v);
  const setDatasource1 = (v: string) =>
    sync(_setDatasource1, STORAGE_KEYS.DATASOURCE1, v);
  const setDatasource1AccessMethod = (v: AccessMethod) =>
    sync(
      _setDatasource1AccessMethod,
      STORAGE_KEYS.DATASOURCE1_ACCESS_METHOD,
      v,
    );
  const setDatasource2 = (v: string) =>
    sync(_setDatasource2, STORAGE_KEYS.DATASOURCE2, v);
  const setDatasource2AccessMethod = (v: AccessMethod) =>
    sync(
      _setDatasource2AccessMethod,
      STORAGE_KEYS.DATASOURCE2_ACCESS_METHOD,
      v,
    );

  const clearTestData = useCallback(() => {
    _setEmail("");
    _setPlatform("");
    _setUseCase("");
    _setDatasource1("");
    _setDatasource1AccessMethod("export");
    _setDatasource2("");
    _setDatasource2AccessMethod("export");
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
        datasource1AccessMethod,
        datasource2,
        datasource2AccessMethod,
      }),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Something went wrong");
  };

  // Hydrate on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadSafe = <T,>(key: string, setter: (v: T) => void) => {
        try {
          const saved = window.sessionStorage.getItem(key);
          if (saved !== null) {
            setter(JSON.parse(saved) as T);
          }
        } catch (e) {
          console.warn(`Failed to hydrate ${key}:`, e);
        }
      };

      loadSafe(STORAGE_KEYS.EMAIL, _setEmail);
      loadSafe(STORAGE_KEYS.PLATFORM, _setPlatform);
      loadSafe(STORAGE_KEYS.USE_CASE, _setUseCase);
      loadSafe(STORAGE_KEYS.DATASOURCE1, _setDatasource1);
      loadSafe(
        STORAGE_KEYS.DATASOURCE1_ACCESS_METHOD,
        _setDatasource1AccessMethod,
      );
      loadSafe(STORAGE_KEYS.DATASOURCE2, _setDatasource2);
      loadSafe(
        STORAGE_KEYS.DATASOURCE2_ACCESS_METHOD,
        _setDatasource2AccessMethod,
      );
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
        platform,
        setPlatform,
        useCase,
        setUseCase,
        datasource1,
        setDatasource1,
        datasource1AccessMethod,
        setDatasource1AccessMethod,
        datasource2,
        setDatasource2,
        datasource2AccessMethod,
        setDatasource2AccessMethod,
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
