import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SW-420 Vibration Sensor Module — digital. */
export const SW420VibrationSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SW-420 Vibration)" as const;

export const SW420VibrationSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const SW420VibrationSensorModule_PIN_ATTRIBUTES = {
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

export type SW420VibrationSensorModuleProps = Omit<
  ChipProps<typeof SW420VibrationSensorModule_PIN_LABELS>,
  FixedProps
>;

export const SW420VibrationSensorModule = (
  props: SW420VibrationSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="SW-420 Vibration Sensor Module"
    mfn="Generic"
    footprint={SW420VibrationSensorModule_FOOTPRINT}
    pinLabels={SW420VibrationSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SW420VibrationSensorModule_PIN_ATTRIBUTES}
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
