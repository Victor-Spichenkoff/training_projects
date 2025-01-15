namespace blog_c_.Test_ME;


public class MeuOBJ {
    public int Id { get; set; }
    public string Name { get; set; } = "";
}

public class Aula1
{
    private static int _lastId = 0;
    
    public static DateTime GiveNow() => DateTime.Now;

    public static MeuOBJ GiveNewMyOBJ(string name)
    {
        _lastId++;

        return new()
        {
            Id = _lastId,
            Name = name,
        };
    }

    public static IEnumerable<string> GiveList()
    {
        return new List<string>()
        {
            "Vicotr",
            "Victoria",
            "batata"
        };
    }
}