namespace blog_c_.Helper;

public class Dumb
{
    public static int  Sum(int n1, int n2) => n1 + n2;

    public static string ReturnNheIf17(int num)
    {
        if (num == 17)
            return "Nhe";

        return "Not nhe!";
    }

    public static bool ValidadeEmail(string email)
    {
        var hasArroba = email.Split('@');

        
        Console.WriteLine(hasArroba);
        
        if (hasArroba.Length != 2)
            return false;
        
        var finishesWithCom = email.Split(".com");
        
        Console.WriteLine(finishesWithCom);
        if((finishesWithCom.Length > 2 && finishesWithCom[1] != "") || !email.Contains("com"))
            return false;

        return true;
    }
}