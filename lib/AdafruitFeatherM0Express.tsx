import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { samdGpio } from "./samdPinAttributes"

/** Adafruit Feather M0 Express 12+16 female socket footprint. */
export const ADAFRUIT_FEATHER_M0_EXPRESS_FOOTPRINT =
  "headermodule28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FEATHER M0)" as const

export const ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS = {
  // Short row, USB end to opposite end.
  pin1: ["BAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "PA17", "LED"],
  pin5: ["D12", "PA19"],
  pin6: ["D11", "PA16"],
  pin7: ["D10", "PA18"],
  pin8: ["D9", "PA07", "A7", "BATTERY_SENSE"],
  pin9: ["D6", "PA20"],
  pin10: ["D5", "PA15"],
  pin11: ["SCL", "D21", "PA23"],
  pin12: ["SDA", "D20", "PA22"],

  // Long row, USB end to opposite end.
  pin13: ["RST", "RESET"],
  pin14: ["3V", "3V3"],
  pin15: ["AREF", "ARef"],
  pin16: ["GND"],
  pin17: ["A0", "PA02", "DAC0"],
  pin18: ["A1", "PB08", "DAC1"],
  pin19: ["A2", "PB09"],
  pin20: ["A3", "PA04"],
  pin21: ["A4", "PA05"],
  pin22: ["A5", "PB02"],
  pin23: ["SCK", "D24", "PB11"],
  pin24: ["MOSI", "D23", "PB10"],
  pin25: ["MISO", "D22", "PA12"],
  pin26: ["RX", "D0", "PA11"],
  pin27: ["TX", "D1", "PA10"],
  pin28: ["D4", "PA14"],
} as const

export const ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES = {
  BAT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
  USB: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: samdGpio(),
  D12: samdGpio(),
  D11: samdGpio(),
  D10: samdGpio(),
  D9: samdGpio(),
  D6: samdGpio(),
  D5: samdGpio(),
  SCL: samdGpio(["i2c_scl"]),
  SDA: samdGpio(["i2c_sda"]),
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
  A0: samdGpio(),
  A1: samdGpio(),
  A2: samdGpio(),
  A3: samdGpio(),
  A4: samdGpio(),
  A5: samdGpio(),
  SCK: samdGpio(["spi_sck"]),
  MOSI: samdGpio(["spi_mosi"]),
  MISO: samdGpio(["spi_miso"]),
  RX: samdGpio(["uart_rx"]),
  TX: samdGpio(["uart_tx"]),
  D4: samdGpio(),
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

export type AdafruitFeatherM0ExpressProps = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherM0Express = (
  props: AdafruitFeatherM0ExpressProps,
) => (
  <chip
    {...props}
    displayName="Adafruit Feather M0 Express"
    mfn="Adafruit"
    manufacturerPartNumber="3403"
    datasheetUrl="https://learn.adafruit.com/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython/adafruit2-pinouts"
    footprint={ADAFRUIT_FEATHER_M0_EXPRESS_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_M0_EXPRESS_PIN_LABELS}
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
      pin28: "D4",
    }}
    pinAttributes={ADAFRUIT_FEATHER_M0_EXPRESS_PIN_ATTRIBUTES}
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
          "D4",
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
