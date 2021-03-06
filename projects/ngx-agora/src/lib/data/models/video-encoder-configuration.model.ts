/**
 * The video encoder configuration.
 *
 * This interface sets the video encoder configuration in
 * [setVideoEncoderConfiguration](https://docs.agora.io/en/Voice/API%20Reference/web/interfaces/agorartc.stream.html#setvideoencoderconfiguration).
 *
 * Depending on the OS, browser, and camera, the actual resolution, frame rate, and bitrate might be different from the set values.
 *
 * @remark
 * - Whether 1080 resolution or above can be supported depends on the device.
 *   If the device cannot support 1080p, the actual frame rate is lower than the one listed in the table.
 *   Agora optimizes the video on low-end devices.
 * - With the update of web browsers, this table might not reflect all the supported profiles for each browser.
 *   The actual support is subject to the device and web browser version.
 * - Some versions of some web browsers might not support all the video profiles listed in the table.
 *   In this case, we recommend you use the mainstream video profiles (the ones with the _1 suffix in the above table).
 * - The Safari browser does not support modifying the video frame rate (30 fps by default).
 *   If you set a frame rate other than 30 fps on Safari, the browser may change or reject your setting.
 * - Due to limitations of some devices and browsers, the resolution you set may fail to take effect and get adjusted by
 *   the browser. In this case, billings are calculated based on the actual resolution.
 *
 * @see [Video Profile Definition](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.videoencoderconfiguration.html)
 */
export interface VideoEncoderConfiguration {
  /**
   * The video bitrate (Kbps). The value range is [1,10000000].
   *
   * We recommend setting the bitrate between 100 Kbps and 5000 Kbps. You can refer to the table below and set your bitrate.
   */
  bitrate?: {
    /** The maximum bitrate. */
    max: number;
    /** The minimum bitrate. */
    min: number;
  };
  /**
   * The video frame rate (fps).
   *
   * The value range is [1, 10000]. We recommend setting the frame rate between 5 fps and 30 fps.
   *
   * @remark
   * - This parameter sets the local capturing video frame rate. The actual encoding frame rate depends on the device, system, and browser.
   * - When the network conditions change, the browser adjusts the encoding frame rate automatically.
   */
  frameRate?: {
    /** The maximum frame rate. */
    max: number;
    /** The minimum frame rate. The SDK uses this value as the preferred frame rate. */
    min: number;
  };
  /**
   * Resolution of the video.
   *
   * We recommend using common resolutions, for example:
   * - 480 x 360
   * - 640 x 480
   * - 960 x 720
   */
  resolution?: {
    /** Height of the video. The value range is [1,10000]. */
    height: number;
    /** Width of the video. The value range is [1,10000]. */
    width: number;
  };
}
