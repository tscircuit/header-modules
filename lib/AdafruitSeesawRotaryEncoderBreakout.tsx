import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit Seesaw Rotary Encoder Breakout — I2C. */
export const AdafruitSeesawRotaryEncoderBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit Seesaw Rotary Encoder)" as const;

export const AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["A"],
  pin4: ["B"],
  pin5: ["SW"],
  pin6: ["INT"],
} as const;

export const AdafruitSeesawRotaryEncoderBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  A: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  B: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SW: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  INT: {
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

export type AdafruitSeesawRotaryEncoderBreakoutProps = Omit<
  ChipProps<typeof AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitSeesawRotaryEncoderBreakout = (
  props: AdafruitSeesawRotaryEncoderBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit Seesaw Rotary Encoder Breakout"
    mfn="Adafruit"
    footprint={AdafruitSeesawRotaryEncoderBreakout_FOOTPRINT}
    pinLabels={AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "A",
      pin4: "B",
      pin5: "SW",
      pin6: "INT",
    }}
    pinAttributes={AdafruitSeesawRotaryEncoderBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "A"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["B", "SW", "INT"],
      },
    }}
  />
);
