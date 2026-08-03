import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout — analog. */
export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Sharp GP2Y0A21YK0F IR Distance)" as const;

export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_ATTRIBUTES = {
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

export type SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakoutProps = Omit<
  ChipProps<typeof SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS>,
  FixedProps
>;

export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout = (
  props: SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout"
    mfn="Generic"
    footprint={SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_FOOTPRINT}
    pinLabels={SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={
      SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_ATTRIBUTES
    }
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
