import { EColor } from '../enum/color.enum';

export interface IUserDto {
    id: string;
    first: string;
    last: string;
    age?: number;
    skinColor?: EColor;
}
