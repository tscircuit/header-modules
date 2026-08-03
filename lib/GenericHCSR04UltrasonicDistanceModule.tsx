import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic HC-SR04 Ultrasonic Distance Module — trigger/echo. */
export const GenericHCSR04UltrasonicDistanceModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic HC-SR04 Ultrasonic Dis)" as const;

export const GenericHCSR04UltrasonicDistanceModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const;

export const GenericHCSR04UltrasonicDistanceModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  TRIG: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  ECHO: {
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

export type GenericHCSR04UltrasonicDistanceModuleProps = Omit<
  ChipProps<typeof GenericHCSR04UltrasonicDistanceModule_PIN_LABELS>,
  FixedProps
>;

export const GenericHCSR04UltrasonicDistanceModule = (
  props: GenericHCSR04UltrasonicDistanceModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic HC-SR04 Ultrasonic Distance Module"
    mfn="Generic"
    footprint={GenericHCSR04UltrasonicDistanceModule_FOOTPRINT}
    pinLabels={GenericHCSR04UltrasonicDistanceModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TRIG",
      pin4: "ECHO",
    }}
    pinAttributes={GenericHCSR04UltrasonicDistanceModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["TRIG", "ECHO"],
      },
    }}
  />
);
