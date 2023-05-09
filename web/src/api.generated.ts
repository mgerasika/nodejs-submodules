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
export interface IUserDto {
  id: string;
  metadata?: {
    order: IOrderDto;
    first: Date;
    last?: string;
    third: Blob;
  };
}
export interface IOrderDto {
  id: string;
  orderName: String;
}
export interface IPostUser {
  metadata?: {
    order: IOrderDto;
    first: Date;
    last?: string;
    third: Blob;
  };
}
export interface IPutUser {
  metadata?: {
    order: IOrderDto;
    first: Date;
    last?: string;
    third: Blob;
  };
}
export type TUserFirstNameDeleteError = "" | "undefined";
export type TUserFirstNameGetError = "" | "undefined";
export type TUserFirstNamePutError = "" | "undefined";
export type TUserGetError = "" | "undefined";
export type TUserPostError = "" | "undefined";
export type TPartialErrorCodes =
  | TUserFirstNameDeleteError
  | TUserFirstNameGetError
  | TUserFirstNamePutError
  | TUserGetError
  | TUserPostError
  | "";

export const createApiRequest = (rs: IRequestService) => ({
  userFirstNameDelete: (
    firstName: string
  ): CustomPromise<
    CustomAxiosResponse<Array<IUserDto>, TUserFirstNameDeleteError>,
    IBEError<TUserFirstNameDeleteError>
  > => rs.delete(formatUrl(API_SERVER_URL + `api/user/${firstName}`)),

  userFirstNameGet: (
    firstName: string
  ): CustomPromise<
    CustomAxiosResponse<IUserDto, TUserFirstNameGetError>,
    IBEError<TUserFirstNameGetError>
  > => rs.get(formatUrl(API_SERVER_URL + `api/user/${firstName}`)),

  userFirstNamePut: (
    firstName: string,
    body: IPutUser
  ): CustomPromise<
    CustomAxiosResponse<IUserDto, TUserFirstNamePutError>,
    IBEError<TUserFirstNamePutError>
  > => rs.put(formatUrl(API_SERVER_URL + `api/user/${firstName}`), body),

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
  userFirstNameDelete: (firstName: string): string => `api/user/${firstName}`,
  userFirstNameGet: (firstName: string): string => `api/user/${firstName}`,
  userFirstNamePut: (firstName: string): string => `api/user/${firstName}`,
  userGet: (): string => `api/user/`,
  userPost: (): string => `api/user/`,
};
// INSERT END
// DON'T REMOVE THIS COMMENTS!!!

export const API_URL = URL;
export const api = {
  ...createApiRequest(requestService),
};
