import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit ESP32-S3 TFT Feather: the two populated Feather header rows. */
export const ADAFRUIT_FEATHER_ESP32_S3_TFT_FOOTPRINT =
  "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_nopinlabels" as const

export const ADAFRUIT_FEATHER_ESP32_S3_TFT_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["EN"],
  pin3: ["VBUS"],
  pin4: ["D13", "GPIO48"],
  pin5: ["D12", "GPIO47"],
  pin6: ["D11", "GPIO38"],
  pin7: ["D10", "GPIO21"],
  pin8: ["D9", "GPIO18"],
  pin9: ["D6", "GPIO9"],
  pin10: ["D5", "GPIO8"],
  pin11: ["SCL", "GPIO4"],
  pin12: ["SDA", "GPIO3"],
  pin13: ["RESET", "RST"],
  pin14: ["3V3", "3.3V"],
  pin15: ["3V3_2", "3.3V"],
  pin16: ["GND"],
  pin17: ["A0"],
  pin18: ["A1"],
  pin19: ["A2"],
  pin20: ["A3"],
  pin21: ["A4"],
  pin22: ["A5"],
  pin23: ["SCK"],
  pin24: ["MOSI"],
  pin25: ["MISO"],
  pin26: ["RX"],
  pin27: ["TX"],
  pin28: ["TXD0", "DEBUG_TX"],
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

export const ADAFRUIT_FEATHER_ESP32_S3_TFT_PIN_ATTRIBUTES = {
  VBAT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
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
  A4: GPIO,
  A5: GPIO,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  RX: UART_RX,
  TX: UART_TX,
  TXD0: { capabilities: ["uart_tx"], includeInBoardPinout: true },
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

export type AdafruitFeatherESP32S3TFTProps = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_ESP32_S3_TFT_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherESP32S3TFT = (
  props: AdafruitFeatherESP32S3TFTProps,
) => (
  <chip
    {...props}
    displayName="Adafruit Feather ESP32-S3 TFT"
    mfn="Adafruit"
    manufacturerPartNumber="5483"
    datasheetUrl="https://learn.adafruit.com/adafruit-esp32-s3-tft-feather/pinouts"
    footprint={ADAFRUIT_FEATHER_ESP32_S3_TFT_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_ESP32_S3_TFT_PIN_LABELS}
    pinAttributes={ADAFRUIT_FEATHER_ESP32_S3_TFT_PIN_ATTRIBUTES}
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
          "A4",
          "A5",
          "SCK",
          "MOSI",
          "MISO",
          "RX",
          "TX",
          "TXD0",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "VBAT",
          "EN",
          "VBUS",
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
