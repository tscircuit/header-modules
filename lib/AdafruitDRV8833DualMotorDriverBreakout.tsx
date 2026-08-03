import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DRV8833 Dual Motor Driver Breakout — dual H-bridge. */
export const AdafruitDRV8833DualMotorDriverBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DRV8833 Dual Motor)" as const;

export const AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const AdafruitDRV8833DualMotorDriverBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitDRV8833DualMotorDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDRV8833DualMotorDriverBreakout = (
  props: AdafruitDRV8833DualMotorDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DRV8833 Dual Motor Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitDRV8833DualMotorDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={AdafruitDRV8833DualMotorDriverBreakout_PIN_ATTRIBUTES}
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
