import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DRV8313 Brushless Motor Driver Breakout — three half-bridges. */
export const AdafruitDRV8313BrushlessMotorDriverBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DRV8313 Brushless Mot)" as const;

export const AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitDRV8313BrushlessMotorDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDRV8313BrushlessMotorDriverBreakout = (
  props: AdafruitDRV8313BrushlessMotorDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DRV8313 Brushless Motor Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitDRV8313BrushlessMotorDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_ATTRIBUTES}
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
