import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ACS712 20A Current Sensor Module — analog. */
export const GenericACS71220ACurrentSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic ACS712 20A Current)" as const;

export const GenericACS71220ACurrentSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericACS71220ACurrentSensorModule_PIN_ATTRIBUTES = {
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

export type GenericACS71220ACurrentSensorModuleProps = Omit<
  ChipProps<typeof GenericACS71220ACurrentSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericACS71220ACurrentSensorModule = (
  props: GenericACS71220ACurrentSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic ACS712 20A Current Sensor Module"
    mfn="Generic"
    footprint={GenericACS71220ACurrentSensorModule_FOOTPRINT}
    pinLabels={GenericACS71220ACurrentSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericACS71220ACurrentSensorModule_PIN_ATTRIBUTES}
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
