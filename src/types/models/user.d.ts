import { ERoles } from "@/pages";

export type TPermissionAction = {
  view: boolean;
  create: boolean;
  modify: boolean;
};

export type TKeyPermission = keyof TPermissionAction;

export type TUserModel = {
  username: string;
  role: ERoles;
  password?: string;
  displayname?: string;
};

export type TLoginRes = {
  access_token: string;
  user: TUserModel;
};
