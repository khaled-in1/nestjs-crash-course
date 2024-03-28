import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return { userName: 'Anson', email: 'anson@anson.com' };
  }
  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id/:postId')
  getUserId(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId') postId: string,
  ) {
    console.log(id, postId);
    return { id, postId };
  }
}
