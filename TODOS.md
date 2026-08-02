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

Implemented on the current branch: Adafruit Feather M0 Express and Adafruit
Feather M4 Express. Their checked items remain in the list as an audit trail;
the component source and tests are the authoritative implementation record.

Current backlog: **427 distinct module candidates**.

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
- [ ] **Adafruit Feather nRF52840 Express** — Bluetooth Feather-format board
- [ ] **Adafruit Feather STM32F405 Express** — STM32 Feather-format board
- [ ] **Adafruit Feather ESP32 V2** — ESP32 Feather-format board
- [ ] **Adafruit Feather ESP32-S2** — ESP32-S2 Feather-format board
- [ ] **Adafruit Feather ESP32-S3 4MB Flash / 2MB PSRAM** — ESP32-S3 Feather-format board
- [ ] **Adafruit Feather ESP32-S3 TFT** — ESP32-S3 Feather-format board with display
- [ ] **Adafruit Feather RP2350** — RP2350 Feather-format board
- [ ] **Adafruit ItsyBitsy M0 Express** — compact SAMD21 board
- [ ] **Adafruit ItsyBitsy M4 Express** — compact SAMD51 board
- [ ] **Adafruit ItsyBitsy nRF52840 Express** — compact Bluetooth board
- [ ] **Adafruit ItsyBitsy RP2040** — compact RP2040 board
- [ ] **Adafruit ItsyBitsy ESP32** — compact ESP32 board
- [ ] **Adafruit QT Py SAMD21** — tiny castellated/0.1 in header-ready board
- [ ] **Adafruit QT Py ESP32-S2** — tiny castellated/0.1 in header-ready board
- [ ] **Adafruit QT Py ESP32-S3** — tiny castellated/0.1 in header-ready board
- [ ] **Adafruit QT Py nRF52840** — tiny castellated/0.1 in header-ready board
- [ ] **Adafruit QT Py RP2350** — tiny castellated/0.1 in header-ready board
- [ ] **Arduino Nano ATmega328P** — classic Nano dual-row module
- [ ] **Arduino Nano Every** — ATmega4809 Nano module
- [ ] **Arduino Nano 33 IoT** — SAMD21 + wireless Nano module
- [ ] **Arduino Nano 33 BLE** — nRF52840 Nano module
- [ ] **Arduino Nano 33 BLE Sense Rev2** — sensor-rich nRF52840 Nano module
- [ ] **Arduino Nano ESP32** — ESP32-S3 Nano module
- [ ] **Arduino Nano RP2040 Connect** — RP2040 + wireless Nano module
- [ ] **Arduino Nano Matter** — MGM240S Matter/Thread Nano module
- [ ] **Raspberry Pi Pico H** — headered RP2040 module
- [ ] **Raspberry Pi Pico WH** — headered wireless RP2040 module
- [ ] **Raspberry Pi Pico 2 with headers** — RP2350 module
- [ ] **Raspberry Pi Pico 2 W with headers** — wireless RP2350 module
- [ ] **Pimoroni PGA2350** — RP2350 board with breadboard pin grid
- [ ] **Pimoroni Tiny 2350** — compact RP2350 header-ready board
- [ ] **Seeed Studio XIAO SAMD21** — XIAO-format SAMD21 board
- [ ] **Seeed Studio XIAO nRF52840** — XIAO-format Bluetooth board
- [ ] **Seeed Studio XIAO nRF52840 Sense** — XIAO-format Bluetooth sensor board
- [ ] **Seeed Studio XIAO ESP32C3** — XIAO-format Wi-Fi/BLE board
- [ ] **Seeed Studio XIAO ESP32C6** — XIAO-format Wi-Fi 6/Thread board
- [ ] **Seeed Studio XIAO ESP32S3** — XIAO-format ESP32-S3 board
- [ ] **Seeed Studio XIAO ESP32S3 Sense** — XIAO-format camera/microphone board
- [ ] **Seeed Studio XIAO RA4M1** — XIAO-format Renesas board
- [ ] **Seeed Studio XIAO MG24** — XIAO-format Matter/Bluetooth board
- [ ] **Seeed Studio XIAO RP2350** — XIAO-format RP2350 board
- [ ] **SparkFun Pro Micro ATmega32U4** — classic Pro Micro module
- [ ] **SparkFun Qwiic Pro Micro ATmega32U4** — Pro Micro with Qwiic
- [ ] **SparkFun Pro Micro RP2040** — RP2040 Pro Micro module
- [ ] **SparkFun Pro Micro RP2350** — RP2350 Pro Micro module
- [ ] **SparkFun Pro Micro ESP32-C3** — ESP32-C3 Pro Micro module
- [ ] **SparkFun Thing Plus ESP32 WROOM USB-C** — Feather-compatible ESP32 board
- [ ] **SparkFun Thing Plus ESP32-C6** — Feather-compatible ESP32-C6 board
- [ ] **SparkFun Thing Plus ESP32-S3** — Feather-compatible ESP32-S3 board
- [ ] **SparkFun Thing Plus RP2350** — Feather-compatible RP2350 board
- [ ] **SparkFun Thing Plus RA6M5** — Feather-compatible Renesas board
- [ ] **PJRC Teensy 4.0** — compact i.MX RT1062 module
- [ ] **PJRC Teensy 4.1** — expanded i.MX RT1062 module
- [ ] **Espressif ESP32-DevKitC V4** — standard ESP32 dual-row dev board
- [ ] **Espressif ESP32-S3-DevKitC-1** — ESP32-S3 dual-row dev board
- [ ] **Espressif ESP32-C3-DevKitM-1** — ESP32-C3 dual-row dev board
- [ ] **NodeMCU ESP8266 DevKit v1.0** — common marketplace ESP8266 board
- [ ] **LOLIN D1 mini v4** — compact ESP8266 dual-row board
- [ ] **WeAct STM32F411 Black Pill** — common STM32 dual-row module

