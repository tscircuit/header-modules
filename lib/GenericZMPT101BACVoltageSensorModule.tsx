import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ZMPT101B AC Voltage Sensor Module — analog. */
export const GenericZMPT101BACVoltageSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic ZMPT101B AC Voltage)" as const;

export const GenericZMPT101BACVoltageSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericZMPT101BACVoltageSensorModule_PIN_ATTRIBUTES = {
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

export type GenericZMPT101BACVoltageSensorModuleProps = Omit<
  ChipProps<typeof GenericZMPT101BACVoltageSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericZMPT101BACVoltageSensorModule = (
  props: GenericZMPT101BACVoltageSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic ZMPT101B AC Voltage Sensor Module"
    mfn="Generic"
    footprint={GenericZMPT101BACVoltageSensorModule_FOOTPRINT}
    pinLabels={GenericZMPT101BACVoltageSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericZMPT101BACVoltageSensorModule_PIN_ATTRIBUTES}
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
