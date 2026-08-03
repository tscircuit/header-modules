import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic US-100 Ultrasonic Distance Module — trigger/echo/UART. */
export const GenericUS100UltrasonicDistanceModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic US-100 Ultrasonic Dist)" as const;

export const GenericUS100UltrasonicDistanceModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const;

export const GenericUS100UltrasonicDistanceModule_PIN_ATTRIBUTES = {
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

export type GenericUS100UltrasonicDistanceModuleProps = Omit<
  ChipProps<typeof GenericUS100UltrasonicDistanceModule_PIN_LABELS>,
  FixedProps
>;

export const GenericUS100UltrasonicDistanceModule = (
  props: GenericUS100UltrasonicDistanceModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic US-100 Ultrasonic Distance Module"
    mfn="Generic"
    footprint={GenericUS100UltrasonicDistanceModule_FOOTPRINT}
    pinLabels={GenericUS100UltrasonicDistanceModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TRIG",
      pin4: "ECHO",
    }}
    pinAttributes={GenericUS100UltrasonicDistanceModule_PIN_ATTRIBUTES}
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
