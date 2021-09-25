import { CalculatorInput } from './calculator-input';
import { JoiValidator } from './validator/joi-validator';
import { OperatorTypes } from './operator-type';
import { ValidatorError } from './validator/validator-error';

export class CalculatorService {
  /**
   * Calculate the operation between two numbers.
   *
   * @param input Input object with numbers and operator.
   * @param operator Operator type.
   *
   * @returns Returns the calculated result.
   */
  public calc(input: CalculatorInput, operator: OperatorTypes): number {
    JoiValidator.validate(input);

    let result: number | null = null;
    const n1 = Number(input.n1);
    const n2 = Number(input.n2);

    if (operator === OperatorTypes.ADD) {
      result = n1 + n2;
    } else if (operator === OperatorTypes.SUBTRACT) {
      result = n1 - n2;
    } else if (operator === OperatorTypes.MULTIPLY) {
      result = n1 * n2;
    } else {
      if (n2 === 0) {
        throw new ValidatorError('Invalid division by 0');
      }

      result = n1 / n2;
    }

    return result;
  }
}
