import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PAM8302 Mono Class-D Amplifier Breakout — analog audio. */
export const AdafruitPAM8302MonoClassDAmplifierBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PAM8302 Mono Class-D)" as const;

export const AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitPAM8302MonoClassDAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPAM8302MonoClassDAmplifierBreakout = (
  props: AdafruitPAM8302MonoClassDAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PAM8302 Mono Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitPAM8302MonoClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_ATTRIBUTES}
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
