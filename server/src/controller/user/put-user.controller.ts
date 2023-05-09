import { API_URL } from '../../../constants/api-url.constant';
import { app, IExpressRequest, IExpressResponse } from '../../express-app';
import { IUserDto } from '../../model/user.dto';
import { sqlAsync } from '../sql-async';
import { getUserByIdAsync } from './get-user.controller';

interface IPutUser extends Omit<IUserDto, 'id'> {}
interface IRequest extends IExpressRequest {
    body: IPutUser;
    params: {
        firstName: string;
    };
}

interface IResponse extends IExpressResponse<IUserDto, void> {}

app.put(API_URL.api.user.firstName().toString(), async (req: IRequest, res: IResponse) => {
    const [, error] = await putUserAsync(req.params.firstName, req.body);
    if (error) {
        return res.status(400).send('error' + error);
    }
    const [data] = await getUserByIdAsync(req.params.firstName);
    res.send(data);
});

export const putUserAsync = async (id: string, data: IPutUser) => {
    const tableName = 'user';
    return sqlAsync<IUserDto>(async (client) => {
        const { rows } = await client.query(
            `UPDATE ${tableName} SET first = $1, last = $2, age = $3 WHERE id = $4 RETURNING *`,
            [data.first, data.last, data.age, id],
        );
        return rows[0];
    });
};
