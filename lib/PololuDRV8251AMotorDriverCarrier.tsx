import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu DRV8251A Motor Driver Carrier — single H-bridge. */
export const PololuDRV8251AMotorDriverCarrier_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu DRV8251A Motor)" as const;

export const PololuDRV8251AMotorDriverCarrier_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const PololuDRV8251AMotorDriverCarrier_PIN_ATTRIBUTES = {
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

export type PololuDRV8251AMotorDriverCarrierProps = Omit<
  ChipProps<typeof PololuDRV8251AMotorDriverCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuDRV8251AMotorDriverCarrier = (
  props: PololuDRV8251AMotorDriverCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu DRV8251A Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8251AMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8251AMotorDriverCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={PololuDRV8251AMotorDriverCarrier_PIN_ATTRIBUTES}
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
