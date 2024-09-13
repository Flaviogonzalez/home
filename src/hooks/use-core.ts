import { CoreContext } from "@/contexts/core-context"
import { useContext } from "react"

export const useCore = () => {
    const context = useContext(CoreContext)

    return context
}