import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/**
 * Socket for the Pololu A4988 Stepper Motor Driver Carrier with soldered
 * headers (item 2980). The ENABLE/VMOT end is on the negative PCB X side
 * when pcbRotation is zero.
 */
export const POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_FOOTPRINT =
  "pinrow16_rows2_p2.54mm_py12.7mm_id1mm_od1.6mm_female_nopinlabels" as const

export const POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS = {
  // ENABLE/VMOT end to DIR/logic-GND end. The generic pinrow footprinter
  // numbers around the perimeter, so the second physical row runs pin16→10.
  pin1: ["ENABLE", "EN", "nENABLE"],
  pin2: ["VMOT", "MOTOR_SUPPLY"],
  pin3: ["GND_MOTOR", "PGND", "GND"],
  pin4: ["2B", "OUT2B"],
  pin5: ["2A", "OUT2A"],
  pin6: ["1A", "OUT1A"],
  pin7: ["1B", "OUT1B"],
  pin8: ["VDD", "LOGIC_SUPPLY"],
  pin9: ["GND_LOGIC", "DGND", "GND"],
  pin10: ["DIR", "DIRECTION"],
  pin11: ["STEP"],
  pin12: ["SLEEP", "SLP", "nSLEEP"],
  pin13: ["RESET", "RST", "nRESET"],
  pin14: ["MS3"],
  pin15: ["MS2"],
  pin16: ["MS1"],
} as const

export const POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES = {
  ENABLE: {
    includeInBoardPinout: true,
  },
  VMOT: {
    requiresPower: true,
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  GND_MOTOR: {
    requiresGround: true,
    providesGround: true,
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  "2B": {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  "2A": {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  "1A": {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  "1B": {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  VDD: {
    requiresPower: true,
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  GND_LOGIC: {
    requiresGround: true,
    providesGround: true,
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  DIR: {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  STEP: {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  SLEEP: {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  RESET: {
    mustBeConnected: true,
    includeInBoardPinout: true,
  },
  MS3: {
    canUseInternalPulldown: true,
    isUsingInternalPulldown: true,
    includeInBoardPinout: true,
  },
  MS2: {
    canUseInternalPulldown: true,
    isUsingInternalPulldown: true,
    includeInBoardPinout: true,
  },
  MS1: {
    canUseInternalPulldown: true,
    isUsingInternalPulldown: true,
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

export type PololuA4988StepperMotorDriverCarrierProps = Omit<
  ChipProps<typeof POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS>,
  FixedProps
>

export const PololuA4988StepperMotorDriverCarrier = (
  props: PololuA4988StepperMotorDriverCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu A4988 Stepper Motor Driver Carrier"
    mfn="Pololu"
    manufacturerPartNumber="2980"
    datasheetUrl="https://www.pololu.com/product-info-merged/2980"
    footprint={POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_FOOTPRINT}
    pinLabels={POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_LABELS}
    pinAttributes={POLOLU_A4988_STEPPER_MOTOR_DRIVER_CARRIER_PIN_ATTRIBUTES}
    schWidth={2}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["ENABLE", "MS1", "MS2", "MS3", "RESET", "SLEEP", "STEP", "DIR"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VMOT", "GND_MOTOR", "2B", "2A", "1A", "1B", "VDD", "GND_LOGIC"],
      },
    }}
  />
)
