import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit Feather STM32F405 Express 12+16 female socket footprint. */
export const ADAFRUIT_FEATHER_STM32F405_EXPRESS_FOOTPRINT =
  "headermodule28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FEATHER STM32F405)" as const

export const ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS = {
  // Short row, USB end to opposite end. The MCU aliases and alternate
  // functions follow Adafruit's STM32F405 Feather pinout guide/schematic.
  pin1: ["BAT", "VBAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "GPIO13", "PC1", "LED"],
  pin5: ["D12", "GPIO12", "PC2"],
  pin6: ["D11", "GPIO11", "PC3"],
  pin7: ["D10", "GPIO10", "PB9"],
  pin8: ["D9", "GPIO9", "PB8"],
  pin9: ["D6", "GPIO6", "PC6"],
  pin10: ["D5", "GPIO5", "PC7"],
  pin11: ["SCL", "GPIO15", "PB6"],
  pin12: ["SDA", "GPIO14", "PB7"],

  // Long row, USB end to opposite end. This board uses both 3V3 holes and
  // exposes BOOT0 at the last header position instead of an Arduino D4 pin.
  pin13: ["RST", "RESET"],
  pin14: ["3V3", "V3_3"],
  pin15: ["3V3_2", "3V3", "V3_3"],
  pin16: ["GND"],
  pin17: ["A0", "GPIO16", "PA4", "DAC_OUT1"],
  pin18: ["A1", "GPIO17", "PA5", "DAC_OUT2"],
  pin19: ["A2", "GPIO18", "PA6"],
  pin20: ["A3", "GPIO19", "PA7"],
  pin21: ["A4", "GPIO20", "PC4"],
  pin22: ["A5", "GPIO21", "PC5"],
  pin23: ["SCK", "GPIO23", "PB13"],
  pin24: ["MOSI", "GPIO25", "PB15"],
  pin25: ["MISO", "GPIO24", "PB14"],
  pin26: ["RX", "GPIO0", "PB11"],
  pin27: ["TX", "GPIO1", "PB10"],
  pin28: ["BOOT0"],
} as const

export const ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_ATTRIBUTES = {
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
    canUsePushPull: true,
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
  BOOT0: { includeInBoardPinout: true },
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

export type AdafruitFeatherSTM32F405ExpressProps = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherSTM32F405Express = (
  props: AdafruitFeatherSTM32F405ExpressProps,
) => (
  <chip
    {...props}
    displayName="Adafruit Feather STM32F405 Express"
    mfn="Adafruit"
    manufacturerPartNumber="4382"
    datasheetUrl="https://learn.adafruit.com/adafruit-stm32f405-feather-express/pinouts"
    footprint={ADAFRUIT_FEATHER_STM32F405_EXPRESS_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_LABELS}
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
      pin28: "BOOT0",
    }}
    pinAttributes={ADAFRUIT_FEATHER_STM32F405_EXPRESS_PIN_ATTRIBUTES}
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
          "BOOT0",
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
