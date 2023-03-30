export class CreateOrganizationDto {
    readonly name: String;
    readonly org_type: String;
  }

export class UpdateOrganizationDto {
  readonly name: String;
  readonly org_type: String;
}