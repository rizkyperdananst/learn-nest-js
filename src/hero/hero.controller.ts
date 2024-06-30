import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';

let heroes = [
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
    response.json(heroes);
    // return 'Hero index'
    // return {
    //     title: 'Hero index'
    // }
  }

  @Get('show/:id')
  show(@Param('id') id: number) {
    // return `params : ${params.id}`;
    const hero = heroes.filter((hero) => {
        return hero.id == id;
    });

    return hero;
  }

  @Get('welcome')
  //   @Headers()
  //   @Redirect('https://nestjs.com')
  welcome(@Res() response) {
    response.redirect('https://nestjs.com');
    // return 'Welcome gaysss';
  }

  @Get('create')
  create(@Res({ passthrough: true }) response): string {
    response.cookie('name', 'rizky');
    return 'Hero create';
  }

  @Post('store')
  @HttpCode(201)
  store(
    @Req() request,
    @Body() CreateHeroDto: CreateHeroDto,
    @Res({ passthrough: true }) response,
  ) {
    try {
      // const { id, name, type } = request.body;
      // heroes.push({ id, name, type });
      // return response.json(heroes);
      return name;
    } catch (error) {
      response.status(500).json({ message: error });
    }
    // response.status(201).json(request.body);
  }
}
