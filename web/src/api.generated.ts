/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disabled no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  IRequestService,
  CustomPromise,
  CustomAxiosResponse,
  IBEError,
  formatUrl,
  requestService,
} from "../swagger-to-typescript/src";

const API_SERVER_URL = "http://localhost:8005/";

// DON'T REMOVE THIS COMMENTS!!! Code between comments auto-generated
// INSERT START
export enum EColor {
  red = "red",
  black = "black",
}
export interface IUserDto {
  id: string;
  first: string;
  last: string;
  age?: number;
  skinColor?: EColor;
}
export interface IPostUser {
  first: string;
  last: string;
  age?: number;
  skinColor?: EColor;
}
export interface IPutUser {
  first: string;
  last: string;
  age?: number;
  skinColor?: EColor;
}
export type TUserIdDeleteError = "" | "undefined";
export type TUserIdGetError = "" | "undefined";
export type TUserIdPutError = "" | "undefined";
export type TUserGetError = "" | "undefined";
export type TUserPostError = "" | "undefined";
export type TPartialErrorCodes =
  | TUserIdDeleteError
  | TUserIdGetError
  | TUserIdPutError
  | TUserGetError
  | TUserPostError
  | "";

export const createApiRequest = (rs: IRequestService) => ({
  userIdDelete: (
    id: string
  ): CustomPromise<
    CustomAxiosResponse<Array<IUserDto>, TUserIdDeleteError>,
    IBEError<TUserIdDeleteError>
  > => rs.delete(formatUrl(API_SERVER_URL + `api/user/${id}`)),

  userIdGet: (
    id: string
  ): CustomPromise<
    CustomAxiosResponse<IUserDto, TUserIdGetError>,
    IBEError<TUserIdGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/user/${id}`)),

  userIdPut: (
    id: string,
    body: IPutUser
  ): CustomPromise<
    CustomAxiosResponse<IUserDto, TUserIdPutError>,
    IBEError<TUserIdPutError>
  > => rs.put(formatUrl(API_SERVER_URL + `api/user/${id}`), body),

  userGet: (
    query: { page?: number; limit?: number } | undefined
  ): CustomPromise<
    CustomAxiosResponse<Array<IUserDto>, TUserGetError>,
    IBEError<TUserGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/user/`, query)),

  userPost: (
    body: IPostUser
  ): CustomPromise<
    CustomAxiosResponse<Array<IUserDto>, TUserPostError>,
    IBEError<TUserPostError>
  > => rs.post(formatUrl(API_SERVER_URL + `api/user/`), body),
});

const URL = {
  userIdDelete: (id: string): string => `api/user/${id}`,
  userIdGet: (id: string): string => `api/user/${id}`,
  userIdPut: (id: string): string => `api/user/${id}`,
  userGet: (): string => `api/user/`,
  userPost: (): string => `api/user/`,
};
// INSERT END
// DON'T REMOVE THIS COMMENTS!!!

export const API_URL = URL;
export const api = {
  ...createApiRequest(requestService),
};
