import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** DHT22/AM2302 Temperature/Humidity Module — single-wire digital. */
export const DHT22AM2302TemperatureHumidityModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(DHT22 AM2302 Temperature Humid)" as const;

export const DHT22AM2302TemperatureHumidityModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const;

export const DHT22AM2302TemperatureHumidityModule_PIN_ATTRIBUTES = {
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

export type DHT22AM2302TemperatureHumidityModuleProps = Omit<
  ChipProps<typeof DHT22AM2302TemperatureHumidityModule_PIN_LABELS>,
  FixedProps
>;

export const DHT22AM2302TemperatureHumidityModule = (
  props: DHT22AM2302TemperatureHumidityModuleProps,
) => (
  <chip
    {...props}
    displayName="DHT22/AM2302 Temperature/Humidity Module"
    mfn="Generic"
    footprint={DHT22AM2302TemperatureHumidityModule_FOOTPRINT}
    pinLabels={DHT22AM2302TemperatureHumidityModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DQ",
    }}
    pinAttributes={DHT22AM2302TemperatureHumidityModule_PIN_ATTRIBUTES}
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
