import { useSyncExternalStore } from "react";
import { System, StateSnapshot } from "@snort/nostr";

const noop = () => {
  return () => undefined;
};
const noopState = (): StateSnapshot | undefined => {
  return undefined;
};

export default function useRelayState(addr: string) {
  const c = System.Sockets.get(addr);
  return useSyncExternalStore<StateSnapshot | undefined>(
    c?.StatusHook.bind(c) ?? noop,
    c?.GetState.bind(c) ?? noopState
  );
}