## Environmental, temperature, pressure, and air-quality sensors

- [ ] **Adafruit AHT20 Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit AHT21 Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit SHT31-D Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit SHT40 Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit SHT41 Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit HDC3022 Precision Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit HTU21D-F Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit Si7021 Temperature & Humidity Breakout** — I2C
- [ ] **Adafruit BME280 Temperature/Humidity/Pressure Breakout** — I2C/SPI
- [ ] **Adafruit BME680 Environmental Sensor Breakout** — I2C/SPI
- [ ] **SparkFun BME688 Environmental Sensor Breakout** — I2C/SPI
- [ ] **Adafruit BMP280 Pressure Sensor Breakout** — I2C/SPI
- [ ] **Adafruit BMP388 Precision Barometric Pressure Breakout** — I2C/SPI
- [ ] **Adafruit BMP390 Precision Barometric Pressure Breakout** — I2C/SPI
- [ ] **Adafruit BMP580 Pressure Sensor Breakout** — I2C/SPI
- [ ] **Adafruit DPS310 Precision Barometric Pressure Breakout** — I2C/SPI
- [ ] **Adafruit LPS22HB Pressure Sensor Breakout** — I2C/SPI
- [ ] **Adafruit MCP9808 High-Accuracy Temperature Breakout** — I2C
- [ ] **Adafruit TMP117 High-Accuracy Temperature Breakout** — I2C
- [ ] **Adafruit ADT7410 High-Accuracy Temperature Breakout** — I2C
- [ ] **Adafruit MLX90614 Contactless IR Thermometer Breakout** — I2C
- [ ] **Adafruit MCP9600 Thermocouple Amplifier Breakout** — I2C
- [ ] **Adafruit MAX31855 Thermocouple Amplifier Breakout** — SPI
- [ ] **Adafruit MAX31856 Universal Thermocouple Amplifier Breakout** — SPI
- [ ] **Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout** — SPI
- [ ] **Adafruit SCD30 NDIR CO2 Breakout** — I2C
- [ ] **Adafruit SCD40 CO2 Sensor Breakout** — I2C
- [ ] **Adafruit SCD41 CO2 Sensor Breakout** — I2C
- [ ] **Adafruit SGP30 Air Quality Sensor Breakout** — I2C
- [ ] **Adafruit SGP40 Air Quality Sensor Breakout** — I2C
- [ ] **Adafruit SGP41 Air Quality Sensor Breakout** — I2C
- [ ] **SparkFun ENS160 Indoor Air Quality Breakout** — I2C/SPI
- [ ] **SparkFun ENS160 + BME280 Environmental Combo Breakout** — I2C
- [ ] **Adafruit PMSA003I Particulate Matter Sensor Breakout** — I2C/UART adapter
- [ ] **SparkFun BMV080 Particulate Matter Sensor Breakout** — I2C/SPI

## Light, color, UV, and thermal-array sensors

