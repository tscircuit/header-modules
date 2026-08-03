import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX4466 Electret Microphone Amplifier Breakout — analog. */
export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MAX4466 Electret Micr)" as const;

export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_ATTRIBUTES =
  {
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

export type AdafruitMAX4466ElectretMicrophoneAmplifierBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout = (
  props: AdafruitMAX4466ElectretMicrophoneAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX4466 Electret Microphone Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={
      AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_ATTRIBUTES
    }
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
