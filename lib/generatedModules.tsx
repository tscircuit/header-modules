import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_IO = {
  requiresPower: true,
  providesPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_3V3_OUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_OUTPUT = {
  providesPower: true,
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

const CONTACT = {
  mustBeConnected: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

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

const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap

const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap

const SPI_CS = {
  ...GPIO,
  capabilities: ["spi_cs"],
} as const satisfies PinAttributeMap

const UART_TX = {
  ...GPIO,
  capabilities: ["uart_tx"],
} as const satisfies PinAttributeMap

const UART_RX = {
  ...GPIO,
  capabilities: ["uart_rx"],
} as const satisfies PinAttributeMap

const FOOTPRINT_F3 = "headermodule3_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F4 = "headermodule4_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F5 = "headermodule5_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F6 = "headermodule6_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F8 = "headermodule8_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F10 = "headermodule10_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F12 = "headermodule12_rows2_p2.54mm_py7.62mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F14 = "headermodule14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F16 = "headermodule16_rows2_p2.54mm_py12.7mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F24 = "headermodule24_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F28 = "headermodule28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F30 = "headermodule30_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F40 = "headermodule40_rows2_p2.54mm_py17.78mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F42 = "headermodule42_rows2_p2.54mm_py17.78mm_id1mm_od1.6mm_female_nopinlabels" as const

export const FEATHER28_PIN_LABELS = {
  pin1: ["BAT"],
  pin2: ["EN"],
  pin3: ["USB"],
  pin4: ["D13"],
  pin5: ["D12"],
  pin6: ["D11"],
  pin7: ["D10"],
  pin8: ["D9"],
  pin9: ["D6"],
  pin10: ["D5"],
  pin11: ["SCL"],
  pin12: ["SDA"],
  pin13: ["RST"],
  pin14: ["3V"],
  pin15: ["AREF"],
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
  pin28: ["D4"],
} as const

export const FEATHER28_PIN_ATTRIBUTES = {
  BAT: POWER_IO,
  EN: CONTROL,
  USB: POWER_IO,
  D13: GPIO,
  D12: GPIO,
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D6: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RST: CONTROL,
  "3V": POWER_3V3_OUT,
  AREF: CONTROL,
  GND: GROUND,
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
  D4: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const XIAO14_PIN_LABELS = {
  pin1: ["5V"],
  pin2: ["D0"],
  pin3: ["D1"],
  pin4: ["D2"],
  pin5: ["D3"],
  pin6: ["D4"],
  pin7: ["D5"],
  pin8: ["D6"],
  pin9: ["D7"],
  pin10: ["D8"],
  pin11: ["D9"],
  pin12: ["D10"],
  pin13: ["3V3"],
  pin14: ["GND"],
} as const

export const XIAO14_PIN_ATTRIBUTES = {
  "5V": POWER_IO,
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
  "3V3": POWER_3V3_OUT,
  GND: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const NANO30_PIN_LABELS = {
  pin1: ["TX"],
  pin2: ["RX"],
  pin3: ["RESET"],
  pin4: ["GND"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D5"],
  pin9: ["D6"],
  pin10: ["D7"],
  pin11: ["D8"],
  pin12: ["D9"],
  pin13: ["D10"],
  pin14: ["D11"],
  pin15: ["D12"],
  pin16: ["D13"],
  pin17: ["3V3"],
  pin18: ["AREF"],
  pin19: ["A0"],
  pin20: ["A1"],
  pin21: ["A2"],
  pin22: ["A3"],
  pin23: ["A4"],
  pin24: ["A5"],
  pin25: ["A6"],
  pin26: ["A7"],
  pin27: ["5V"],
  pin28: ["RESET_2"],
  pin29: ["GND_2"],
  pin30: ["VIN"],
} as const

export const NANO30_PIN_ATTRIBUTES = {
  TX: UART_TX,
  RX: UART_RX,
  RESET: CONTROL,
  GND: GROUND,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: SPI_CS,
  D11: SPI_MOSI,
  D12: SPI_MISO,
  D13: SPI_SCK,
  "3V3": POWER_3V3_OUT,
  AREF: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: I2C_SDA,
  A5: I2C_SCL,
  A6: GPIO,
  A7: GPIO,
  "5V": POWER_IO,
  RESET_2: CONTROL,
  GND_2: GROUND,
  VIN: POWER_INPUT,
} as const satisfies Record<string, PinAttributeMap>

export const PICO40_PIN_LABELS = {
  pin1: ["GP0"],
  pin2: ["GP1"],
  pin3: ["GP2"],
  pin4: ["GP3"],
  pin5: ["GP4"],
  pin6: ["GP5"],
  pin7: ["GP6"],
  pin8: ["GP7"],
  pin9: ["GP8"],
  pin10: ["GP9"],
  pin11: ["GP10"],
  pin12: ["GP11"],
  pin13: ["GP12"],
  pin14: ["GP13"],
  pin15: ["GP14"],
  pin16: ["GP15"],
  pin17: ["GP16"],
  pin18: ["GP17"],
  pin19: ["GP18"],
  pin20: ["GP19"],
  pin21: ["GP20"],
  pin22: ["GP21"],
  pin23: ["GP22"],
  pin24: ["GP23"],
  pin25: ["GP24"],
  pin26: ["GP25"],
  pin27: ["GP26"],
  pin28: ["GP27"],
  pin29: ["GP28"],
  pin30: ["RUN"],
  pin31: ["ADC_VREF"],
  pin32: ["3V3_EN"],
  pin33: ["3V3"],
  pin34: ["VSYS"],
  pin35: ["VBUS"],
  pin36: ["GND1"],
  pin37: ["GND2"],
  pin38: ["GND3"],
  pin39: ["GND4"],
  pin40: ["GND5"],
} as const

export const PICO40_PIN_ATTRIBUTES = {
  GP0: GPIO,
  GP1: GPIO,
  GP2: GPIO,
  GP3: GPIO,
  GP4: GPIO,
  GP5: GPIO,
  GP6: GPIO,
  GP7: GPIO,
  GP8: GPIO,
  GP9: GPIO,
  GP10: GPIO,
  GP11: GPIO,
  GP12: GPIO,
  GP13: GPIO,
  GP14: GPIO,
  GP15: GPIO,
  GP16: GPIO,
  GP17: GPIO,
  GP18: GPIO,
  GP19: GPIO,
  GP20: GPIO,
  GP21: GPIO,
  GP22: GPIO,
  GP23: GPIO,
  GP24: GPIO,
  GP25: GPIO,
  GP26: GPIO,
  GP27: GPIO,
  GP28: GPIO,
  RUN: CONTROL,
  ADC_VREF: CONTROL,
  "3V3_EN": CONTROL,
  "3V3": POWER_3V3_OUT,
  VSYS: POWER_IO,
  VBUS: POWER_IO,
  GND1: GROUND,
  GND2: GROUND,
  GND3: GROUND,
  GND4: GROUND,
  GND5: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const TEENSY24_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["USB"],
  pin5: ["RESET"],
  pin6: ["RX1"],
  pin7: ["TX1"],
  pin8: ["D0"],
  pin9: ["D1"],
  pin10: ["D2"],
  pin11: ["D3"],
  pin12: ["D4"],
  pin13: ["D5"],
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

export const TEENSY24_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  USB: POWER_IO,
  RESET: CONTROL,
  RX1: UART_RX,
  TX1: UART_TX,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
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

export const TEENSY42_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["USB"],
  pin5: ["RESET"],
  pin6: ["RX1"],
  pin7: ["TX1"],
  pin8: ["D0"],
  pin9: ["D1"],
  pin10: ["D2"],
  pin11: ["D3"],
  pin12: ["D4"],
  pin13: ["D5"],
  pin14: ["D6"],
  pin15: ["D7"],
  pin16: ["D8"],
  pin17: ["D9"],
  pin18: ["D10"],
  pin19: ["D11"],
  pin20: ["D12"],
  pin21: ["D13"],
  pin22: ["D14"],
  pin23: ["D15"],
  pin24: ["D16"],
  pin25: ["D17"],
  pin26: ["D18"],
  pin27: ["D19"],
  pin28: ["D20"],
  pin29: ["D21"],
  pin30: ["D22"],
  pin31: ["D23"],
  pin32: ["D24"],
  pin33: ["D25"],
  pin34: ["D26"],
  pin35: ["D27"],
  pin36: ["D28"],
  pin37: ["D29"],
  pin38: ["D30"],
  pin39: ["D31"],
  pin40: ["D32"],
  pin41: ["D33"],
  pin42: ["D34"],
} as const

export const TEENSY42_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  USB: POWER_IO,
  RESET: CONTROL,
  RX1: UART_RX,
  TX1: UART_TX,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D11: GPIO,
  D12: GPIO,
  D13: GPIO,
  D14: GPIO,
  D15: GPIO,
  D16: GPIO,
  D17: GPIO,
  D18: GPIO,
  D19: GPIO,
  D20: GPIO,
  D21: GPIO,
  D22: GPIO,
  D23: GPIO,
  D24: GPIO,
  D25: GPIO,
  D26: GPIO,
  D27: GPIO,
  D28: GPIO,
  D29: GPIO,
  D30: GPIO,
  D31: GPIO,
  D32: GPIO,
  D33: GPIO,
  D34: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ITSYBITSY24_PIN_LABELS = {
  pin1: ["BAT"],
  pin2: ["G"],
  pin3: ["USB"],
  pin4: ["EN"],
  pin5: ["D13"],
  pin6: ["D12"],
  pin7: ["D11"],
  pin8: ["D10"],
  pin9: ["D9"],
  pin10: ["D7"],
  pin11: ["D5"],
  pin12: ["SCL"],
  pin13: ["SDA"],
  pin14: ["RST"],
  pin15: ["3V"],
  pin16: ["AREF"],
  pin17: ["GND"],
  pin18: ["A0"],
  pin19: ["A1"],
  pin20: ["A2"],
  pin21: ["SCK"],
  pin22: ["MOSI"],
  pin23: ["MISO"],
  pin24: ["D4"],
} as const

export const ITSYBITSY24_PIN_ATTRIBUTES = {
  BAT: POWER_IO,
  G: GROUND,
  USB: POWER_IO,
  EN: CONTROL,
  D13: GPIO,
  D12: GPIO,
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D7: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RST: CONTROL,
  "3V": POWER_3V3_OUT,
  AREF: CONTROL,
  GND: GROUND,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  D4: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const QTPY12_PIN_LABELS = {
  pin1: ["5V"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["D0"],
  pin7: ["D1"],
  pin8: ["D2"],
  pin9: ["D3"],
  pin10: ["D4"],
  pin11: ["D5"],
  pin12: ["D6"],
} as const

export const QTPY12_PIN_ATTRIBUTES = {
  "5V": POWER_IO,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const PROMICRO24_PIN_LABELS = {
  pin1: ["RAW"],
  pin2: ["GND"],
  pin3: ["RST"],
  pin4: ["VCC"],
  pin5: ["RX"],
  pin6: ["TX"],
  pin7: ["D2"],
  pin8: ["D3"],
  pin9: ["D4"],
  pin10: ["D5"],
  pin11: ["D6"],
  pin12: ["D7"],
  pin13: ["D8"],
  pin14: ["D9"],
  pin15: ["D10"],
  pin16: ["D16"],
  pin17: ["D14"],
  pin18: ["D15"],
  pin19: ["A0"],
  pin20: ["A1"],
  pin21: ["A2"],
  pin22: ["A3"],
  pin23: ["SDA"],
  pin24: ["SCL"],
} as const

export const PROMICRO24_PIN_ATTRIBUTES = {
  RAW: POWER_INPUT,
  GND: GROUND,
  RST: CONTROL,
  VCC: POWER_3V3_OUT,
  RX: UART_RX,
  TX: UART_TX,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D16: GPIO,
  D14: GPIO,
  D15: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const DEVKIT30_PIN_LABELS = {
  pin1: ["3V3"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["VP"],
  pin5: ["VN"],
  pin6: ["D34"],
  pin7: ["D35"],
  pin8: ["D32"],
  pin9: ["D33"],
  pin10: ["D25"],
  pin11: ["D26"],
  pin12: ["D27"],
  pin13: ["D14"],
  pin14: ["D12"],
  pin15: ["D13"],
  pin16: ["D15"],
  pin17: ["D2"],
  pin18: ["D4"],
  pin19: ["D16"],
  pin20: ["D17"],
  pin21: ["D5"],
  pin22: ["D18"],
  pin23: ["D19"],
  pin24: ["D21"],
  pin25: ["RX0"],
  pin26: ["TX0"],
  pin27: ["D22"],
  pin28: ["D23"],
  pin29: ["5V"],
  pin30: ["GND_2"],
} as const

export const DEVKIT30_PIN_ATTRIBUTES = {
  "3V3": POWER_3V3_OUT,
  GND: GROUND,
  EN: CONTROL,
  VP: GPIO,
  VN: GPIO,
  D34: GPIO,
  D35: GPIO,
  D32: GPIO,
  D33: GPIO,
  D25: GPIO,
  D26: GPIO,
  D27: GPIO,
  D14: GPIO,
  D12: GPIO,
  D13: GPIO,
  D15: GPIO,
  D2: GPIO,
  D4: GPIO,
  D16: GPIO,
  D17: GPIO,
  D5: GPIO,
  D18: SPI_SCK,
  D19: SPI_MISO,
  D21: I2C_SDA,
  RX0: UART_RX,
  TX0: UART_TX,
  D22: I2C_SCL,
  D23: SPI_MOSI,
  "5V": POWER_IO,
  GND_2: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const I2C4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const I2C4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const I2C5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["INT"],
} as const

export const I2C5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2C6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["ADDR"],
  pin6: ["INT"],
} as const

export const I2C6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  ADDR: GPIO,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2CSPI8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
} as const

export const I2CSPI8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
} as const satisfies Record<string, PinAttributeMap>

export const I2CUART6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const

export const I2CUART6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const I2CSPIUART10_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
  pin9: ["TX"],
  pin10: ["RX"],
} as const

export const I2CSPIUART10_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const SPI6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const

export const SPI6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
} as const satisfies Record<string, PinAttributeMap>

export const SPIUART8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["TX"],
  pin8: ["RX"],
} as const

export const SPIUART8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const UART4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const

export const UART4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const UART5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["AUX"],
} as const

export const UART5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
  AUX: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ANALOG3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const

export const ANALOG3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  OUT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ANALOG4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const

export const ANALOG4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  AO: GPIO,
  DO: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DIGITAL3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const

export const DIGITAL3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  OUT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const TRIGGER4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const

export const TRIGGER4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TRIG: GPIO,
  ECHO: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ONEWIRE3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const

export const ONEWIRE3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DQ: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2S5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
} as const

export const I2S5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  BCLK: GPIO,
  LRCLK: GPIO,
  DIN: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const PDM5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CLK"],
  pin4: ["DATA"],
  pin5: ["SEL"],
} as const

export const PDM5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  CLK: GPIO,
  DATA: GPIO,
  SEL: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LOADCELL4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DOUT"],
  pin4: ["SCK"],
} as const

export const LOADCELL4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DOUT: GPIO,
  SCK: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const RELAY6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["NO"],
  pin5: ["COM"],
  pin6: ["NC"],
} as const

