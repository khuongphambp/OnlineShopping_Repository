import type { AuditedEntityDto } from '@abp/ng.core';

export interface BookDto extends AuditedEntityDto<string> {
  bookName?: string;
  price: number;
  description?: string;
}

export interface CreateUpdateBookDto {
  bookName: string;
  price: number;
  description: string;
}
