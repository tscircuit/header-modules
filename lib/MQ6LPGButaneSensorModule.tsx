import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** MQ-6 LPG/Butane Sensor Module — analog/digital comparator board. */
export const MQ6LPGButaneSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MQ-6 LPG Butane)" as const;

export const MQ6LPGButaneSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const MQ6LPGButaneSensorModule_PIN_ATTRIBUTES = {
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

export type MQ6LPGButaneSensorModuleProps = Omit<
  ChipProps<typeof MQ6LPGButaneSensorModule_PIN_LABELS>,
  FixedProps
>;

export const MQ6LPGButaneSensorModule = (
  props: MQ6LPGButaneSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="MQ-6 LPG/Butane Sensor Module"
    mfn="Generic"
    footprint={MQ6LPGButaneSensorModule_FOOTPRINT}
    pinLabels={MQ6LPGButaneSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={MQ6LPGButaneSensorModule_PIN_ATTRIBUTES}
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