export const RELAY6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  IN: GPIO,
  NO: CONTACT,
  COM: CONTACT,
  NC: CONTACT,
} as const satisfies Record<string, PinAttributeMap>

export const POWER4_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const

export const POWER4_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  VOUT: POWER_OUTPUT,
  EN: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const POWER5_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
  pin5: ["PG"],
} as const

export const POWER5_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  VOUT: POWER_OUTPUT,
  EN: CONTROL,
  PG: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const STEPPER16_PIN_LABELS = {
  pin1: ["ENABLE"],
  pin2: ["VMOT"],
  pin3: ["GND_MOTOR"],
  pin4: ["2B"],
  pin5: ["2A"],
  pin6: ["1A"],
  pin7: ["1B"],
  pin8: ["VDD"],
  pin9: ["GND_LOGIC"],
  pin10: ["DIR"],
  pin11: ["STEP"],
  pin12: ["SLEEP"],
  pin13: ["RESET"],
  pin14: ["MS3"],
  pin15: ["MS2"],
  pin16: ["MS1"],
} as const

export const STEPPER16_PIN_ATTRIBUTES = {
  ENABLE: CONTROL,
  VMOT: POWER_INPUT,
  GND_MOTOR: GROUND,
  "2B": CONTACT,
  "2A": CONTACT,
  "1A": CONTACT,
  "1B": CONTACT,
  VDD: POWER_INPUT,
  GND_LOGIC: GROUND,
  DIR: GPIO,
  STEP: GPIO,
  SLEEP: CONTROL,
  RESET: CONTROL,
  MS3: GPIO,
  MS2: GPIO,
  MS1: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const STEPPER8_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["STEP"],
  pin4: ["DIR"],
  pin5: ["EN"],
  pin6: ["MS1"],
  pin7: ["MS2"],
  pin8: ["MS3"],
} as const

