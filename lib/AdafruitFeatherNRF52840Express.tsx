import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit Feather nRF52840 Express 12+16 female socket footprint. */
export const ADAFRUIT_FEATHER_NRF52840_EXPRESS_FOOTPRINT =
  "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FEATHER NRF52840)" as const

export const ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS = {
  // Short row, USB end to opposite end. Aliases are from Adafruit's nRF52840
  // PrettyPins diagram and identify the Arduino and nRF52840 pad names.
  pin1: ["BAT", "VBAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "13", "P1.09"],
  pin5: ["D12", "12", "P0.08"],
  pin6: ["D11", "11", "P0.06"],
  pin7: ["D10", "10", "P0.27"],
  pin8: ["D9", "9", "P0.26"],
  pin9: ["D6", "6", "P0.07"],
  pin10: ["D5", "5", "P1.08"],
  pin11: ["SCL", "23", "P0.11"],
  pin12: ["SDA", "22", "P0.12"],

  // Long row, USB end to opposite end.
  pin13: ["RST", "RESET"],
  pin14: ["3V", "3V3", "V3_3"],
  pin15: ["AREF", "A7", "21", "P0.31", "AIN7"],
  pin16: ["GND"],
  pin17: ["A0", "14", "P0.04", "AIN2"],
  pin18: ["A1", "15", "P0.05", "AIN3"],
  pin19: ["A2", "16", "P0.30", "AIN6"],
  pin20: ["A3", "17", "P0.28", "AIN4"],
  pin21: ["A4", "18", "P0.02", "AIN0"],
  pin22: ["A5", "19", "P0.03", "AIN1"],
  pin23: ["SCK", "26", "P0.14"],
  pin24: ["MOSI", "25", "P0.13"],
  pin25: ["MISO", "24", "P0.15"],
  pin26: ["RX", "1", "P0.24"],
  pin27: ["TX", "0", "P0.25"],
  pin28: ["D2", "2", "P0.10", "NFC2"],
} as const

export const ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_ATTRIBUTES = {
  BAT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
  USB: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D12: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D11: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D10: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D9: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D6: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D5: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCL: {
    isGpio: true,
    capabilities: ["i2c_scl"],
    includeInBoardPinout: true,
    needsExternalPullup: true,
    canUseOpenDrain: true,
  },
  SDA: {
    isGpio: true,
    capabilities: ["i2c_sda"],
    includeInBoardPinout: true,
    needsExternalPullup: true,
    canUseOpenDrain: true,
  },
  RST: { includeInBoardPinout: true },
  "3V": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  AREF: { includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  A0: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A3: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A4: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A5: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCK: {
    isGpio: true,
    capabilities: ["spi_sck"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  MOSI: {
    isGpio: true,
    capabilities: ["spi_mosi"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  MISO: {
    isGpio: true,
    capabilities: ["spi_miso"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  RX: {
    isGpio: true,
    capabilities: ["uart_rx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  TX: {
    isGpio: true,
    capabilities: ["uart_tx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  D2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
} as const satisfies Record<string, PinAttributeMap>

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type AdafruitFeatherNRF52840ExpressProps = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherNRF52840Express = (
  props: AdafruitFeatherNRF52840ExpressProps,
) => (
  <chip
    {...props}
    displayName="Adafruit Feather nRF52840 Express"
    mfn="Adafruit"
    manufacturerPartNumber="4062"
    datasheetUrl="https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts"
    footprint={ADAFRUIT_FEATHER_NRF52840_EXPRESS_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_LABELS}
    pcbPinLabels={{
      pin1: "BAT",
      pin2: "EN",
      pin3: "USB",
      pin4: "D13",
      pin5: "D12",
      pin6: "D11",
      pin7: "D10",
      pin8: "D9",
      pin9: "D6",
      pin10: "D5",
      pin11: "SCL",
      pin12: "SDA",
      pin13: "RST",
      pin14: "3V",
      pin15: "AREF",
      pin16: "GND",
      pin17: "A0",
      pin18: "A1",
      pin19: "A2",
      pin20: "A3",
      pin21: "A4",
      pin22: "A5",
      pin23: "SCK",
      pin24: "MOSI",
      pin25: "MISO",
      pin26: "RX",
      pin27: "TX",
      pin28: "D2",
    }}
    pinAttributes={ADAFRUIT_FEATHER_NRF52840_EXPRESS_PIN_ATTRIBUTES}
    schWidth={1.5}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "RST",
          "3V",
          "AREF",
          "GND",
          "A0",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "SCK",
          "MOSI",
          "MISO",
          "RX",
          "TX",
          "D2",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "BAT",
          "EN",
          "USB",
          "D13",
          "D12",
          "D11",
          "D10",
          "D9",
          "D6",
          "D5",
          "SCL",
          "SDA",
        ],
      },
    }}
  />
)
