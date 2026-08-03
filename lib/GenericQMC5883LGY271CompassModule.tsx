import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic QMC5883L GY-271 Compass Module. Header order: VCC, GND, SCL, SDA, DRDY. */
export const GenericQMC5883LGY271CompassModule_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(QMC5883L-GY271)" as const;

export const GenericQMC5883LGY271CompassModule_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD", "3V3", "V3_3"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["DRDY", "DATA_READY", "INT"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const GenericQMC5883LGY271CompassModule_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  DRDY: GPIO,
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type GenericQMC5883LGY271CompassModuleProps = Omit<
  ChipProps<typeof GenericQMC5883LGY271CompassModule_PIN_LABELS>,
  FixedProps
>;

export const GenericQMC5883LGY271CompassModule = (
  props: GenericQMC5883LGY271CompassModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic QMC5883L GY-271 Compass Module"
    mfn="Generic"
    datasheetUrl="https://qstcorp.com/upload/pdf/202107/QMC5883L-Rev.24.pdf"
    footprint={GenericQMC5883LGY271CompassModule_FOOTPRINT}
    pinLabels={GenericQMC5883LGY271CompassModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "DRDY",
    }}
    pinAttributes={GenericQMC5883LGY271CompassModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "DRDY"],
      },
    }}
  />
);
