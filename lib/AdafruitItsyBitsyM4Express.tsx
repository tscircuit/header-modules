import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { samdGpio } from "./samdPinAttributes"

/** Adafruit ItsyBitsy M4 Express: two 14-pin female header rows. */
export const ADAFRUIT_ITSYBITSY_M4_EXPRESS_FOOTPRINT =
  "headermodule28_rows2_cols14_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ITSY M4)" as const

export const ADAFRUIT_ITSYBITSY_M4_EXPRESS_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["GND"],
  pin3: ["VBUS"],
  pin4: ["D13"],
  pin5: ["D12"],
  pin6: ["D11"],
  pin7: ["D10"],
  pin8: ["D9"],
  pin9: ["D7"],
  pin10: ["D5"],
  pin11: ["SCL"],
  pin12: ["SDA"],
  pin13: ["TX_D1"],
  pin14: ["RX_D0"],
  pin15: ["D2"],
  pin16: ["MISO"],
  pin17: ["MOSI"],
  pin18: ["SCK"],
  pin19: ["A5"],
  pin20: ["A4"],
  pin21: ["A3"],
  pin22: ["A2"],
  pin23: ["A1"],
  pin24: ["A0"],
  pin25: ["VHI"],
  pin26: ["AREF"],
  pin27: ["V3_3", "3V3"],
  pin28: ["RESET", "RST"],
} as const

const GPIO = samdGpio()
const I2C_SCL = samdGpio(["i2c_scl"])
const I2C_SDA = samdGpio(["i2c_sda"])
const SPI_SCK = samdGpio(["spi_sck"])
const SPI_MOSI = samdGpio(["spi_mosi"])
const SPI_MISO = samdGpio(["spi_miso"])
const UART_TX = samdGpio(["uart_tx"])
const UART_RX = samdGpio(["uart_rx"])

export const ADAFRUIT_ITSYBITSY_M4_EXPRESS_PIN_ATTRIBUTES = {
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
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D7: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  TX_D1: UART_TX,
  RX_D0: UART_RX,
  D2: GPIO,
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
  AREF: { includeInBoardPinout: true },
  V3_3: {
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

export type AdafruitItsyBitsyM4ExpressProps = Omit<
  ChipProps<typeof ADAFRUIT_ITSYBITSY_M4_EXPRESS_PIN_LABELS>,
  FixedProps
>

export const AdafruitItsyBitsyM4Express = (
  props: AdafruitItsyBitsyM4ExpressProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ItsyBitsy M4 Express"
    mfn="Adafruit"
    manufacturerPartNumber="3800"
    datasheetUrl="https://learn.adafruit.com/adafruit-itsybitsy-m4-express/pinouts"
    footprint={ADAFRUIT_ITSYBITSY_M4_EXPRESS_FOOTPRINT}
    pinLabels={ADAFRUIT_ITSYBITSY_M4_EXPRESS_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VBAT",
      pin2: "GND",
      pin3: "VBUS",
      pin4: "D13",
      pin5: "D12",
      pin6: "D11",
      pin7: "D10",
      pin8: "D9",
      pin9: "D7",
      pin10: "D5",
      pin11: "SCL",
      pin12: "SDA",
      pin13: "TX_D1",
      pin14: "RX_D0",
      pin15: "D2",
      pin16: "MISO",
      pin17: "MOSI",
      pin18: "SCK",
      pin19: "A5",
      pin20: "A4",
      pin21: "A3",
      pin22: "A2",
      pin23: "A1",
      pin24: "A0",
      pin25: "VHI",
      pin26: "AREF",
      pin27: "V3_3",
      pin28: "RESET",
    }}
    pinAttributes={ADAFRUIT_ITSYBITSY_M4_EXPRESS_PIN_ATTRIBUTES}
    schWidth={1.8}
    schHeight={2.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "D2",
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
          "AREF",
          "V3_3",
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
          "D11",
          "D10",
          "D9",
          "D7",
          "D5",
          "SCL",
          "SDA",
          "TX_D1",
          "RX_D0",
        ],
      },
    }}
  />
)
