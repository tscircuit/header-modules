import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DotStar Stick, 8 x APA102 — clock/data. */
export const AdafruitDotStarStick8XAPA102_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DotStar 8 x APA102)" as const;

export const AdafruitDotStarStick8XAPA102_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const AdafruitDotStarStick8XAPA102_PIN_ATTRIBUTES = {
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

export type AdafruitDotStarStick8XAPA102Props = Omit<
  ChipProps<typeof AdafruitDotStarStick8XAPA102_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDotStarStick8XAPA102 = (
  props: AdafruitDotStarStick8XAPA102Props,
) => (
  <chip
    {...props}
    displayName="Adafruit DotStar Stick, 8 x APA102"
    mfn="Adafruit"
    footprint={AdafruitDotStarStick8XAPA102_FOOTPRINT}
    pinLabels={AdafruitDotStarStick8XAPA102_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={AdafruitDotStarStick8XAPA102_PIN_ATTRIBUTES}
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
