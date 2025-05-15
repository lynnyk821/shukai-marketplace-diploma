import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserResponse } from '../../types/response/user-response.ts';

interface UserStore {
    user: UserResponse | null;
    setUser: (user: UserResponse | null) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user: user }),
        }),
        {
            name: "user-store",
        }
    )
);