import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SW-520D Ball Tilt Sensor Module — digital. */
export const SW520DBallTiltSensorModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SW-520D Ball Tilt)" as const;

export const SW520DBallTiltSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const SW520DBallTiltSensorModule_PIN_ATTRIBUTES = {
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

export type SW520DBallTiltSensorModuleProps = Omit<
  ChipProps<typeof SW520DBallTiltSensorModule_PIN_LABELS>,
  FixedProps
>;

export const SW520DBallTiltSensorModule = (
  props: SW520DBallTiltSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="SW-520D Ball Tilt Sensor Module"
    mfn="Generic"
    footprint={SW520DBallTiltSensorModule_FOOTPRINT}
    pinLabels={SW520DBallTiltSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SW520DBallTiltSensorModule_PIN_ATTRIBUTES}
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
