import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX9814 AGC Microphone Amplifier Breakout — analog. */
export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MAX9814 AGC Microphon)" as const;

export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMAX9814AGCMicrophoneAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout = (
  props: AdafruitMAX9814AGCMicrophoneAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX9814 AGC Microphone Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_ATTRIBUTES}
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
