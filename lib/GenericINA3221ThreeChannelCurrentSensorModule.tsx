import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic INA3221 Three-Channel Current Sensor Module — I2C. */
export const GenericINA3221ThreeChannelCurrentSensorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic INA3221 Three-Channel)" as const;

export const GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const GenericINA3221ThreeChannelCurrentSensorModule_PIN_ATTRIBUTES = {
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

export type GenericINA3221ThreeChannelCurrentSensorModuleProps = Omit<
  ChipProps<typeof GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericINA3221ThreeChannelCurrentSensorModule = (
  props: GenericINA3221ThreeChannelCurrentSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic INA3221 Three-Channel Current Sensor Module"
    mfn="Generic"
    footprint={GenericINA3221ThreeChannelCurrentSensorModule_FOOTPRINT}
    pinLabels={GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={GenericINA3221ThreeChannelCurrentSensorModule_PIN_ATTRIBUTES}
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
