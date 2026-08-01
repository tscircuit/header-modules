import { AdafruitFeatherRP2040, SeeedXiaoRP2040 } from "./index"

export default () => (
  <board width="90mm" height="30mm">
    <AdafruitFeatherRP2040 name="U1" pcbX={-20} schX={-2} />
    <SeeedXiaoRP2040 name="U2" pcbX={30} schX={2} />
    <trace name="feather_vbus" from=".U1 > .USB" to="net.FEATHER_VBUS" />
    <trace name="feather_ground" from=".U1 > .GND" to="net.GND" />
    <trace name="xiao_vbus" from=".U2 > .5V" to="net.XIAO_VBUS" />
    <trace name="xiao_ground" from=".U2 > .GND" to="net.GND" />
  </board>
)