- [ ] **Adafruit BH1750 Ambient Light Sensor Breakout** — I2C
- [ ] **Adafruit TSL2591 High Dynamic Range Light Sensor Breakout** — I2C
- [ ] **Adafruit TSL2561 Digital Luminosity Sensor Breakout** — I2C
- [ ] **Adafruit VEML7700 Lux Sensor Breakout** — I2C
- [ ] **SparkFun VEML6030 Ambient Light Sensor Breakout** — I2C
- [ ] **Adafruit LTR390 UV Light Sensor Breakout** — I2C
- [ ] **SparkFun VEML6075 UVA/UVB Sensor Breakout** — I2C
- [ ] **Adafruit AS7341 10-Channel Light/Color Sensor Breakout** — I2C
- [ ] **SparkFun AS7343 14-Channel Spectral Sensor Breakout** — I2C
- [ ] **SparkFun AS7262 Visible Spectral Sensor Breakout** — I2C/UART
- [ ] **SparkFun AS7263 NIR Spectral Sensor Breakout** — I2C/UART
- [ ] **Adafruit APDS9960 Proximity/Gesture/RGB Breakout** — I2C
- [ ] **Adafruit APDS9250 Digital RGB/IR Sensor Breakout** — I2C
- [ ] **Adafruit APDS9999 Proximity/Lux/Color Sensor Breakout** — I2C
- [ ] **SparkFun OPT4048 Tristimulus Color Sensor Breakout** — I2C
- [ ] **Adafruit VCNL4040 Proximity and Lux Sensor Breakout** — I2C
- [ ] **Adafruit VCNL4020 Proximity and Light Sensor Breakout** — I2C
- [ ] **SparkFun TEMT6000 Ambient Light Sensor Breakout** — analog
- [ ] **Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout** — analog
- [ ] **SparkFun ML8511 UV Sensor Breakout** — analog
- [ ] **Adafruit AMG8833 Grid-EYE 8x8 Thermal Camera Breakout** — I2C
- [ ] **Adafruit MLX90640 24x32 Thermal Camera Breakout, 55 degree** — I2C
- [ ] **Adafruit MLX90640 24x32 Thermal Camera Breakout, 110 degree** — I2C
- [ ] **Adafruit MLX90641 16x12 Thermal Camera Breakout** — I2C
- [ ] **SparkFun MLX90632 FIR Temperature Sensor Breakout** — I2C

## Accelerometers, IMUs, magnetometers, and position sensors

- [ ] **Adafruit LIS3DH Triple-Axis Accelerometer Breakout** — I2C/SPI
- [ ] **Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [ ] **Pololu LIS331HH High-g Accelerometer Carrier** — I2C/SPI
- [ ] **Adafruit ADXL343 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [ ] **Generic ADXL345 GY-291 Accelerometer Module** — I2C/SPI
- [ ] **SparkFun ADXL375 High-g Accelerometer Breakout** — I2C/SPI
- [ ] **Adafruit MMA8451 Triple-Axis Accelerometer Breakout** — I2C
- [ ] **SparkFun BMA400 Triple-Axis Accelerometer Breakout** — I2C/SPI
- [ ] **SparkFun KX134 High-g Accelerometer Breakout** — I2C/SPI
- [ ] **Adafruit L3GD20H Triple-Axis Gyroscope Breakout** — I2C/SPI
- [ ] **Adafruit LSM6DSOX 6-DoF IMU Breakout** — I2C/SPI
- [ ] **Adafruit LSM6DS3TR-C 6-DoF IMU Breakout** — I2C/SPI
- [ ] **Adafruit ISM330DHCX 6-DoF IMU Breakout** — I2C/SPI
- [ ] **SparkFun ICM-20948 9-DoF IMU Breakout** — I2C/SPI
- [ ] **SparkFun ICM-42688-P 6-DoF IMU Breakout** — I2C/SPI
- [ ] **Generic MPU-6050 GY-521 IMU Module** — I2C
- [ ] **Generic MPU-9250 GY-91 9-DoF Module** — I2C/SPI
- [ ] **Adafruit BNO055 Absolute Orientation Breakout** — I2C/UART
- [ ] **Adafruit BNO085 9-DoF Orientation Breakout** — I2C/SPI/UART
- [ ] **SparkFun BNO086 9-DoF IMU Breakout** — I2C/SPI/UART
- [ ] **Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout** — I2C
- [ ] **Adafruit LSM303AGR Accelerometer/Magnetometer Breakout** — I2C/SPI
- [ ] **Pololu LIS3MDL 3-Axis Magnetometer Carrier** — I2C/SPI
- [ ] **Adafruit MMC5603 Triple-Axis Magnetometer Breakout** — I2C
- [ ] **SparkFun MLX90393 Triple-Axis Magnetometer Breakout** — I2C/SPI
- [ ] **Adafruit TLV493D Triple-Axis Magnetometer Breakout** — I2C
- [ ] **Adafruit TMAG5273 Triple-Axis Hall Sensor Breakout** — I2C
- [ ] **Generic QMC5883L GY-271 Compass Module** — I2C
- [ ] **Adafruit AS5600 Magnetic Angle Sensor Breakout** — I2C/analog
- [ ] **Generic AS5048A Magnetic Encoder Breakout** — SPI/PWM
- [ ] **Generic AS5047P Magnetic Encoder Breakout** — SPI/ABI
- [ ] **Infineon TLE5012B Magnetic Angle Sensor Breakout** — SPI/PWM
- [ ] **Generic MT6701 Magnetic Encoder Module** — SSI/ABI/UVW
- [ ] **Adafruit LSM6DS3TR-C + LIS3MDL 9-DoF Breakout** — I2C/SPI
- [ ] **SparkFun Optical Tracking Odometry Sensor Breakout** — SPI/Qwiic

