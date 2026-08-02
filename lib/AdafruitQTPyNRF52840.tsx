import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/**
 * QT Py-size nRF52840 header module.
 *
 * Adafruit does not currently publish a QT Py nRF52840 SKU. This entry keeps
 * the catalog's planned QT Py-compatible footprint explicit while using the
 * standard QT Py seven-pin-per-side signal order; the actual public nRF52840
 * product is represented by AdafruitItsyBitsyNRF52840Express.
 */
export const ADAFRUIT_QT_PY_NRF52840_FOOTPRINT =
  "pinrow14_rows2_cols7_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(QT PY NRF52840)" as const

export const ADAFRUIT_QT_PY_NRF52840_PIN_LABELS = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
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

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
  needsExternalPullup: true,
} satisfies PinAttributeMap
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
  needsExternalPullup: true,
} satisfies PinAttributeMap
const SPI_SCK = { ...GPIO, capabilities: ["spi_sck"] } satisfies PinAttributeMap
const SPI_MISO = { ...GPIO, capabilities: ["spi_miso"] } satisfies PinAttributeMap
const SPI_MOSI = { ...GPIO, capabilities: ["spi_mosi"] } satisfies PinAttributeMap
const UART_TX = { ...GPIO, capabilities: ["uart_tx"] } satisfies PinAttributeMap
const UART_RX = { ...GPIO, capabilities: ["uart_rx"] } satisfies PinAttributeMap

export const ADAFRUIT_QT_PY_NRF52840_PIN_ATTRIBUTES = {
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  TX_A6: UART_TX,
  RX_A7: UART_RX,
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

export type AdafruitQTPyNRF52840Props = Omit<
  ChipProps<typeof ADAFRUIT_QT_PY_NRF52840_PIN_LABELS>,
  FixedProps
>

export const AdafruitQTPyNRF52840 = (props: AdafruitQTPyNRF52840Props) => (
  <chip
    {...props}
    displayName="Adafruit QT Py nRF52840 (planned footprint)"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-qt-py/pinouts"
    footprint={ADAFRUIT_QT_PY_NRF52840_FOOTPRINT}
    pinLabels={ADAFRUIT_QT_PY_NRF52840_PIN_LABELS}
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
    pinAttributes={ADAFRUIT_QT_PY_NRF52840_PIN_ATTRIBUTES}
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
