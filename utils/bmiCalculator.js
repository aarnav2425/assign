export function interpretBMI(bmi) {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi < 25) {
      return 'healthy';
    } else if (bmi < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  }
  