## Distance, presence, touch, force, and biometric sensors

- [ ] **Pololu VL53L0X Time-of-Flight Distance Sensor Carrier** — I2C
- [ ] **Pololu VL53L1X Time-of-Flight Distance Sensor Carrier** — I2C
- [ ] **Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier** — I2C
- [ ] **Pololu VL53L4CX Time-of-Flight Distance Sensor Carrier** — I2C
- [ ] **Adafruit VL53L5CX 8x8 Time-of-Flight Sensor Breakout** — I2C
- [ ] **Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout** — I2C
- [ ] **Adafruit VL6180X Time-of-Flight Distance Sensor Breakout** — I2C
- [ ] **Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout** — I2C
- [ ] **SparkFun TMF8801 Time-of-Flight Sensor Breakout** — I2C
- [ ] **Generic HC-SR04 Ultrasonic Distance Module** — trigger/echo
- [ ] **Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module** — trigger/echo
- [ ] **Generic US-100 Ultrasonic Distance Module** — trigger/echo/UART
- [ ] **Generic JSN-SR04T Waterproof Ultrasonic Module** — trigger/echo
- [ ] **Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout** — analog
- [ ] **Generic HC-SR501 PIR Motion Sensor Module** — digital
- [ ] **Generic AM312 Mini PIR Motion Sensor Module** — digital
- [ ] **SparkFun Panasonic EKMC PIR Breakout** — digital
- [ ] **Generic RCWL-0516 Microwave Motion Sensor Module** — digital
- [ ] **HLK-LD2410C 24GHz Presence Radar Module** — UART/digital
- [ ] **Adafruit MPR121 12-Key Capacitive Touch Breakout** — I2C
- [ ] **Adafruit CAP1188 8-Key Capacitive Touch Breakout** — I2C/SPI
- [ ] **Adafruit AT42QT1010 Capacitive Touch Breakout** — digital
- [ ] **Adafruit AT42QT1070 5-Pad Capacitive Touch Breakout** — digital
- [ ] **Generic TTP223 Capacitive Touch Module** — digital
- [ ] **SparkFun HX711 Load Cell Amplifier Breakout** — two-wire digital
- [ ] **Adafruit NAU7802 24-Bit Load Cell ADC Breakout** — I2C
- [ ] **SparkFun FSR Force Sensitive Resistor Adapter Breakout** — analog
- [ ] **SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout** — I2C
- [ ] **Generic MAX30102 Heart-Rate/Oximeter Module** — I2C
- [ ] **SparkFun AD8232 Single-Lead ECG Monitor Breakout** — analog

## GNSS, radio, wireless, and wired communications

- [ ] **Adafruit Ultimate GPS Breakout, PA6H/MTK3339** — UART
- [ ] **Adafruit PA1010D Mini GPS Breakout** — I2C/UART
- [ ] **SparkFun u-blox MAX-M10S GNSS Breakout** — I2C/UART/SPI
- [ ] **SparkFun u-blox SAM-M10Q GNSS Breakout** — I2C/UART
- [ ] **SparkFun u-blox NEO-M9N GNSS Breakout** — I2C/UART/SPI
- [ ] **SparkFun u-blox ZED-F9P RTK GNSS Breakout** — I2C/UART/SPI
- [ ] **SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout** — I2C/UART/SPI
- [ ] **Generic u-blox NEO-6M GY-GPS6MV2 Module** — UART
- [ ] **Generic u-blox NEO-M8N GPS Module** — UART/I2C
- [ ] **Waveshare L76K GNSS Module** — UART
- [ ] **Nordic nRF24L01+ 2.4GHz Radio Module** — SPI
- [ ] **nRF24L01+ PA/LNA Antenna Module** — SPI
- [ ] **Adafruit RFM69HCW Packet Radio Breakout** — SPI
- [ ] **Adafruit RFM95W LoRa Radio Breakout** — SPI
- [ ] **Adafruit RFM96W LoRa Radio Breakout** — SPI
- [ ] **Ai-Thinker Ra-02 SX1278 LoRa Module** — SPI
- [ ] **Waveshare SX1262 LoRa HAT-Style Core Module** — SPI/UART header variant
- [ ] **Seeed Wio-E5 Mini LoRaWAN Board** — UART
- [ ] **REYAX RYLR896 LoRa Module** — UART
- [ ] **Generic HC-05 Bluetooth Classic Module** — UART
- [ ] **Generic HC-06 Bluetooth Classic Module** — UART
- [ ] **Generic HM-10 BLE Module with Baseboard** — UART
- [ ] **Espressif ESP-01S Wi-Fi Module** — 2x4 header
- [ ] **SparkFun XBee Explorer Regulated** — 0.1 in XBee adapter
- [ ] **WIZnet W5500 Ethernet Module** — SPI
- [ ] **WIZnet WIZ850io Ethernet Module** — SPI dual-row
- [ ] **Generic ENC28J60 Ethernet Module** — SPI
- [ ] **Generic MCP2515 CAN Bus Module** — SPI
- [ ] **Generic SN65HVD230 CAN Transceiver Module** — logic/CAN
- [ ] **Generic MAX485 RS-485 Transceiver Module** — UART/RS-485
- [ ] **SparkFun SP3485 RS-485 Breakout** — UART/RS-485
- [ ] **Generic MAX3232 RS-232 Transceiver Module** — UART/RS-232
- [ ] **Adafruit PN532 NFC/RFID Controller Breakout** — I2C/SPI/UART
- [ ] **Generic MFRC522 RFID Reader Module** — SPI
- [ ] **Adafruit ST25DV16K I2C RFID EEPROM Breakout** — I2C/RF

