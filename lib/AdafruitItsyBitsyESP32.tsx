import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit ItsyBitsy ESP32: two 14-pin female header rows. */
export const ADAFRUIT_ITSYBITSY_ESP32_FOOTPRINT =
  "pinrow28_rows2_cols14_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const

export const ADAFRUIT_ITSYBITSY_ESP32_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["GND"],
  pin3: ["VBUS"],
  pin4: ["D13", "GPIO13"],
  pin5: ["D12", "GPIO12"],
  pin6: ["D14", "GPIO14"],
  pin7: ["D33", "GPIO33"],
  pin8: ["D32", "GPIO32"],
  pin9: ["D7", "GPIO7"],
  pin10: ["D5", "GPIO5"],
  pin11: ["SCL", "GPIO27"],
  pin12: ["SDA", "GPIO15"],
  pin13: ["TX", "GPIO20"],
  pin14: ["RX", "GPIO8"],
  pin15: ["GND_2", "GND"],
  pin16: ["MISO", "GPIO22"],
  pin17: ["MOSI", "GPIO21"],
  pin18: ["SCK", "GPIO19"],
  pin19: ["A5", "GPIO36"],
  pin20: ["A4", "GPIO37"],
  pin21: ["A3", "GPIO38"],
  pin22: ["A2", "GPIO4"],
  pin23: ["A1", "GPIO26"],
  pin24: ["A0", "GPIO25"],
  pin25: ["VHI"],
  pin26: ["EN"],
  pin27: ["3V3", "V3_3"],
  pin28: ["RESET", "RST"],
} as const

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const I2C_SCL = { ...GPIO, capabilities: ["i2c_scl"] } satisfies PinAttributeMap
const I2C_SDA = { ...GPIO, capabilities: ["i2c_sda"] } satisfies PinAttributeMap
const SPI_SCK = { ...GPIO, capabilities: ["spi_sck"] } satisfies PinAttributeMap
const SPI_MOSI = { ...GPIO, capabilities: ["spi_mosi"] } satisfies PinAttributeMap
const SPI_MISO = { ...GPIO, capabilities: ["spi_miso"] } satisfies PinAttributeMap
const UART_TX = { ...GPIO, capabilities: ["uart_tx"] } satisfies PinAttributeMap
const UART_RX = { ...GPIO, capabilities: ["uart_rx"] } satisfies PinAttributeMap

export const ADAFRUIT_ITSYBITSY_ESP32_PIN_ATTRIBUTES = {
  VBAT: { providesPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VBUS: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: GPIO,
  D12: GPIO,
  D14: GPIO,
  D33: GPIO,
  D32: GPIO,
  D7: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  TX: UART_TX,
  RX: UART_RX,
  GND_2: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  MISO: SPI_MISO,
  MOSI: SPI_MOSI,
  SCK: SPI_SCK,
  A5: GPIO,
  A4: GPIO,
  A3: GPIO,
  A2: GPIO,
  A1: GPIO,
  A0: GPIO,
  VHI: { includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  RESET: { includeInBoardPinout: true },
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

export type AdafruitItsyBitsyESP32Props = Omit<
  ChipProps<typeof ADAFRUIT_ITSYBITSY_ESP32_PIN_LABELS>,
  FixedProps
>

export const AdafruitItsyBitsyESP32 = (
  props: AdafruitItsyBitsyESP32Props,
) => (
  <chip
    {...props}
    displayName="Adafruit ItsyBitsy ESP32"
    mfn="Adafruit"
    manufacturerPartNumber="5889"
    datasheetUrl="https://learn.adafruit.com/adafruit-itsybitsy-esp32/pinouts"
    footprint={ADAFRUIT_ITSYBITSY_ESP32_FOOTPRINT}
    pinLabels={ADAFRUIT_ITSYBITSY_ESP32_PIN_LABELS}
    pinAttributes={ADAFRUIT_ITSYBITSY_ESP32_PIN_ATTRIBUTES}
    schWidth={1.8}
    schHeight={2.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "GND_2",
          "MISO",
          "MOSI",
          "SCK",
          "A5",
          "A4",
          "A3",
          "A2",
          "A1",
          "A0",
          "VHI",
          "EN",
          "3V3",
          "RESET",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "VBAT",
          "GND",
          "VBUS",
          "D13",
          "D12",
          "D14",
          "D33",
          "D32",
          "D7",
          "D5",
          "SCL",
          "SDA",
          "TX",
          "RX",
        ],
      },
    }}
  />
)
