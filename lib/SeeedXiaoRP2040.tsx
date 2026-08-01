import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { rp2040Gpio } from "./rp2040PinAttributes"

/**
 * Seeed Studio XIAO RP2040 socket with two 7-pin rows.
 * USB is on the negative PCB X side when pcbRotation is zero.
 */
export const SEEED_XIAO_RP2040_FOOTPRINT =
  "pinrow14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const

export const SEEED_XIAO_RP2040_PIN_LABELS = {
  // Footprinter numbering follows its perimeter traversal. XIAO_PIN aliases
  // preserve Seeed's official header numbering at each physical position.
  pin1: ["5V", "VBUS", "VIN", "XIAO_PIN14"],
  pin2: ["D0", "A0", "GP26", "GPIO26", "ADC0", "XIAO_PIN1"],
  pin3: ["D1", "A1", "GP27", "GPIO27", "ADC1", "XIAO_PIN2"],
  pin4: ["D2", "A2", "GP28", "GPIO28", "ADC2", "XIAO_PIN3"],
  pin5: ["D3", "A3", "GP29", "GPIO29", "ADC3", "XIAO_PIN4"],
  pin6: ["D4", "SDA", "GP6", "GPIO6", "XIAO_PIN5"],
  pin7: ["D5", "SCL", "GP7", "GPIO7", "XIAO_PIN6"],
  pin8: ["D6", "TX", "GP0", "GPIO0", "XIAO_PIN7"],
  pin9: ["D7", "RX", "CS", "CSn", "GP1", "GPIO1", "XIAO_PIN8"],
  pin10: ["D8", "SCK", "GP2", "GPIO2", "XIAO_PIN9"],
  pin11: ["D9", "MISO", "GP4", "GPIO4", "XIAO_PIN10"],
  pin12: ["D10", "MOSI", "GP3", "GPIO3", "XIAO_PIN11"],
  pin13: ["3V3", "3V3_OUT", "XIAO_PIN12"],
  pin14: ["GND", "XIAO_PIN13"],
} as const

export const SEEED_XIAO_RP2040_PIN_ATTRIBUTES = {
  "5V": {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D0: rp2040Gpio(26),
  D1: rp2040Gpio(27),
  D2: rp2040Gpio(28),
  D3: rp2040Gpio(29),
  D4: rp2040Gpio(6),
  D5: rp2040Gpio(7),
  D6: rp2040Gpio(0),
  D7: rp2040Gpio(1),
  D8: rp2040Gpio(2),
  D9: rp2040Gpio(4),
  D10: rp2040Gpio(3),
  "3V3": {
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
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type SeeedXiaoRP2040Props = Omit<
  ChipProps<typeof SEEED_XIAO_RP2040_PIN_LABELS>,
  FixedProps
>

export const SeeedXiaoRP2040 = (props: SeeedXiaoRP2040Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO RP2040"
    mfn="Seeed Studio"
    manufacturerPartNumber="102010428"
    datasheetUrl="https://wiki.seeedstudio.com/XIAO-RP2040/"
    footprint={SEEED_XIAO_RP2040_FOOTPRINT}
    pinLabels={SEEED_XIAO_RP2040_PIN_LABELS}
    pinAttributes={SEEED_XIAO_RP2040_PIN_ATTRIBUTES}
    schWidth={1.675}
    schHeight={1.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["D0", "D1", "D2", "D3", "D4", "D5", "D6"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["5V", "GND", "3V3", "D10", "D9", "D8", "D7"],
      },
    }}
  />
)

/** @deprecated Use SeeedXiaoRP2040. */
export const Xiao = SeeedXiaoRP2040
/** @deprecated Use SeeedXiaoRP2040Props. */
export type XiaoProps = SeeedXiaoRP2040Props
/** @deprecated Use SEEED_XIAO_RP2040_FOOTPRINT. */
export const XIAO_FOOTPRINT = SEEED_XIAO_RP2040_FOOTPRINT
