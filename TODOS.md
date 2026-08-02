# Header module backlog

Candidate modules for `@tscircuit/header-modules`. Every item below is a
standalone development board, carrier, or breakout that is commonly supplied
with 0.1 in (2.54 mm) male headers, includes 0.1 in header strips, or exposes
0.1 in through-holes intended for breadboard/header use.

This is a discovery backlog, not verified footprint data. Before implementing
an item:

1. Confirm the exact manufacturer/product revision is active.
2. Confirm the physical header pitch, row spacing, pin numbering direction,
   board outline, and which side receives male pins from the official drawing.
3. Model the module as one `<chip />` whose footprint consists only of the
   female-header sockets on the carrier PCB.
4. Define an explicit `pinLabels` object and an explicit `pinAttributes` entry
   for every primary pin label. Do not derive either object with generated
   string keys.
5. Add footprint, pin-attribute, Circuit JSON, schematic-placement, and visual
   snapshot tests.

The order within each section is a rough priority based on ecosystem reach,
availability, clone prevalence, and usefulness in carrier-board designs. The
list was reviewed on 2026-08-01 against current catalogs and documentation from
[Adafruit breakouts](https://www.adafruit.com/category/42),
[Adafruit sensors](https://www.adafruit.com/category/35),
[SparkFun documentation](https://docs.sparkfun.com/),
[Pololu carriers](https://www.pololu.com/category/7/electronics),
[Seeed Studio XIAO](https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/),
[Arduino Nano](https://store.arduino.cc/collections/nano-family),
[Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/),
[PJRC Teensy](https://www.pjrc.com/teensy/), and common
[Amazon breadboard-module searches](https://www.amazon.com/s?k=arduino+breadboard+sensor+module).

Already implemented and intentionally omitted: Adafruit Feather RP2040,
Seeed XIAO RP2040, and Pololu A4988 Stepper Motor Driver Carrier.

Implemented on the current branch: all 427 catalog entries. The two model-specific
Feather entries were implemented first; the remaining entries are exported from
the generated catalog with explicit interface pin maps and female-header
footprints. Their checked items remain in the list as an audit trail; the
component source and tests are the authoritative implementation record.

Catalog status: **427 implemented module candidates; 0 unchecked entries**.

| Category | Candidates |
| --- | ---: |
| Microcontroller and development boards | 61 |
| Environmental and air-quality sensors | 35 |
| Light, color, UV, and thermal sensors | 25 |
| Motion, orientation, and position sensors | 35 |
| Distance, presence, touch, force, and biometric sensors | 30 |
| GNSS and communications | 35 |
| Storage, clocks, adapters, and GPIO expansion | 30 |
| Displays, LEDs, and user input | 35 |
| Motor and actuator drivers | 30 |
| Power conversion and measurement | 36 |
| ADC, DAC, analog, clock, and audio | 30 |
| Common marketplace sensor-kit modules | 45 |
| **Total** | **427** |

## Microcontroller and development boards

- [x] **Adafruit Feather M0 Express** — SAMD21 Feather-format board
- [x] **Adafruit Feather M4 Express** — SAMD51 Feather-format board
- [x] **Adafruit Feather nRF52840 Express** — Bluetooth Feather-format board
- [x] **Adafruit Feather STM32F405 Express** — STM32 Feather-format board
- [x] **Adafruit Feather ESP32 V2** — ESP32 Feather-format board
- [x] **Adafruit Feather ESP32-S2** — ESP32-S2 Feather-format board
- [x] **Adafruit Feather ESP32-S3 4MB Flash / 2MB PSRAM** — ESP32-S3 Feather-format board
- [x] **Adafruit Feather ESP32-S3 TFT** — ESP32-S3 Feather-format board with display
- [x] **Adafruit Feather RP2350** — RP2350 Feather-format board
- [x] **Adafruit ItsyBitsy M0 Express** — compact SAMD21 board
- [x] **Adafruit ItsyBitsy M4 Express** — compact SAMD51 board
- [x] **Adafruit ItsyBitsy nRF52840 Express** — compact Bluetooth board
- [x] **Adafruit ItsyBitsy RP2040** — compact RP2040 board
- [x] **Adafruit ItsyBitsy ESP32** — compact ESP32 board
- [x] **Adafruit QT Py SAMD21** — tiny castellated/0.1 in header-ready board
- [x] **Adafruit QT Py ESP32-S2** — tiny castellated/0.1 in header-ready board
- [x] **Adafruit QT Py ESP32-S3** — tiny castellated/0.1 in header-ready board
- [x] **Adafruit QT Py nRF52840** — tiny castellated/0.1 in header-ready board
- [x] **Adafruit QT Py RP2350** — tiny castellated/0.1 in header-ready board
- [x] **Arduino Nano ATmega328P** — classic Nano dual-row module
- [x] **Arduino Nano Every** — ATmega4809 Nano module
- [x] **Arduino Nano 33 IoT** — SAMD21 + wireless Nano module
- [x] **Arduino Nano 33 BLE** — nRF52840 Nano module
- [x] **Arduino Nano 33 BLE Sense Rev2** — sensor-rich nRF52840 Nano module
- [x] **Arduino Nano ESP32** — ESP32-S3 Nano module
- [x] **Arduino Nano RP2040 Connect** — RP2040 + wireless Nano module
- [x] **Arduino Nano Matter** — MGM240S Matter/Thread Nano module
- [x] **Raspberry Pi Pico H** — headered RP2040 module
- [x] **Raspberry Pi Pico WH** — headered wireless RP2040 module
- [x] **Raspberry Pi Pico 2 with headers** — RP2350 module
- [x] **Raspberry Pi Pico 2 W with headers** — wireless RP2350 module
- [x] **Pimoroni PGA2350** — RP2350 board with breadboard pin grid
- [x] **Pimoroni Tiny 2350** — compact RP2350 header-ready board
- [x] **Seeed Studio XIAO SAMD21** — XIAO-format SAMD21 board
- [x] **Seeed Studio XIAO nRF52840** — XIAO-format Bluetooth board
- [x] **Seeed Studio XIAO nRF52840 Sense** — XIAO-format Bluetooth sensor board
- [x] **Seeed Studio XIAO ESP32C3** — XIAO-format Wi-Fi/BLE board
- [x] **Seeed Studio XIAO ESP32C6** — XIAO-format Wi-Fi 6/Thread board
- [x] **Seeed Studio XIAO ESP32S3** — XIAO-format ESP32-S3 board
- [x] **Seeed Studio XIAO ESP32S3 Sense** — XIAO-format camera/microphone board
- [x] **Seeed Studio XIAO RA4M1** — XIAO-format Renesas board
- [x] **Seeed Studio XIAO MG24** — XIAO-format Matter/Bluetooth board
- [x] **Seeed Studio XIAO RP2350** — XIAO-format RP2350 board
- [x] **SparkFun Pro Micro ATmega32U4** — classic Pro Micro module
- [x] **SparkFun Qwiic Pro Micro ATmega32U4** — Pro Micro with Qwiic
- [x] **SparkFun Pro Micro RP2040** — RP2040 Pro Micro module
- [x] **SparkFun Pro Micro RP2350** — RP2350 Pro Micro module
- [x] **SparkFun Pro Micro ESP32-C3** — ESP32-C3 Pro Micro module
- [x] **SparkFun Thing Plus ESP32 WROOM USB-C** — Feather-compatible ESP32 board
- [x] **SparkFun Thing Plus ESP32-C6** — Feather-compatible ESP32-C6 board
- [x] **SparkFun Thing Plus ESP32-S3** — Feather-compatible ESP32-S3 board
- [x] **SparkFun Thing Plus RP2350** — Feather-compatible RP2350 board
- [x] **SparkFun Thing Plus RA6M5** — Feather-compatible Renesas board
- [x] **PJRC Teensy 4.0** — compact i.MX RT1062 module
- [x] **PJRC Teensy 4.1** — expanded i.MX RT1062 module
- [x] **Espressif ESP32-DevKitC V4** — standard ESP32 dual-row dev board
- [x] **Espressif ESP32-S3-DevKitC-1** — ESP32-S3 dual-row dev board
- [x] **Espressif ESP32-C3-DevKitM-1** — ESP32-C3 dual-row dev board
- [x] **NodeMCU ESP8266 DevKit v1.0** — common marketplace ESP8266 board
- [x] **LOLIN D1 mini v4** — compact ESP8266 dual-row board
- [x] **WeAct STM32F411 Black Pill** — common STM32 dual-row module

## Environmental, temperature, pressure, and air-quality sensors

- [x] **Adafruit AHT20 Temperature & Humidity Breakout** — I2C
- [x] **Adafruit AHT21 Temperature & Humidity Breakout** — I2C
- [x] **Adafruit SHT31-D Temperature & Humidity Breakout** — I2C
- [x] **Adafruit SHT40 Temperature & Humidity Breakout** — I2C
- [x] **Adafruit SHT41 Temperature & Humidity Breakout** — I2C
- [x] **Adafruit HDC3022 Precision Temperature & Humidity Breakout** — I2C
- [x] **Adafruit HTU21D-F Temperature & Humidity Breakout** — I2C
- [x] **Adafruit Si7021 Temperature & Humidity Breakout** — I2C
- [x] **Adafruit BME280 Temperature/Humidity/Pressure Breakout** — I2C/SPI
- [x] **Adafruit BME680 Environmental Sensor Breakout** — I2C/SPI
- [x] **SparkFun BME688 Environmental Sensor Breakout** — I2C/SPI
- [x] **Adafruit BMP280 Pressure Sensor Breakout** — I2C/SPI
- [x] **Adafruit BMP388 Precision Barometric Pressure Breakout** — I2C/SPI
- [x] **Adafruit BMP390 Precision Barometric Pressure Breakout** — I2C/SPI
- [x] **Adafruit BMP580 Pressure Sensor Breakout** — I2C/SPI
- [x] **Adafruit DPS310 Precision Barometric Pressure Breakout** — I2C/SPI
- [x] **Adafruit LPS22HB Pressure Sensor Breakout** — I2C/SPI
- [x] **Adafruit MCP9808 High-Accuracy Temperature Breakout** — I2C
- [x] **Adafruit TMP117 High-Accuracy Temperature Breakout** — I2C
- [x] **Adafruit ADT7410 High-Accuracy Temperature Breakout** — I2C
- [x] **Adafruit MLX90614 Contactless IR Thermometer Breakout** — I2C
- [x] **Adafruit MCP9600 Thermocouple Amplifier Breakout** — I2C
- [x] **Adafruit MAX31855 Thermocouple Amplifier Breakout** — SPI
- [x] **Adafruit MAX31856 Universal Thermocouple Amplifier Breakout** — SPI
- [x] **Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout** — SPI
- [x] **Adafruit SCD30 NDIR CO2 Breakout** — I2C
- [x] **Adafruit SCD40 CO2 Sensor Breakout** — I2C
- [x] **Adafruit SCD41 CO2 Sensor Breakout** — I2C
- [x] **Adafruit SGP30 Air Quality Sensor Breakout** — I2C
- [x] **Adafruit SGP40 Air Quality Sensor Breakout** — I2C
- [x] **Adafruit SGP41 Air Quality Sensor Breakout** — I2C
- [x] **SparkFun ENS160 Indoor Air Quality Breakout** — I2C/SPI
- [x] **SparkFun ENS160 + BME280 Environmental Combo Breakout** — I2C
- [x] **Adafruit PMSA003I Particulate Matter Sensor Breakout** — I2C/UART adapter
- [x] **SparkFun BMV080 Particulate Matter Sensor Breakout** — I2C/SPI

## Light, color, UV, and thermal-array sensors

- [x] **Adafruit BH1750 Ambient Light Sensor Breakout** — I2C
- [x] **Adafruit TSL2591 High Dynamic Range Light Sensor Breakout** — I2C
- [x] **Adafruit TSL2561 Digital Luminosity Sensor Breakout** — I2C
- [x] **Adafruit VEML7700 Lux Sensor Breakout** — I2C
- [x] **SparkFun VEML6030 Ambient Light Sensor Breakout** — I2C
- [x] **Adafruit LTR390 UV Light Sensor Breakout** — I2C
- [x] **SparkFun VEML6075 UVA/UVB Sensor Breakout** — I2C
- [x] **Adafruit AS7341 10-Channel Light/Color Sensor Breakout** — I2C
- [x] **SparkFun AS7343 14-Channel Spectral Sensor Breakout** — I2C
- [x] **SparkFun AS7262 Visible Spectral Sensor Breakout** — I2C/UART
- [x] **SparkFun AS7263 NIR Spectral Sensor Breakout** — I2C/UART
- [x] **Adafruit APDS9960 Proximity/Gesture/RGB Breakout** — I2C
- [x] **Adafruit APDS9250 Digital RGB/IR Sensor Breakout** — I2C
- [x] **Adafruit APDS9999 Proximity/Lux/Color Sensor Breakout** — I2C
- [x] **SparkFun OPT4048 Tristimulus Color Sensor Breakout** — I2C
- [x] **Adafruit VCNL4040 Proximity and Lux Sensor Breakout** — I2C
- [x] **Adafruit VCNL4020 Proximity and Light Sensor Breakout** — I2C
- [x] **SparkFun TEMT6000 Ambient Light Sensor Breakout** — analog
- [x] **Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout** — analog
- [x] **SparkFun ML8511 UV Sensor Breakout** — analog
- [x] **Adafruit AMG8833 Grid-EYE 8x8 Thermal Camera Breakout** — I2C
- [x] **Adafruit MLX90640 24x32 Thermal Camera Breakout, 55 degree** — I2C
- [x] **Adafruit MLX90640 24x32 Thermal Camera Breakout, 110 degree** — I2C
- [x] **Adafruit MLX90641 16x12 Thermal Camera Breakout** — I2C
- [x] **SparkFun MLX90632 FIR Temperature Sensor Breakout** — I2C

## Accelerometers, IMUs, magnetometers, and position sensors

- [x] **Adafruit LIS3DH Triple-Axis Accelerometer Breakout** — I2C/SPI
- [x] **Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [x] **Pololu LIS331HH High-g Accelerometer Carrier** — I2C/SPI
- [x] **Adafruit ADXL343 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [x] **Generic ADXL345 GY-291 Accelerometer Module** — I2C/SPI
- [x] **SparkFun ADXL375 High-g Accelerometer Breakout** — I2C/SPI
- [x] **Adafruit MMA8451 Triple-Axis Accelerometer Breakout** — I2C
- [x] **SparkFun BMA400 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [x] **SparkFun KX134 High-g Accelerometer Breakout** — I2C/SPI
- [x] **Adafruit L3GD20H Triple-Axis Gyroscope Breakout** — I2C/SPI
- [x] **Adafruit LSM6DSOX 6-DoF IMU Breakout** — I2C/SPI
- [x] **Adafruit LSM6DS3TR-C 6-DoF IMU Breakout** — I2C/SPI
- [x] **Adafruit ISM330DHCX 6-DoF IMU Breakout** — I2C/SPI
- [x] **SparkFun ICM-20948 9-DoF IMU Breakout** — I2C/SPI
- [x] **SparkFun ICM-42688-P 6-DoF IMU Breakout** — I2C/SPI
- [x] **Generic MPU-6050 GY-521 IMU Module** — I2C
- [x] **Generic MPU-9250 GY-91 9-DoF Module** — I2C/SPI
- [x] **Adafruit BNO055 Absolute Orientation Breakout** — I2C/UART
- [x] **Adafruit BNO085 9-DoF Orientation Breakout** — I2C/SPI/UART
- [x] **SparkFun BNO086 9-DoF IMU Breakout** — I2C/SPI/UART
- [x] **Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout** — I2C
- [x] **Adafruit LSM303AGR Accelerometer/Magnetometer Breakout** — I2C/SPI
- [x] **Pololu LIS3MDL 3-Axis Magnetometer Carrier** — I2C/SPI
- [x] **Adafruit MMC5603 Triple-Axis Magnetometer Breakout** — I2C
- [x] **SparkFun MLX90393 Triple-Axis Magnetometer Breakout** — I2C/SPI
- [x] **Adafruit TLV493D Triple-Axis Magnetometer Breakout** — I2C
- [x] **Adafruit TMAG5273 Triple-Axis Hall Sensor Breakout** — I2C
- [x] **Generic QMC5883L GY-271 Compass Module** — I2C
- [x] **Adafruit AS5600 Magnetic Angle Sensor Breakout** — I2C/analog
- [x] **Generic AS5048A Magnetic Encoder Breakout** — SPI/PWM
- [x] **Generic AS5047P Magnetic Encoder Breakout** — SPI/ABI
- [x] **Infineon TLE5012B Magnetic Angle Sensor Breakout** — SPI/PWM
- [x] **Generic MT6701 Magnetic Encoder Module** — SSI/ABI/UVW
- [x] **Adafruit LSM6DS3TR-C + LIS3MDL 9-DoF Breakout** — I2C/SPI
- [x] **SparkFun Optical Tracking Odometry Sensor Breakout** — SPI/Qwiic

## Distance, presence, touch, force, and biometric sensors

- [x] **Pololu VL53L0X Time-of-Flight Distance Sensor Carrier** — I2C
- [x] **Pololu VL53L1X Time-of-Flight Distance Sensor Carrier** — I2C
- [x] **Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier** — I2C
- [x] **Pololu VL53L4CX Time-of-Flight Distance Sensor Carrier** — I2C
- [x] **Adafruit VL53L5CX 8x8 Time-of-Flight Sensor Breakout** — I2C
- [x] **Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout** — I2C
- [x] **Adafruit VL6180X Time-of-Flight Distance Sensor Breakout** — I2C
- [x] **Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout** — I2C
- [x] **SparkFun TMF8801 Time-of-Flight Sensor Breakout** — I2C
- [x] **Generic HC-SR04 Ultrasonic Distance Module** — trigger/echo
- [x] **Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module** — trigger/echo
- [x] **Generic US-100 Ultrasonic Distance Module** — trigger/echo/UART
- [x] **Generic JSN-SR04T Waterproof Ultrasonic Module** — trigger/echo
- [x] **Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout** — analog
- [x] **Generic HC-SR501 PIR Motion Sensor Module** — digital
- [x] **Generic AM312 Mini PIR Motion Sensor Module** — digital
- [x] **SparkFun Panasonic EKMC PIR Breakout** — digital
- [x] **Generic RCWL-0516 Microwave Motion Sensor Module** — digital
- [x] **HLK-LD2410C 24GHz Presence Radar Module** — UART/digital
- [x] **Adafruit MPR121 12-Key Capacitive Touch Breakout** — I2C
- [x] **Adafruit CAP1188 8-Key Capacitive Touch Breakout** — I2C/SPI
- [x] **Adafruit AT42QT1010 Capacitive Touch Breakout** — digital
- [x] **Adafruit AT42QT1070 5-Pad Capacitive Touch Breakout** — digital
- [x] **Generic TTP223 Capacitive Touch Module** — digital
- [x] **SparkFun HX711 Load Cell Amplifier Breakout** — two-wire digital
- [x] **Adafruit NAU7802 24-Bit Load Cell ADC Breakout** — I2C
- [x] **SparkFun FSR Force Sensitive Resistor Adapter Breakout** — analog
- [x] **SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout** — I2C
- [x] **Generic MAX30102 Heart-Rate/Oximeter Module** — I2C
- [x] **SparkFun AD8232 Single-Lead ECG Monitor Breakout** — analog

## GNSS, radio, wireless, and wired communications

- [x] **Adafruit Ultimate GPS Breakout, PA6H/MTK3339** — UART
- [x] **Adafruit PA1010D Mini GPS Breakout** — I2C/UART
- [x] **SparkFun u-blox MAX-M10S GNSS Breakout** — I2C/UART/SPI
- [x] **SparkFun u-blox SAM-M10Q GNSS Breakout** — I2C/UART
- [x] **SparkFun u-blox NEO-M9N GNSS Breakout** — I2C/UART/SPI
- [x] **SparkFun u-blox ZED-F9P RTK GNSS Breakout** — I2C/UART/SPI
- [x] **SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout** — I2C/UART/SPI
- [x] **Generic u-blox NEO-6M GY-GPS6MV2 Module** — UART
- [x] **Generic u-blox NEO-M8N GPS Module** — UART/I2C
- [x] **Waveshare L76K GNSS Module** — UART
- [x] **Nordic nRF24L01+ 2.4GHz Radio Module** — SPI
- [x] **nRF24L01+ PA/LNA Antenna Module** — SPI
- [x] **Adafruit RFM69HCW Packet Radio Breakout** — SPI
- [x] **Adafruit RFM95W LoRa Radio Breakout** — SPI
- [x] **Adafruit RFM96W LoRa Radio Breakout** — SPI
- [x] **Ai-Thinker Ra-02 SX1278 LoRa Module** — SPI
- [x] **Waveshare SX1262 LoRa HAT-Style Core Module** — SPI/UART header variant
- [x] **Seeed Wio-E5 Mini LoRaWAN Board** — UART
- [x] **REYAX RYLR896 LoRa Module** — UART
- [x] **Generic HC-05 Bluetooth Classic Module** — UART
- [x] **Generic HC-06 Bluetooth Classic Module** — UART
- [x] **Generic HM-10 BLE Module with Baseboard** — UART
- [x] **Espressif ESP-01S Wi-Fi Module** — 2x4 header
- [x] **SparkFun XBee Explorer Regulated** — 0.1 in XBee adapter
- [x] **WIZnet W5500 Ethernet Module** — SPI
- [x] **WIZnet WIZ850io Ethernet Module** — SPI dual-row
- [x] **Generic ENC28J60 Ethernet Module** — SPI
- [x] **Generic MCP2515 CAN Bus Module** — SPI
- [x] **Generic SN65HVD230 CAN Transceiver Module** — logic/CAN
- [x] **Generic MAX485 RS-485 Transceiver Module** — UART/RS-485
- [x] **SparkFun SP3485 RS-485 Breakout** — UART/RS-485
- [x] **Generic MAX3232 RS-232 Transceiver Module** — UART/RS-232
- [x] **Adafruit PN532 NFC/RFID Controller Breakout** — I2C/SPI/UART
- [x] **Generic MFRC522 RFID Reader Module** — SPI
- [x] **Adafruit ST25DV16K I2C RFID EEPROM Breakout** — I2C/RF

## Storage, clocks, bus adapters, and GPIO expansion

- [x] **Adafruit DS3231 Precision RTC Breakout** — I2C
- [x] **Adafruit PCF8523 RTC Breakout** — I2C
- [x] **Adafruit DS1307 RTC Breakout** — I2C
- [x] **Adafruit RV-3028 RTC Breakout** — I2C
- [x] **SparkFun RV-8803 RTC Breakout** — I2C
- [x] **Generic PCF8563 RTC Module** — I2C
- [x] **SparkFun DS3234 DeadOn RTC Breakout** — SPI
- [x] **Adafruit Micro SD SPI/SDIO Card Breakout** — SPI/SDIO
- [x] **Pololu Breakout Board for microSD Card** — raw SD contacts
- [x] **Generic MicroSD Module with 3.3V Regulator and Level Shifter** — SPI
- [x] **Adafruit W25Q128 SPI Flash Breakout** — SPI
- [x] **Adafruit MB85RC256V I2C FRAM Breakout** — I2C
- [x] **Adafruit MB85RS4MT SPI FRAM Breakout** — SPI
- [x] **Generic 24LC256 EEPROM Module** — I2C
- [x] **Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout** — I2C
- [x] **Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout** — I2C
- [x] **SparkFun PCA9615 Differential I2C Breakout** — differential I2C
- [x] **Adafruit LTC4311 I2C Active Terminator Breakout** — I2C
- [x] **Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout** — I2C/1-Wire
- [x] **Adafruit MCP23017 16-Bit GPIO Expander Breakout** — I2C
- [x] **Adafruit MCP23008 8-Bit GPIO Expander Breakout** — I2C
- [x] **Generic PCF8574 I2C GPIO Expander Module** — I2C
- [x] **Adafruit TCA9534 8-Bit GPIO Expander Breakout** — I2C
- [x] **Generic PCA9555 16-Bit GPIO Expander Module** — I2C
- [x] **Adafruit AW9523 GPIO/LED Driver Breakout** — I2C
- [x] **Adafruit FT232H USB-to-Multi-Protocol Breakout** — USB/I2C/SPI/UART
- [x] **SparkFun FT231X USB-to-UART Breakout** — USB/UART
- [x] **Generic CP2102 USB-to-UART Module** — USB/UART
- [x] **Generic CH340G USB-to-UART Module** — USB/UART
- [x] **Adafruit MAX3421E USB Host Breakout** — SPI/USB host

## Displays, LEDs, and user-input modules

- [x] **Generic 0.96 in SSD1306 OLED I2C Module** — 128x64
- [x] **Adafruit 0.96 in SSD1306 OLED SPI Breakout** — 128x64
- [x] **Generic 1.3 in SH1106 OLED I2C Module** — 128x64
- [x] **Adafruit 1.5 in SSD1327 Grayscale OLED Breakout** — 128x128
- [x] **Adafruit 1.27 in SSD1351 Color OLED Breakout** — 128x96
- [x] **Adafruit 1.5 in SSD1351 Color OLED Breakout** — 128x128
- [x] **Generic 1.44 in ST7735 TFT Module** — SPI
- [x] **Adafruit 1.8 in ST7735R TFT Breakout** — SPI
- [x] **Adafruit 2.0 in ST7789 TFT Breakout** — SPI
- [x] **Generic 2.4 in ILI9341 TFT Module** — SPI/parallel variants
- [x] **Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout** — SPI
- [x] **Adafruit 3.5 in HX8357 TFT Touchscreen Breakout** — SPI
- [x] **Waveshare 1.28 in GC9A01 Round LCD Module** — SPI
- [x] **Waveshare 1.54 in e-Paper Display Module** — SPI
- [x] **Waveshare 2.13 in e-Paper Display Module** — SPI
- [x] **Waveshare 2.9 in e-Paper Display Module** — SPI
- [x] **Waveshare 4.2 in e-Paper Display Module** — SPI
- [x] **Generic MAX7219 8x8 LED Matrix Module** — SPI-like
- [x] **Adafruit HT16K33 8x8 LED Matrix Backpack** — I2C
- [x] **Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack** — I2C
- [x] **Adafruit HT16K33 4-Digit 7-Segment Backpack** — I2C
- [x] **Adafruit HT16K33 4-Character 14-Segment Backpack** — I2C
- [x] **Adafruit IS31FL3731 16x9 Charlieplex LED Driver Breakout** — I2C
- [x] **Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout** — I2C
- [x] **Adafruit TLC5947 24-Channel PWM LED Driver Breakout** — serial
- [x] **Adafruit TLC59711 12-Channel PWM LED Driver Breakout** — SPI-like
- [x] **Adafruit NeoPixel Stick, 8 x WS2812B** — single-wire
- [x] **Adafruit DotStar Stick, 8 x APA102** — clock/data
- [x] **Adafruit Seesaw Rotary Encoder Breakout** — I2C
- [x] **SparkFun Qwiic Twist RGB Rotary Encoder Breakout** — I2C
- [x] **Adafruit 5-Way Navigation Switch Breakout** — digital
- [x] **SparkFun Thumb Joystick Breakout** — dual analog + switch
- [x] **Generic KY-040 Rotary Encoder Module** — quadrature + switch
- [x] **Generic TTP229 16-Key Capacitive Keypad Module** — serial/digital
- [x] **Generic 4x4 Matrix Keypad 0.1 in Breakout Adapter** — 8-pin matrix

## Motor, stepper, servo, relay, and actuator drivers

- [x] **Pololu DRV8825 Stepper Motor Driver Carrier** — StepStick-compatible
- [x] **Pololu DRV8834 Low-Voltage Stepper Driver Carrier** — StepStick-compatible
- [x] **Pololu DRV8880 Stepper Motor Driver Carrier** — microstepping carrier
- [x] **Pololu STSPIN220 Low-Voltage Stepper Driver Carrier** — StepStick-compatible
- [x] **Pololu TB67S249FTG Stepper Motor Driver Carrier** — high-current carrier
- [x] **Trinamic TMC2209 StepStick Module** — UART stepper driver
- [x] **Trinamic TMC2208 StepStick Module** — UART stepper driver
- [x] **Trinamic TMC2130 StepStick Module** — SPI stepper driver
- [x] **Trinamic TMC5160 StepStick Module** — SPI high-voltage stepper driver
- [x] **Pololu MP6500 Stepper Motor Driver Carrier** — StepStick-compatible
- [x] **Generic LV8729 Stepper Motor Driver Module** — StepStick-compatible
- [x] **Generic ULN2003 28BYJ-48 Stepper Driver Board** — 1x4 logic header
- [x] **Generic L298N Dual H-Bridge Module** — logic/control headers
- [x] **SparkFun TB6612FNG Dual Motor Driver Breakout** — dual H-bridge
- [x] **Adafruit DRV8833 Dual Motor Driver Breakout** — dual H-bridge
- [x] **Adafruit DRV8871 DC Motor Driver Breakout** — single H-bridge
- [x] **Pololu DRV8876 Motor Driver Carrier** — single H-bridge
- [x] **Pololu DRV8251A Motor Driver Carrier** — single H-bridge
- [x] **Pololu MAX14870 Motor Driver Carrier** — single H-bridge
- [x] **Pololu VNH5019 Motor Driver Carrier** — high-current H-bridge
- [x] **Generic BTS7960 IBT-2 Motor Driver Module** — high-current H-bridge
- [x] **Adafruit PCA9685 16-Channel PWM/Servo Driver** — I2C
- [x] **Pololu Micro Maestro 6-Channel USB Servo Controller** — signal headers
- [x] **SparkFun TMC6300 Three-Phase Motor Driver Breakout** — three half-bridges
- [x] **Adafruit DRV8313 Brushless Motor Driver Breakout** — three half-bridges
- [x] **Generic 1-Channel 5V Relay Module** — digital input
- [x] **Generic 2-Channel 5V Relay Module** — digital inputs
- [x] **Generic 4-Channel 5V Relay Module** — digital inputs
- [x] **Generic 1-Channel Solid-State Relay Module** — digital input
- [x] **Adafruit MOSFET Driver Breakout** — logic-controlled load output

## Power conversion, charging, and electrical measurement

- [x] **Adafruit INA219 High-Side Current Sensor Breakout** — I2C
- [x] **Adafruit INA260 Current/Voltage/Power Sensor Breakout** — I2C
- [x] **SparkFun INA228 High-Precision Power Monitor Breakout** — I2C
- [x] **SparkFun INA237 Power Monitor Breakout** — I2C
- [x] **Generic INA3221 Three-Channel Current Sensor Module** — I2C
- [x] **Adafruit PAC1934 Four-Channel Power Monitor Breakout** — I2C
- [x] **Adafruit MAX17048 LiPo Fuel Gauge Breakout** — I2C
- [x] **Adafruit LC709203F LiPoly Fuel Gauge Breakout** — I2C
- [x] **SparkFun BQ27441 LiPo Fuel Gauge Breakout** — I2C
- [x] **Adafruit MPM3610 5V Buck Converter Breakout** — regulated output
- [x] **SparkFun AP3429A Buck Regulator Breakout** — adjustable/fixed variants
- [x] **Adafruit TPS62827 3.3V Buck Converter Breakout** — regulated output
- [x] **Adafruit TPS61023 5V Boost Converter Breakout** — regulated output
- [x] **Adafruit PowerBoost 500 Basic** — 5V boost converter
- [x] **Adafruit PowerBoost 1000 Basic** — 5V boost converter
- [x] **Adafruit MCP73871 Solar LiPo Charger Breakout** — load sharing
- [x] **Adafruit MCP73831 Micro-LiPo Charger Breakout** — LiPo charger
- [x] **Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout** — load sharing
- [x] **Generic TP4056 USB-C Li-Ion Charger/Protection Module** — charger
- [x] **Generic AMS1117-3.3 Regulator Module** — linear regulator
- [x] **Generic AMS1117-5.0 Regulator Module** — linear regulator
- [x] **Generic MP1584 Mini Adjustable Buck Module** — buck converter
- [x] **Generic LM2596 Adjustable Buck Module** — buck converter
- [x] **Generic MT3608 Adjustable Boost Module** — boost converter
- [x] **Generic XL6009 Adjustable Buck-Boost Module** — buck-boost converter
- [x] **Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator** — carrier
- [x] **Pololu S7V8F5 5V Step-Up/Step-Down Regulator** — carrier
- [x] **Pololu D24V5F5 5V Step-Down Regulator** — carrier
- [x] **Pololu D24V22F5 5V Step-Down Regulator** — carrier
- [x] **Pololu D36V6F12 12V Step-Down Regulator** — carrier
- [x] **SparkFun Buck-Boost Converter COM-15208** — adjustable regulator
- [x] **Adafruit LTC4316 I2C Address Translator Breakout** — powered bus utility
- [x] **Generic ACS712 5A Current Sensor Module** — analog
- [x] **Generic ACS712 20A Current Sensor Module** — analog
- [x] **Generic ACS712 30A Current Sensor Module** — analog
- [x] **Generic ZMPT101B AC Voltage Sensor Module** — analog

## ADC, DAC, analog, clock, and audio modules

- [x] **Adafruit ADS1115 16-Bit 4-Channel ADC Breakout** — I2C
- [x] **Adafruit ADS1015 12-Bit 4-Channel ADC Breakout** — I2C
- [x] **Adafruit ADS1219 24-Bit 4-Channel ADC Breakout** — I2C
- [x] **Adafruit ADS122C04 24-Bit ADC Breakout** — I2C
- [x] **Generic MCP3008 10-Bit 8-Channel ADC Breakout** — SPI
- [x] **Generic MCP3208 12-Bit 8-Channel ADC Breakout** — SPI
- [x] **Adafruit MCP3421 18-Bit ADC Breakout** — I2C
- [x] **Adafruit MCP3424 18-Bit 4-Channel ADC Breakout** — I2C
- [x] **Adafruit ADS7830 8-Bit 8-Channel ADC Breakout** — I2C
- [x] **Generic PCF8591 ADC/DAC Module** — I2C
- [x] **Adafruit MCP4725 12-Bit DAC Breakout** — I2C
- [x] **Adafruit MCP4728 Quad 12-Bit DAC Breakout** — I2C
- [x] **Adafruit AD5693R 16-Bit DAC Breakout** — I2C
- [x] **Adafruit DAC7578 Octal 12-Bit DAC Breakout** — I2C
- [x] **Adafruit MAX4466 Electret Microphone Amplifier Breakout** — analog
- [x] **Adafruit MAX9814 AGC Microphone Amplifier Breakout** — analog
- [x] **Adafruit SPH0645 I2S MEMS Microphone Breakout** — I2S
- [x] **Adafruit ICS-43434 I2S MEMS Microphone Breakout** — I2S
- [x] **Adafruit PDM MEMS Microphone Breakout** — PDM
- [x] **Adafruit MAX98357A I2S Class-D Amplifier Breakout** — I2S
- [x] **Adafruit PAM8302 Mono Class-D Amplifier Breakout** — analog audio
- [x] **Generic PAM8403 Stereo Class-D Amplifier Module** — analog audio
- [x] **Adafruit TPA2016 Stereo Class-D Amplifier Breakout** — I2C/audio
- [x] **Adafruit VS1053 Codec + MicroSD Breakout** — SPI/audio
- [x] **Adafruit Audio FX Mini Sound Board, 2MB** — trigger/UART/audio
- [x] **DFRobot DFPlayer Mini MP3 Module** — UART/audio
- [x] **Generic PCM5102A I2S DAC Module** — I2S/audio
- [x] **Adafruit Si5351A Clock Generator Breakout** — I2C
- [x] **Adafruit DS3502 I2C Digital Potentiometer Breakout** — I2C
- [x] **Adafruit DS1841 I2C Logarithmic Potentiometer Breakout** — I2C

## Common Amazon/eBay/AliExpress sensor-kit modules

These names describe standardized clone families rather than a single
manufacturer. Implementation should pick and cite one stable reference board;
do not assume all visually similar listings share a pin order.

- [x] **MQ-2 Smoke/LPG Sensor Module** — analog/digital comparator board
- [x] **MQ-3 Alcohol Sensor Module** — analog/digital comparator board
- [x] **MQ-4 Methane Sensor Module** — analog/digital comparator board
- [x] **MQ-5 LPG/Natural Gas Sensor Module** — analog/digital comparator board
- [x] **MQ-6 LPG/Butane Sensor Module** — analog/digital comparator board
- [x] **MQ-7 Carbon Monoxide Sensor Module** — analog/digital comparator board
- [x] **MQ-8 Hydrogen Sensor Module** — analog/digital comparator board
- [x] **MQ-9 CO/Combustible Gas Sensor Module** — analog/digital comparator board
- [x] **MQ-131 Ozone Sensor Module** — analog/digital comparator board
- [x] **MQ-135 Air Quality Sensor Module** — analog/digital comparator board
- [x] **DHT11 Temperature/Humidity Sensor Module** — single-wire digital
- [x] **DHT22/AM2302 Temperature/Humidity Module** — single-wire digital
- [x] **DS18B20 Temperature Sensor Module** — 1-Wire
- [x] **Capacitive Soil Moisture Sensor v1.2 Module** — analog
- [x] **YL-69/FC-28 Resistive Soil Moisture Module** — analog/digital
- [x] **FC-37/YL-83 Rain Detection Module** — analog/digital
- [x] **Generic Water-Level Sensor Module** — analog
- [x] **KY-026 Flame Sensor Module** — analog/digital
- [x] **KY-038 Microphone Sound Sensor Module** — analog/digital
- [x] **SW-420 Vibration Sensor Module** — digital
- [x] **A3144 Hall-Effect Sensor Module** — digital
- [x] **SW-520D Ball Tilt Sensor Module** — digital
- [x] **KY-032 IR Obstacle Avoidance Module** — digital
- [x] **TCRT5000 Reflective Line Sensor Module** — analog/digital
- [x] **Pololu QTR-1A Reflectance Sensor Carrier** — analog
- [x] **Pololu QTR-1RC Reflectance Sensor Carrier** — RC timing
- [x] **Generic IR Receiver Module, VS1838B/KY-022** — digital
- [x] **Generic IR Transmitter Module, KY-005** — digital
- [x] **Generic Laser Diode Transmitter Module, KY-008** — digital
- [x] **Generic Traffic-Light LED Module** — three digital channels
- [x] **Generic RGB LED Module, KY-016** — three PWM channels
- [x] **Generic Active Buzzer Module, KY-012** — digital
- [x] **Generic Passive Buzzer Module, KY-006** — PWM
- [x] **Generic PC817 Optocoupler Isolation Module** — digital isolation
- [x] **Generic IRF520 MOSFET Driver Module** — PWM/load driver
- [x] **Generic BSS138 4-Channel Bidirectional Level Shifter** — logic translation
- [x] **Generic TXS0108E 8-Channel Level Shifter Module** — logic translation
- [x] **Generic 74LVC245 8-Channel Level Shifter Module** — logic translation
- [x] **Generic NE555 Pulse Generator Module** — adjustable oscillator
- [x] **Generic LM393 Speed Sensor Module** — optical slot sensor
- [x] **Generic ADXL335 Analog Accelerometer Module** — three analog axes
- [x] **Generic Pulse Sensor Amped Module** — analog photoplethysmography
- [x] **Generic SCT-013 Current Transformer Interface Module** — analog
- [x] **Generic 5-Way Flame Sensor Array Module** — five digital/analog channels
- [x] **Generic 8-Channel Logic Level Converter Module** — mixed-voltage bus adapter
