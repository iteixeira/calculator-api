import { Constants } from '../constants';

export class ValidatorError extends Error {
  public code: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.code = Constants.HTTP_BAD_REQUEST;
  }
}
