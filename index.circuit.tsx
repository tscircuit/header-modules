import { Feather, Xiao } from "./index"

export default () => (
  <board width="90mm" height="30mm">
    <Feather name="U1" pcbX={-20} />
    <Xiao name="U2" pcbX={30} />
  </board>
)
