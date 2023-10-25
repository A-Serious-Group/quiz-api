import { PartialType } from "@nestjs/mapped-types";
import { CreateQueezyLoginDto } from "./create-queezy_login.dto";

export class SelectQueezyLoginDto extends PartialType(CreateQueezyLoginDto) {}