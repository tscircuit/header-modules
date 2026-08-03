import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** KY-038 Microphone Sound Sensor Module — analog/digital. */
export const KY038MicrophoneSoundSensorModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(KY-038 Microphone Sound)" as const;

export const KY038MicrophoneSoundSensorModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const;

export const KY038MicrophoneSoundSensorModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  IN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  GAIN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SHDN: { includeInBoardPinout: true },
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

export type KY038MicrophoneSoundSensorModuleProps = Omit<
  ChipProps<typeof KY038MicrophoneSoundSensorModule_PIN_LABELS>,
  FixedProps
>;

export const KY038MicrophoneSoundSensorModule = (
  props: KY038MicrophoneSoundSensorModuleProps,
) => (
  <chip
    {...props}
    displayName="KY-038 Microphone Sound Sensor Module"
    mfn="Generic"
    footprint={KY038MicrophoneSoundSensorModule_FOOTPRINT}
    pinLabels={KY038MicrophoneSoundSensorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "IN",
      pin4: "OUT",
      pin5: "GAIN",
      pin6: "SHDN",
    }}
    pinAttributes={KY038MicrophoneSoundSensorModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "IN"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT", "GAIN", "SHDN"],
      },
    }}
  />
);