export const STEPPER8_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  STEP: GPIO,
  DIR: GPIO,
  EN: CONTROL,
  MS1: GPIO,
  MS2: GPIO,
  MS3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MOTOR6_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["FAULT"],
} as const

export const MOTOR6_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  VCC: POWER_INPUT,
  IN1: GPIO,
  IN2: GPIO,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MOTOR8_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["IN3"],
  pin7: ["EN"],
  pin8: ["FAULT"],
} as const

export const MOTOR8_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  VCC: POWER_INPUT,
  IN1: GPIO,
  IN2: GPIO,
  IN3: GPIO,
  EN: CONTROL,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const NFC8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["IRQ"],
} as const

export const NFC8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  IRQ: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const RADIO8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["IRQ"],
  pin8: ["RST"],
} as const

export const RADIO8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  IRQ: GPIO,
  RST: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const CAN6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CANH"],
  pin4: ["CANL"],
  pin5: ["RX"],
  pin6: ["TX"],
} as const

export const CAN6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  CANH: GPIO,
  CANL: GPIO,
  RX: UART_RX,
  TX: UART_TX,
} as const satisfies Record<string, PinAttributeMap>

export const SERIALBUS6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["A"],
  pin6: ["B"],
} as const

export const SERIALBUS6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
  A: GPIO,
  B: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const USB6_PIN_LABELS = {
  pin1: ["VBUS"],
  pin2: ["GND"],
  pin3: ["DPLUS"],
  pin4: ["DMINUS"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const

export const USB6_PIN_ATTRIBUTES = {
  VBUS: POWER_IO,
  GND: GROUND,
  DPLUS: GPIO,
  DMINUS: GPIO,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const LEVEL8_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["HV1"],
  pin5: ["HV2"],
  pin6: ["HV3"],
  pin7: ["HV4"],
  pin8: ["DIR"],
} as const

export const LEVEL8_PIN_ATTRIBUTES = {
  HV: POWER_INPUT,
  LV: POWER_INPUT,
  GND: GROUND,
  HV1: GPIO,
  HV2: GPIO,
  HV3: GPIO,
  HV4: GPIO,
  DIR: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LEVEL10_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["A1"],
  pin5: ["A2"],
  pin6: ["A3"],
  pin7: ["A4"],
  pin8: ["B1"],
  pin9: ["B2"],
  pin10: ["B3"],
} as const

export const LEVEL10_PIN_ATTRIBUTES = {
  HV: POWER_INPUT,
  LV: POWER_INPUT,
  GND: GROUND,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: GPIO,
  B1: GPIO,
  B2: GPIO,
  B3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DISPLAY8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const

export const DISPLAY8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  DC: GPIO,
  RST: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const DISPLAY4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const DISPLAY4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const LED4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DATA"],
  pin4: ["CLK"],
} as const

export const LED4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DATA: GPIO,
  CLK: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LED5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["R"],
  pin4: ["G"],
  pin5: ["B"],
} as const

export const LED5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  R: GPIO,
  G: GPIO,
  B: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MATRIX8_PIN_LABELS = {
  pin1: ["K1"],
  pin2: ["K2"],
  pin3: ["K3"],
  pin4: ["K4"],
  pin5: ["K5"],
  pin6: ["K6"],
  pin7: ["K7"],
  pin8: ["K8"],
} as const

export const MATRIX8_PIN_ATTRIBUTES = {
  K1: GPIO,
  K2: GPIO,
  K3: GPIO,
  K4: GPIO,
  K5: GPIO,
  K6: GPIO,
  K7: GPIO,
  K8: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const JOYSTICK5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["X"],
  pin4: ["Y"],
  pin5: ["SW"],
} as const

export const JOYSTICK5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  X: GPIO,
  Y: GPIO,
  SW: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ENCODER6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["A"],
  pin4: ["B"],
  pin5: ["SW"],
  pin6: ["INT"],
} as const

export const ENCODER6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  A: GPIO,
  B: GPIO,
  SW: GPIO,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ADC8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["A0"],
  pin6: ["A1"],
  pin7: ["A2"],
  pin8: ["A3"],
} as const

export const ADC8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ADC10_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["A0"],
  pin8: ["A1"],
  pin9: ["A2"],
  pin10: ["A3"],
} as const

export const ADC10_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DAC6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VOUT"],
  pin6: ["LDAC"],
} as const

export const DAC6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  VOUT: GPIO,
  LDAC: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const AUDIO6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const

export const AUDIO6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  IN: GPIO,
  OUT: GPIO,
  GAIN: GPIO,
  SHDN: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const AUDIO8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
  pin6: ["SD"],
  pin7: ["GAIN"],
  pin8: ["FAULT"],
} as const

export const AUDIO8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  BCLK: GPIO,
  LRCLK: GPIO,
  DIN: GPIO,
  SD: CONTROL,
  GAIN: GPIO,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const GENERIC4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const

export const GENERIC4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SIG1: GPIO,
  SIG2: GPIO,
} as const satisfies Record<string, PinAttributeMap>
