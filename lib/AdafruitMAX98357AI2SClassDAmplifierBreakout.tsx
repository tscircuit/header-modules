import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX98357A I2S Class-D Amplifier Breakout — I2S. */
export const AdafruitMAX98357AI2SClassDAmplifierBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MAX98357A I2S Class-D)" as const;

export const AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
  pin6: ["SD"],
  pin7: ["GAIN"],
  pin8: ["FAULT"],
} as const;

export const AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  BCLK: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  LRCLK: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DIN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SD: { includeInBoardPinout: true },
  GAIN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  FAULT: {
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

export type AdafruitMAX98357AI2SClassDAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX98357AI2SClassDAmplifierBreakout = (
  props: AdafruitMAX98357AI2SClassDAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX98357A I2S Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX98357AI2SClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "BCLK",
      pin4: "LRCLK",
      pin5: "DIN",
      pin6: "SD",
      pin7: "GAIN",
      pin8: "FAULT",
    }}
    pinAttributes={AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "BCLK", "LRCLK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DIN", "SD", "GAIN", "FAULT"],
      },
    }}
  />
);
