import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic JSN-SR04T Waterproof Ultrasonic Module — trigger/echo. */
export const GenericJSNSR04TWaterproofUltrasonicModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic JSN-SR04T Waterproof U)" as const;

export const GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const;

export const GenericJSNSR04TWaterproofUltrasonicModule_PIN_ATTRIBUTES = {
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

export type GenericJSNSR04TWaterproofUltrasonicModuleProps = Omit<
  ChipProps<typeof GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS>,
  FixedProps
>;

export const GenericJSNSR04TWaterproofUltrasonicModule = (
  props: GenericJSNSR04TWaterproofUltrasonicModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic JSN-SR04T Waterproof Ultrasonic Module"
    mfn="Generic"
    footprint={GenericJSNSR04TWaterproofUltrasonicModule_FOOTPRINT}
    pinLabels={GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TRIG",
      pin4: "ECHO",
    }}
    pinAttributes={GenericJSNSR04TWaterproofUltrasonicModule_PIN_ATTRIBUTES}
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
