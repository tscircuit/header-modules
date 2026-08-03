import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MFRC522 RFID Reader Module — SPI. */
export const GenericMFRC522RFIDReaderModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MFRC522 RFID Reader)" as const;

export const GenericMFRC522RFIDReaderModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["IRQ"],
} as const;

export const GenericMFRC522RFIDReaderModule_PIN_ATTRIBUTES = {
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

export type GenericMFRC522RFIDReaderModuleProps = Omit<
  ChipProps<typeof GenericMFRC522RFIDReaderModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMFRC522RFIDReaderModule = (
  props: GenericMFRC522RFIDReaderModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MFRC522 RFID Reader Module"
    mfn="Generic"
    footprint={GenericMFRC522RFIDReaderModule_FOOTPRINT}
    pinLabels={GenericMFRC522RFIDReaderModule_PIN_LABELS}
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
    pinAttributes={GenericMFRC522RFIDReaderModule_PIN_ATTRIBUTES}
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
