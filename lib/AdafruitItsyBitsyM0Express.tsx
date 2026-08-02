import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { samdGpio } from "./samdPinAttributes"

/** Adafruit ItsyBitsy M0 Express: two 14-pin female header rows. */
export const ADAFRUIT_ITSYBITSY_M0_EXPRESS_FOOTPRINT =
  "pinrow28_rows2_cols14_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const

export const ADAFRUIT_ITSYBITSY_M0_EXPRESS_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["GND"],
  pin3: ["VBUS"],
  pin4: ["D13", "PA17"],
  pin5: ["D12", "PA19"],
  pin6: ["D11", "PA16"],
  pin7: ["D10", "PA18"],
  pin8: ["D9", "PA07", "A7", "BATTERY_SENSE"],
  pin9: ["D7", "PA21"],
  pin10: ["D5", "PA15"],
  pin11: ["SCL", "D21", "PA23"],
  pin12: ["SDA", "D20", "PA22"],
  pin13: ["TX", "D1", "PA10"],
  pin14: ["RX", "D0", "PA11"],
  pin15: ["D2", "PA14"],
  pin16: ["MISO", "D22", "PA12"],
  pin17: ["MOSI", "D23", "PB10"],
  pin18: ["SCK", "D24", "PB11"],
  pin19: ["A5", "PB02"],
  pin20: ["A4", "PA05"],
  pin21: ["A3", "PA04"],
  pin22: ["A2", "PB09"],
  pin23: ["A1", "PB08", "DAC1"],
  pin24: ["A0", "PA02", "DAC0"],
  pin25: ["VHI"],
  pin26: ["EN"],
  pin27: ["3V3", "3.3V"],
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

export const ADAFRUIT_ITSYBITSY_M0_EXPRESS_PIN_ATTRIBUTES = {
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
  TX: UART_TX,
  RX: UART_RX,
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

export type AdafruitItsyBitsyM0ExpressProps = Omit<
  ChipProps<typeof ADAFRUIT_ITSYBITSY_M0_EXPRESS_PIN_LABELS>,
  FixedProps
>

export const AdafruitItsyBitsyM0Express = (
  props: AdafruitItsyBitsyM0ExpressProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ItsyBitsy M0 Express"
    mfn="Adafruit"
    manufacturerPartNumber="3727"
    datasheetUrl="https://learn.adafruit.com/introducing-itsy-bitsy-m0/pinouts"
    footprint={ADAFRUIT_ITSYBITSY_M0_EXPRESS_FOOTPRINT}
    pinLabels={ADAFRUIT_ITSYBITSY_M0_EXPRESS_PIN_LABELS}
    pinAttributes={ADAFRUIT_ITSYBITSY_M0_EXPRESS_PIN_ATTRIBUTES}
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
          "D11",
          "D10",
          "D9",
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