## Storage, clocks, bus adapters, and GPIO expansion

- [ ] **Adafruit DS3231 Precision RTC Breakout** — I2C
- [ ] **Adafruit PCF8523 RTC Breakout** — I2C
- [ ] **Adafruit DS1307 RTC Breakout** — I2C
- [ ] **Adafruit RV-3028 RTC Breakout** — I2C
- [ ] **SparkFun RV-8803 RTC Breakout** — I2C
- [ ] **Generic PCF8563 RTC Module** — I2C
- [ ] **SparkFun DS3234 DeadOn RTC Breakout** — SPI
- [ ] **Adafruit Micro SD SPI/SDIO Card Breakout** — SPI/SDIO
- [ ] **Pololu Breakout Board for microSD Card** — raw SD contacts
- [ ] **Generic MicroSD Module with 3.3V Regulator and Level Shifter** — SPI
- [ ] **Adafruit W25Q128 SPI Flash Breakout** — SPI
- [ ] **Adafruit MB85RC256V I2C FRAM Breakout** — I2C
- [ ] **Adafruit MB85RS4MT SPI FRAM Breakout** — SPI
- [ ] **Generic 24LC256 EEPROM Module** — I2C
- [ ] **Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout** — I2C
- [ ] **Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout** — I2C
- [ ] **SparkFun PCA9615 Differential I2C Breakout** — differential I2C
- [ ] **Adafruit LTC4311 I2C Active Terminator Breakout** — I2C
- [ ] **Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout** — I2C/1-Wire
- [ ] **Adafruit MCP23017 16-Bit GPIO Expander Breakout** — I2C
- [ ] **Adafruit MCP23008 8-Bit GPIO Expander Breakout** — I2C
- [ ] **Generic PCF8574 I2C GPIO Expander Module** — I2C
- [ ] **Adafruit TCA9534 8-Bit GPIO Expander Breakout** — I2C
- [ ] **Generic PCA9555 16-Bit GPIO Expander Module** — I2C
- [ ] **Adafruit AW9523 GPIO/LED Driver Breakout** — I2C
- [ ] **Adafruit FT232H USB-to-Multi-Protocol Breakout** — USB/I2C/SPI/UART
- [ ] **SparkFun FT231X USB-to-UART Breakout** — USB/UART
- [ ] **Generic CP2102 USB-to-UART Module** — USB/UART
- [ ] **Generic CH340G USB-to-UART Module** — USB/UART
- [ ] **Adafruit MAX3421E USB Host Breakout** — SPI/USB host

## Displays, LEDs, and user-input modules

