import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu STSPIN220 Low-Voltage Stepper Driver Carrier — StepStick-compatible. */
export const PololuSTSPIN220LowVoltageStepperDriverCarrier_FOOTPRINT =
  "headermodule16_rows2_p2.54mm_py12.7mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu STSPIN220 Low-Voltage S)" as const;

export const PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS = {
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
} as const;

export const PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES = {
  ENABLE: { includeInBoardPinout: true },
  VMOT: { requiresPower: true, includeInBoardPinout: true },
  GND_MOTOR: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  "2B": { mustBeConnected: true, includeInBoardPinout: true },
  "2A": { mustBeConnected: true, includeInBoardPinout: true },
  "1A": { mustBeConnected: true, includeInBoardPinout: true },
  "1B": { mustBeConnected: true, includeInBoardPinout: true },
  VDD: { requiresPower: true, includeInBoardPinout: true },
  GND_LOGIC: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DIR: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  STEP: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SLEEP: { includeInBoardPinout: true },
  RESET: { includeInBoardPinout: true },
  MS3: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  MS2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  MS1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type PololuSTSPIN220LowVoltageStepperDriverCarrierProps = Omit<
  ChipProps<typeof PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuSTSPIN220LowVoltageStepperDriverCarrier = (
  props: PololuSTSPIN220LowVoltageStepperDriverCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu STSPIN220 Low-Voltage Stepper Driver Carrier"
    mfn="Pololu"
    footprint={PololuSTSPIN220LowVoltageStepperDriverCarrier_FOOTPRINT}
    pinLabels={PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "ENABLE",
      pin2: "VMOT",
      pin3: "GND_MOTOR",
      pin4: "2B",
      pin5: "2A",
      pin6: "1A",
      pin7: "1B",
      pin8: "VDD",
      pin9: "GND_LOGIC",
      pin10: "DIR",
      pin11: "STEP",
      pin12: "SLEEP",
      pin13: "RESET",
      pin14: "MS3",
      pin15: "MS2",
      pin16: "MS1",
    }}
    pinAttributes={PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={3.52}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["ENABLE", "VMOT", "GND_MOTOR", "2B", "2A", "1A", "1B", "VDD"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "GND_LOGIC",
          "DIR",
          "STEP",
          "SLEEP",
          "RESET",
          "MS3",
          "MS2",
          "MS1",
        ],
      },
    }}
  />
);
