import { PololuA4988StepperMotorDriverCarrier, SeeedXiaoRP2040 } from "../index"

/**
 * USB-powered XIAO RP2040 logic controlling a separately powered A4988.
 * D0 generates STEP, D1 sets DIR, and D2 drives active-low ENABLE.
 */
export const XiaoRp2040A4988StepperController = () => (
  <board width="70mm" height="38mm">
    <SeeedXiaoRP2040 name="U_MCU" pcbX={-21} schX={-4} />
    <PololuA4988StepperMotorDriverCarrier name="U_DRIVER" pcbX={5} schX={1} />

    <pinheader
      name="MOTOR_POWER"
      pinCount={2}
      pinLabels={["VMOT", "GND"]}
      footprint="pinrow2_p5.08mm_id1.2mm_od2.2mm"
      supplierPartNumbers={{}}
      showSilkscreenPinLabels
      pcbX={31}
      pcbY={-11}
      pcbRotation={90}
      schX={5}
      schY={-2}
    />
    <pinheader
      name="STEPPER_MOTOR"
      pinCount={4}
      pinLabels={["1A", "1B", "2A", "2B"]}
      footprint="pinrow4_p2.54mm_id1mm_od1.8mm"
      supplierPartNumbers={{}}
      showSilkscreenPinLabels
      pcbX={27}
      pcbY={7}
      pcbRotation={90}
      schX={5}
      schY={1}
    />
    <capacitor
      name="C_VMOT"
      capacitance="100uF"
      maxVoltageRating="50V"
      polarized
      footprint="electrolytic_p5mm_d8mm"
      supplierPartNumbers={{}}
      pcbX={20}
      pcbY={-10}
      schX={2.5}
      schY={-2.5}
    />

    <trace name="step" from=".U_MCU > .D0" to=".U_DRIVER > .STEP" />
    <trace name="direction" from=".U_MCU > .D1" to=".U_DRIVER > .DIR" />
    <trace name="enable" from=".U_MCU > .D2" to=".U_DRIVER > .ENABLE" />

    <trace name="usb_5v" from=".U_MCU > .5V" to="net.USB_5V" />
    <trace name="logic_3v3_source" from=".U_MCU > .3V3" to="net.LOGIC_3V3" />
    <trace
      name="driver_logic_power"
      from=".U_DRIVER > .VDD"
      to="net.LOGIC_3V3"
    />
    <trace name="reset_high" from=".U_DRIVER > .RESET" to="net.LOGIC_3V3" />
    <trace name="sleep_high" from=".U_DRIVER > .SLEEP" to="net.LOGIC_3V3" />

    <trace name="mcu_ground" from=".U_MCU > .GND" to="net.GND" />
    <trace
      name="driver_logic_ground"
      from=".U_DRIVER > .GND_LOGIC"
      to="net.GND"
    />
    <trace
      name="driver_motor_ground"
      from=".U_DRIVER > .GND_MOTOR"
      to="net.GND"
      thickness="1mm"
    />
    <trace name="full_step_ms1" from=".U_DRIVER > .MS1" to="net.GND" />
    <trace name="full_step_ms2" from=".U_DRIVER > .MS2" to="net.GND" />
    <trace name="full_step_ms3" from=".U_DRIVER > .MS3" to="net.GND" />
    <trace
      name="motor_power_ground"
      from=".MOTOR_POWER > .GND"
      to="net.GND"
      thickness="1mm"
    />
    <trace
      name="bulk_cap_ground"
      from=".C_VMOT > .neg"
      to="net.GND"
      thickness="1mm"
    />

    <trace
      name="motor_power_input"
      from=".MOTOR_POWER > .VMOT"
      to="net.VMOT"
      thickness="1mm"
    />
    <trace
      name="driver_motor_power"
      from=".U_DRIVER > .VMOT"
      to="net.VMOT"
      thickness="1mm"
    />
    <trace
      name="bulk_cap_power"
      from=".C_VMOT > .pos"
      to="net.VMOT"
      thickness="1mm"
    />

    <trace
      name="motor_1a"
      from=".U_DRIVER > .1A"
      to=".STEPPER_MOTOR > .1A"
      thickness="1mm"
    />
    <trace
      name="motor_1b"
      from=".U_DRIVER > .1B"
      to=".STEPPER_MOTOR > .1B"
      thickness="1mm"
    />
    <trace
      name="motor_2a"
      from=".U_DRIVER > .2A"
      to=".STEPPER_MOTOR > .2A"
      thickness="1mm"
    />
    <trace
      name="motor_2b"
      from=".U_DRIVER > .2B"
      to=".STEPPER_MOTOR > .2B"
      thickness="1mm"
    />

    <pcbnotetext
      text="VMOT: 8–35V — never connect to XIAO VIN"
      pcbX={10}
      pcbY={17}
      fontSize="0.6mm"
    />
  </board>
)

export default XiaoRp2040A4988StepperController
