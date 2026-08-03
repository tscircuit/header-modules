import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TPA2016 Stereo Class-D Amplifier Breakout — I2C/audio. */
export const AdafruitTPA2016StereoClassDAmplifierBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TPA2016 Stereo Class-)" as const;

export const AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  IN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  GAIN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SHDN: { includeInBoardPinout: true },
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

export type AdafruitTPA2016StereoClassDAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTPA2016StereoClassDAmplifierBreakout = (
  props: AdafruitTPA2016StereoClassDAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TPA2016 Stereo Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPA2016StereoClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "IN"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT", "GAIN", "SHDN"],
      },
    }}
  />
);
