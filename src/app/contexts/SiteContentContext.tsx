import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchSiteContent,
  defaultSiteContent,
  type SiteContent,
} from "@/app/lib/siteContent";

type SiteContentContextValue = {
  content: SiteContent;
  refresh: () => void;
};

const SiteContentContext = createContext<SiteContentContextValue>({
  content: defaultSiteContent,
  refresh: () => {},
});

// Fetches once on mount so individual components don't each need their own
// loading state - initial value is `defaultSiteContent` so nothing flashes
// empty while the first fetch is in flight.
export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  const refresh = () => {
    fetchSiteContent().then(setContent);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <SiteContentContext.Provider value={{ content, refresh }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent(): SiteContent {
  return useContext(SiteContentContext).content;
}

export function useSiteContentRefresh(): () => void {
  return useContext(SiteContentContext).refresh;
}
