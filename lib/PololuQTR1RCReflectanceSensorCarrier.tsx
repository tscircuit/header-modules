import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu QTR-1RC Reflectance Sensor Carrier — RC timing. */
export const PololuQTR1RCReflectanceSensorCarrier_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu QTR-1RC Reflectance)" as const;

export const PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const PololuQTR1RCReflectanceSensorCarrier_PIN_ATTRIBUTES = {
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

export type PololuQTR1RCReflectanceSensorCarrierProps = Omit<
  ChipProps<typeof PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuQTR1RCReflectanceSensorCarrier = (
  props: PololuQTR1RCReflectanceSensorCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu QTR-1RC Reflectance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuQTR1RCReflectanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={PololuQTR1RCReflectanceSensorCarrier_PIN_ATTRIBUTES}
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