- [ ] **Generic 0.96 in SSD1306 OLED I2C Module** — 128x64
- [ ] **Adafruit 0.96 in SSD1306 OLED SPI Breakout** — 128x64
- [ ] **Generic 1.3 in SH1106 OLED I2C Module** — 128x64
- [ ] **Adafruit 1.5 in SSD1327 Grayscale OLED Breakout** — 128x128
- [ ] **Adafruit 1.27 in SSD1351 Color OLED Breakout** — 128x96
- [ ] **Adafruit 1.5 in SSD1351 Color OLED Breakout** — 128x128
- [ ] **Generic 1.44 in ST7735 TFT Module** — SPI
- [ ] **Adafruit 1.8 in ST7735R TFT Breakout** — SPI
- [ ] **Adafruit 2.0 in ST7789 TFT Breakout** — SPI
- [ ] **Generic 2.4 in ILI9341 TFT Module** — SPI/parallel variants
- [ ] **Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout** — SPI
- [ ] **Adafruit 3.5 in HX8357 TFT Touchscreen Breakout** — SPI
- [ ] **Waveshare 1.28 in GC9A01 Round LCD Module** — SPI
- [ ] **Waveshare 1.54 in e-Paper Display Module** — SPI
- [ ] **Waveshare 2.13 in e-Paper Display Module** — SPI
- [ ] **Waveshare 2.9 in e-Paper Display Module** — SPI
- [ ] **Waveshare 4.2 in e-Paper Display Module** — SPI
- [ ] **Generic MAX7219 8x8 LED Matrix Module** — SPI-like
- [ ] **Adafruit HT16K33 8x8 LED Matrix Backpack** — I2C
- [ ] **Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack** — I2C
- [ ] **Adafruit HT16K33 4-Digit 7-Segment Backpack** — I2C
- [ ] **Adafruit HT16K33 4-Character 14-Segment Backpack** — I2C
- [ ] **Adafruit IS31FL3731 16x9 Charlieplex LED Driver Breakout** — I2C
- [ ] **Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout** — I2C
- [ ] **Adafruit TLC5947 24-Channel PWM LED Driver Breakout** — serial
- [ ] **Adafruit TLC59711 12-Channel PWM LED Driver Breakout** — SPI-like
- [ ] **Adafruit NeoPixel Stick, 8 x WS2812B** — single-wire
- [ ] **Adafruit DotStar Stick, 8 x APA102** — clock/data
- [ ] **Adafruit Seesaw Rotary Encoder Breakout** — I2C
- [ ] **SparkFun Qwiic Twist RGB Rotary Encoder Breakout** — I2C
- [ ] **Adafruit 5-Way Navigation Switch Breakout** — digital
- [ ] **SparkFun Thumb Joystick Breakout** — dual analog + switch
- [ ] **Generic KY-040 Rotary Encoder Module** — quadrature + switch
- [ ] **Generic TTP229 16-Key Capacitive Keypad Module** — serial/digital
- [ ] **Generic 4x4 Matrix Keypad 0.1 in Breakout Adapter** — 8-pin matrix

## Motor, stepper, servo, relay, and actuator drivers

- [ ] **Pololu DRV8825 Stepper Motor Driver Carrier** — StepStick-compatible
- [ ] **Pololu DRV8834 Low-Voltage Stepper Driver Carrier** — StepStick-compatible
- [ ] **Pololu DRV8880 Stepper Motor Driver Carrier** — microstepping carrier
- [ ] **Pololu STSPIN220 Low-Voltage Stepper Driver Carrier** — StepStick-compatible
- [ ] **Pololu TB67S249FTG Stepper Motor Driver Carrier** — high-current carrier
- [ ] **Trinamic TMC2209 StepStick Module** — UART stepper driver
- [ ] **Trinamic TMC2208 StepStick Module** — UART stepper driver
- [ ] **Trinamic TMC2130 StepStick Module** — SPI stepper driver
- [ ] **Trinamic TMC5160 StepStick Module** — SPI high-voltage stepper driver
- [ ] **Pololu MP6500 Stepper Motor Driver Carrier** — StepStick-compatible
- [ ] **Generic LV8729 Stepper Motor Driver Module** — StepStick-compatible
- [ ] **Generic ULN2003 28BYJ-48 Stepper Driver Board** — 1x4 logic header
- [ ] **Generic L298N Dual H-Bridge Module** — logic/control headers
- [ ] **SparkFun TB6612FNG Dual Motor Driver Breakout** — dual H-bridge
- [ ] **Adafruit DRV8833 Dual Motor Driver Breakout** — dual H-bridge
- [ ] **Adafruit DRV8871 DC Motor Driver Breakout** — single H-bridge
- [ ] **Pololu DRV8876 Motor Driver Carrier** — single H-bridge
- [ ] **Pololu DRV8251A Motor Driver Carrier** — single H-bridge
- [ ] **Pololu MAX14870 Motor Driver Carrier** — single H-bridge
- [ ] **Pololu VNH5019 Motor Driver Carrier** — high-current H-bridge
- [ ] **Generic BTS7960 IBT-2 Motor Driver Module** — high-current H-bridge
- [ ] **Adafruit PCA9685 16-Channel PWM/Servo Driver** — I2C
- [ ] **Pololu Micro Maestro 6-Channel USB Servo Controller** — signal headers
- [ ] **SparkFun TMC6300 Three-Phase Motor Driver Breakout** — three half-bridges
- [ ] **Adafruit DRV8313 Brushless Motor Driver Breakout** — three half-bridges
- [ ] **Generic 1-Channel 5V Relay Module** — digital input
- [ ] **Generic 2-Channel 5V Relay Module** — digital inputs
- [ ] **Generic 4-Channel 5V Relay Module** — digital inputs
- [ ] **Generic 1-Channel Solid-State Relay Module** — digital input
- [ ] **Adafruit MOSFET Driver Breakout** — logic-controlled load output

## Power conversion, charging, and electrical measurement

