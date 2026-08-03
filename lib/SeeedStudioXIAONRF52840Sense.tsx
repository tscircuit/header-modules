import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Seeed Studio XIAO nRF52840 Sense with its documented 14-pin 2.54 mm header interface. */
export const SEEED_STUDIO_XIAO_NRF52840_SENSE_FOOTPRINT =
  "headermodule14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(XIAO NRF52840 SENSE)" as const

export const SEEED_STUDIO_XIAO_NRF52840_SENSE_PIN_LABELS = {
  pin1: ["5V", "VBUS"],
  pin2: ["D0", "A0", "P0_02"],
  pin3: ["D1", "A1", "P0_03"],
  pin4: ["D2", "A2", "P0_28"],
  pin5: ["D3", "A3", "P0_29"],
  pin6: ["D4", "SDA", "P0_04"],
  pin7: ["D5", "SCL", "P0_05"],
  pin8: ["D6", "TX", "P1_11"],
  pin9: ["D7", "RX", "P1_12"],
  pin10: ["D8", "SCK", "P1_13"],
  pin11: ["D9", "MISO", "P1_14"],
  pin12: ["D10", "MOSI", "P1_15"],
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
export const SEEED_STUDIO_XIAO_NRF52840_SENSE_PIN_ATTRIBUTES = {
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

export type SeeedStudioXIAONRF52840SenseProps = Omit<
  ChipProps<typeof SEEED_STUDIO_XIAO_NRF52840_SENSE_PIN_LABELS>,
  FixedProps
>

export const SeeedStudioXIAONRF52840Sense = (props: SeeedStudioXIAONRF52840SenseProps) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO nRF52840 Sense"
    mfn="Seeed Studio"
    datasheetUrl="https://wiki.seeedstudio.com/XIAO_BLE/"
    footprint={SEEED_STUDIO_XIAO_NRF52840_SENSE_FOOTPRINT}
    pinLabels={SEEED_STUDIO_XIAO_NRF52840_SENSE_PIN_LABELS}
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
    pinAttributes={SEEED_STUDIO_XIAO_NRF52840_SENSE_PIN_ATTRIBUTES}
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

