import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** PJRC Teensy 4.0 with the 24 pins intended for a solderless breadboard. */
export const PJRC_TEENSY_4_0_FOOTPRINT =
  "headermodule24_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TEENSY 4.0)" as const

export const PJRC_TEENSY_4_0_PIN_LABELS = {
  pin1: ["VIN", "5V_IN"],
  pin2: ["GND"],
  pin3: ["V3_3", "3V3"],
  pin4: ["USB", "USB_5V"],
  pin5: ["RESET", "PROGRAM"],
  pin6: ["RX1"],
  pin7: ["TX1"],
  pin8: ["D0"],
  pin9: ["D1"],
  pin10: ["D2"],
  pin11: ["D3", "MOSI"],
  pin12: ["D4", "MISO"],
  pin13: ["D5", "SCK"],
  pin14: ["D6"],
  pin15: ["D7"],
  pin16: ["D8"],
  pin17: ["D9"],
  pin18: ["D10"],
  pin19: ["D11"],
  pin20: ["D12"],
  pin21: ["D13"],
  pin22: ["A0"],
  pin23: ["A1"],
  pin24: ["A2"],
} as const

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap
const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap
const SPI_SCK = {
  ...GPIO,
  capabilities: ["spi_sck"],
} as const satisfies PinAttributeMap
const UART_RX = {
  ...GPIO,
  capabilities: ["uart_rx"],
} as const satisfies PinAttributeMap
const UART_TX = {
  ...GPIO,
  capabilities: ["uart_tx"],
} as const satisfies PinAttributeMap
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const POWER_IO = {
  requiresPower: true,
  providesPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const V3_3_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

export const PJRC_TEENSY_4_0_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  V3_3: V3_3_OUTPUT,
  USB: POWER_IO,
  RESET: CONTROL,
  RX1: UART_RX,
  TX1: UART_TX,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: SPI_MOSI,
  D4: SPI_MISO,
  D5: SPI_SCK,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D11: GPIO,
  D12: GPIO,
  D13: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
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

export type PJRCTeensy40Props = Omit<
  ChipProps<typeof PJRC_TEENSY_4_0_PIN_LABELS>,
  FixedProps
>

export const PJRCTeensy40 = (props: PJRCTeensy40Props) => (
  <chip
    {...props}
    displayName="PJRC Teensy 4.0"
    mfn="PJRC"
    datasheetUrl="https://www.pjrc.com/store/teensy40.html"
    footprint={PJRC_TEENSY_4_0_FOOTPRINT}
    pinLabels={PJRC_TEENSY_4_0_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "V3_3",
      pin4: "USB",
      pin5: "RESET",
      pin6: "RX1",
      pin7: "TX1",
      pin8: "D0",
      pin9: "D1",
      pin10: "D2",
      pin11: "D3",
      pin12: "D4",
      pin13: "D5",
      pin14: "D6",
      pin15: "D7",
      pin16: "D8",
      pin17: "D9",
      pin18: "D10",
      pin19: "D11",
      pin20: "D12",
      pin21: "D13",
      pin22: "A0",
      pin23: "A1",
      pin24: "A2",
    }}
    pinAttributes={PJRC_TEENSY_4_0_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "V3_3", "USB", "RESET", "RX1", "TX1", "D0", "D1", "D2", "D3", "D4"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "A0", "A1", "A2"],
      },
    }}
  />
)
