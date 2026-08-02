import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit ESP32-S3 Feather 4MB Flash / 2MB PSRAM 12+16 female socket. */
export const ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_FOOTPRINT =
  "headermodule28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FEATHER ESP32-S3)" as const

export const ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS = {
  // Short row, USB end to opposite end.
  pin1: ["BAT", "VBAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "GPIO13", "ADC2_CH2"],
  pin5: ["D12", "GPIO12", "ADC2_CH1"],
  pin6: ["D11", "GPIO11", "ADC2_CH0"],
  pin7: ["D10", "GPIO10", "ADC1_CH9"],
  pin8: ["D9", "GPIO9", "ADC1_CH8"],
  pin9: ["D6", "GPIO6", "ADC1_CH5"],
  pin10: ["D5", "GPIO5", "ADC1_CH4"],
  pin11: ["SCL", "GPIO4", "ADC1_CH3"],
  pin12: ["SDA", "GPIO3", "ADC1_CH2"],

  // Long row, USB end to opposite end. The final position is the board's
  // debug UART TX connection rather than a general-purpose GPIO.
  pin13: ["RST", "RESET"],
  pin14: ["3V3", "V3_3"],
  pin15: ["3V3_2", "3V3", "V3_3"],
  pin16: ["GND"],
  pin17: ["A0", "GPIO18", "ADC2_CH7"],
  pin18: ["A1", "GPIO17", "ADC2_CH6"],
  pin19: ["A2", "GPIO16", "ADC2_CH5"],
  pin20: ["A3", "GPIO15", "ADC2_CH4"],
  pin21: ["A4", "GPIO14", "ADC2_CH3"],
  pin22: ["A5", "GPIO8", "ADC1_CH7"],
  pin23: ["SCK", "GPIO36"],
  pin24: ["MOSI", "GPIO35"],
  pin25: ["MISO", "GPIO37"],
  pin26: ["RX", "GPIO38"],
  pin27: ["TX", "GPIO39"],
  pin28: ["DEBUG_TX", "TXD0", "DB"],
} as const

export const ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_ATTRIBUTES = {
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
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SDA: {
    isGpio: true,
    capabilities: ["i2c_sda"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  RST: { includeInBoardPinout: true },
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  "3V3_2": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
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
  },
  RX: {
    isGpio: true,
    capabilities: ["uart_rx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  TX: {
    isGpio: true,
    capabilities: ["uart_tx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DEBUG_TX: {
    capabilities: ["uart_tx"],
    includeInBoardPinout: true,
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

export type AdafruitFeatherESP32S34MBFlash2MBPSRAMProps = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherESP32S34MBFlash2MBPSRAM = (
  props: AdafruitFeatherESP32S34MBFlash2MBPSRAMProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ESP32-S3 Feather 4MB Flash / 2MB PSRAM"
    mfn="Adafruit"
    manufacturerPartNumber="5477"
    datasheetUrl="https://learn.adafruit.com/adafruit-esp32-s3-feather/pinouts"
    footprint={ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_LABELS}
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
      pin14: "3V3",
      pin15: "3V3_2",
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
      pin28: "DEBUG_TX",
    }}
    pinAttributes={ADAFRUIT_FEATHER_ESP32_S3_4MB_FLASH_2MB_PSRAM_PIN_ATTRIBUTES}
    schWidth={1.5}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "RST",
          "3V3",
          "3V3_2",
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
          "DEBUG_TX",
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
