import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Arduino Nano Matter: MGM240S-based 30-pin Nano header arrangement. */
export const ARDUINO_NANO_MATTER_FOOTPRINT =
  "pinrow30_rows2_cols15_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const

export const ARDUINO_NANO_MATTER_PIN_LABELS = {
  pin1: ["D0", "TX", "PIN_SERIAL_TX1"],
  pin2: ["D1", "RX", "PIN_SERIAL_RX1"],
  pin3: ["RST", "RESET"],
  pin4: ["GND"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D5"],
  pin9: ["D6"],
  pin10: ["D7"],
  pin11: ["D8"],
  pin12: ["D9"],
  pin13: ["D10"],
  pin14: ["D11"],
  pin15: ["D12"],
  pin16: ["D13"],
  pin17: ["+3V3", "3V3"],
  pin18: ["AREF"],
  pin19: ["A0"],
  pin20: ["A1"],
  pin21: ["A2"],
  pin22: ["A3"],
  pin23: ["A4", "SDA"],
  pin24: ["A5", "SCL"],
  pin25: ["A6"],
  pin26: ["A7"],
  pin27: ["+5V", "5V"],
  pin28: ["NC"],
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

export const ARDUINO_NANO_MATTER_PIN_ATTRIBUTES = {
  D0: UART_TX,
  D1: UART_RX,
  RST: { includeInBoardPinout: true },
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
  "+3V3": {
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
  "+5V": {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  NC: { doNotConnect: true, includeInBoardPinout: true },
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

export type ArduinoNanoMatterProps = Omit<
  ChipProps<typeof ARDUINO_NANO_MATTER_PIN_LABELS>,
  FixedProps
>

export const ArduinoNanoMatter = (props: ArduinoNanoMatterProps) => (
  <chip
    {...props}
    displayName="Arduino Nano Matter"
    mfn="Arduino"
    manufacturerPartNumber="ABX00112"
    datasheetUrl="https://docs.arduino.cc/resources/pinouts/ABX00112-full-pinout.pdf"
    footprint={ARDUINO_NANO_MATTER_FOOTPRINT}
    pinLabels={ARDUINO_NANO_MATTER_PIN_LABELS}
    pinAttributes={ARDUINO_NANO_MATTER_PIN_ATTRIBUTES}
    schWidth={2.1}
    schHeight={3.3}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "D0",
          "D1",
          "RST",
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
          "+3V3",
          "AREF",
          "A0",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "+5V",
          "NC",
          "GND_2",
          "VIN",
        ],
      },
    }}
  />
)
