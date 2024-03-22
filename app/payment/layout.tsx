import { ReactNode } from "react"
import Stack from "@mui/material/Stack"

const PaymentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {children}
    </Stack>
  )
}
export default PaymentLayout
