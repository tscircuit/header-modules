import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit AT42QT1010 Capacitive Touch Breakout — digital. */
export const AdafruitAT42QT1010CapacitiveTouchBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit AT42QT1010 Capacitive)" as const;

export const AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
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

export type AdafruitAT42QT1010CapacitiveTouchBreakoutProps = Omit<
  ChipProps<typeof AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAT42QT1010CapacitiveTouchBreakout = (
  props: AdafruitAT42QT1010CapacitiveTouchBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit AT42QT1010 Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitAT42QT1010CapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);
