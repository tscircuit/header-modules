import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic BTS7960 IBT-2 Motor Driver Module — high-current H-bridge. */
export const GenericBTS7960IBT2MotorDriverModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic BTS7960 IBT-2 Motor)" as const;

export const GenericBTS7960IBT2MotorDriverModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const GenericBTS7960IBT2MotorDriverModule_PIN_ATTRIBUTES = {
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

export type GenericBTS7960IBT2MotorDriverModuleProps = Omit<
  ChipProps<typeof GenericBTS7960IBT2MotorDriverModule_PIN_LABELS>,
  FixedProps
>;

export const GenericBTS7960IBT2MotorDriverModule = (
  props: GenericBTS7960IBT2MotorDriverModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic BTS7960 IBT-2 Motor Driver Module"
    mfn="Generic"
    footprint={GenericBTS7960IBT2MotorDriverModule_FOOTPRINT}
    pinLabels={GenericBTS7960IBT2MotorDriverModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={GenericBTS7960IBT2MotorDriverModule_PIN_ATTRIBUTES}
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
