import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic PAM8403 Stereo Class-D Amplifier Module — analog audio. */
export const GenericPAM8403StereoClassDAmplifierModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic PAM8403 Stereo Class-D)" as const;

export const GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const GenericPAM8403StereoClassDAmplifierModule_PIN_ATTRIBUTES = {
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

export type GenericPAM8403StereoClassDAmplifierModuleProps = Omit<
  ChipProps<typeof GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPAM8403StereoClassDAmplifierModule = (
  props: GenericPAM8403StereoClassDAmplifierModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic PAM8403 Stereo Class-D Amplifier Module"
    mfn="Generic"
    footprint={GenericPAM8403StereoClassDAmplifierModule_FOOTPRINT}
    pinLabels={GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={GenericPAM8403StereoClassDAmplifierModule_PIN_ATTRIBUTES}
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
