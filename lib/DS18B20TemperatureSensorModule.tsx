import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** DS18B20 Temperature Sensor Module — 1-Wire. */
export const DS18B20TemperatureSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(DS18B20 Temperature)" as const;

export const DS18B20TemperatureSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const;

export const DS18B20TemperatureSensorModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DQ: {
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

export type DS18B20TemperatureSensorModuleProps = Omit<
  ChipProps<typeof DS18B20TemperatureSensorModule_PIN_LABELS>,
  FixedProps
>;

export const DS18B20TemperatureSensorModule = (
  props: DS18B20TemperatureSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="DS18B20 Temperature Sensor Module"
    mfn="Generic"
    footprint={DS18B20TemperatureSensorModule_FOOTPRINT}
    pinLabels={DS18B20TemperatureSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DQ",
    }}
    pinAttributes={DS18B20TemperatureSensorModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DQ"],
      },
    }}
  />
);
