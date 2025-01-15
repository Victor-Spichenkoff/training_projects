using AutoMapper;
using blog_c_.Controllers;
using blog_c_.Data;
using blog_c_.Interfaces;
using blog_c_.Models;
using blog_c_.Repositories;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;

namespace domain.test.Test_ME;

public class Aula4Test
{
    private readonly IUserRepository _userRepository;
    private readonly UserController _userController;

    public Aula4Test()
    {
        _userRepository = A.Fake<IUserRepository>();
        var mapper = A.Fake<IMapper>();
        
        //pegar o controller
        _userController = new UserController(_userRepository, mapper);
    }

    [Fact]
    public void UserController_GetFullDataById_ShouldReturnUser()
    {
        var userId = 1;
        var user = A.Fake<User>();
        
        //_user ⇾ o fake criado usando a interface
        A.CallTo(() => _userRepository.GetFullUser(userId)).Returns(user);
        // dentro do controller (_ur == _userRepository pq passei no contrutor do controller):
        //var user = _ur.GetFullUser(id); -> vai trocar isso (não executar) e colocar um fake
        //todas que chamar _ur.GetFullUser(id); vão ser substituidas pelo fake com o retorno fake
        
        
        
        var result = _userController.GetFullUserData(userId);


        //em views é IActionResult
        result.Should().BeOfType<OkObjectResult>(); 
    }
}