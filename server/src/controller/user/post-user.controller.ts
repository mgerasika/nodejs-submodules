import { API_URL } from '../../../constants/api-url.constant';
import { app, IExpressRequest, IExpressResponse } from '../../express-app';
import { IUserDto } from '../../model/user.dto';
import { sqlAsync } from '../sql-async';
import { getUsersAllAsync } from './get-list-user.controller';

interface IPostUser extends Omit<IUserDto, 'id'> {}
interface IRequest extends IExpressRequest {
    body: IPostUser;
}

interface IResponse extends IExpressResponse<IUserDto[], void> {}

app.post(API_URL.api.user.toString(), async (req: IRequest, res: IResponse) => {
    const [, error] = await postUserAsync(req.body);
    if (error) {
        return res.status(400).send('error' + error);
    }
    const [data] = await getUsersAllAsync();
    res.send(data);
});

export const postUserAsync = async (data: IPostUser) => {
    return sqlAsync<IUserDto>(async (client) => {
        const tableName = 'user';
        const { rows } = await client.query(`INSERT INTO ${tableName} (first, last, age) VALUES ($1, $2, $3) RETURNING *`, [
            data.first,
            data.last,
            data.age,
        ]);
        return rows[0];
    });
};
