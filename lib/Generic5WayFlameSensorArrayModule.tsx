import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 5-Way Flame Sensor Array Module — five digital/analog channels. */
export const Generic5WayFlameSensorArrayModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 5-Way Flame Array)" as const;

export const Generic5WayFlameSensorArrayModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const Generic5WayFlameSensorArrayModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  AO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DO: {
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

export type Generic5WayFlameSensorArrayModuleProps = Omit<
  ChipProps<typeof Generic5WayFlameSensorArrayModule_PIN_LABELS>,
  FixedProps
>;

export const Generic5WayFlameSensorArrayModule = (
  props: Generic5WayFlameSensorArrayModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 5-Way Flame Sensor Array Module"
    mfn="Generic"
    footprint={Generic5WayFlameSensorArrayModule_FOOTPRINT}
    pinLabels={Generic5WayFlameSensorArrayModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={Generic5WayFlameSensorArrayModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["AO", "DO"],
      },
    }}
  />
);
