import type { ChipProps } from "@tscircuit/props"

/**
 * A 28-pin Feather socket: one 12-pin row and one 16-pin row.
 *
 * The four missing positions keep the shorter row aligned with the end of the
 * 16-pin row opposite the USB connector.
 */
export const FEATHER_FOOTPRINT =
  "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female" as const

export type FeatherProps = Omit<ChipProps, "footprint">

export const Feather = (props: FeatherProps) => (
  <chip {...props} footprint={FEATHER_FOOTPRINT} />
)
