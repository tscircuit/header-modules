import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu DRV8876 Motor Driver Carrier — single H-bridge. */
export const PololuDRV8876MotorDriverCarrier_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu DRV8876 Motor)" as const;

export const PololuDRV8876MotorDriverCarrier_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const PololuDRV8876MotorDriverCarrier_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SIG1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SIG2: {
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

export type PololuDRV8876MotorDriverCarrierProps = Omit<
  ChipProps<typeof PololuDRV8876MotorDriverCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuDRV8876MotorDriverCarrier = (
  props: PololuDRV8876MotorDriverCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu DRV8876 Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8876MotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8876MotorDriverCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={PololuDRV8876MotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SIG1", "SIG2"],
      },
    }}
  />
);
