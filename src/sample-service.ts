/**
 * Sample サービス。
 */
export class SampleService {

  /**
   * 指定秒数待機する。
   *
   * @param milliseconds ミリ秒
   */
  public static async sleep(milliseconds: number = 1000): Promise<void> {
    await new Promise((resolve) => {
      setTimeout(() => resolve(null), milliseconds);
    });
  }

}
