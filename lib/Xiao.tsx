import type { ChipProps } from "@tscircuit/props"

/** A 14-pin XIAO socket with two 7-pin rows. */
export const XIAO_FOOTPRINT =
  "pinrow14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female" as const

export type XiaoProps = Omit<ChipProps, "footprint">

export const Xiao = (props: XiaoProps) => (
  <chip {...props} footprint={XIAO_FOOTPRINT} />
)