- [ ] **Adafruit INA219 High-Side Current Sensor Breakout** — I2C
- [ ] **Adafruit INA260 Current/Voltage/Power Sensor Breakout** — I2C
- [ ] **SparkFun INA228 High-Precision Power Monitor Breakout** — I2C
- [ ] **SparkFun INA237 Power Monitor Breakout** — I2C
- [ ] **Generic INA3221 Three-Channel Current Sensor Module** — I2C
- [ ] **Adafruit PAC1934 Four-Channel Power Monitor Breakout** — I2C
- [ ] **Adafruit MAX17048 LiPo Fuel Gauge Breakout** — I2C
- [ ] **Adafruit LC709203F LiPoly Fuel Gauge Breakout** — I2C
- [ ] **SparkFun BQ27441 LiPo Fuel Gauge Breakout** — I2C
- [ ] **Adafruit MPM3610 5V Buck Converter Breakout** — regulated output
- [ ] **SparkFun AP3429A Buck Regulator Breakout** — adjustable/fixed variants
- [ ] **Adafruit TPS62827 3.3V Buck Converter Breakout** — regulated output
- [ ] **Adafruit TPS61023 5V Boost Converter Breakout** — regulated output
- [ ] **Adafruit PowerBoost 500 Basic** — 5V boost converter
- [ ] **Adafruit PowerBoost 1000 Basic** — 5V boost converter
- [ ] **Adafruit MCP73871 Solar LiPo Charger Breakout** — load sharing
- [ ] **Adafruit MCP73831 Micro-LiPo Charger Breakout** — LiPo charger
- [ ] **Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout** — load sharing
- [ ] **Generic TP4056 USB-C Li-Ion Charger/Protection Module** — charger
- [ ] **Generic AMS1117-3.3 Regulator Module** — linear regulator
- [ ] **Generic AMS1117-5.0 Regulator Module** — linear regulator
- [ ] **Generic MP1584 Mini Adjustable Buck Module** — buck converter
- [ ] **Generic LM2596 Adjustable Buck Module** — buck converter
- [ ] **Generic MT3608 Adjustable Boost Module** — boost converter
- [ ] **Generic XL6009 Adjustable Buck-Boost Module** — buck-boost converter
- [ ] **Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator** — carrier
- [ ] **Pololu S7V8F5 5V Step-Up/Step-Down Regulator** — carrier
- [ ] **Pololu D24V5F5 5V Step-Down Regulator** — carrier
- [ ] **Pololu D24V22F5 5V Step-Down Regulator** — carrier
- [ ] **Pololu D36V6F12 12V Step-Down Regulator** — carrier
- [ ] **SparkFun Buck-Boost Converter COM-15208** — adjustable regulator
- [ ] **Adafruit LTC4316 I2C Address Translator Breakout** — powered bus utility
- [ ] **Generic ACS712 5A Current Sensor Module** — analog
- [ ] **Generic ACS712 20A Current Sensor Module** — analog
- [ ] **Generic ACS712 30A Current Sensor Module** — analog
- [ ] **Generic ZMPT101B AC Voltage Sensor Module** — analog

## ADC, DAC, analog, clock, and audio modules

- [ ] **Adafruit ADS1115 16-Bit 4-Channel ADC Breakout** — I2C
- [ ] **Adafruit ADS1015 12-Bit 4-Channel ADC Breakout** — I2C
- [ ] **Adafruit ADS1219 24-Bit 4-Channel ADC Breakout** — I2C
- [ ] **Adafruit ADS122C04 24-Bit ADC Breakout** — I2C
- [ ] **Generic MCP3008 10-Bit 8-Channel ADC Breakout** — SPI
- [ ] **Generic MCP3208 12-Bit 8-Channel ADC Breakout** — SPI
- [ ] **Adafruit MCP3421 18-Bit ADC Breakout** — I2C
- [ ] **Adafruit MCP3424 18-Bit 4-Channel ADC Breakout** — I2C
- [ ] **Adafruit ADS7830 8-Bit 8-Channel ADC Breakout** — I2C
- [ ] **Generic PCF8591 ADC/DAC Module** — I2C
- [ ] **Adafruit MCP4725 12-Bit DAC Breakout** — I2C
- [ ] **Adafruit MCP4728 Quad 12-Bit DAC Breakout** — I2C
- [ ] **Adafruit AD5693R 16-Bit DAC Breakout** — I2C
- [ ] **Adafruit DAC7578 Octal 12-Bit DAC Breakout** — I2C
- [ ] **Adafruit MAX4466 Electret Microphone Amplifier Breakout** — analog
- [ ] **Adafruit MAX9814 AGC Microphone Amplifier Breakout** — analog
- [ ] **Adafruit SPH0645 I2S MEMS Microphone Breakout** — I2S
- [ ] **Adafruit ICS-43434 I2S MEMS Microphone Breakout** — I2S
- [ ] **Adafruit PDM MEMS Microphone Breakout** — PDM
- [ ] **Adafruit MAX98357A I2S Class-D Amplifier Breakout** — I2S
- [ ] **Adafruit PAM8302 Mono Class-D Amplifier Breakout** — analog audio
- [ ] **Generic PAM8403 Stereo Class-D Amplifier Module** — analog audio
- [ ] **Adafruit TPA2016 Stereo Class-D Amplifier Breakout** — I2C/audio
- [ ] **Adafruit VS1053 Codec + MicroSD Breakout** — SPI/audio
- [ ] **Adafruit Audio FX Mini Sound Board, 2MB** — trigger/UART/audio
- [ ] **DFRobot DFPlayer Mini MP3 Module** — UART/audio
- [ ] **Generic PCM5102A I2S DAC Module** — I2S/audio
- [ ] **Adafruit Si5351A Clock Generator Breakout** — I2C
- [ ] **Adafruit DS3502 I2C Digital Potentiometer Breakout** — I2C
- [ ] **Adafruit DS1841 I2C Logarithmic Potentiometer Breakout** — I2C

