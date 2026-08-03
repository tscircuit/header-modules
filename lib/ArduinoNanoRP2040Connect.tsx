import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Arduino Nano RP2040 Connect: the RP2040 30-pin Nano header arrangement. */
export const ARDUINO_NANO_RP2040_CONNECT_FOOTPRINT =
  "headermodule30_rows2_cols15_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(NANO RP2040)" as const

export const ARDUINO_NANO_RP2040_CONNECT_PIN_LABELS = {
  pin1: ["TX", "D1", "GPIO0"],
  pin2: ["RX", "D0", "GPIO1"],
  pin3: ["RESET", "RST"],
  pin4: ["GND"],
  pin5: ["D2", "GPIO25"],
  pin6: ["D3", "GPIO15"],
  pin7: ["D4", "GPIO16"],
  pin8: ["D5", "GPIO17"],
  pin9: ["D6", "GPIO18"],
  pin10: ["D7", "GPIO19"],
  pin11: ["D8", "GPIO20"],
  pin12: ["D9", "GPIO21"],
  pin13: ["D10", "GPIO5"],
  pin14: ["D11", "GPIO7", "MOSI"],
  pin15: ["D12", "GPIO4", "MISO"],
  pin16: ["D13", "GPIO6", "SCK"],
  pin17: ["3V3"],
  pin18: ["AREF"],
  pin19: ["A0", "GPIO26"],
  pin20: ["A1", "GPIO27"],
  pin21: ["A2", "GPIO28"],
  pin22: ["A3", "GPIO29"],
  pin23: ["A4", "SDA", "GPIO12"],
  pin24: ["A5", "SCL", "GPIO13"],
  pin25: ["A6"],
  pin26: ["A7"],
  pin27: ["V5", "5V"],
  pin28: ["QSPI_CSn", "REC"],
  pin29: ["GND_2", "GND"],
  pin30: ["VIN"],
} as const

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const I2C_SDA = { ...GPIO, capabilities: ["i2c_sda"] } satisfies PinAttributeMap
const I2C_SCL = { ...GPIO, capabilities: ["i2c_scl"] } satisfies PinAttributeMap
const SPI_CS = { ...GPIO, capabilities: ["spi_cs"] } satisfies PinAttributeMap
const SPI_MOSI = { ...GPIO, capabilities: ["spi_mosi"] } satisfies PinAttributeMap
const SPI_MISO = { ...GPIO, capabilities: ["spi_miso"] } satisfies PinAttributeMap
const SPI_SCK = { ...GPIO, capabilities: ["spi_sck"] } satisfies PinAttributeMap
const UART_TX = { ...GPIO, capabilities: ["uart_tx"] } satisfies PinAttributeMap
const UART_RX = { ...GPIO, capabilities: ["uart_rx"] } satisfies PinAttributeMap

export const ARDUINO_NANO_RP2040_CONNECT_PIN_ATTRIBUTES = {
  TX: UART_TX,
  RX: UART_RX,
  RESET: { includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: SPI_CS,
  D11: SPI_MOSI,
  D12: SPI_MISO,
  D13: SPI_SCK,
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  AREF: { includeInBoardPinout: true },
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: I2C_SDA,
  A5: I2C_SCL,
  A6: GPIO,
  A7: GPIO,
  V5: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  QSPI_CSn: { includeInBoardPinout: true },
  GND_2: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VIN: { requiresPower: true, includeInBoardPinout: true },
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

export type ArduinoNanoRP2040ConnectProps = Omit<
  ChipProps<typeof ARDUINO_NANO_RP2040_CONNECT_PIN_LABELS>,
  FixedProps
>

export const ArduinoNanoRP2040Connect = (
  props: ArduinoNanoRP2040ConnectProps,
) => (
  <chip
    {...props}
    displayName="Arduino Nano RP2040 Connect"
    mfn="Arduino"
    manufacturerPartNumber="ABX00053"
    datasheetUrl="https://docs.arduino.cc/resources/pinouts/ABX00053-full-pinout.pdf"
    footprint={ARDUINO_NANO_RP2040_CONNECT_FOOTPRINT}
    pinLabels={ARDUINO_NANO_RP2040_CONNECT_PIN_LABELS}
    pcbPinLabels={{
      pin1: "TX",
      pin2: "RX",
      pin3: "RESET",
      pin4: "GND",
      pin5: "D2",
      pin6: "D3",
      pin7: "D4",
      pin8: "D5",
      pin9: "D6",
      pin10: "D7",
      pin11: "D8",
      pin12: "D9",
      pin13: "D10",
      pin14: "D11",
      pin15: "D12",
      pin16: "D13",
      pin17: "3V3",
      pin18: "AREF",
      pin19: "A0",
      pin20: "A1",
      pin21: "A2",
      pin22: "A3",
      pin23: "A4",
      pin24: "A5",
      pin25: "A6",
      pin26: "A7",
      pin27: "V5",
      pin28: "QSPI_CSn",
      pin29: "GND_2",
      pin30: "VIN",
    }}
    pinAttributes={ARDUINO_NANO_RP2040_CONNECT_PIN_ATTRIBUTES}
    schWidth={2.1}
    schHeight={3.3}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "TX",
          "RX",
          "RESET",
          "GND",
          "D2",
          "D3",
          "D4",
          "D5",
          "D6",
          "D7",
          "D8",
          "D9",
          "D10",
          "D11",
          "D12",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "D13",
          "3V3",
          "AREF",
          "A0",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "V5",
          "QSPI_CSn",
          "GND_2",
          "VIN",
        ],
      },
    }}
  />
)
