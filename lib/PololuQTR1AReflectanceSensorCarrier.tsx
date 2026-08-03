import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu QTR-1A Reflectance Sensor Carrier — analog. */
export const PololuQTR1AReflectanceSensorCarrier_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu QTR-1A Reflectance)" as const;

export const PololuQTR1AReflectanceSensorCarrier_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const PololuQTR1AReflectanceSensorCarrier_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
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

export type PololuQTR1AReflectanceSensorCarrierProps = Omit<
  ChipProps<typeof PololuQTR1AReflectanceSensorCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuQTR1AReflectanceSensorCarrier = (
  props: PololuQTR1AReflectanceSensorCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu QTR-1A Reflectance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuQTR1AReflectanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuQTR1AReflectanceSensorCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={PololuQTR1AReflectanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);
