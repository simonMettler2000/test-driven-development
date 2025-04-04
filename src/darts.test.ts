import { calcPoints, possibleCheckout } from './darts';

describe('Darts Game Tests', () => {
  
  describe('calcPoints', () => {
    it('should calculate points correctly for a valid round', () => {
      expect(calcPoints('3 20 1 17 2 4')).toBe(85);  // Triple 20, Single 17, Double 4
      expect(calcPoints('2 15 1 18 3 19')).toBe(105);  // Double 15, Single 18, Triple 19
      expect(calcPoints('3 20 1 5')).toBe(65);  // Triple 20, Single 5 (one miss)
    });

    it('should handle no hits correctly', () => {
      expect(calcPoints('')).toBe(0);  // No hits
    });
    
    it('should return 0 for invalid inputs', () => {
      expect(calcPoints('3 50')).toBe(0);  // Invalid sector number
    });
  });

  describe('possibleCheckout', () => {
    it('should return Double 12 for a remaining score of 24', () => {
      expect(possibleCheckout(477)).toBe('Double 12');  // 501 - 477 = 24, 24 / 2 = 12
    });
    
    it('should return impossible for an odd number', () => {
      expect(possibleCheckout(480)).toBe('Impossible');  // 501 - 480 = 31, no even double checkout possible
    });

    it('should return impossible for a number greater than 20', () => {
      expect(possibleCheckout(441)).toBe('Impossible');  // 501 - 441 = 60, no double 30 possible
    });

    it('should return impossible when score is negative', () => {
      expect(possibleCheckout(600)).toBe('Impossible');  // Score exceeds 501
    });
  });
});
