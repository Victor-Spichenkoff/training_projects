using AutoMapper;
using blog_c_.Data;
using blog_c_.Helper;
using blog_c_.Interfaces;
using blog_c_.Models;
using blog_c_.Repositories;
using FakeItEasy;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;

namespace domain.test.Test_ME;

public class UserRepositoryTest
{ 
    private async Task<DataContext> GetDataContext()
    {
        //vai ser em memo
        //pegando as options do meu db
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: new Guid().ToString())
            .Options;

        var context = new DataContext(options);

        context.Database.EnsureCreated();

        if (await context.Users.CountAsync() < 0)
        {
            // meu método de criar as coisas
            var seeding = new Seeding(context);

            seeding.CreateAll();
        }

        return context;
    }

    private async Task<IUserRepository> GetUserRepository()
    {
        var mapper = A.Fake<IMapper>();
        var context = await GetDataContext();
        return new UserRepository(context, mapper);
    }


    [Fact]
    public async Task UserRepository_ShouldSaveUser()
    {
        var userRepository = await GetUserRepository();

        User newUser = new()
        {
            Id = 17,
            Name = "Novo",
            Email = "novo@gmail.com",
            Password = "123456"
        };
        
        // função retorna o criado
        var createdUser = userRepository.CreateUser(newUser);

        // pego para ver se criou mesmo
        var storageUser = userRepository.GetFullUser(17);

        //poderia testar se retornou apenas um true (se essa função fosse assim)
        storageUser.Id.Should().Be(17);
        storageUser.Name.Should().Be("Novo");

        // como ele retorna posso testar diretamente assim
        createdUser.Should().BeEquivalentTo(storageUser);
    }
}