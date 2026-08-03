import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic Water-Level Sensor Module — analog. */
export const GenericWaterLevelSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic Water-Level)" as const;

export const GenericWaterLevelSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericWaterLevelSensorModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
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

export type GenericWaterLevelSensorModuleProps = Omit<
  ChipProps<typeof GenericWaterLevelSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericWaterLevelSensorModule = (
  props: GenericWaterLevelSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic Water-Level Sensor Module"
    mfn="Generic"
    footprint={GenericWaterLevelSensorModule_FOOTPRINT}
    pinLabels={GenericWaterLevelSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericWaterLevelSensorModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);
