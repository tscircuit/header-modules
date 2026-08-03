import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic Pulse Sensor Amped Module — analog photoplethysmography. */
export const GenericPulseSensorAmpedModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic Pulse Amped)" as const;

export const GenericPulseSensorAmpedModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericPulseSensorAmpedModule_PIN_ATTRIBUTES = {
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

export type GenericPulseSensorAmpedModuleProps = Omit<
  ChipProps<typeof GenericPulseSensorAmpedModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPulseSensorAmpedModule = (
  props: GenericPulseSensorAmpedModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic Pulse Sensor Amped Module"
    mfn="Generic"
    footprint={GenericPulseSensorAmpedModule_FOOTPRINT}
    pinLabels={GenericPulseSensorAmpedModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericPulseSensorAmpedModule_PIN_ATTRIBUTES}
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
