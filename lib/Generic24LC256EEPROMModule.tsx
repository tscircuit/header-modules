import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 24LC256 EEPROM Module — I2C. */
export const Generic24LC256EEPROMModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 24LC256 EEPROM)" as const;

export const Generic24LC256EEPROMModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const Generic24LC256EEPROMModule_PIN_ATTRIBUTES = {
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

export type Generic24LC256EEPROMModuleProps = Omit<
  ChipProps<typeof Generic24LC256EEPROMModule_PIN_LABELS>,
  FixedProps
>;

export const Generic24LC256EEPROMModule = (
  props: Generic24LC256EEPROMModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 24LC256 EEPROM Module"
    mfn="Generic"
    footprint={Generic24LC256EEPROMModule_FOOTPRINT}
    pinLabels={Generic24LC256EEPROMModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={Generic24LC256EEPROMModule_PIN_ATTRIBUTES}
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
