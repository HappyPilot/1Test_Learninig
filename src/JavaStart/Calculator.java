package JavaStart;
import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        System.out.println("Wprowadź pierwszą liczbę");
        double dig1;
        Scanner newDig1 = new Scanner(System.in);
        dig1 = newDig1.nextDouble();
        System.out.println("Wprowadź drugą liczbę");
        double dig2;
        Scanner newDig2 = new Scanner(System.in);
        dig2 = newDig2.nextDouble();
        System.out.println("Wybierz jedną z działaniem + - * /");
        Scanner keyin = new Scanner(System.in);
        String newKey = keyin.nextLine();

        if (newKey.equals("+")) {
            double res = dig1 + dig2;
            System.out.println("Wynik dodania wartości to " +res);
        } else if (newKey.equals("-")) {
            double res = dig1 - dig2;
            System.out.println("Wynik różnicy między twoimi wartościami jest " + res);
        } else if (newKey.equals("*")) {
            double res = dig1 * dig2;
            System.out.println("Wynikiem pomnożenia twoich wartości jest " +res);
        }
        else if (newKey.equals("/")) {
            double res = dig1 / dig2;
            System.out.println("Rezultatem podzielenia twoich wartości jest " +res);
        }
        else {
            System.out.println("Nie rozumiem o co Ci chodzi.");
        }
    }
}

