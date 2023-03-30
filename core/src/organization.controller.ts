import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrganizationDto, UpdateOrganizationDto } from './dto/organization.dto';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() createOrganizationrDto: CreateOrganizationDto) {
    return this.appService.create(createOrganizationrDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.appService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
