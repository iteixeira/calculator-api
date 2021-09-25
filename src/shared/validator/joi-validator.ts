import { ValidatorError } from './validator-error';
import { schema as calculatorSchema } from './calculator-schema';

export class JoiValidator {
  public static validate<T>(dataToValidate: T): void {
    const { error } = calculatorSchema.validate(dataToValidate);

    if (error) {
      throw new ValidatorError(error.message);
    }
  }
}
