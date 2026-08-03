import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Seeed Studio XIAO ESP32C3 with its documented 14-pin 2.54 mm header interface. */
export const SEEED_STUDIO_XIAO_ESP32C3_FOOTPRINT =
  "headermodule14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(XIAO ESP32C3)" as const

export const SEEED_STUDIO_XIAO_ESP32C3_PIN_LABELS = {
  pin1: ["5V", "VBUS"],
  pin2: ["D0", "A0", "GPIO2"],
  pin3: ["D1", "A1", "GPIO3"],
  pin4: ["D2", "A2", "GPIO4"],
  pin5: ["D3", "A3", "GPIO5"],
  pin6: ["D4", "SDA", "GPIO6"],
  pin7: ["D5", "SCL", "GPIO7"],
  pin8: ["D6", "TX", "GPIO21"],
  pin9: ["D7", "RX", "GPIO20"],
  pin10: ["D8", "SCK", "GPIO8"],
  pin11: ["D9", "MISO", "GPIO9"],
  pin12: ["D10", "MOSI", "GPIO10"],
  pin13: ["V3_3", "3V3", "3V3_OUT"],
  pin14: ["GND"],
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
} as const satisfies PinAttributeMap
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap
const SPI_SCK = {
  ...GPIO,
  capabilities: ["spi_sck"],
} as const satisfies PinAttributeMap
const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap
const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap
const UART_TX = {
  ...GPIO,
  capabilities: ["uart_tx"],
} as const satisfies PinAttributeMap
const UART_RX = {
  ...GPIO,
  capabilities: ["uart_rx"],
} as const satisfies PinAttributeMap
export const SEEED_STUDIO_XIAO_ESP32C3_PIN_ATTRIBUTES = {
  "5V": {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: I2C_SDA,
  D5: I2C_SCL,
  D6: UART_TX,
  D7: UART_RX,
  D8: SPI_SCK,
  D9: SPI_MISO,
  D10: SPI_MOSI,
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
} as const satisfies Record<string, PinAttributeMap>

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type SeeedStudioXIAOESP32C3Props = Omit<
  ChipProps<typeof SEEED_STUDIO_XIAO_ESP32C3_PIN_LABELS>,
  FixedProps
>

export const SeeedStudioXIAOESP32C3 = (props: SeeedStudioXIAOESP32C3Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO ESP32C3"
    mfn="Seeed Studio"
    datasheetUrl="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/"
    footprint={SEEED_STUDIO_XIAO_ESP32C3_FOOTPRINT}
    pinLabels={SEEED_STUDIO_XIAO_ESP32C3_PIN_LABELS}
    pcbPinLabels={{
      pin1: "5V",
      pin2: "D0",
      pin3: "D1",
      pin4: "D2",
      pin5: "D3",
      pin6: "D4",
      pin7: "D5",
      pin8: "D6",
      pin9: "D7",
      pin10: "D8",
      pin11: "D9",
      pin12: "D10",
      pin13: "V3_3",
      pin14: "GND",
    }}
    pinAttributes={SEEED_STUDIO_XIAO_ESP32C3_PIN_ATTRIBUTES}
    schWidth={1.8}
    schHeight={1.7}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["D0", "D1", "D2", "D3", "D4", "D5", "D6"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["5V", "GND", "V3_3", "D10", "D9", "D8", "D7"],
      },
    }}
  />
)

