import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic SN65HVD230 CAN Transceiver Module — logic/CAN. */
export const GenericSN65HVD230CANTransceiverModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic SN65HVD230 CAN Transce)" as const;

export const GenericSN65HVD230CANTransceiverModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CANH"],
  pin4: ["CANL"],
  pin5: ["RX"],
  pin6: ["TX"],
} as const;

export const GenericSN65HVD230CANTransceiverModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  CANH: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  CANL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
  },
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
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

export type GenericSN65HVD230CANTransceiverModuleProps = Omit<
  ChipProps<typeof GenericSN65HVD230CANTransceiverModule_PIN_LABELS>,
  FixedProps
>;

export const GenericSN65HVD230CANTransceiverModule = (
  props: GenericSN65HVD230CANTransceiverModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic SN65HVD230 CAN Transceiver Module"
    mfn="Generic"
    footprint={GenericSN65HVD230CANTransceiverModule_FOOTPRINT}
    pinLabels={GenericSN65HVD230CANTransceiverModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "CANH",
      pin4: "CANL",
      pin5: "RX",
      pin6: "TX",
    }}
    pinAttributes={GenericSN65HVD230CANTransceiverModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "CANH"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CANL", "RX", "TX"],
      },
    }}
  />
);
