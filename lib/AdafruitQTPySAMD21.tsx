import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { samdGpio } from "./samdPinAttributes"

/** Adafruit QT Py SAMD21: two seven-pin female header rows. */
export const ADAFRUIT_QT_PY_SAMD21_FOOTPRINT =
  "pinrow14_rows2_cols7_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(QT PY SAMD21)" as const

export const ADAFRUIT_QT_PY_SAMD21_PIN_LABELS = {
  pin1: ["A0", "PA02"],
  pin2: ["A1", "PA03"],
  pin3: ["A2", "PA04"],
  pin4: ["A3", "PA05"],
  pin5: ["SDA"],
  pin6: ["SCL"],
  pin7: ["TX_A6"],
  pin8: ["RX_A7"],
  pin9: ["SCK"],
  pin10: ["MISO"],
  pin11: ["MOSI"],
  pin12: ["V3_3", "3V3"],
  pin13: ["GND"],
  pin14: ["V5", "5V"],
} as const

export const ADAFRUIT_QT_PY_SAMD21_PIN_ATTRIBUTES = {
  A0: samdGpio(),
  A1: samdGpio(),
  A2: samdGpio(),
  A3: samdGpio(),
  SDA: {
    ...samdGpio(["i2c_sda"]),
    needsExternalPullup: true,
  },
  SCL: {
    ...samdGpio(["i2c_scl"]),
    needsExternalPullup: true,
  },
  TX_A6: samdGpio(["uart_tx"]),
  RX_A7: samdGpio(["uart_rx"]),
  SCK: samdGpio(["spi_sck"]),
  MISO: samdGpio(["spi_miso"]),
  MOSI: samdGpio(["spi_mosi"]),
  V3_3: {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  V5: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
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

export type AdafruitQTPySAMD21Props = Omit<
  ChipProps<typeof ADAFRUIT_QT_PY_SAMD21_PIN_LABELS>,
  FixedProps
>

export const AdafruitQTPySAMD21 = (props: AdafruitQTPySAMD21Props) => (
  <chip
    {...props}
    displayName="Adafruit QT Py SAMD21"
    mfn="Adafruit"
    manufacturerPartNumber="4600"
    datasheetUrl="https://learn.adafruit.com/adafruit-qt-py/pinouts"
    footprint={ADAFRUIT_QT_PY_SAMD21_FOOTPRINT}
    pinLabels={ADAFRUIT_QT_PY_SAMD21_PIN_LABELS}
    pcbPinLabels={{
      pin1: "A0",
      pin2: "A1",
      pin3: "A2",
      pin4: "A3",
      pin5: "SDA",
      pin6: "SCL",
      pin7: "TX_A6",
      pin8: "RX_A7",
      pin9: "SCK",
      pin10: "MISO",
      pin11: "MOSI",
      pin12: "V3_3",
      pin13: "GND",
      pin14: "V5",
    }}
    pinAttributes={ADAFRUIT_QT_PY_SAMD21_PIN_ATTRIBUTES}
    schWidth={1.6}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["A0", "A1", "A2", "A3", "SDA", "SCL", "TX_A6"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RX_A7", "SCK", "MISO", "MOSI", "V3_3", "GND", "V5"],
      },
    }}
  />
)
