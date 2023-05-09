import { EColor } from '../enum/color.enum';
import { IOrderDto } from './order.dto';

export interface IUserDto {
    id: string;

    metadata?: {
        order: IOrderDto;
        first: Date;
        last?: string;
        third: Blob;
    };
}
