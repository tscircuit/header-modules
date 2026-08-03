import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 1.3 in SH1106 OLED I2C Module — 128x64. */
export const Generic13InSH1106OLEDI2CModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 1.3 in SH1106 OLED I2C)" as const;

export const Generic13InSH1106OLEDI2CModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const Generic13InSH1106OLEDI2CModule_PIN_ATTRIBUTES = {
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

export type Generic13InSH1106OLEDI2CModuleProps = Omit<
  ChipProps<typeof Generic13InSH1106OLEDI2CModule_PIN_LABELS>,
  FixedProps
>;

export const Generic13InSH1106OLEDI2CModule = (
  props: Generic13InSH1106OLEDI2CModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 1.3 in SH1106 OLED I2C Module"
    mfn="Generic"
    footprint={Generic13InSH1106OLEDI2CModule_FOOTPRINT}
    pinLabels={Generic13InSH1106OLEDI2CModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={Generic13InSH1106OLEDI2CModule_PIN_ATTRIBUTES}
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
