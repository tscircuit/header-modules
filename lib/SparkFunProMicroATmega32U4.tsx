import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** SparkFun Pro Micro ATmega32U4: the documented 24-pin Pro Micro header interface. */
export const SPARKFUN_PRO_MICRO_ATMEGA32U4_FOOTPRINT =
  "headermodule24_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(PRO MICRO 32U4)" as const

export const SPARKFUN_PRO_MICRO_ATMEGA32U4_PIN_LABELS = {
  pin1: ["TX", "TXO", "D1"],
  pin2: ["RAW", "VIN"],
  pin3: ["GND3", "GND"],
  pin4: ["RST", "RESET"],
  pin5: ["V3_3", "3V3", "VCC"],
  pin6: ["A3", "D21", "GPIO26"],
  pin7: ["A2", "D20", "GPIO27"],
  pin8: ["A1", "D19", "GPIO28"],
  pin9: ["A0", "D18", "GPIO29"],
  pin10: ["D15", "GPIO15"],
  pin11: ["D14", "GPIO14"],
  pin12: ["D16", "GPIO16", "GPIO13"],
  pin13: ["D10", "GPIO10", "GPIO18"],
  pin14: ["D9", "GPIO9", "GPIO17", "SCL"],
  pin15: ["D8", "GPIO8", "GPIO16", "SDA"],
  pin16: ["D7", "GPIO7", "GPIO9"],
  pin17: ["D6", "GPIO6", "GPIO8"],
  pin18: ["D5", "GPIO5", "GPIO7"],
  pin19: ["D4", "GPIO4", "GPIO6"],
  pin20: ["D3", "GPIO3", "GPIO5"],
  pin21: ["D2", "GPIO2", "SDA", "GPIO4"],
  pin22: ["GND2", "GND"],
  pin23: ["GND1", "GND"],
  pin24: ["RX", "RXI", "D0"],
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
const UART_TX = {
  ...GPIO,
  capabilities: ["uart_tx"],
} as const satisfies PinAttributeMap
const UART_RX = {
  ...GPIO,
  capabilities: ["uart_rx"],
} as const satisfies PinAttributeMap
const RAW_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const V3_3_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

export const SPARKFUN_PRO_MICRO_ATMEGA32U4_PIN_ATTRIBUTES = {
  RAW: RAW_INPUT,
  GND3: GROUND,
  RST: CONTROL,
  V3_3: V3_3_OUTPUT,
  A3: GPIO,
  A2: GPIO,
  A1: GPIO,
  A0: GPIO,
  D15: GPIO,
  D14: GPIO,
  D16: GPIO,
  D10: GPIO,
  D7: GPIO,
  D6: GPIO,
  D5: GPIO,
  D4: GPIO,
  D3: GPIO,
  D9: I2C_SCL,
  D8: I2C_SDA,
  D2: I2C_SDA,
  GND2: GROUND,
  GND1: GROUND,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pcbPinLabels"
  | "pinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type SparkFunProMicroATmega32U4Props = Omit<
  ChipProps<typeof SPARKFUN_PRO_MICRO_ATMEGA32U4_PIN_LABELS>,
  FixedProps
>

export const SparkFunProMicroATmega32U4 = (props: SparkFunProMicroATmega32U4Props) => (
  <chip
    {...props}
    displayName="SparkFun Pro Micro ATmega32U4"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide"
    footprint={SPARKFUN_PRO_MICRO_ATMEGA32U4_FOOTPRINT}
    pinLabels={SPARKFUN_PRO_MICRO_ATMEGA32U4_PIN_LABELS}
    pcbPinLabels={{
      pin1: "TX",
      pin2: "RAW",
      pin3: "GND3",
      pin4: "RST",
      pin5: "V3_3",
      pin6: "A3",
      pin7: "A2",
      pin8: "A1",
      pin9: "A0",
      pin10: "D15",
      pin11: "D14",
      pin12: "D16",
      pin13: "D10",
      pin14: "D9",
      pin15: "D8",
      pin16: "D7",
      pin17: "D6",
      pin18: "D5",
      pin19: "D4",
      pin20: "D3",
      pin21: "D2",
      pin22: "GND2",
      pin23: "GND1",
      pin24: "RX",
    }}
    pinAttributes={SPARKFUN_PRO_MICRO_ATMEGA32U4_PIN_ATTRIBUTES}
    schWidth={2.7}
    schHeight={2.7}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["TX", "RX", "GND1", "GND2", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RAW", "GND3", "RST", "V3_3", "A3", "A2", "A1", "A0", "D15", "D14", "D16", "D10"],
      },
    }}
  />
)
