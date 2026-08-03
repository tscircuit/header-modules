import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu Breakout Board for microSD Card — raw SD contacts. */
export const PololuBreakoutBoardForMicroSDCard_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu for microSD Card)" as const;

export const PololuBreakoutBoardForMicroSDCard_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const PololuBreakoutBoardForMicroSDCard_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SIG1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SIG2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type PololuBreakoutBoardForMicroSDCardProps = Omit<
  ChipProps<typeof PololuBreakoutBoardForMicroSDCard_PIN_LABELS>,
  FixedProps
>;

export const PololuBreakoutBoardForMicroSDCard = (
  props: PololuBreakoutBoardForMicroSDCardProps,
) => (
  <chip
    {...props}
    displayName="Pololu Breakout Board for microSD Card"
    mfn="Pololu"
    footprint={PololuBreakoutBoardForMicroSDCard_FOOTPRINT}
    pinLabels={PololuBreakoutBoardForMicroSDCard_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={PololuBreakoutBoardForMicroSDCard_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SIG1", "SIG2"],
      },
    }}
  />
);
