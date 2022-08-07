/**
 * @class Program
 * @extends
 */
export default class Program {
  public readonly programName: string;
  public readonly token: number;

  constructor(name: string, token: number) {
    this.programName = name;
    this.token = token;
  }

  /**
   * doSomething
   *
   * @public
   */
  public doSomething(arg1: unknown) {
    return 'Doing something. This is ' + arg1 + '!';
  }
}
