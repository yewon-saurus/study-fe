import { create } from 'zustand';

interface CounterState {
  count: number;
  onIncreaseCount: () => void;
  onDecreaseCount: () => void;
  onParameterCount: (val: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  onIncreaseCount: () => set((state) => ({ count: state.count + 1 })),
  onDecreaseCount: () => set((state) => ({ count: state.count - 1 })),
  onParameterCount: (val: number) => set((state) => ({ count: state.count + val })),
}));
