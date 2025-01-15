using blog_c_.Test_ME;
using FluentAssertions;
using FluentAssertions.Extensions;

namespace domain.test.Test_ME;

public class Aula1_Test
{
    [Fact]
    public void Show_Be_Now()
    {
        var result = Aula1.GiveNow();

        result.Should().BeCloseTo(DateTime.Now, TimeSpan.FromMilliseconds(1000));
        result.Should().BeAfter(1.January(2025));
    }

    [Fact]
    public void Show_Return_Correct_ID_Increase()
    {
        var name1 = "Victor";
        var name2 = "Victor II";

        var obj1 = Aula1.GiveNewMyOBJ(name1);
        var obj2 = Aula1.GiveNewMyOBJ(name2);
        
        
        //Teste de propriedades. Restritivas
        obj2.Id.Should().Be(obj1.Id + 1);

        obj1.Name.Should().Be(name1);
        
        //Testes para o objeto em si
        //Ver o tipo para ter certeza 
        obj1.Should().BeOfType<MeuOBJ>();
    }
    
    [Fact]
    public void Show_Return_Object_Equivalence()
    {
        var name1 = "Victor";

        var obj1 = Aula1.GiveNewMyOBJ(name1);
        var obj2 = Aula1.GiveNewMyOBJ(name1);

        //Testes para o objeto em si
        //Ver o tipo para ter certeza 
        obj1.Should().BeOfType<MeuOBJ>();
        //Não usar BE (exato), BeEquivalent == comparar objetos
        obj1.Should().NotBeEquivalentTo(obj2);
    }

    [Fact]
    public void Show_Return_Correct_List()
    {
        List<string> expected =
        [
            "Vicotr",
            "batata",
            "Victoria"
        ];

        var got = Aula1.GiveList();
       
        //Teste de tipos
        got.Should().BeEquivalentTo(expected);//como um todo
        got.Should().ContainEquivalentOf("batata");//1 desses
        
        got.Should().Contain(listItem => listItem == "Vicotr"); 
    }
}