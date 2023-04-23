export type IPromiseReturn<T> = [T | undefined, any];
export async function toPromise<T>(callback: () => Promise<T>): Promise<IPromiseReturn<T>> {
    let data: T | undefined = undefined;
    let error;
    try {
        data = (await callback()) as T;
    } catch (ex) {
        error = ex;
    } finally {
    }

    return [data, error];
}