## Common Amazon/eBay/AliExpress sensor-kit modules

These names describe standardized clone families rather than a single
manufacturer. Implementation should pick and cite one stable reference board;
do not assume all visually similar listings share a pin order.

- [ ] **MQ-2 Smoke/LPG Sensor Module** — analog/digital comparator board
- [ ] **MQ-3 Alcohol Sensor Module** — analog/digital comparator board
- [ ] **MQ-4 Methane Sensor Module** — analog/digital comparator board
- [ ] **MQ-5 LPG/Natural Gas Sensor Module** — analog/digital comparator board
- [ ] **MQ-6 LPG/Butane Sensor Module** — analog/digital comparator board
- [ ] **MQ-7 Carbon Monoxide Sensor Module** — analog/digital comparator board
- [ ] **MQ-8 Hydrogen Sensor Module** — analog/digital comparator board
- [ ] **MQ-9 CO/Combustible Gas Sensor Module** — analog/digital comparator board
- [ ] **MQ-131 Ozone Sensor Module** — analog/digital comparator board
- [ ] **MQ-135 Air Quality Sensor Module** — analog/digital comparator board
- [ ] **DHT11 Temperature/Humidity Sensor Module** — single-wire digital
- [ ] **DHT22/AM2302 Temperature/Humidity Module** — single-wire digital
- [ ] **DS18B20 Temperature Sensor Module** — 1-Wire
- [ ] **Capacitive Soil Moisture Sensor v1.2 Module** — analog
- [ ] **YL-69/FC-28 Resistive Soil Moisture Module** — analog/digital
- [ ] **FC-37/YL-83 Rain Detection Module** — analog/digital
- [ ] **Generic Water-Level Sensor Module** — analog
- [ ] **KY-026 Flame Sensor Module** — analog/digital
- [ ] **KY-038 Microphone Sound Sensor Module** — analog/digital
- [ ] **SW-420 Vibration Sensor Module** — digital
- [ ] **A3144 Hall-Effect Sensor Module** — digital
- [ ] **SW-520D Ball Tilt Sensor Module** — digital
- [ ] **KY-032 IR Obstacle Avoidance Module** — digital
- [ ] **TCRT5000 Reflective Line Sensor Module** — analog/digital
- [ ] **Pololu QTR-1A Reflectance Sensor Carrier** — analog
- [ ] **Pololu QTR-1RC Reflectance Sensor Carrier** — RC timing
- [ ] **Generic IR Receiver Module, VS1838B/KY-022** — digital
- [ ] **Generic IR Transmitter Module, KY-005** — digital
- [ ] **Generic Laser Diode Transmitter Module, KY-008** — digital
- [ ] **Generic Traffic-Light LED Module** — three digital channels
- [ ] **Generic RGB LED Module, KY-016** — three PWM channels
- [ ] **Generic Active Buzzer Module, KY-012** — digital
- [ ] **Generic Passive Buzzer Module, KY-006** — PWM
- [ ] **Generic PC817 Optocoupler Isolation Module** — digital isolation
- [ ] **Generic IRF520 MOSFET Driver Module** — PWM/load driver
- [ ] **Generic BSS138 4-Channel Bidirectional Level Shifter** — logic translation
- [ ] **Generic TXS0108E 8-Channel Level Shifter Module** — logic translation
- [ ] **Generic 74LVC245 8-Channel Level Shifter Module** — logic translation
- [ ] **Generic NE555 Pulse Generator Module** — adjustable oscillator
- [ ] **Generic LM393 Speed Sensor Module** — optical slot sensor
- [ ] **Generic ADXL335 Analog Accelerometer Module** — three analog axes
- [ ] **Generic Pulse Sensor Amped Module** — analog photoplethysmography
- [ ] **Generic SCT-013 Current Transformer Interface Module** — analog
- [ ] **Generic 5-Way Flame Sensor Array Module** — five digital/analog channels
- [ ] **Generic 8-Channel Logic Level Converter Module** — mixed-voltage bus adapter
