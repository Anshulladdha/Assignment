import java.util.HashMap;
import java.util.Map;

public class Roman {
    public static void main(String[] args) {
        String romanNumeral = "VI"; // Replace with the Roman numeral you want to convert
        int result = romanToInt(romanNumeral);
        System.out.println("Integer equivalent: " + result);
    }

    public static int romanToInt(String s) {
        Map<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int total = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int curValue = romanValues.get(s.charAt(i));
            if (curValue < prevValue) {
                total -= curValue;
            } else {
                total += curValue;
            }
            prevValue = curValue;
        }

        return total;
    }
}

