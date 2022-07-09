import create from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

const authStore = (set: any) => ({
  //instant return
  userProfile: null,

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null })
})

const useAuthStore = create(
  persist(authStore, {
    name: "auth"
  })
)

export default useAuthStore
