import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MAX30102 Heart-Rate/Oximeter Module — I2C. */
export const GenericMAX30102HeartRateOximeterModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MAX30102 Heart-Rate Ox)" as const;

export const GenericMAX30102HeartRateOximeterModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const GenericMAX30102HeartRateOximeterModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
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

export type GenericMAX30102HeartRateOximeterModuleProps = Omit<
  ChipProps<typeof GenericMAX30102HeartRateOximeterModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMAX30102HeartRateOximeterModule = (
  props: GenericMAX30102HeartRateOximeterModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MAX30102 Heart-Rate/Oximeter Module"
    mfn="Generic"
    footprint={GenericMAX30102HeartRateOximeterModule_FOOTPRINT}
    pinLabels={GenericMAX30102HeartRateOximeterModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={GenericMAX30102HeartRateOximeterModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);
