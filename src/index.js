module.exports = function toReadable (number) {
    const digits = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
      ];
    
      const tens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
      ];
    
      if (number < 20) {
        return digits[number];
      }
    
      if (number < 100) {
        const ten = tens[Math.floor(number / 10) - 2];
        const unit = number % 10;
        return unit === 0 ? ten : `${ten} ${digits[unit]}`;
      }
    
      if (number < 1000) {
        const hundred = digits[Math.floor(number / 100)];
        const remainder = number % 100;
        return remainder === 0 ? `${hundred} hundred` : `${hundred} hundred ${toReadable(remainder)}`;
      }
}
