using System.Collections;
using AutoMapper;
using blog_c_.Controllers;
using blog_c_.DTOs.FilterDtos;
using blog_c_.DTOs.ModifyDtos;
using blog_c_.Interfaces;
using blog_c_.Models;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace domain.test.Test_ME;

public class ApiControllerTest
{
    private readonly IUserRepository _userRepository;
    private readonly UserController _userController;
    private readonly IMapper _mapper;

    public ApiControllerTest()
    {
        _userRepository = A.Fake<IUserRepository>();
        _mapper = A.Fake<IMapper>();//para o de creation
        _userController = new UserController(_userRepository, _mapper);
    }

    [Fact]//passa o metodo
    public void UserController_GetAllUsers_ShouldReturnOk()
    {
        //Mesmo chamndo dentro, não precisa do repository
        
        // se quisesse simular um mapper no controller
        var filteredUsers = A.Fake<IList<FilterUserDto>>();//já filtrado
        var usersList = A.Fake<IList<User>>();//normal

        A.CallTo(() => _mapper.Map<IList<FilterUserDto>>(usersList))
            .Returns(filteredUsers);//quando pede para filtrar, 

        var controllerResponse = _userController.GetAllUsers();
        

        controllerResponse.Should().BeOfType<OkObjectResult>();
    }

    [Fact]
    public void UserController_CreateUser_ShouldReturnCreated()
    {
        //pode precisar colocar propriedades extras se tiver dependência (e.g: Post)
        //var userId = 17; geralmente passa no body/query (parâmetro da função)
        
        var bodyUser = A.Fake<CreationUserMessageDto>();
        var user = A.Fake<User>();

        A.CallTo(() => _mapper.Map<User>(bodyUser)).Returns(user);
        //Criação em si
        A.CallTo(() => _userRepository.CreateUser(user)).Returns(user);
        // vai ter que fazer se verificar e pegar dados pelo id de dependentes (post -> user)
        //!Antenção, todas as chamadas devem ser feitas em um Repository
        
        var controllerResponse = _userController.CreateUser(bodyUser);
        
        
        controllerResponse.Should().BeOfType<OkObjectResult>();
    }
    
}