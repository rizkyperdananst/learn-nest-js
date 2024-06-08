import { Body, Controller, Get, HttpCode, Param, Post, Req, Res } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';

let heros = [
  {
    id: 1,
    name: 'Naruto',
    type: 'Rival',
  },
  {
    id: 2,
    name: 'Sasuke',
    type: 'Rival',
  },
];

@Controller('hero') // ini namanya decorator
export class HeroController {
  @Get('index') // hero/index
  @HttpCode(200)
  index(@Res() response) {
    response.json(heros);
    // return 'Hero index'
    // return {
    //     title: 'Hero index'
    // }
  }

  @Get('show/:id')
  show(@Param() params) {
    return `params : ${params.id}`
  }

  @Get('welcome')
//   @Headers()
//   @Redirect('https://nestjs.com')
  welcome(@Res() response) {
    response.redirect('https://nestjs.com')
    // return 'Welcome gaysss';
  }

  @Get('create')
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'rizky');
    return 'Hero create';
  }

  @Post('store')
  @HttpCode(201)
  store(@Req() request, @Body() CreateHeroDto: CreateHeroDto, @Res() response) {
    try {
        const { id, name, type } = request.body;
    heros.push({ id, name, type });
    return response.json(heros);
    } catch (error) {
        response.status(2001).json({ message: error });
    }
    // response.status(201).json(request.body);
  }
}
