using  blog_c_.Helper;
using FluentAssertions;

namespace domain.test.Helper;

public class TesteDumb
{
    private readonly int _n3 = 17; 
    
    
    [Fact]//diz que serve para testes
    public void Dumb_Sum_ShouldReturn30()
    {
        //A1
        int n1 = 10;
        int n2 = 20;
        int expected = 30;
        
        //A2
        var obtained = Dumb.Sum(n1, n2);
        
        //A3
        Assert.Equal(obtained, expected);
        // fluent assertions
        obtained.Should().Be(expected);
        Dumb.Sum(n1, _n3).Should().Be(n1 + _n3);
    }

    [Fact]
    public void Dumb_Sum_ShouldReturnNhe()
    {
        int num = 17;
        
        var result = Dumb.ReturnNheIf17(num);

        //fazer muito rígido pode não ser bom (às vezes)
        result.ToLower().Should().Contain("nhe");
    }
    
    [Fact]
    public void Dumb_Sum_ShouldNotReturnNhe()
    {
        int num = 18;
        
        var result = Dumb.ReturnNheIf17(num);

        //fazer muito rígido pode não ser bom (às vezes)
        result.ToLower().Should().Contain("not");
    }

    [Theory]
    [InlineData(1, 2)] //vários rounds (3) usando esses dados
    [InlineData(3, 5)]
    [InlineData(8, 6)]
    public void Dumb_Sum_ShouldSumCorrectly(int n1, int n2)
    {
        var expected = n1 + n2;
        var result = Dumb.Sum(n1, n2);
        
        result.Should().Be(expected);
    }


    [Theory]
    [InlineData("victor@gmail.com")]
    [InlineData("g@emai.com")]
    [InlineData("34@gmail.com")]
    public void Dumb_Email_ShouldReturnTrue(string email)
    {
        var result = Dumb.ValidadeEmail(email);
        
        result.Should().BeTrue();
    }
    
    
    [Theory]
    [InlineData("g@emai")]
    [InlineData("")]
    public void Dumb_Email_ShouldReturnFalse(string email)
    {
        var result = Dumb.ValidadeEmail(email);
        
        result.Should().BeFalse();
    }
}