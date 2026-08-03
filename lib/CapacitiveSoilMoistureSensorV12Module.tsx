import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Capacitive Soil Moisture Sensor v1.2 Module — analog. */
export const CapacitiveSoilMoistureSensorV12Module_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Capacitive Soil Moisture v1.2)" as const;

export const CapacitiveSoilMoistureSensorV12Module_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const CapacitiveSoilMoistureSensorV12Module_PIN_ATTRIBUTES = {
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

export type CapacitiveSoilMoistureSensorV12ModuleProps = Omit<
  ChipProps<typeof CapacitiveSoilMoistureSensorV12Module_PIN_LABELS>,
  FixedProps
>;

export const CapacitiveSoilMoistureSensorV12Module = (
  props: CapacitiveSoilMoistureSensorV12ModuleProps,
) => (
  <chip
    {...props}
    displayName="Capacitive Soil Moisture Sensor v1.2 Module"
    mfn="Generic"
    footprint={CapacitiveSoilMoistureSensorV12Module_FOOTPRINT}
    pinLabels={CapacitiveSoilMoistureSensorV12Module_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={CapacitiveSoilMoistureSensorV12Module_PIN_ATTRIBUTES}
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
