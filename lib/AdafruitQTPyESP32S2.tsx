import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit QT Py ESP32-S2: two seven-pin female header rows. */
export const ADAFRUIT_QT_PY_ESP32_S2_FOOTPRINT =
  "headermodule14_rows2_cols7_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(QT PY ESP32-S2)" as const

export const ADAFRUIT_QT_PY_ESP32_S2_PIN_LABELS = {
  pin1: ["A0", "GPIO18"],
  pin2: ["A1", "GPIO17"],
  pin3: ["A2", "GPIO9"],
  pin4: ["A3", "GPIO7"],
  pin5: ["SDA", "GPIO8"],
  pin6: ["SCL", "GPIO6"],
  pin7: ["TX", "GPIO5"],
  pin8: ["RX", "GPIO16"],
  pin9: ["SCK", "GPIO36"],
  pin10: ["MISO", "GPIO37"],
  pin11: ["MOSI", "GPIO35"],
  pin12: ["V3_3", "3V3"],
  pin13: ["GND"],
  pin14: ["V5", "5V"],
} as const

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
  needsExternalPullup: true,
} satisfies PinAttributeMap
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
  needsExternalPullup: true,
} satisfies PinAttributeMap
const SPI_SCK = { ...GPIO, capabilities: ["spi_sck"] } satisfies PinAttributeMap
const SPI_MISO = { ...GPIO, capabilities: ["spi_miso"] } satisfies PinAttributeMap
const SPI_MOSI = { ...GPIO, capabilities: ["spi_mosi"] } satisfies PinAttributeMap
const UART_TX = { ...GPIO, capabilities: ["uart_tx"] } satisfies PinAttributeMap
const UART_RX = { ...GPIO, capabilities: ["uart_rx"] } satisfies PinAttributeMap

export const ADAFRUIT_QT_PY_ESP32_S2_PIN_ATTRIBUTES = {
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  TX: UART_TX,
  RX: UART_RX,
  SCK: SPI_SCK,
  MISO: SPI_MISO,
  MOSI: SPI_MOSI,
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

export type AdafruitQTPyESP32S2Props = Omit<
  ChipProps<typeof ADAFRUIT_QT_PY_ESP32_S2_PIN_LABELS>,
  FixedProps
>

export const AdafruitQTPyESP32S2 = (props: AdafruitQTPyESP32S2Props) => (
  <chip
    {...props}
    displayName="Adafruit QT Py ESP32-S2"
    mfn="Adafruit"
    manufacturerPartNumber="5325"
    datasheetUrl="https://learn.adafruit.com/adafruit-qt-py-esp32-s2/pinouts"
    footprint={ADAFRUIT_QT_PY_ESP32_S2_FOOTPRINT}
    pinLabels={ADAFRUIT_QT_PY_ESP32_S2_PIN_LABELS}
    pcbPinLabels={{
      pin1: "A0",
      pin2: "A1",
      pin3: "A2",
      pin4: "A3",
      pin5: "SDA",
      pin6: "SCL",
      pin7: "TX",
      pin8: "RX",
      pin9: "SCK",
      pin10: "MISO",
      pin11: "MOSI",
      pin12: "V3_3",
      pin13: "GND",
      pin14: "V5",
    }}
    pinAttributes={ADAFRUIT_QT_PY_ESP32_S2_PIN_ATTRIBUTES}
    schWidth={1.6}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["A0", "A1", "A2", "A3", "SDA", "SCL", "TX"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RX", "SCK", "MISO", "MOSI", "V3_3", "GND", "V5"],
      },
    }}
  />
)
