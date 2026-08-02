import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit Feather RP2350 socket: one 12-pin row and one 16-pin row. */
export const ADAFRUIT_FEATHER_RP2350_FOOTPRINT =
  "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_nopinlabels" as const

export const ADAFRUIT_FEATHER_RP2350_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["EN"],
  pin3: ["VBUS"],
  pin4: ["D7"],
  pin5: ["D4"],
  pin6: ["D11"],
  pin7: ["D10"],
  pin8: ["D9"],
  pin9: ["D6"],
  pin10: ["D5"],
  pin11: ["SCL"],
  pin12: ["SDA"],
  pin13: ["RESET", "RUN", "RST"],
  pin14: ["3V3"],
  pin15: ["3V3_2", "3V3"],
  pin16: ["GND"],
  pin17: ["A0"],
  pin18: ["A1"],
  pin19: ["A2"],
  pin20: ["A3"],
  pin21: ["D24"],
  pin22: ["D25"],
  pin23: ["SCK"],
  pin24: ["MOSI"],
  pin25: ["MISO"],
  pin26: ["RX"],
  pin27: ["TX"],
  pin28: ["PSRAM_CS"],
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
const UART_RX = { ...GPIO, capabilities: ["uart_rx"] } satisfies PinAttributeMap
const UART_TX = { ...GPIO, capabilities: ["uart_tx"] } satisfies PinAttributeMap

export const ADAFRUIT_FEATHER_RP2350_PIN_ATTRIBUTES = {
  VBAT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
  VBUS: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D7: GPIO,
  D4: GPIO,
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D6: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RESET: { includeInBoardPinout: true },
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
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  D24: GPIO,
  D25: GPIO,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  RX: UART_RX,
  TX: UART_TX,
  PSRAM_CS: { includeInBoardPinout: true },
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

export type AdafruitFeatherRP2350Props = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_RP2350_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherRP2350 = (props: AdafruitFeatherRP2350Props) => (
  <chip
    {...props}
    displayName="Adafruit Feather RP2350"
    mfn="Adafruit"
    manufacturerPartNumber="6000"
    datasheetUrl="https://learn.adafruit.com/adafruit-feather-rp2350/pinouts"
    footprint={ADAFRUIT_FEATHER_RP2350_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_RP2350_PIN_LABELS}
    pinAttributes={ADAFRUIT_FEATHER_RP2350_PIN_ATTRIBUTES}
    schWidth={1.8}
    schHeight={2.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "RESET",
          "3V3",
          "3V3_2",
          "GND",
          "A0",
          "A1",
          "A2",
          "A3",
          "D24",
          "D25",
          "SCK",
          "MOSI",
          "MISO",
          "RX",
          "TX",
          "PSRAM_CS",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "VBAT",
          "EN",
          "VBUS",
          "D7",
          "D4",
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
