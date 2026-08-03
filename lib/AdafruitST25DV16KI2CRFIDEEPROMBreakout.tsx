import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit ST25DV16K I2C RFID EEPROM Breakout — I2C/RF. */
export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit ST25DV16K I2C RFID EE)" as const;

export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["IRQ"],
} as const;

export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_ATTRIBUTES = {
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
  SCK: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_sck"],
  },
  MOSI: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_mosi"],
  },
  MISO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_miso"],
  },
  IRQ: {
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

export type AdafruitST25DV16KI2CRFIDEEPROMBreakoutProps = Omit<
  ChipProps<typeof AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitST25DV16KI2CRFIDEEPROMBreakout = (
  props: AdafruitST25DV16KI2CRFIDEEPROMBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ST25DV16K I2C RFID EEPROM Breakout"
    mfn="Adafruit"
    footprint={AdafruitST25DV16KI2CRFIDEEPROMBreakout_FOOTPRINT}
    pinLabels={AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "SCK",
      pin6: "MOSI",
      pin7: "MISO",
      pin8: "IRQ",
    }}
    pinAttributes={AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCK", "MOSI", "MISO", "IRQ"],
      },
    }}
  />
);
