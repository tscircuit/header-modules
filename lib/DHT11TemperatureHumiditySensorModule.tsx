import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** DHT11 Temperature/Humidity Sensor Module — single-wire digital. */
export const DHT11TemperatureHumiditySensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(DHT11 Temperature Humidity)" as const;

export const DHT11TemperatureHumiditySensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const;

export const DHT11TemperatureHumiditySensorModule_PIN_ATTRIBUTES = {
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

export type DHT11TemperatureHumiditySensorModuleProps = Omit<
  ChipProps<typeof DHT11TemperatureHumiditySensorModule_PIN_LABELS>,
  FixedProps
>;

export const DHT11TemperatureHumiditySensorModule = (
  props: DHT11TemperatureHumiditySensorModuleProps,
) => (
  <chip
    {...props}
    displayName="DHT11 Temperature/Humidity Sensor Module"
    mfn="Generic"
    footprint={DHT11TemperatureHumiditySensorModule_FOOTPRINT}
    pinLabels={DHT11TemperatureHumiditySensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DQ",
    }}
    pinAttributes={DHT11TemperatureHumiditySensorModule_PIN_ATTRIBUTES}
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
