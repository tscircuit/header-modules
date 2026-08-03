import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit ICS-43434 I2S MEMS Microphone Breakout — I2S. */
export const AdafruitICS43434I2SMEMSMicrophoneBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit ICS-43434 I2S MEMS Mi)" as const;

export const AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
  pin6: ["SD"],
  pin7: ["GAIN"],
  pin8: ["FAULT"],
} as const;

export const AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitICS43434I2SMEMSMicrophoneBreakoutProps = Omit<
  ChipProps<typeof AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitICS43434I2SMEMSMicrophoneBreakout = (
  props: AdafruitICS43434I2SMEMSMicrophoneBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ICS-43434 I2S MEMS Microphone Breakout"
    mfn="Adafruit"
    footprint={AdafruitICS43434I2SMEMSMicrophoneBreakout_FOOTPRINT}
    pinLabels={AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS}
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
    pinAttributes={AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES}
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
